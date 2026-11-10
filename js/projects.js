// ============================================================
// PROJECTS SECTION
// Interactive project workspace with requirements, starter code,
// hints, playground launch, and solution reveal
// ============================================================

window.ProjectsSystem = (() => {
    let currentFilter = 'all';

    function render() {
        const content = document.getElementById('page-content');
        if (!content) return;

        const projects = window.ProjectsData || [];
        const filtered = currentFilter === 'all'
            ? projects
            : projects.filter(p => p.category === currentFilter);

        const progress = ProgressManager.getData();
        const completedMap = progress.projectsCompleted || {};

        content.innerHTML = `
            <div class="projects-page">
                <div class="dashboard-header">
                    <h1>🚀 Practical Projects Portfolio</h1>
                    <p class="dashboard-subtitle">
                        Build 15 real-world applications in increasing difficulty from Beginner to Advanced.
                    </p>
                </div>

                <!-- Category Filters -->
                <div style="display:flex; gap:0.6rem; margin-bottom:1.5rem; flex-wrap:wrap;">
                    <button class="btn btn-sm ${currentFilter === 'all' ? 'btn-primary' : 'btn-secondary'}" onclick="ProjectsSystem.filter('all')">All Projects (${projects.length})</button>
                    <button class="btn btn-sm ${currentFilter === 'beginner' ? 'btn-primary' : 'btn-secondary'}" onclick="ProjectsSystem.filter('beginner')">Beginner (5)</button>
                    <button class="btn btn-sm ${currentFilter === 'intermediate' ? 'btn-primary' : 'btn-secondary'}" onclick="ProjectsSystem.filter('intermediate')">Intermediate (5)</button>
                    <button class="btn btn-sm ${currentFilter === 'advanced' ? 'btn-primary' : 'btn-secondary'}" onclick="ProjectsSystem.filter('advanced')">Advanced (5)</button>
                </div>

                <!-- Projects Grid -->
                <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));">
                    ${filtered.map(proj => {
                        const isDone = completedMap[proj.id];
                        const tierBadge = proj.tier === 'Beginner' ? 'easy' : proj.tier === 'Intermediate' ? 'medium' : 'hard';
                        return `
                            <div class="level-card ${isDone ? 'completed' : ''}" style="display:flex; flex-direction:column; justify-content:space-between;">
                                <div>
                                    <div class="level-header">
                                        <span class="badge badge-${tierBadge}">${proj.tier}</span>
                                        ${isDone ? '<span class="badge badge-success">✓ Completed</span>' : ''}
                                    </div>
                                    <h3 class="level-title" style="margin:0.5rem 0;">${proj.title}</h3>
                                    <p class="level-desc" style="-webkit-line-clamp:3; margin-bottom:1rem;">${proj.description}</p>
                                    
                                    <div style="display:flex; flex-wrap:wrap; gap:0.35rem; margin-bottom:1rem;">
                                        ${proj.skills.map(s => `<span class="badge badge-default" style="font-size:0.7rem;">${s}</span>`).join('')}
                                    </div>
                                </div>

                                <div style="display:flex; gap:0.5rem;">
                                    <button class="btn btn-primary btn-sm" style="flex:1;" onclick="ProjectsSystem.openProject('${proj.id}')">
                                        Open Project 🛠️
                                    </button>
                                    <button class="btn btn-secondary btn-sm" onclick="Playground.openWith(encodeURIComponent(\`${proj.starterCode.replace(/`/g, '\\`')}\`))" title="Open in Playground">
                                        💻 Code
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    function filter(category) {
        currentFilter = category;
        render();
    }

    function openProject(projectId) {
        const proj = (window.ProjectsData || []).find(p => p.id === projectId);
        if (!proj) return;

        const isDone = ProgressManager.getData().projectsCompleted[proj.id];
        const content = document.getElementById('page-content');

        content.innerHTML = `
            <div class="topic-content" style="max-width:950px; margin:0 auto;">
                <div class="topic-header">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span class="badge badge-${proj.tier === 'Beginner' ? 'easy' : proj.tier === 'Intermediate' ? 'medium' : 'hard'}">${proj.tier} Project</span>
                        <button class="btn btn-secondary btn-sm" onclick="App.navigate('projects')">← Back to Projects</button>
                    </div>
                    <h1 style="margin-top:0.75rem;">${proj.title}</h1>
                    <p style="color:var(--text-secondary); font-size:1.05rem;">${proj.description}</p>
                </div>

                <!-- Requirements -->
                <div class="content-section">
                    <h2>📋 Project Requirements</h2>
                    <ul class="concepts-list">
                        ${proj.requirements.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>

                <!-- Starter Code -->
                <div class="content-section">
                    <h2>💻 Starter Template Code</h2>
                    ${Components.codeBlock(proj.starterCode, 'python')}
                    <button class="btn btn-primary" onclick="Playground.openWith(encodeURIComponent(\`${proj.starterCode.replace(/`/g, '\\`')}\`))">
                        Open & Run in Playground →
                    </button>
                </div>

                <!-- Solution Code Accordion -->
                <div class="content-section">
                    <h2>🔑 Reference Solution</h2>
                    <p style="color:var(--text-secondary); margin-bottom:1rem;">
                        Attempt building this project in the Code Playground first before consulting the reference solution.
                    </p>
                    <button class="btn btn-secondary" onclick="document.getElementById('proj-sol-${proj.id}').classList.toggle('hidden')">
                        Toggle Solution Code
                    </button>
                    <div id="proj-sol-${proj.id}" class="hidden" style="margin-top:1rem;">
                        ${Components.codeBlock(proj.solutionCode, 'python')}
                    </div>
                </div>

                <!-- Completion Status -->
                <div class="topic-footer">
                    <label class="completion-checkbox ${isDone ? 'checked' : ''}">
                        <input type="checkbox" ${isDone ? 'checked' : ''} onchange="ProjectsSystem.toggleComplete('${proj.id}', this.checked)">
                        <span class="checkmark"></span>
                        <span>${isDone ? 'Project Completed ✓' : 'Mark Project as Completed'}</span>
                    </label>
                    <button class="btn btn-secondary" onclick="App.navigate('projects')">Back to Projects</button>
                </div>
            </div>
        `;
    }

    function toggleComplete(projectId, checked) {
        if (checked) {
            ProgressManager.completeProject(projectId);
            Components.toast('Project marked as completed! 🚀', 'success');
        } else {
            delete ProgressManager.getData().projectsCompleted[projectId];
            ProgressManager.save();
            Components.toast('Project unmarked', 'info');
        }
        openProject(projectId);
    }

    return { render, filter, openProject, toggleComplete };
})();
