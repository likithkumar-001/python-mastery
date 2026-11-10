// ============================================
// Search Module
// ============================================
window.SearchModule = (() => {
    let allTopics = [];
    let isOpen = false;

    function init() {
        buildIndex();
        // Keyboard shortcut
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                toggle();
            }
            if (e.key === 'Escape' && isOpen) {
                close();
            }
        });
    }

    function buildIndex() {
        allTopics = [];
        const syllabi = [
            { data: window.PythonSyllabus, course: 'Python' },
            { data: window.DSASyllabus, course: 'DSA' }
        ];
        syllabi.forEach(({ data, course }) => {
            if (!data) return;
            data.levels.forEach(level => {
                level.topics.forEach(topic => {
                    allTopics.push({
                        id: topic.id,
                        title: topic.title,
                        description: topic.description || '',
                        course,
                        level: level.title,
                        levelNum: level.number,
                        difficulty: topic.difficulty,
                        searchText: `${topic.title} ${topic.description || ''} ${level.title} ${course}`.toLowerCase()
                    });
                });
            });
        });
    }

    function open() {
        const modal = document.getElementById('search-modal');
        if (modal) {
            modal.classList.remove('hidden');
            const input = document.getElementById('search-input');
            if (input) {
                input.value = '';
                input.focus();
                input.oninput = () => search(input.value);
            }
            isOpen = true;
            showRecentAndBookmarked();
        }
    }

    function close() {
        const modal = document.getElementById('search-modal');
        if (modal) modal.classList.add('hidden');
        isOpen = false;
    }

    function toggle() {
        isOpen ? close() : open();
    }

    function search(query) {
        const results = document.getElementById('search-results');
        if (!results) return;

        if (!query || query.length < 1) {
            showRecentAndBookmarked();
            return;
        }

        const q = query.toLowerCase().trim();
        const matches = allTopics.filter(t => t.searchText.includes(q));

        // Sort: exact title match first, then by relevance
        matches.sort((a, b) => {
            const aTitle = a.title.toLowerCase();
            const bTitle = b.title.toLowerCase();
            if (aTitle === q) return -1;
            if (bTitle === q) return 1;
            if (aTitle.startsWith(q) && !bTitle.startsWith(q)) return -1;
            if (bTitle.startsWith(q) && !aTitle.startsWith(q)) return 1;
            return 0;
        });

        if (matches.length === 0) {
            results.innerHTML = `
                <div class="search-empty">
                    <p>No results found for "<strong>${Components.escapeHtml(query)}</strong>"</p>
                    <p class="text-muted">Try different keywords</p>
                </div>
            `;
            return;
        }

        results.innerHTML = `
            <div class="search-count">${matches.length} result${matches.length !== 1 ? 's' : ''}</div>
            ${matches.slice(0, 20).map(renderSearchResult).join('')}
            ${matches.length > 20 ? `<div class="search-more">...and ${matches.length - 20} more results</div>` : ''}
        `;
    }

    function showRecentAndBookmarked() {
        const results = document.getElementById('search-results');
        if (!results) return;

        const recent = ProgressManager.getData().recentTopics || [];
        const bookmarks = ProgressManager.getAllBookmarks();

        let html = '';
        if (recent.length > 0) {
            html += `<div class="search-section"><div class="search-section-title">🕐 Recent</div>`;
            recent.slice(0, 5).forEach(r => {
                const topic = allTopics.find(t => t.id === r.id);
                if (topic) html += renderSearchResult(topic);
            });
            html += '</div>';
        }
        if (bookmarks.length > 0) {
            html += `<div class="search-section"><div class="search-section-title">★ Bookmarked</div>`;
            bookmarks.slice(0, 5).forEach(id => {
                const topic = allTopics.find(t => t.id === id);
                if (topic) html += renderSearchResult(topic);
            });
            html += '</div>';
        }
        if (!html) {
            html = `<div class="search-empty"><p class="text-muted">Start typing to search topics...</p></div>`;
        }
        results.innerHTML = html;
    }

    function renderSearchResult(topic) {
        const completed = ProgressManager.isCompleted(topic.id);
        const bookmarked = ProgressManager.isBookmarked(topic.id);
        return `
            <div class="search-result-item" onclick="App.navigate('topic', '${topic.id}'); SearchModule.close();">
                <div class="search-result-status">${completed ? '✓' : '○'}</div>
                <div class="search-result-info">
                    <div class="search-result-title">${topic.title}</div>
                    <div class="search-result-meta">
                        <span class="badge badge-${topic.course === 'Python' ? 'primary' : 'info'}">${topic.course}</span>
                        <span>Level ${topic.levelNum}: ${topic.level}</span>
                        ${bookmarked ? '<span>★</span>' : ''}
                    </div>
                </div>
                ${Components.difficultyBadge(topic.difficulty)}
            </div>
        `;
    }

    return { init, open, close, toggle, search, buildIndex };
})();
