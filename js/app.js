// ============================================================
// MAIN APPLICATION ROUTER & COORDINATOR
// Handles client-side hash routing, component rendering,
// progress persistence, and keyboard shortcuts
// ============================================================

window.App = (() => {
    let currentRoute = { page: 'dashboard', param: null };

    function init() {
        // Initialize Core Subsystems
        ThemeManager.init();
        ProgressManager.init();
        Sidebar.init();
        SearchModule.init();

        // Bind hash change listener
        window.addEventListener('hashchange', handleHash);

        // Initial route resolution
        if (window.location.hash) {
            handleHash();
        } else {
            navigate('dashboard');
        }
    }

    function handleHash() {
        const hash = window.location.hash.slice(1);
        if (!hash) {
            navigate('dashboard', null, false);
            return;
        }

        const parts = hash.split('/');
        const page = parts[0] || 'dashboard';
        const param = parts[1] || null;

        navigate(page, param, false);
    }

    function navigate(page, param = null, updateHash = true) {
        currentRoute = { page, param };

        if (updateHash) {
            const newHash = param ? `#${page}/${param}` : `#${page}`;
            if (window.location.hash !== newHash) {
                window.location.hash = newHash;
                return; // hashchange will trigger handleHash
            }
        }

        // Close mobile drawer if open
        Sidebar.closeMobile();

        // Update active sidebar selection
        Sidebar.setActive(page);

        // Update Breadcrumb default
        updateDefaultBreadcrumb(page, param);

        // Route resolution
        switch (page) {
            case 'dashboard':
                Dashboard.render();
                break;
            case 'python-course':
                Dashboard.renderCourse('python-course');
                break;
            case 'dsa-course':
                Dashboard.renderCourse('dsa-course');
                break;
            case 'level':
                Dashboard.renderLevel(param);
                break;
            case 'topic':
                TopicViewer.render(param);
                break;
            case 'playground':
                Playground.render();
                break;
            case 'visualizer':
                Visualizer.render();
                break;
            case 'tests':
                TestsSystem.render();
                break;
            case 'projects':
                ProjectsSystem.render();
                break;
            case 'bookmarks':
                Dashboard.renderBookmarks();
                break;
            default:
                Dashboard.render();
                break;
        }

        // Scroll main view container to top
        const main = document.getElementById('main-content');
        if (main) main.scrollTop = 0;
    }

    function updateDefaultBreadcrumb(page, param) {
        const bc = document.getElementById('breadcrumb');
        if (!bc) return;

        const labels = {
            'dashboard': 'Home Dashboard',
            'python-course': 'Python Curriculum',
            'dsa-course': 'DSA Curriculum',
            'playground': 'Code Playground',
            'visualizer': 'DSA Visualizer',
            'tests': 'Assessments & Tests',
            'projects': 'Projects Portfolio',
            'bookmarks': 'Bookmarked Topics'
        };

        if (labels[page]) {
            bc.innerHTML = `
                <span class="breadcrumb-item" onclick="App.navigate('dashboard')">Home</span>
                <span class="breadcrumb-sep">›</span>
                <span class="breadcrumb-current">${labels[page]}</span>
            `;
        }
    }

    function getCurrentRoute() {
        return currentRoute;
    }

    return { init, navigate, getCurrentRoute };
})();

// Bootstrap application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
