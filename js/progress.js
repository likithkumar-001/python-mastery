// ============================================
// Progress Manager - Persistent progress tracking
// ============================================
window.ProgressManager = (() => {
    const STORAGE_KEY = 'pythonmastery_progress';
    let data = {};

    function getDefaultData() {
        return {
            completedTopics: {},       // { topicId: timestamp }
            bookmarkedTopics: {},      // { topicId: true }
            questionsSolved: {},       // { questionId: { solved: true, attempts: N } }
            testResults: {},           // { testId: { score, total, date } }
            streak: { current: 0, lastDate: null, longest: 0 },
            recentTopics: [],          // [ { id, title, course, timestamp } ] max 10
            codeSnippets: {},          // { topicId: code }
            topicNotes: {},            // { topicId: note }
            projectsCompleted: {},     // { projectId: true }
            totalTimeSpent: 0,         // minutes
            dailyActivity: {},         // { 'YYYY-MM-DD': { topics: N, questions: N, time: N } }
            hintsUsed: {},             // { questionId: hintLevel }
            weakTopics: [],            // [ topicId ] - topics where student struggled
            currentLevel: { python: 1, dsa: 1 },
            preferences: {
                fontSize: 'medium',
                codeTheme: 'default',
                autoSave: true
            }
        };
    }

    function init() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            data = saved ? { ...getDefaultData(), ...JSON.parse(saved) } : getDefaultData();
        } catch (e) {
            console.error('Failed to load progress:', e);
            data = getDefaultData();
        }
        updateStreak();
        save();
    }

    function save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error('Failed to save progress:', e);
        }
    }

    function updateStreak() {
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        if (data.streak.lastDate === today) return;
        if (data.streak.lastDate === yesterday) {
            // Streak continues - will be incremented on activity
        } else if (data.streak.lastDate && data.streak.lastDate !== today) {
            data.streak.current = 0;
        }
    }

    function recordActivity() {
        const today = new Date().toISOString().split('T')[0];
        if (data.streak.lastDate !== today) {
            if (data.streak.lastDate === new Date(Date.now() - 86400000).toISOString().split('T')[0]) {
                data.streak.current++;
            } else {
                data.streak.current = 1;
            }
            data.streak.lastDate = today;
            data.streak.longest = Math.max(data.streak.longest, data.streak.current);
        }

        if (!data.dailyActivity[today]) {
            data.dailyActivity[today] = { topics: 0, questions: 0, time: 0 };
        }
        save();
        updateStreakDisplay();
    }

    function updateStreakDisplay() {
        const el = document.getElementById('streak-count');
        if (el) el.textContent = data.streak.current;
    }

    function completeTopic(topicId) {
        if (!data.completedTopics[topicId]) {
            data.completedTopics[topicId] = Date.now();
            const today = new Date().toISOString().split('T')[0];
            if (data.dailyActivity[today]) {
                data.dailyActivity[today].topics++;
            }
            recordActivity();
            save();
            return true;
        }
        return false;
    }

    function uncompleteTopic(topicId) {
        delete data.completedTopics[topicId];
        save();
    }

    function isCompleted(topicId) {
        return !!data.completedTopics[topicId];
    }

    function toggleBookmark(topicId) {
        if (data.bookmarkedTopics[topicId]) {
            delete data.bookmarkedTopics[topicId];
        } else {
            data.bookmarkedTopics[topicId] = true;
        }
        save();
        return data.bookmarkedTopics[topicId] || false;
    }

    function isBookmarked(topicId) {
        return !!data.bookmarkedTopics[topicId];
    }

    function addRecentTopic(topic) {
        data.recentTopics = data.recentTopics.filter(t => t.id !== topic.id);
        data.recentTopics.unshift({
            id: topic.id,
            title: topic.title,
            course: topic.id.startsWith('dsa') ? 'DSA' : 'Python',
            timestamp: Date.now()
        });
        if (data.recentTopics.length > 10) data.recentTopics = data.recentTopics.slice(0, 10);
        recordActivity();
        save();
    }

    function solveQuestion(questionId, correct) {
        if (!data.questionsSolved[questionId]) {
            data.questionsSolved[questionId] = { solved: false, attempts: 0, correct: false };
        }
        data.questionsSolved[questionId].attempts++;
        if (correct) {
            data.questionsSolved[questionId].solved = true;
            data.questionsSolved[questionId].correct = true;
            const today = new Date().toISOString().split('T')[0];
            if (data.dailyActivity[today]) {
                data.dailyActivity[today].questions++;
            }
        }
        recordActivity();
        save();
    }

    function useHint(questionId, level) {
        data.hintsUsed[questionId] = Math.max(data.hintsUsed[questionId] || 0, level);
        save();
    }

    function getHintLevel(questionId) {
        return data.hintsUsed[questionId] || 0;
    }

    function saveTestResult(testId, score, total) {
        data.testResults[testId] = { score, total, date: Date.now() };
        save();
    }

    function saveCode(topicId, code) {
        data.codeSnippets[topicId] = code;
        save();
    }

    function getSavedCode(topicId) {
        return data.codeSnippets[topicId] || '';
    }

    function completeProject(projectId) {
        data.projectsCompleted[projectId] = true;
        recordActivity();
        save();
    }

    function getStats() {
        const completedCount = Object.keys(data.completedTopics).length;
        const solvedCount = Object.values(data.questionsSolved).filter(q => q.solved).length;
        const pythonCompleted = Object.keys(data.completedTopics).filter(id => id.startsWith('py-')).length;
        const dsaCompleted = Object.keys(data.completedTopics).filter(id => id.startsWith('dsa-')).length;

        // Count total topics
        let pythonTotal = 0, dsaTotal = 0;
        if (window.PythonSyllabus) {
            window.PythonSyllabus.levels.forEach(l => pythonTotal += l.topics.length);
        }
        if (window.DSASyllabus) {
            window.DSASyllabus.levels.forEach(l => dsaTotal += l.topics.length);
        }

        return {
            completedTopics: completedCount,
            totalTopics: pythonTotal + dsaTotal,
            pythonCompleted,
            pythonTotal,
            dsaCompleted,
            dsaTotal,
            questionsSolved: solvedCount,
            streak: data.streak,
            recentTopics: data.recentTopics,
            bookmarkedCount: Object.keys(data.bookmarkedTopics).length,
            projectsCompleted: Object.keys(data.projectsCompleted).length,
            pythonProgress: pythonTotal ? Math.round((pythonCompleted / pythonTotal) * 100) : 0,
            dsaProgress: dsaTotal ? Math.round((dsaCompleted / dsaTotal) * 100) : 0,
            overallProgress: (pythonTotal + dsaTotal) ? Math.round((completedCount / (pythonTotal + dsaTotal)) * 100) : 0
        };
    }

    function getLevelProgress(levelId) {
        let syllabus;
        if (levelId.startsWith('py-')) {
            syllabus = window.PythonSyllabus;
        } else {
            syllabus = window.DSASyllabus;
        }
        if (!syllabus) return { completed: 0, total: 0, percentage: 0 };

        const level = syllabus.levels.find(l => l.id === levelId);
        if (!level) return { completed: 0, total: 0, percentage: 0 };

        const completed = level.topics.filter(t => data.completedTopics[t.id]).length;
        return {
            completed,
            total: level.topics.length,
            percentage: level.topics.length ? Math.round((completed / level.topics.length) * 100) : 0
        };
    }

    function getRecommendedTopic() {
        // Find next uncompleted topic in order
        const syllabi = [window.PythonSyllabus, window.DSASyllabus].filter(Boolean);
        for (const syllabus of syllabi) {
            for (const level of syllabus.levels) {
                for (const topic of level.topics) {
                    if (!data.completedTopics[topic.id]) {
                        return {
                            ...topic,
                            levelTitle: level.title,
                            course: syllabus.id === 'python' ? 'Python' : 'DSA'
                        };
                    }
                }
            }
        }
        return null;
    }

    function getAllBookmarks() {
        return Object.keys(data.bookmarkedTopics);
    }

    function getData() { return data; }

    function resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            data = getDefaultData();
            save();
            location.reload();
        }
    }

    return {
        init, save, completeTopic, uncompleteTopic, isCompleted,
        toggleBookmark, isBookmarked, addRecentTopic, solveQuestion,
        useHint, getHintLevel, saveTestResult, saveCode, getSavedCode,
        completeProject, getStats, getLevelProgress, getRecommendedTopic,
        getAllBookmarks, getData, resetProgress, updateStreakDisplay,
        recordActivity
    };
})();
