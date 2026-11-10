// ============================================
// Dashboard Page
// ============================================
window.Dashboard = (() => {

    function render() {
        const stats = ProgressManager.getStats();
        const recommended = ProgressManager.getRecommendedTopic();

        const content = document.getElementById('page-content');
        if (!content) return;

        content.innerHTML = `
            <div class="dashboard">
                <div class="dashboard-header">
                    <h1>WELCOME TO PYTHON MASTERY WITH LIKITH 🐍</h1>
                    <p class="dashboard-subtitle">Your journey from beginner to advanced Python programmer and DSA expert</p>
                </div>

                <!-- Stats Grid -->
                <div class="dashboard-grid stats-grid">
                    ${Components.statCard('📚', stats.completedTopics + '/' + stats.totalTopics, 'Topics Completed', '#2563eb')}
                    ${Components.statCard('✅', stats.questionsSolved, 'Questions Solved', '#16a34a')}
                    ${Components.statCard('🔥', stats.streak.current, 'Day Streak', '#f59e0b')}
                    ${Components.statCard('★', stats.bookmarkedCount, 'Bookmarked', '#8b5cf6')}
                </div>

                <!-- Course Progress -->
                <div class="dashboard-section">
                    <h2>Course Progress</h2>
                    <div class="dashboard-grid course-grid">
                        <div class="course-card" onclick="App.navigate('python-course')">
                            <div class="course-card-header">
                                <div class="course-icon">🐍</div>
                                <div class="course-info">
                                    <h3>Python Programming</h3>
                                    <p>17 Levels · ${stats.pythonTotal} Topics</p>
                                </div>
                                ${Components.completionRing(stats.pythonProgress, 60)}
                            </div>
                            ${Components.progressBar(stats.pythonProgress, stats.pythonCompleted + ' of ' + stats.pythonTotal + ' completed', '#2563eb')}
                        </div>
                        <div class="course-card" onclick="App.navigate('dsa-course')">
                            <div class="course-card-header">
                                <div class="course-icon">🧮</div>
                                <div class="course-info">
                                    <h3>Data Structures & Algorithms</h3>
                                    <p>15 Levels · ${stats.dsaTotal} Topics</p>
                                </div>
                                ${Components.completionRing(stats.dsaProgress, 60)}
                            </div>
                            ${Components.progressBar(stats.dsaProgress, stats.dsaCompleted + ' of ' + stats.dsaTotal + ' completed', '#8b5cf6')}
                        </div>
                    </div>
                </div>

                <!-- Recommended & Recent -->
                <div class="dashboard-grid two-col">
                    <!-- Recommended Topic -->
                    <div class="dashboard-section">
                        <h2>📌 Recommended Next</h2>
                        ${recommended ? `
                            <div class="recommended-card" onclick="App.navigate('topic', '${recommended.id}')">
                                <div class="recommended-badge">${recommended.course}</div>
                                <h3>${recommended.title}</h3>
                                <p>${recommended.description || ''}</p>
                                <div class="recommended-meta">
                                    <span>${recommended.levelTitle}</span>
                                    ${Components.difficultyBadge(recommended.difficulty)}
                                    <span>${recommended.estimatedTime || ''}</span>
                                </div>
                                <button class="btn btn-primary">Start Learning →</button>
                            </div>
                        ` : Components.emptyState('🎉', 'All Done!', 'You\'ve completed all topics!')}
                    </div>

                    <!-- Recent Topics -->
                    <div class="dashboard-section">
                        <h2>🕐 Recently Studied</h2>
                        ${stats.recentTopics.length > 0 ? `
                            <div class="recent-list">
                                ${stats.recentTopics.slice(0, 5).map(topic => `
                                    <div class="recent-item" onclick="App.navigate('topic', '${topic.id}')">
                                        <span class="recent-badge">${topic.course}</span>
                                        <span class="recent-title">${topic.title}</span>
                                        <span class="recent-time">${timeAgo(topic.timestamp)}</span>
                                    </div>
                                `).join('')}
                            </div>
                        ` : Components.emptyState('📖', 'No recent topics', 'Start learning to see your recent activity')}
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="dashboard-section">
                    <h2>⚡ Quick Actions</h2>
                    <div class="dashboard-grid quick-actions">
                        <div class="quick-action-card" onclick="App.navigate('playground')">
                            <span class="qa-icon">💻</span>
                            <span class="qa-title">Code Playground</span>
                            <span class="qa-desc">Write & run Python code</span>
                        </div>
                        <div class="quick-action-card" onclick="App.navigate('visualizer')">
                            <span class="qa-icon">📈</span>
                            <span class="qa-title">DSA Visualizer</span>
                            <span class="qa-desc">Visualize algorithms</span>
                        </div>
                        <div class="quick-action-card" onclick="App.navigate('tests')">
                            <span class="qa-icon">📝</span>
                            <span class="qa-title">Take a Test</span>
                            <span class="qa-desc">Test your knowledge</span>
                        </div>
                        <div class="quick-action-card" onclick="App.navigate('projects')">
                            <span class="qa-icon">🚀</span>
                            <span class="qa-title">Projects</span>
                            <span class="qa-desc">Build real projects</span>
                        </div>
                    </div>
                </div>

                <!-- Python Levels Overview -->
                <div class="dashboard-section">
                    <h2>🐍 Python Levels</h2>
                    <div class="dashboard-grid levels-grid">
                        ${(window.PythonSyllabus?.levels || []).map(level =>
                            Components.levelCard(level, window.PythonSyllabus)
                        ).join('')}
                    </div>
                </div>

                <!-- DSA Levels Overview -->
                <div class="dashboard-section">
                    <h2>🧮 DSA Levels</h2>
                    <div class="dashboard-grid levels-grid">
                        ${(window.DSASyllabus?.levels || []).map(level =>
                            Components.levelCard(level, window.DSASyllabus)
                        ).join('')}
                    </div>
                </div>
            </div>
        `;

        // Animate progress bars
        requestAnimationFrame(() => {
            document.querySelectorAll('.progress-fill').forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = '0%';
                requestAnimationFrame(() => {
                    bar.style.width = width + '%';
                });
            });
        });
    }

    function renderCourse(courseId) {
        const syllabus = courseId === 'python-course' ? window.PythonSyllabus : window.DSASyllabus;
        if (!syllabus) return;

        const content = document.getElementById('page-content');
        const stats = ProgressManager.getStats();
        const isP = courseId === 'python-course';

        content.innerHTML = `
            <div class="course-page">
                <div class="course-page-header">
                    <h1>${isP ? '🐍' : '🧮'} ${syllabus.title}</h1>
                    <p>${syllabus.description}</p>
                    ${Components.progressBar(
                        isP ? stats.pythonProgress : stats.dsaProgress,
                        `${isP ? stats.pythonCompleted : stats.dsaCompleted} of ${isP ? stats.pythonTotal : stats.dsaTotal} topics completed`
                    )}
                </div>
                <div class="levels-list">
                    ${syllabus.levels.map(level => {
                        const progress = ProgressManager.getLevelProgress(level.id);
                        return `
                            <div class="level-section">
                                <div class="level-section-header" onclick="toggleAccordion('level-topics-${level.id}')">
                                    <div class="level-section-info">
                                        <span class="level-badge">Level ${level.number}</span>
                                        <h3>${level.title}</h3>
                                        <span class="level-section-desc">${level.description}</span>
                                    </div>
                                    <div class="level-section-progress">
                                        ${Components.completionRing(progress.percentage, 50)}
                                        <span>${progress.completed}/${progress.total}</span>
                                    </div>
                                </div>
                                <div class="accordion-body level-topics" id="level-topics-${level.id}" style="display:none">
                                    ${level.topics.map(topic => Components.topicListItem(topic, level.id)).join('')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    function renderBookmarks() {
        const content = document.getElementById('page-content');
        const bookmarks = ProgressManager.getAllBookmarks();
        const allTopics = getAllTopics();

        content.innerHTML = `
            <div class="bookmarks-page">
                <h1>★ Bookmarked Topics</h1>
                ${bookmarks.length > 0 ? `
                    <div class="topic-list">
                        ${bookmarks.map(id => {
                            const topic = allTopics.find(t => t.id === id);
                            if (!topic) return '';
                            return Components.topicListItem(topic, '');
                        }).join('')}
                    </div>
                ` : Components.emptyState('★', 'No Bookmarks', 'Bookmark topics while studying to find them quickly here')}
            </div>
        `;
    }

    function renderLevel(levelId) {
        let syllabus, level;
        if (levelId.startsWith('py-')) {
            syllabus = window.PythonSyllabus;
        } else {
            syllabus = window.DSASyllabus;
        }
        if (!syllabus) return;
        level = syllabus.levels.find(l => l.id === levelId);
        if (!level) return;

        const content = document.getElementById('page-content');
        const progress = ProgressManager.getLevelProgress(levelId);
        const isP = levelId.startsWith('py-');

        content.innerHTML = `
            <div class="level-page">
                <div class="level-page-header">
                    <div>
                        <span class="badge badge-${isP ? 'primary' : 'info'}">${isP ? 'Python' : 'DSA'}</span>
                        <span class="level-badge">Level ${level.number}</span>
                    </div>
                    <h1>${level.title}</h1>
                    <p>${level.description}</p>
                    ${Components.progressBar(progress.percentage, `${progress.completed} of ${progress.total} topics completed`)}
                </div>
                <div class="topic-list">
                    ${level.topics.map((topic, i) => `
                        <div class="topic-list-item-detailed ${ProgressManager.isCompleted(topic.id) ? 'completed' : ''}"
                             onclick="App.navigate('topic', '${topic.id}')">
                            <div class="topic-num">${i + 1}</div>
                            <div class="topic-status">
                                ${ProgressManager.isCompleted(topic.id)
                                    ? '<span class="check-icon completed">✓</span>'
                                    : '<span class="check-icon">○</span>'}
                            </div>
                            <div class="topic-info">
                                <h3>${topic.title}</h3>
                                <p>${topic.description || ''}</p>
                                <div class="topic-meta">
                                    ${Components.difficultyBadge(topic.difficulty)}
                                    <span>⏱ ${topic.estimatedTime || '10 min'}</span>
                                    ${topic.hasVisualization ? '<span>📈 Visualization</span>' : ''}
                                    ${topic.hasPlayground ? '<span>💻 Playground</span>' : ''}
                                </div>
                            </div>
                            <div class="topic-actions-inline">
                                ${ProgressManager.isBookmarked(topic.id) ? '<span class="bookmark-active">★</span>' : ''}
                                <span class="arrow-right">→</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    function getAllTopics() {
        const topics = [];
        [window.PythonSyllabus, window.DSASyllabus].filter(Boolean).forEach(s => {
            s.levels.forEach(l => l.topics.forEach(t => topics.push(t)));
        });
        return topics;
    }

    function timeAgo(timestamp) {
        const diff = Date.now() - timestamp;
        const mins = Math.floor(diff / 60000);
        if (mins < 1) return 'just now';
        if (mins < 60) return mins + 'm ago';
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return hrs + 'h ago';
        const days = Math.floor(hrs / 24);
        return days + 'd ago';
    }

    return { render, renderCourse, renderBookmarks, renderLevel };
})();
