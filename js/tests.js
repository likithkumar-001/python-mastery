// ============================================================
// TESTS & ASSESSMENT SYSTEM
// Chapter tests, Level tests, Revision tests, Mock Interviews
// Mistake tracking & Weak topic identification
// ============================================================

window.TestsSystem = (() => {
    let currentQuiz = null;
    let userAnswers = {};
    let isSubmitted = false;

    // Test catalog
    const testsCatalog = [
        {
            id: 'test-py-1',
            type: 'level',
            course: 'Python',
            title: 'Python Fundamentals Mastery Test (Level 1)',
            description: 'Evaluate variables, data types, type casting, arithmetic & bitwise operators.',
            duration: '15 mins',
            questions: [
                {
                    id: 'q1',
                    text: 'What will be the output of `print(type(5 / 2))` in Python 3?',
                    options: ["<class 'int'>", "<class 'float'>", "<class 'number'>", "<class 'double'>"],
                    correct: 1,
                    topic: 'Data Types',
                    explanation: "True division `/` in Python 3 always yields a `float`."
                },
                {
                    id: 'q2',
                    text: 'Which operator performs floor division, rounding down to the nearest integer?',
                    options: ['/', '//', '%', '**'],
                    correct: 1,
                    topic: 'Operators',
                    explanation: "`//` is Python's floor division operator."
                },
                {
                    id: 'q3',
                    text: 'Which of the following is an INVALID variable name in Python?',
                    options: ['_my_var', 'var_2', '2_var', 'MyVar'],
                    correct: 2,
                    topic: 'Naming conventions',
                    explanation: "Identifiers in Python cannot start with a numeric digit."
                },
                {
                    id: 'q4',
                    text: 'What is the result of `bool([])` and `bool([0])`?',
                    options: ['True, True', 'False, False', 'False, True', 'True, False'],
                    correct: 2,
                    topic: 'Data types',
                    explanation: "An empty collection evaluates to False, whereas non-empty collections evaluate to True."
                },
                {
                    id: 'q5',
                    text: 'What does `print("A", "B", sep="-", end="!")` output?',
                    options: ['A B-!', 'A-B!', 'A-B-!', 'A B !'],
                    correct: 1,
                    topic: 'print()',
                    explanation: "`sep='-'` separates items with a dash and `end='!'` terminates the output with an exclamation mark."
                }
            ]
        },
        {
            id: 'test-dsa-1',
            type: 'level',
            course: 'DSA',
            title: 'DSA Foundations & Complexity Test',
            description: 'Big O analysis, logarithmic growth, best/worst case scenarios, and recursive call trees.',
            duration: '20 mins',
            questions: [
                {
                    id: 'qd1',
                    text: 'What is the time complexity of searching an element in a balanced Binary Search Tree with N nodes?',
                    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N log N)'],
                    correct: 1,
                    topic: 'Trees',
                    explanation: "Each comparison eliminates half of the remaining subtrees in a balanced BST."
                },
                {
                    id: 'qd2',
                    text: 'Which data structure enforces Last-In, First-Out (LIFO) access?',
                    options: ['Queue', 'Stack', 'Array', 'Linked List'],
                    correct: 1,
                    topic: 'Stacks',
                    explanation: "A Stack operates strictly via LIFO (Push and Pop at the Top)."
                },
                {
                    id: 'qd3',
                    text: 'What is the worst-case time complexity of Quick Sort when selecting the first element as pivot on an already sorted array?',
                    options: ['O(N log N)', 'O(N)', 'O(N²)', 'O(2^N)'],
                    correct: 2,
                    topic: 'Sorting Algorithms',
                    explanation: "Choosing an extreme element as pivot produces unbalanced partitions of size 1 and N-1, causing O(N²)."
                },
                {
                    id: 'qd4',
                    text: 'What is the auxiliary space complexity of an iterative Two-Pointer traversal over an array?',
                    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N²)'],
                    correct: 0,
                    topic: 'Two Pointers',
                    explanation: "Two pointers only require two integer variables (left and right), which is O(1) constant auxiliary space."
                },
                {
                    id: 'qd5',
                    text: 'Which approach stores solutions to overlapping subproblems to prevent exponential recomputations?',
                    options: ['Greedy', 'Dynamic Programming', 'Brute Force', 'Randomized'],
                    correct: 1,
                    topic: 'Dynamic Programming',
                    explanation: "Dynamic programming uses memoization or tabulation to achieve polynomial time."
                }
            ]
        },
        {
            id: 'test-mock-1',
            type: 'interview',
            course: 'DSA',
            title: 'Mock Technical Interview: Arrays & Hashing',
            description: 'Simulated 30-minute FAANG/top-tier coding round on Array techniques, Hash Tables, and Edge Cases.',
            duration: '30 mins',
            questions: [
                {
                    id: 'qm1',
                    text: 'Given an array of integers, what is the most optimal time and space complexity to find two numbers that sum up to a target?',
                    options: ['O(N²) time, O(1) space', 'O(N log N) time, O(1) space', 'O(N) time, O(N) space using a Hash Map', 'O(1) time, O(N) space'],
                    correct: 2,
                    topic: 'Two Sum',
                    explanation: "A hash map checks for `target - num` complement in O(1) time per element, completing in O(N) total."
                },
                {
                    id: 'qm2',
                    text: 'Why is `collections.deque` preferred over Python lists when implementing a Queue?',
                    options: ['Lists consume less memory', 'List `pop(0)` is O(N) due to memory shifting, while deque `popleft()` is O(1)', 'Lists are thread-safe by default', 'Deques only hold integers'],
                    correct: 1,
                    topic: 'Queues',
                    explanation: "Removing from the front of a list requires shifting all subsequent elements in O(N)."
                }
            ]
        }
    ];

    function render() {
        const content = document.getElementById('page-content');
        if (!content) return;

        const progress = ProgressManager.getData();
        const testResults = progress.testResults || {};
        const weakTopics = computeWeakTopics(testResults);

        content.innerHTML = `
            <div class="tests-page">
                <div class="dashboard-header">
                    <h1>📝 Assessments, Tests & Mock Interviews</h1>
                    <p class="dashboard-subtitle">Validate your coding comprehension with rigorous level-tests and interview rounds.</p>
                </div>

                <!-- Weak Topics & Recommendations Section -->
                ${weakTopics.length > 0 ? `
                    <div class="content-section" style="border-left:4px solid var(--color-accent-amber); margin-bottom:2rem;">
                        <h2>⚠️ Weak Topics Identified</h2>
                        <p style="color:var(--text-secondary); margin-bottom:1rem;">
                            Based on your recent quiz attempts, the system recommends revising these topics:
                        </p>
                        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                            ${weakTopics.map(t => `<span class="badge badge-warning" style="font-size:0.85rem; padding:0.4rem 0.8rem;">${t}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Tests Catalog Grid -->
                <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
                    ${testsCatalog.map(test => {
                        const result = testResults[test.id];
                        return `
                            <div class="level-card">
                                <div class="level-header">
                                    <span class="badge badge-${test.course === 'Python' ? 'primary' : 'info'}">${test.course}</span>
                                    <span class="badge badge-default">⏱ ${test.duration}</span>
                                </div>
                                <h3 class="level-title">${test.title}</h3>
                                <p class="level-desc">${test.description}</p>
                                ${result ? `
                                    <div style="background:var(--bg-muted); padding:0.75rem; border-radius:var(--radius-md); font-size:0.88rem;">
                                        <strong>Previous Score:</strong> ${result.score} / ${result.total} (${Math.round((result.score/result.total)*100)}%)
                                    </div>
                                ` : ''}
                                <button class="btn btn-primary" onclick="TestsSystem.startTest('${test.id}')">
                                    ${result ? 'Retake Test' : 'Start Test →'}
                                </button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    function startTest(testId) {
        const test = testsCatalog.find(t => t.id === testId);
        if (!test) return;

        currentQuiz = test;
        userAnswers = {};
        isSubmitted = false;

        const content = document.getElementById('page-content');
        content.innerHTML = `
            <div class="topic-content" style="max-width:900px; margin:0 auto;">
                <div class="topic-header">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span class="badge badge-primary">${test.type.toUpperCase()} TEST</span>
                        <span class="badge badge-default">⏱ ${test.duration}</span>
                    </div>
                    <h1 style="margin-top:0.75rem;">${test.title}</h1>
                    <p style="color:var(--text-secondary);">${test.description}</p>
                </div>

                <div id="quiz-questions-area" style="display:flex; flex-direction:column; gap:1.5rem;">
                    ${test.questions.map((q, idx) => `
                        <div class="question-card" id="q-block-${idx}">
                            <div class="question-header">
                                <span class="question-number">Question ${idx + 1}</span>
                                <span class="badge badge-default">${q.topic}</span>
                            </div>
                            <p class="question-text" style="font-weight:600;">${q.text}</p>
                            <div style="display:flex; flex-direction:column; gap:0.6rem; margin-top:1rem;">
                                ${q.options.map((opt, optIdx) => `
                                    <label class="recent-item" style="cursor:pointer;" onclick="TestsSystem.selectAnswer(${idx}, ${optIdx})">
                                        <input type="radio" name="q_${idx}" value="${optIdx}" style="margin-right:0.75rem;">
                                        <span>${opt}</span>
                                    </label>
                                `).join('')}
                            </div>
                            <div id="feedback-${idx}" style="display:none; margin-top:1rem; padding:0.85rem; border-radius:var(--radius-md);"></div>
                        </div>
                    `).join('')}
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:2rem;">
                    <button class="btn btn-secondary" onclick="App.navigate('tests')">Cancel</button>
                    <button class="btn btn-success" id="submit-quiz-btn" onclick="TestsSystem.submitTest()">Submit Assessment</button>
                </div>
            </div>
        `;
    }

    function selectAnswer(qIdx, optIdx) {
        if (isSubmitted) return;
        userAnswers[qIdx] = optIdx;
        const radios = document.getElementsByName(`q_${qIdx}`);
        radios.forEach((r, i) => r.checked = (i === optIdx));
    }

    function submitTest() {
        if (!currentQuiz) return;
        isSubmitted = true;

        let score = 0;
        const mistakes = [];

        currentQuiz.questions.forEach((q, idx) => {
            const userChoice = userAnswers[idx];
            const isCorrect = userChoice === q.correct;
            const feedbackEl = document.getElementById(`feedback-${idx}`);

            if (isCorrect) {
                score++;
                if (feedbackEl) {
                    feedbackEl.style.display = 'block';
                    feedbackEl.style.background = 'rgba(16, 185, 129, 0.1)';
                    feedbackEl.style.border = '1px solid #10b981';
                    feedbackEl.innerHTML = `<strong>✅ Correct!</strong> ${q.explanation}`;
                }
            } else {
                mistakes.push(q.topic);
                if (feedbackEl) {
                    feedbackEl.style.display = 'block';
                    feedbackEl.style.background = 'rgba(239, 68, 68, 0.1)';
                    feedbackEl.style.border = '1px solid #ef4444';
                    feedbackEl.innerHTML = `<strong>❌ Incorrect.</strong> Correct answer: <em>${q.options[q.correct]}</em>.<br><small>${q.explanation}</small>`;
                }
            }
        });

        // Save result
        ProgressManager.saveTestResult(currentQuiz.id, score, currentQuiz.questions.length);

        // Disable submit button
        const submitBtn = document.getElementById('submit-quiz-btn');
        if (submitBtn) {
            submitBtn.textContent = `Completed: ${score}/${currentQuiz.questions.length}`;
            submitBtn.disabled = true;
        }

        Components.toast(`Test complete! You scored ${score}/${currentQuiz.questions.length}`, score >= currentQuiz.questions.length / 2 ? 'success' : 'warning');
    }

    function computeWeakTopics(results) {
        // Collect mistakes from catalog
        const weak = [];
        testsCatalog.forEach(t => {
            const res = results[t.id];
            if (res && res.score < res.total) {
                t.questions.forEach(q => {
                    if (!weak.includes(q.topic)) weak.push(q.topic);
                });
            }
        });
        return weak.slice(0, 4);
    }

    return { render, startTest, selectAnswer, submitTest };
})();
