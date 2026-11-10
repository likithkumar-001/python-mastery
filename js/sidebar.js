// ============================================
// Sidebar Navigation
// ============================================
window.Sidebar = (() => {
    let collapsed = false;
    let currentSection = 'dashboard';

    function init() {
        render();
        const savedCollapsed = localStorage.getItem('pythonmastery_sidebar_collapsed');
        if (savedCollapsed === 'true') collapse();
    }

    function render() {
        const nav = document.getElementById('sidebar-nav');
        if (!nav) return;

        let html = '';

        // Dashboard
        html += sidebarItem('dashboard', '📊', 'Dashboard', 'dashboard');

        // Python Course
        html += `<div class="nav-section-header" onclick="toggleSection('python-nav')">
            <span>🐍 Python Course</span>
            <svg class="nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </div>`;
        html += `<div class="nav-section" id="python-nav">`;
        if (window.PythonSyllabus) {
            window.PythonSyllabus.levels.forEach(level => {
                const progress = ProgressManager.getLevelProgress(level.id);
                html += `
                    <div class="nav-level" onclick="toggleNavLevel('nav-${level.id}')">
                        <div class="nav-level-header">
                            <span class="nav-level-num">L${level.number}</span>
                            <span class="nav-level-title">${level.title}</span>
                            <span class="nav-level-progress">${progress.percentage}%</span>
                        </div>
                    </div>
                    <div class="nav-level-topics" id="nav-${level.id}" style="display:none">
                        ${level.topics.map(topic => {
                            const completed = ProgressManager.isCompleted(topic.id);
                            const bookmarked = ProgressManager.isBookmarked(topic.id);
                            return `
                                <div class="sidebar-item ${completed ? 'completed' : ''}"
                                     data-topic-id="${topic.id}"
                                     onclick="App.navigate('topic', '${topic.id}')">
                                    <span class="sidebar-item-status">${completed ? '✓' : '○'}</span>
                                    <span class="sidebar-item-title">${topic.title}</span>
                                    ${bookmarked ? '<span class="sidebar-bookmark">★</span>' : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;
            });
        }
        html += `</div>`;

        // DSA Course
        html += `<div class="nav-section-header" onclick="toggleSection('dsa-nav')">
            <span>🧮 DSA Course</span>
            <svg class="nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </div>`;
        html += `<div class="nav-section" id="dsa-nav">`;
        if (window.DSASyllabus) {
            window.DSASyllabus.levels.forEach(level => {
                const progress = ProgressManager.getLevelProgress(level.id);
                html += `
                    <div class="nav-level" onclick="toggleNavLevel('nav-${level.id}')">
                        <div class="nav-level-header">
                            <span class="nav-level-num">L${level.number}</span>
                            <span class="nav-level-title">${level.title}</span>
                            <span class="nav-level-progress">${progress.percentage}%</span>
                        </div>
                    </div>
                    <div class="nav-level-topics" id="nav-${level.id}" style="display:none">
                        ${level.topics.map(topic => {
                            const completed = ProgressManager.isCompleted(topic.id);
                            const bookmarked = ProgressManager.isBookmarked(topic.id);
                            return `
                                <div class="sidebar-item ${completed ? 'completed' : ''}"
                                     data-topic-id="${topic.id}"
                                     onclick="App.navigate('topic', '${topic.id}')">
                                    <span class="sidebar-item-status">${completed ? '✓' : '○'}</span>
                                    <span class="sidebar-item-title">${topic.title}</span>
                                    ${bookmarked ? '<span class="sidebar-bookmark">★</span>' : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;
            });
        }
        html += `</div>`;

        // Extra sections
        html += sidebarItem('playground', '💻', 'Code Playground', 'playground');
        html += sidebarItem('visualizer', '📈', 'DSA Visualizer', 'visualizer');
        html += sidebarItem('tests', '📝', 'Tests & Quizzes', 'tests');
        html += sidebarItem('projects', '🚀', 'Projects', 'projects');
        html += sidebarItem('bookmarks', '★', 'Bookmarks', 'bookmarks');

        nav.innerHTML = html;
    }

    function sidebarItem(id, icon, label, page) {
        const active = currentSection === id;
        return `
            <div class="sidebar-item sidebar-main-item ${active ? 'active' : ''}"
                 data-section="${id}"
                 onclick="App.navigate('${page}')">
                <span class="sidebar-item-icon">${icon}</span>
                <span class="sidebar-item-title">${label}</span>
            </div>
        `;
    }

    function setActive(sectionId) {
        currentSection = sectionId;
        // Update active states
        document.querySelectorAll('.sidebar-main-item').forEach(item => {
            item.classList.toggle('active', item.dataset.section === sectionId);
        });
    }

    function highlightTopic(topicId) {
        document.querySelectorAll('.sidebar-item[data-topic-id]').forEach(item => {
            item.classList.toggle('active', item.dataset.topicId === topicId);
        });
        // Expand parent level
        const item = document.querySelector(`.sidebar-item[data-topic-id="${topicId}"]`);
        if (item) {
            const levelTopics = item.closest('.nav-level-topics');
            if (levelTopics) levelTopics.style.display = 'block';
            // Make sure section is visible
            const section = item.closest('.nav-section');
            if (section) section.style.display = 'block';
            // Scroll into view
            item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }

    function toggle() {
        collapsed = !collapsed;
        const sidebar = document.getElementById('sidebar');
        const main = document.getElementById('main-content');
        if (sidebar) sidebar.classList.toggle('sidebar-collapsed', collapsed);
        if (main) main.classList.toggle('main-expanded', collapsed);
        localStorage.setItem('pythonmastery_sidebar_collapsed', collapsed);
    }

    function collapse() {
        collapsed = true;
        const sidebar = document.getElementById('sidebar');
        const main = document.getElementById('main-content');
        if (sidebar) sidebar.classList.add('sidebar-collapsed');
        if (main) main.classList.add('main-expanded');
    }

    function openMobile() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (sidebar) sidebar.classList.add('sidebar-mobile-open');
        if (overlay) overlay.classList.remove('hidden');
    }

    function closeMobile() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (sidebar) sidebar.classList.remove('sidebar-mobile-open');
        if (overlay) overlay.classList.add('hidden');
    }

    function refresh() {
        render();
    }

    return { init, render, setActive, highlightTopic, toggle, openMobile, closeMobile, refresh };
})();

// Global nav helpers
function toggleSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
    }
    // Toggle arrow
    const header = el?.previousElementSibling;
    if (header) header.classList.toggle('open');
}

function toggleNavLevel(id) {
    const el = document.getElementById(id);
    if (el) {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
    }
}
