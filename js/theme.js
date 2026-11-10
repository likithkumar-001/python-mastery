// ============================================
// Theme Manager - Light/Dark theme management
// ============================================
window.ThemeManager = (() => {
    const STORAGE_KEY = 'pythonmastery_theme';

    function init() {
        const saved = localStorage.getItem(STORAGE_KEY) || 'light';
        apply(saved);
    }

    function apply(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        updateIcons(theme);
    }

    function toggle() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'light' ? 'dark' : 'light';
        apply(next);
    }

    function updateIcons(theme) {
        const icon = theme === 'dark' ? '☀️' : '🌙';
        const label = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        const themeIcon = document.getElementById('theme-icon');
        const themeLabel = document.getElementById('theme-label');
        const toggleIcon = document.getElementById('theme-toggle-icon');
        if (themeIcon) themeIcon.textContent = icon;
        if (themeLabel) themeLabel.textContent = label;
        if (toggleIcon) toggleIcon.textContent = icon;
    }

    function current() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }

    return { init, toggle, current };
})();
