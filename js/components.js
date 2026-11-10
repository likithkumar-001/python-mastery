// ============================================
// Reusable UI Components
// ============================================
window.Components = (() => {

    function progressBar(percentage, label, color) {
        color = color || 'var(--color-primary)';
        return `
            <div class="progress-bar-container">
                ${label ? `<div class="progress-label"><span>${label}</span><span>${percentage}%</span></div>` : ''}
                <div class="progress-bar">
                    <div class="progress-fill" style="width:${percentage}%;background:${color}" data-width="${percentage}"></div>
                </div>
            </div>
        `;
    }

    function statCard(icon, value, label, color, onclick) {
        return `
            <div class="stat-card ${onclick ? 'cursor-pointer' : ''}" ${onclick ? `onclick="${onclick}"` : ''} style="--card-accent:${color || 'var(--color-primary)'}">
                <div class="stat-icon">${icon}</div>
                <div class="stat-info">
                    <div class="stat-value">${value}</div>
                    <div class="stat-label">${label}</div>
                </div>
            </div>
        `;
    }

    function badge(text, type) {
        return `<span class="badge badge-${type || 'default'}">${text}</span>`;
    }

    function difficultyBadge(difficulty) {
        const map = {
            'beginner': 'easy',
            'easy': 'easy',
            'intermediate': 'medium',
            'medium': 'medium',
            'advanced': 'hard',
            'hard': 'hard'
        };
        return badge(difficulty.charAt(0).toUpperCase() + difficulty.slice(1), map[difficulty] || 'default');
    }

    function codeBlock(code, language, topicId) {
        const escaped = escapeHtml(code.trim());
        const id = 'code-' + Math.random().toString(36).substr(2, 9);
        return `
            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">${language || 'python'}</span>
                    <div class="code-actions">
                        ${topicId ? `<button class="btn-sm" onclick="Playground.openWith(\`${encodeURIComponent(code.trim())}\`)">▶ Run</button>` : ''}
                        <button class="btn-sm" onclick="copyCode('${id}')">📋 Copy</button>
                    </div>
                </div>
                <pre id="${id}"><code>${highlighted(escaped, language)}</code></pre>
            </div>
        `;
    }

    function highlighted(code, lang) {
        if (lang !== 'python' && lang !== 'py') return code;
        // Simple Python syntax highlighting
        let result = code;
        // Keywords
        const keywords = ['def', 'class', 'if', 'elif', 'else', 'for', 'while', 'return', 'import', 'from',
            'try', 'except', 'finally', 'raise', 'with', 'as', 'pass', 'break', 'continue', 'yield',
            'lambda', 'and', 'or', 'not', 'in', 'is', 'True', 'False', 'None', 'global', 'nonlocal',
            'del', 'assert', 'async', 'await', 'match', 'case'];
        // Strings (simple matching)
        result = result.replace(/("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g,
            '<span class="hl-string">$1</span>');
        // Comments
        result = result.replace(/(#.*)$/gm, '<span class="hl-comment">$1</span>');
        // Numbers
        result = result.replace(/\b(\d+\.?\d*)\b/g, '<span class="hl-number">$1</span>');
        // Keywords (word boundary)
        keywords.forEach(kw => {
            const re = new RegExp(`\\b(${kw})\\b(?![^<]*>)`, 'g');
            result = result.replace(re, '<span class="hl-keyword">$1</span>');
        });
        // Built-in functions
        const builtins = ['print', 'input', 'len', 'range', 'int', 'str', 'float', 'list', 'dict', 'set',
            'tuple', 'type', 'isinstance', 'enumerate', 'zip', 'map', 'filter', 'sorted', 'reversed',
            'sum', 'min', 'max', 'abs', 'round', 'open', 'super', 'property', 'staticmethod', 'classmethod'];
        builtins.forEach(fn => {
            const re = new RegExp(`\\b(${fn})\\b(?=\\s*\\()(?![^<]*>)`, 'g');
            result = result.replace(re, '<span class="hl-builtin">$1</span>');
        });
        // Decorators
        result = result.replace(/(@\w+)/g, '<span class="hl-decorator">$1</span>');
        return result;
    }

    function questionCard(question, index, topicId) {
        const qId = `${topicId}-q${index}`;
        const solved = ProgressManager.getData().questionsSolved[qId];
        const hintLevel = ProgressManager.getHintLevel(qId);

        return `
            <div class="question-card ${solved && solved.correct ? 'solved' : ''}" id="qcard-${qId}">
                <div class="question-header">
                    <span class="question-number">Q${index + 1}</span>
                    ${difficultyBadge(question.difficulty)}
                    ${solved && solved.correct ? '<span class="badge badge-success">✓ Solved</span>' : ''}
                </div>
                <div class="question-body">
                    <p class="question-text">${question.question}</p>
                    ${question.testCases ? `
                        <div class="test-cases">
                            <strong>Test Cases:</strong>
                            ${question.testCases.map(tc => `
                                <div class="test-case">
                                    <span>Input: <code>${escapeHtml(tc.input)}</code></span>
                                    <span>Expected: <code>${escapeHtml(tc.expected)}</code></span>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="question-actions">
                    <button class="btn btn-primary btn-sm" onclick="Playground.openWith(encodeURIComponent('# ${escapeHtml(question.question).replace(/'/g, "\\'")}\\n# Write your solution below:\\n\\n'))">
                        💻 Solve in Playground
                    </button>
                    ${question.hints && question.hints.length > 0 ? `
                        <button class="btn btn-secondary btn-sm" onclick="showHint('${qId}', ${JSON.stringify(question.hints).replace(/'/g, "\\'")}, 0)">
                            💡 Hint ${hintLevel > 0 ? `(${hintLevel}/${question.hints.length})` : ''}
                        </button>
                    ` : ''}
                    <button class="btn btn-secondary btn-sm" onclick="toggleSolution('${qId}')">
                        🔑 Show Solution
                    </button>
                </div>
                <div id="solution-${qId}" class="solution-box hidden">
                    <div class="solution-warning">
                        <p>⚠️ Try solving it yourself first! Solutions are most helpful after you've attempted the problem.</p>
                        <button class="btn btn-danger btn-sm" onclick="revealSolution('${qId}')">I've tried, show me</button>
                    </div>
                    <div id="solution-content-${qId}" class="hidden">
                        ${question.solution ? codeBlock(question.solution, 'python', topicId) : '<p>Solution not available yet.</p>'}
                        ${question.explanation ? `<div class="solution-explanation"><strong>Explanation:</strong> ${question.explanation}</div>` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    function accordion(title, content, open) {
        const id = 'acc-' + Math.random().toString(36).substr(2, 9);
        return `
            <div class="accordion-item ${open ? 'open' : ''}">
                <button class="accordion-header" onclick="toggleAccordion('${id}')">
                    <span>${title}</span>
                    <svg class="accordion-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="accordion-body" id="${id}" ${open ? '' : 'style="display:none"'}>
                    ${content}
                </div>
            </div>
        `;
    }

    function tabs(tabList, defaultActive) {
        const containerId = 'tabs-' + Math.random().toString(36).substr(2, 9);
        defaultActive = defaultActive || 0;
        return `
            <div class="tabs-container" id="${containerId}">
                <div class="tabs">
                    ${tabList.map((tab, i) => `
                        <button class="tab-item ${i === defaultActive ? 'active' : ''}"
                                onclick="switchTab('${containerId}', ${i})">
                            ${tab.label}
                        </button>
                    `).join('')}
                </div>
                <div class="tab-panels">
                    ${tabList.map((tab, i) => `
                        <div class="tab-panel ${i === defaultActive ? 'active' : ''}" data-tab-index="${i}">
                            ${tab.content}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    function toast(message, type) {
        type = type || 'info';
        const container = document.getElementById('toast-container');
        if (!container) return;
        const el = document.createElement('div');
        el.className = `toast toast-${type}`;
        const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
        el.innerHTML = `<span>${icons[type] || ''} ${message}</span>`;
        container.appendChild(el);
        setTimeout(() => el.classList.add('show'), 10);
        setTimeout(() => {
            el.classList.remove('show');
            setTimeout(() => el.remove(), 300);
        }, 3000);
    }

    function emptyState(icon, title, message) {
        return `
            <div class="empty-state">
                <div class="empty-icon">${icon}</div>
                <h3>${title}</h3>
                <p>${message}</p>
            </div>
        `;
    }

    function completionRing(percentage, size, label) {
        size = size || 80;
        const r = (size - 8) / 2;
        const c = 2 * Math.PI * r;
        const offset = c - (percentage / 100) * c;
        return `
            <div class="completion-ring" style="width:${size}px;height:${size}px">
                <svg viewBox="0 0 ${size} ${size}">
                    <circle cx="${size/2}" cy="${size/2}" r="${r}" class="ring-bg"/>
                    <circle cx="${size/2}" cy="${size/2}" r="${r}" class="ring-fill"
                            style="stroke-dasharray:${c};stroke-dashoffset:${offset}"/>
                </svg>
                <div class="ring-label">${label || percentage + '%'}</div>
            </div>
        `;
    }

    function topicListItem(topic, levelId) {
        const completed = ProgressManager.isCompleted(topic.id);
        const bookmarked = ProgressManager.isBookmarked(topic.id);
        return `
            <div class="topic-list-item ${completed ? 'completed' : ''}"
                 onclick="App.navigate('topic', '${topic.id}')">
                <div class="topic-status">
                    ${completed
                        ? '<span class="check-icon completed">✓</span>'
                        : '<span class="check-icon">○</span>'}
                </div>
                <div class="topic-info">
                    <span class="topic-title">${topic.title}</span>
                    <span class="topic-meta">${topic.estimatedTime || ''} ${difficultyBadge(topic.difficulty)}</span>
                </div>
                <div class="topic-actions-inline">
                    ${bookmarked ? '<span class="bookmark-active">★</span>' : ''}
                </div>
            </div>
        `;
    }

    function levelCard(level, syllabus) {
        const progress = ProgressManager.getLevelProgress(level.id);
        const prefix = syllabus.id === 'python' ? 'Python' : 'DSA';
        return `
            <div class="level-card" onclick="App.navigate('level', '${level.id}')">
                <div class="level-header">
                    <span class="level-badge">${prefix} Level ${level.number}</span>
                    ${completionRing(progress.percentage, 50)}
                </div>
                <h3 class="level-title">${level.title}</h3>
                <p class="level-desc">${level.description}</p>
                ${progressBar(progress.percentage, `${progress.completed}/${progress.total} topics`)}
            </div>
        `;
    }

    function escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    return {
        progressBar, statCard, badge, difficultyBadge, codeBlock, questionCard,
        accordion, tabs, toast, emptyState, completionRing, topicListItem,
        levelCard, escapeHtml, highlighted
    };
})();

// Global helper functions
function copyCode(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const text = el.textContent;
    navigator.clipboard.writeText(text).then(() => {
        Components.toast('Code copied!', 'success');
    }).catch(() => {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        Components.toast('Code copied!', 'success');
    });
}

function toggleAccordion(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const item = el.closest('.accordion-item');
    const isOpen = item.classList.contains('open');
    item.classList.toggle('open');
    el.style.display = isOpen ? 'none' : 'block';
}

function switchTab(containerId, index) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.querySelectorAll('.tab-item').forEach((t, i) => t.classList.toggle('active', i === index));
    container.querySelectorAll('.tab-panel').forEach((p, i) => p.classList.toggle('active', i === index));
}

function toggleSolution(qId) {
    const el = document.getElementById('solution-' + qId);
    if (el) el.classList.toggle('hidden');
}

function revealSolution(qId) {
    const warning = document.querySelector(`#solution-${qId} .solution-warning`);
    const content = document.getElementById('solution-content-' + qId);
    if (warning) warning.style.display = 'none';
    if (content) content.classList.remove('hidden');
}

function showHint(qId, hints, level) {
    const currentLevel = ProgressManager.getHintLevel(qId);
    const showLevel = Math.max(currentLevel, level);
    if (showLevel >= hints.length) {
        Components.toast('No more hints available!', 'info');
        return;
    }
    ProgressManager.useHint(qId, showLevel + 1);
    const title = `Hint ${showLevel + 1} of ${hints.length}`;
    const body = `<p>${hints[showLevel]}</p>
        ${showLevel + 1 < hints.length ?
            `<button class="btn btn-secondary btn-sm" onclick="showHint('${qId}', ${JSON.stringify(hints).replace(/"/g, '&quot;')}, ${showLevel + 1}); closeModal('hint-modal');">Next Hint</button>` :
            '<p class="text-muted">This was the last hint. Try solving it or view the solution.</p>'}`;
    document.getElementById('hint-modal-title').textContent = title;
    document.getElementById('hint-modal-body').innerHTML = body;
    document.getElementById('hint-modal').classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id)?.classList.add('hidden');
}
