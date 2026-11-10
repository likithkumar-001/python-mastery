// ============================================
// Topic Viewer - Display topic content
// ============================================
window.TopicViewer = (() => {

    function render(topicId) {
        const { topic, level, syllabus } = findTopic(topicId);
        if (!topic) {
            document.getElementById('page-content').innerHTML = Components.emptyState('🔍', 'Topic Not Found', 'The requested topic could not be found.');
            return;
        }

        const content = getTopicContent(topicId);
        const questions = getTopicQuestions(topicId);
        const isCompleted = ProgressManager.isCompleted(topicId);
        const isBookmarked = ProgressManager.isBookmarked(topicId);
        const course = topicId.startsWith('dsa') ? 'DSA' : 'Python';
        const prevNext = getPrevNext(topicId, level, syllabus);

        // Record visit
        ProgressManager.addRecentTopic(topic);

        // Update sidebar
        Sidebar.highlightTopic(topicId);

        // Update breadcrumb
        updateBreadcrumb(course, level, topic);

        const pageContent = document.getElementById('page-content');
        pageContent.innerHTML = `
            <div class="topic-content">
                <!-- Topic Header -->
                <div class="topic-header">
                    <div class="topic-header-top">
                        <div class="topic-tags">
                            <span class="badge badge-${course === 'Python' ? 'primary' : 'info'}">${course}</span>
                            <span class="level-badge">Level ${level.number}</span>
                            ${Components.difficultyBadge(topic.difficulty)}
                            <span class="badge badge-default">⏱ ${topic.estimatedTime || '10 min'}</span>
                        </div>
                        <div class="topic-header-actions">
                            <button class="btn-icon ${isBookmarked ? 'bookmark-active' : ''}"
                                    onclick="TopicViewer.toggleBookmark('${topicId}')"
                                    title="Bookmark">
                                ${isBookmarked ? '★' : '☆'}
                            </button>
                        </div>
                    </div>
                    <h1>${topic.title}</h1>
                    ${topic.description ? `<p class="topic-description">${topic.description}</p>` : ''}
                </div>

                <!-- Main Content -->
                <div class="topic-body">
                    ${content ? renderContent(content, topicId) : renderPlaceholderContent(topic, level, course)}
                </div>

                <!-- Practice Questions -->
                ${questions && questions.length > 0 ? `
                    <div class="topic-section">
                        <h2>🎯 Practice Questions</h2>
                        <p class="section-subtitle">Test your understanding. Try to solve them before looking at hints or solutions.</p>
                        ${questions.map((q, i) => Components.questionCard(q, i, topicId)).join('')}
                    </div>
                ` : `
                    <div class="topic-section">
                        <h2>🎯 Practice Questions</h2>
                        ${renderDefaultQuestions(topic, topicId)}
                    </div>
                `}

                <!-- Mark Complete / Navigation -->
                <div class="topic-footer">
                    <div class="completion-section">
                        <label class="completion-checkbox ${isCompleted ? 'checked' : ''}">
                            <input type="checkbox" ${isCompleted ? 'checked' : ''}
                                   onchange="TopicViewer.toggleComplete('${topicId}', this.checked)">
                            <span class="checkmark"></span>
                            <span>${isCompleted ? 'Completed ✓' : 'Mark as Completed'}</span>
                        </label>
                    </div>
                    <div class="topic-navigation">
                        ${prevNext.prev ? `
                            <button class="btn btn-secondary" onclick="App.navigate('topic', '${prevNext.prev.id}')">
                                ← ${prevNext.prev.title}
                            </button>
                        ` : '<div></div>'}
                        ${prevNext.next ? `
                            <button class="btn btn-primary" onclick="App.navigate('topic', '${prevNext.next.id}')">
                                ${prevNext.next.title} →
                            </button>
                        ` : '<div></div>'}
                    </div>
                </div>
            </div>
        `;

        // Scroll to top
        pageContent.scrollTop = 0;
    }

    function renderContent(content, topicId) {
        let html = '';

        // 1. Definition
        if (content.definition) {
            html += `<div class="content-section">
                <h2>📖 What is it?</h2>
                <div class="definition-box">${content.definition}</div>
            </div>`;
        }

        // 2. Why we use it
        if (content.whyUse) {
            html += `<div class="content-section">
                <h2>❓ Why do we use it?</h2>
                <div class="why-box">${content.whyUse}</div>
            </div>`;
        }

        // 3. Important concepts
        if (content.concepts && content.concepts.length > 0) {
            html += `<div class="content-section">
                <h2>💡 Important Concepts</h2>
                <ul class="concepts-list">
                    ${content.concepts.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>`;
        }

        // 4. Syntax
        if (content.syntax) {
            html += `<div class="content-section">
                <h2>⌨️ Syntax</h2>
                ${Components.codeBlock(content.syntax, 'python', topicId)}
            </div>`;
        }

        // 5. Types and variations
        if (content.types && content.types.length > 0) {
            html += `<div class="content-section">
                <h2>📋 Types and Variations</h2>
                ${content.types.map(t => `
                    <div class="type-item">
                        <h3>${t.name}</h3>
                        <p>${t.description}</p>
                        ${t.example ? Components.codeBlock(t.example, 'python', topicId) : ''}
                    </div>
                `).join('')}
            </div>`;
        }

        // 6. Syntax explanation
        if (content.syntaxExplanation) {
            html += `<div class="content-section">
                <h2>🔍 Syntax Breakdown</h2>
                <div class="syntax-explanation">${content.syntaxExplanation}</div>
            </div>`;
        }

        // 7. Code examples
        if (content.examples && content.examples.length > 0) {
            html += `<div class="content-section">
                <h2>📝 Code Examples</h2>
                ${content.examples.map((ex, i) => `
                    <div class="example-item">
                        ${ex.title ? `<h3>Example ${i + 1}: ${ex.title}</h3>` : `<h3>Example ${i + 1}</h3>`}
                        ${ex.description ? `<p>${ex.description}</p>` : ''}
                        ${Components.codeBlock(ex.code, 'python', topicId)}
                        ${ex.output ? `
                            <div class="output-panel">
                                <div class="output-header">Expected Output:</div>
                                <pre class="output-text">${Components.escapeHtml(ex.output)}</pre>
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>`;
        }

        // 8. Common mistakes
        if (content.commonMistakes && content.commonMistakes.length > 0) {
            html += `<div class="content-section">
                <h2>⚠️ Common Mistakes</h2>
                <div class="mistakes-list">
                    ${content.commonMistakes.map(m => `
                        <div class="mistake-item">
                            <div class="mistake-wrong">
                                <span class="mistake-label">❌ Wrong:</span>
                                ${m.wrong ? Components.codeBlock(m.wrong, 'python') : ''}
                                ${m.wrongText ? `<p>${m.wrongText}</p>` : ''}
                            </div>
                            <div class="mistake-right">
                                <span class="mistake-label">✅ Correct:</span>
                                ${m.right ? Components.codeBlock(m.right, 'python') : ''}
                                ${m.rightText ? `<p>${m.rightText}</p>` : ''}
                            </div>
                            ${m.explanation ? `<p class="mistake-explanation">${m.explanation}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>`;
        }

        // 9. Time and space complexity
        if (content.complexity) {
            html += `<div class="content-section">
                <h2>⏱ Time and Space Complexity</h2>
                <div class="complexity-table">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Operation</th>
                                <th>Time Complexity</th>
                                <th>Space Complexity</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${content.complexity.map(c => `
                                <tr>
                                    <td>${c.operation}</td>
                                    <td><code>${c.time}</code></td>
                                    <td><code>${c.space}</code></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>`;
        }

        // 10. Key takeaways
        if (content.keyTakeaways) {
            html += `<div class="content-section">
                <h2>🎯 Key Takeaways</h2>
                <ul class="takeaways-list">
                    ${content.keyTakeaways.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>`;
        }

        return html;
    }

    function renderPlaceholderContent(topic, level, course) {
        // Generate sensible placeholder content for topics without detailed content
        return `
            <div class="content-section">
                <h2>📖 ${topic.title}</h2>
                <div class="definition-box">
                    <p>This topic covers <strong>${topic.title}</strong> as part of ${course} Level ${level.number}: ${level.title}.</p>
                    <p>${topic.description || ''}</p>
                </div>
                <div class="placeholder-notice">
                    <div class="notice-icon">📝</div>
                    <div class="notice-content">
                        <h3>Content Available</h3>
                        <p>This topic is part of the complete curriculum. Open the <strong>Code Playground</strong> to practice, or use the practice questions below to test your knowledge.</p>
                    </div>
                </div>
            </div>
            <div class="content-section">
                <h2>💻 Try it in the Playground</h2>
                <p>Use the code playground to experiment with ${topic.title.toLowerCase()}.</p>
                <button class="btn btn-primary" onclick="App.navigate('playground')">Open Code Playground</button>
            </div>
        `;
    }

    function renderDefaultQuestions(topic, topicId) {
        return `
            <div class="default-questions">
                <div class="question-card">
                    <div class="question-header">
                        <span class="question-number">Q1</span>
                        <span class="badge badge-easy">Easy</span>
                    </div>
                    <p class="question-text">Explain ${topic.title} in your own words. What is its purpose?</p>
                    <button class="btn btn-primary btn-sm" onclick="Playground.openWith(encodeURIComponent('# Explain ${topic.title}\\n# Write a comment explaining this concept:\\n\\n'))">
                        💻 Answer in Playground
                    </button>
                </div>
                <div class="question-card">
                    <div class="question-header">
                        <span class="question-number">Q2</span>
                        <span class="badge badge-easy">Easy</span>
                    </div>
                    <p class="question-text">Write a simple Python program that demonstrates ${topic.title.toLowerCase()}.</p>
                    <button class="btn btn-primary btn-sm" onclick="Playground.openWith(encodeURIComponent('# Demonstrate ${topic.title}\\n# Write your code below:\\n\\n'))">
                        💻 Solve in Playground
                    </button>
                </div>
                <div class="question-card">
                    <div class="question-header">
                        <span class="question-number">Q3</span>
                        <span class="badge badge-medium">Medium</span>
                    </div>
                    <p class="question-text">What are common mistakes when using ${topic.title.toLowerCase()}? Write code showing both the wrong and correct approach.</p>
                    <button class="btn btn-primary btn-sm" onclick="Playground.openWith(encodeURIComponent('# Common mistakes with ${topic.title}\\n# Show wrong approach and correct approach:\\n\\n'))">
                        💻 Solve in Playground
                    </button>
                </div>
            </div>
        `;
    }

    function findTopic(topicId) {
        const syllabi = [
            { data: window.PythonSyllabus, type: 'python' },
            { data: window.DSASyllabus, type: 'dsa' }
        ];
        for (const { data } of syllabi) {
            if (!data) continue;
            for (const level of data.levels) {
                const topic = level.topics.find(t => t.id === topicId);
                if (topic) return { topic, level, syllabus: data };
            }
        }
        return { topic: null, level: null, syllabus: null };
    }

    function getTopicContent(topicId) {
        if (topicId.startsWith('py-') && window.PythonContent) {
            return window.PythonContent[topicId] || null;
        }
        if (topicId.startsWith('dsa-') && window.DSAContent) {
            return window.DSAContent[topicId] || null;
        }
        return null;
    }

    function getTopicQuestions(topicId) {
        if (window.Questions && window.Questions[topicId]) {
            return window.Questions[topicId];
        }
        return null;
    }

    function getPrevNext(topicId, level, syllabus) {
        if (!level || !syllabus) return { prev: null, next: null };
        const allTopics = [];
        syllabus.levels.forEach(l => l.topics.forEach(t => allTopics.push(t)));
        const idx = allTopics.findIndex(t => t.id === topicId);
        return {
            prev: idx > 0 ? allTopics[idx - 1] : null,
            next: idx < allTopics.length - 1 ? allTopics[idx + 1] : null
        };
    }

    function updateBreadcrumb(course, level, topic) {
        const bc = document.getElementById('breadcrumb');
        if (bc) {
            bc.innerHTML = `
                <span class="breadcrumb-item" onclick="App.navigate('dashboard')">Home</span>
                <span class="breadcrumb-sep">›</span>
                <span class="breadcrumb-item" onclick="App.navigate('${course.toLowerCase()}-course')">${course}</span>
                <span class="breadcrumb-sep">›</span>
                <span class="breadcrumb-item" onclick="App.navigate('level', '${level.id}')">Level ${level.number}</span>
                <span class="breadcrumb-sep">›</span>
                <span class="breadcrumb-current">${topic.title}</span>
            `;
        }
    }

    function toggleComplete(topicId, checked) {
        if (checked) {
            ProgressManager.completeTopic(topicId);
            Components.toast('Topic marked as completed! ✓', 'success');
        } else {
            ProgressManager.uncompleteTopic(topicId);
            Components.toast('Topic unmarked', 'info');
        }
        Sidebar.refresh();
    }

    function toggleBookmark(topicId) {
        const isNow = ProgressManager.toggleBookmark(topicId);
        Components.toast(isNow ? 'Bookmarked! ★' : 'Bookmark removed', isNow ? 'success' : 'info');
        render(topicId); // Re-render to update UI
    }

    return { render, toggleComplete, toggleBookmark, findTopic };
})();
