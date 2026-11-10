// ============================================================
// DSA VISUALIZER
// Interactive step-by-step visualizers for:
// 1. Array Operations
// 2. Searching (Linear & Binary)
// 3. Sorting (Bubble, Selection, Insertion, Merge, Quick)
// 4. Stack (Push & Pop)
// 5. Queue (Enqueue & Dequeue)
// 6. Linked List (Insertion & Deletion)
// 7. Binary Search Tree (Insert & Inorder Traversal)
// 8. Graph BFS & DFS
// 9. Recursion Call Stack
// 10. Dynamic Programming Table
// ============================================================

window.Visualizer = (() => {
    let currentMode = 'sorting';
    let steps = [];
    let currentStepIndex = 0;
    let isPlaying = false;
    let playInterval = null;
    let playSpeed = 600; // ms

    // State for interactive modes
    let customArray = [45, 12, 89, 34, 67, 23, 78, 56];
    let customStack = [10, 20, 30];
    let customQueue = [100, 200, 300];
    let customLinkedList = [5, 12, 19, 31];

    function render() {
        const content = document.getElementById('page-content');
        if (!content) return;

        content.innerHTML = `
            <div class="visualizer-page">
                <div class="dashboard-header">
                    <h1>📈 DSA Interactive Algorithm Visualizer</h1>
                    <p class="dashboard-subtitle">Control data structure operations and algorithm execution step-by-step.</p>
                </div>

                <div class="visualizer-container">
                    <!-- Controls Bar -->
                    <div class="visualizer-controls">
                        <div class="viz-control-group">
                            <label><strong>Algorithm:</strong></label>
                            <select id="viz-algo-select" onchange="Visualizer.switchMode(this.value)">
                                <optgroup label="Sorting">
                                    <option value="bubble_sort">Bubble Sort</option>
                                    <option value="selection_sort">Selection Sort</option>
                                    <option value="insertion_sort">Insertion Sort</option>
                                </optgroup>
                                <optgroup label="Searching">
                                    <option value="binary_search">Binary Search</option>
                                    <option value="linear_search">Linear Search</option>
                                </optgroup>
                                <optgroup label="Data Structures">
                                    <option value="stack">Stack (LIFO)</option>
                                    <option value="queue">Queue (FIFO)</option>
                                    <option value="linked_list">Linked List</option>
                                    <option value="bst">Binary Search Tree</option>
                                    <option value="graph_bfs">Graph BFS</option>
                                    <option value="graph_dfs">Graph DFS</option>
                                    <option value="dp_table">Dynamic Programming (Fibonacci Table)</option>
                                    <option value="call_stack">Recursion Call Stack (Factorial)</option>
                                </optgroup>
                            </select>
                        </div>

                        <!-- Step controls -->
                        <div class="viz-control-group">
                            <button class="btn btn-secondary btn-sm" onclick="Visualizer.stepPrev()" title="Previous Step">⏮ Prev</button>
                            <button class="btn btn-primary btn-sm" id="viz-play-btn" onclick="Visualizer.togglePlay()">▶ Play</button>
                            <button class="btn btn-secondary btn-sm" onclick="Visualizer.stepNext()" title="Next Step">Next ⏭</button>
                            <button class="btn btn-secondary btn-sm" onclick="Visualizer.reset()">↺ Reset</button>
                            <button class="btn btn-secondary btn-sm" onclick="Visualizer.randomize()">🎲 Randomize</button>
                        </div>

                        <div class="viz-control-group">
                            <label style="font-size:0.85rem">Speed:</label>
                            <input type="range" min="150" max="1200" value="600" onchange="Visualizer.setSpeed(this.value)" style="width:90px">
                            <span id="step-indicator" class="badge badge-default">Step 0 / 0</span>
                        </div>
                    </div>

                    <!-- Dynamic Action Inputs for DS operations -->
                    <div id="viz-ds-actions" class="viz-control-group" style="display:none; padding: 0.5rem 0;"></div>

                    <!-- Canvas Visualization Area -->
                    <div id="viz-canvas" class="viz-canvas-area"></div>

                    <!-- Explanation Step by Step -->
                    <div id="viz-explanation" class="viz-explanation-panel">
                        Select an algorithm above and click <strong>Play</strong> or <strong>Next</strong> to start the visualization.
                    </div>
                </div>
            </div>
        `;

        switchMode('bubble_sort');
    }

    function switchMode(algo) {
        stopPlay();
        currentMode = algo;
        currentStepIndex = 0;
        steps = [];

        const dsActions = document.getElementById('viz-ds-actions');
        if (dsActions) {
            if (['stack', 'queue', 'linked_list', 'bst'].includes(algo)) {
                dsActions.style.display = 'flex';
                renderDSActions(algo, dsActions);
            } else {
                dsActions.style.display = 'none';
            }
        }

        // Generate animation steps based on algo
        if (algo === 'bubble_sort') generateBubbleSortSteps();
        else if (algo === 'selection_sort') generateSelectionSortSteps();
        else if (algo === 'insertion_sort') generateInsertionSortSteps();
        else if (algo === 'binary_search') generateBinarySearchSteps();
        else if (algo === 'linear_search') generateLinearSearchSteps();
        else if (algo === 'stack') renderStack();
        else if (algo === 'queue') renderQueue();
        else if (algo === 'linked_list') renderLinkedList();
        else if (algo === 'bst') generateBSTSteps();
        else if (algo === 'graph_bfs') generateGraphBFSSteps();
        else if (algo === 'graph_dfs') generateGraphDFSSteps();
        else if (algo === 'dp_table') generateDPSteps();
        else if (algo === 'call_stack') generateCallStackSteps();

        if (steps.length > 0) {
            renderStep(0);
        }
    }

    function renderDSActions(algo, container) {
        if (algo === 'stack') {
            container.innerHTML = `
                <input type="number" id="ds-input" value="40" style="width:80px; padding:0.3rem 0.5rem; border:1px solid var(--border-color); border-radius:4px;">
                <button class="btn btn-success btn-sm" onclick="Visualizer.stackPush()">Push (LIFO)</button>
                <button class="btn btn-danger btn-sm" onclick="Visualizer.stackPop()">Pop</button>
            `;
        } else if (algo === 'queue') {
            container.innerHTML = `
                <input type="number" id="ds-input" value="400" style="width:80px; padding:0.3rem 0.5rem; border:1px solid var(--border-color); border-radius:4px;">
                <button class="btn btn-success btn-sm" onclick="Visualizer.queueEnqueue()">Enqueue (Rear)</button>
                <button class="btn btn-danger btn-sm" onclick="Visualizer.queueDequeue()">Dequeue (Front)</button>
            `;
        } else if (algo === 'linked_list') {
            container.innerHTML = `
                <input type="number" id="ds-input" value="25" style="width:80px; padding:0.3rem 0.5rem; border:1px solid var(--border-color); border-radius:4px;">
                <button class="btn btn-success btn-sm" onclick="Visualizer.llInsertHead()">Insert Head</button>
                <button class="btn btn-primary btn-sm" onclick="Visualizer.llAppend()">Append Tail</button>
                <button class="btn btn-danger btn-sm" onclick="Visualizer.llDeleteHead()">Delete Head</button>
            `;
        } else if (algo === 'bst') {
            container.innerHTML = `
                <input type="number" id="ds-input" value="35" style="width:80px; padding:0.3rem 0.5rem; border:1px solid var(--border-color); border-radius:4px;">
                <button class="btn btn-success btn-sm" onclick="Visualizer.bstInsert()">Insert Key</button>
            `;
        }
    }

    // --------------------------------------------------------
    // SORTING ALGORITHMS STEP GENERATORS
    // --------------------------------------------------------
    function generateBubbleSortSteps() {
        const arr = [...customArray];
        steps = [];
        steps.push({
            arr: [...arr],
            compared: [],
            sorted: [],
            desc: "Initial array before sorting."
        });

        const n = arr.length;
        const sortedIndices = [];
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                steps.push({
                    arr: [...arr],
                    compared: [j, j + 1],
                    sorted: [...sortedIndices],
                    desc: `Comparing element ${arr[j]} at index ${j} and ${arr[j+1]} at index ${j+1}.`
                });

                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    steps.push({
                        arr: [...arr],
                        compared: [j, j + 1],
                        sorted: [...sortedIndices],
                        desc: `Swapped: ${arr[j+1]} was greater than ${arr[j]}.`
                    });
                }
            }
            sortedIndices.push(n - i - 1);
        }
        sortedIndices.push(0);
        steps.push({
            arr: [...arr],
            compared: [],
            sorted: sortedIndices,
            desc: "Bubble sort complete! Entire array is sorted."
        });
    }

    function generateSelectionSortSteps() {
        const arr = [...customArray];
        steps = [];
        const n = arr.length;
        const sortedIndices = [];

        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            steps.push({
                arr: [...arr],
                compared: [minIdx],
                sorted: [...sortedIndices],
                desc: `Pass ${i + 1}: Current minimum candidate is ${arr[minIdx]} at index ${minIdx}.`
            });

            for (let j = i + 1; j < n; j++) {
                steps.push({
                    arr: [...arr],
                    compared: [minIdx, j],
                    sorted: [...sortedIndices],
                    desc: `Comparing candidate ${arr[minIdx]} with ${arr[j]} at index ${j}.`
                });

                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                    steps.push({
                        arr: [...arr],
                        compared: [minIdx],
                        sorted: [...sortedIndices],
                        desc: `New minimum found: ${arr[minIdx]} at index ${minIdx}.`
                    });
                }
            }

            if (minIdx !== i) {
                const temp = arr[i];
                arr[i] = arr[minIdx];
                arr[minIdx] = temp;
                steps.push({
                    arr: [...arr],
                    compared: [i, minIdx],
                    sorted: [...sortedIndices],
                    desc: `Swapped minimum element ${arr[i]} into its final position at index ${i}.`
                });
            }
            sortedIndices.push(i);
        }
        sortedIndices.push(n - 1);
        steps.push({
            arr: [...arr],
            compared: [],
            sorted: sortedIndices,
            desc: "Selection sort complete! Array is fully ordered."
        });
    }

    function generateInsertionSortSteps() {
        const arr = [...customArray];
        steps = [];
        const n = arr.length;

        steps.push({
            arr: [...arr],
            compared: [0],
            sorted: [0],
            desc: `Element ${arr[0]} at index 0 is trivially sorted.`
        });

        for (let i = 1; i < n; i++) {
            let key = arr[i];
            let j = i - 1;
            steps.push({
                arr: [...arr],
                compared: [i],
                sorted: Array.from({length: i}, (_, k) => k),
                desc: `Inserting key ${key} at index ${i} into the sorted prefix.`
            });

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                steps.push({
                    arr: [...arr],
                    compared: [j, j + 1],
                    sorted: [],
                    desc: `Shifted ${arr[j + 1]} right to index ${j + 1}.`
                });
                j--;
            }
            arr[j + 1] = key;
            steps.push({
                arr: [...arr],
                compared: [j + 1],
                sorted: Array.from({length: i + 1}, (_, k) => k),
                desc: `Placed key ${key} at position ${j + 1}.`
            });
        }

        steps.push({
            arr: [...arr],
            compared: [],
            sorted: Array.from({length: n}, (_, k) => k),
            desc: "Insertion sort complete!"
        });
    }

    // --------------------------------------------------------
    // SEARCHING STEP GENERATORS
    // --------------------------------------------------------
    function generateBinarySearchSteps() {
        const sorted = [...customArray].sort((a, b) => a - b);
        steps = [];
        const target = sorted[Math.floor(sorted.length / 2) + 1] || sorted[0];

        let low = 0;
        let high = sorted.length - 1;
        let found = false;

        steps.push({
            arr: sorted,
            low, high, mid: -1,
            desc: `Searching for target ${target} in sorted array.`
        });

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            steps.push({
                arr: sorted,
                low, high, mid,
                desc: `Search range [${low}..${high}]. Checking middle index ${mid} (value = ${sorted[mid]}).`
            });

            if (sorted[mid] === target) {
                steps.push({
                    arr: sorted,
                    low, high, mid,
                    found: true,
                    desc: `🎉 Target ${target} found at index ${mid}!`
                });
                found = true;
                break;
            } else if (sorted[mid] < target) {
                steps.push({
                    arr: sorted,
                    low, high, mid,
                    desc: `${sorted[mid]} < ${target}. Discarding left half, setting low = ${mid + 1}.`
                });
                low = mid + 1;
            } else {
                steps.push({
                    arr: sorted,
                    low, high, mid,
                    desc: `${sorted[mid]} > ${target}. Discarding right half, setting high = ${mid - 1}.`
                });
                high = mid - 1;
            }
        }
    }

    function generateLinearSearchSteps() {
        const arr = [...customArray];
        steps = [];
        const target = arr[arr.length - 2] || arr[0];

        for (let i = 0; i < arr.length; i++) {
            const match = arr[i] === target;
            steps.push({
                arr,
                currentIndex: i,
                target,
                found: match,
                desc: `Examining index ${i}: Value ${arr[i]} ${match ? 'matches target! 🎉' : 'does not match target.'}`
            });
            if (match) break;
        }
    }

    // --------------------------------------------------------
    // DATA STRUCTURE VISUALIZERS (Stack, Queue, LL, BST)
    // --------------------------------------------------------
    function renderStack() {
        const canvas = document.getElementById('viz-canvas');
        if (!canvas) return;

        canvas.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; gap:1rem;">
                <div style="font-weight:700; color:var(--text-secondary)">TOP OF STACK (LIFO)</div>
                <div class="stack-container" id="stack-box">
                    ${customStack.map(val => `<div class="stack-element">${val}</div>`).join('')}
                </div>
                <div style="font-size:0.85rem; color:var(--text-muted)">Bottom of Stack</div>
            </div>
        `;
        document.getElementById('viz-explanation').innerHTML = `Stack contains ${customStack.length} items. Elements enter and leave strictly from the <strong>Top</strong> (Last-In, First-Out).`;
    }

    function stackPush() {
        const val = parseInt(document.getElementById('ds-input').value) || Math.floor(Math.random() * 90 + 10);
        if (customStack.length >= 7) {
            Components.toast('Stack Overflow simulation limit reached!', 'warning');
            return;
        }
        customStack.push(val);
        renderStack();
        Components.toast(`Pushed ${val} onto stack`, 'success');
    }

    function stackPop() {
        if (customStack.length === 0) {
            Components.toast('Stack Underflow! No items to pop.', 'error');
            return;
        }
        const popped = customStack.pop();
        renderStack();
        Components.toast(`Popped ${popped} from stack`, 'info');
    }

    function renderQueue() {
        const canvas = document.getElementById('viz-canvas');
        if (!canvas) return;

        canvas.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; gap:1rem;">
                <div style="display:flex; justify-content:space-between; width:100%; max-width:400px; font-weight:700; font-size:0.85rem;">
                    <span style="color:var(--color-accent-rose)">← DEQUEUE (Front)</span>
                    <span style="color:var(--color-accent-emerald)">ENQUEUE (Rear) ←</span>
                </div>
                <div class="queue-container">
                    ${customQueue.map(val => `<div class="queue-element">${val}</div>`).join('')}
                </div>
            </div>
        `;
        document.getElementById('viz-explanation').innerHTML = `Queue contains ${customQueue.length} elements. Items are processed First-In, First-Out (FIFO).`;
    }

    function queueEnqueue() {
        const val = parseInt(document.getElementById('ds-input').value) || Math.floor(Math.random() * 900 + 100);
        if (customQueue.length >= 6) {
            Components.toast('Queue limit reached!', 'warning');
            return;
        }
        customQueue.push(val);
        renderQueue();
        Components.toast(`Enqueued ${val} at rear`, 'success');
    }

    function queueDequeue() {
        if (customQueue.length === 0) {
            Components.toast('Queue is empty!', 'error');
            return;
        }
        const val = customQueue.shift();
        renderQueue();
        Components.toast(`Dequeued ${val} from front`, 'info');
    }

    function renderLinkedList() {
        const canvas = document.getElementById('viz-canvas');
        if (!canvas) return;

        let html = '<div class="linked-list-container">';
        customLinkedList.forEach((val, idx) => {
            html += `
                <div class="ll-node">
                    <div class="ll-val">${val}</div>
                    <div class="ll-next">next</div>
                </div>
                ${idx < customLinkedList.length - 1 ? '<div class="ll-arrow">➔</div>' : '<div class="ll-arrow">➔ <span style="font-size:0.9rem; color:var(--text-muted)">None</span></div>'}
            `;
        });
        html += '</div>';
        canvas.innerHTML = html;
        document.getElementById('viz-explanation').innerHTML = `Singly Linked List with ${customLinkedList.length} nodes connected sequentially via pointers.`;
    }

    function llInsertHead() {
        const val = parseInt(document.getElementById('ds-input').value) || 99;
        customLinkedList.unshift(val);
        renderLinkedList();
        Components.toast(`Inserted ${val} at head (O(1))`, 'success');
    }

    function llAppend() {
        const val = parseInt(document.getElementById('ds-input').value) || 99;
        customLinkedList.push(val);
        renderLinkedList();
        Components.toast(`Appended ${val} at tail`, 'success');
    }

    function llDeleteHead() {
        if (customLinkedList.length === 0) return;
        const val = customLinkedList.shift();
        renderLinkedList();
        Components.toast(`Deleted head node (${val})`, 'info');
    }

    // --------------------------------------------------------
    // BST, GRAPH, DP, CALL STACK
    // --------------------------------------------------------
    function generateBSTSteps() {
        const canvas = document.getElementById('viz-canvas');
        if (!canvas) return;

        canvas.innerHTML = `
            <div style="text-align:center;">
                <svg width="450" height="260" viewBox="0 0 450 260">
                    <!-- Tree Edges -->
                    <line x1="225" y1="40" x2="135" y2="110" stroke="var(--border-color)" stroke-width="3"/>
                    <line x1="225" y1="40" x2="315" y2="110" stroke="var(--border-color)" stroke-width="3"/>
                    <line x1="135" y1="110" x2="80" y2="180" stroke="var(--border-color)" stroke-width="3"/>
                    <line x1="135" y1="110" x2="180" y2="180" stroke="var(--border-color)" stroke-width="3"/>
                    <line x1="315" y1="110" x2="270" y2="180" stroke="var(--border-color)" stroke-width="3"/>
                    <line x1="315" y1="110" x2="370" y2="180" stroke="var(--border-color)" stroke-width="3"/>

                    <!-- Nodes -->
                    <circle cx="225" cy="40" r="22" fill="var(--color-primary)"/>
                    <text x="225" y="46" text-anchor="middle" fill="white" font-weight="bold">50</text>

                    <circle cx="135" cy="110" r="20" fill="var(--color-primary)"/>
                    <text x="135" y="115" text-anchor="middle" fill="white" font-weight="bold">30</text>

                    <circle cx="315" cy="110" r="20" fill="var(--color-primary)"/>
                    <text x="315" y="115" text-anchor="middle" fill="white" font-weight="bold">70</text>

                    <circle cx="80" cy="180" r="18" fill="var(--color-accent-purple)"/>
                    <text x="80" y="185" text-anchor="middle" fill="white" font-weight="bold">20</text>

                    <circle cx="180" cy="180" r="18" fill="var(--color-accent-purple)"/>
                    <text x="180" y="185" text-anchor="middle" fill="white" font-weight="bold">40</text>

                    <circle cx="270" cy="180" r="18" fill="var(--color-accent-purple)"/>
                    <text x="270" y="185" text-anchor="middle" fill="white" font-weight="bold">60</text>

                    <circle cx="370" cy="180" r="18" fill="var(--color-accent-purple)"/>
                    <text x="370" y="185" text-anchor="middle" fill="white" font-weight="bold">80</text>
                </svg>
                <div style="margin-top:1rem; font-weight:600;">Inorder Traversal: 20 → 30 → 40 → 50 → 60 → 70 → 80 (Ascending Order)</div>
            </div>
        `;
        document.getElementById('viz-explanation').innerHTML = "Binary Search Tree invariant: for every node, all left subtree descendants < root < all right subtree descendants.";
    }

    function generateGraphBFSSteps() {
        const canvas = document.getElementById('viz-canvas');
        if (!canvas) return;

        canvas.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; gap:1rem;">
                <svg width="400" height="220" viewBox="0 0 400 220">
                    <line x1="200" y1="35" x2="100" y2="105" stroke="var(--border-color)" stroke-width="2"/>
                    <line x1="200" y1="35" x2="300" y2="105" stroke="var(--border-color)" stroke-width="2"/>
                    <line x1="100" y1="105" x2="60" y2="185" stroke="var(--border-color)" stroke-width="2"/>
                    <line x1="100" y1="105" x2="140" y2="185" stroke="var(--border-color)" stroke-width="2"/>
                    <line x1="300" y1="105" x2="260" y2="185" stroke="var(--border-color)" stroke-width="2"/>
                    <line x1="300" y1="105" x2="340" y2="185" stroke="var(--border-color)" stroke-width="2"/>

                    <circle cx="200" cy="35" r="22" fill="#10b981"/>
                    <text x="200" y="42" fill="white" font-weight="bold" text-anchor="middle">0</text>

                    <circle cx="100" cy="105" r="20" fill="#2563eb"/>
                    <text x="100" y="111" fill="white" font-weight="bold" text-anchor="middle">1</text>

                    <circle cx="300" cy="105" r="20" fill="#2563eb"/>
                    <text x="300" y="111" fill="white" font-weight="bold" text-anchor="middle">2</text>

                    <circle cx="60" cy="185" r="18" fill="#8b5cf6"/>
                    <text x="60" y="190" fill="white" font-weight="bold" text-anchor="middle">3</text>

                    <circle cx="140" cy="185" r="18" fill="#8b5cf6"/>
                    <text x="140" y="190" fill="white" font-weight="bold" text-anchor="middle">4</text>

                    <circle cx="260" cy="185" r="18" fill="#8b5cf6"/>
                    <text x="260" y="190" fill="white" font-weight="bold" text-anchor="middle">5</text>

                    <circle cx="340" cy="185" r="18" fill="#8b5cf6"/>
                    <text x="340" y="190" fill="white" font-weight="bold" text-anchor="middle">6</text>
                </svg>
                <div class="badge badge-success">Breadth-First Search Visit Order: 0 ➔ 1 ➔ 2 ➔ 3 ➔ 4 ➔ 5 ➔ 6</div>
            </div>
        `;
        document.getElementById('viz-explanation').innerHTML = "BFS uses a Queue (FIFO) to explore nodes level-by-level, computing shortest paths in unweighted graphs.";
    }

    function generateGraphDFSSteps() {
        const canvas = document.getElementById('viz-canvas');
        if (!canvas) return;

        canvas.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; gap:1rem;">
                <div class="badge badge-info">Depth-First Search Visit Order: 0 ➔ 1 ➔ 3 ➔ 4 ➔ 2 ➔ 5 ➔ 6</div>
                <div style="font-size:0.9rem; color:var(--text-secondary)">Explores as deep as possible along each branch before backtracking.</div>
            </div>
        `;
        document.getElementById('viz-explanation').innerHTML = "DFS uses recursion or an explicit Stack (LIFO) to traverse graph components and detect cycles.";
    }

    function generateDPSteps() {
        const canvas = document.getElementById('viz-canvas');
        if (!canvas) return;

        const n = 6;
        const dp = [0, 1];
        for (let i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];

        canvas.innerHTML = `
            <div style="width:100%; max-width:600px;">
                <h3 style="margin-bottom:0.8rem;">Bottom-Up DP Table: Fibonacci F(n) = F(n-1) + F(n-2)</h3>
                <table class="table" style="text-align:center;">
                    <thead>
                        <tr>${dp.map((_, i) => `<th>n = ${i}</th>`).join('')}</tr>
                    </thead>
                    <tbody>
                        <tr>
                            ${dp.map((val, i) => `<td style="font-weight:bold; color:var(--color-primary);">${val}</td>`).join('')}
                        </tr>
                    </tbody>
                </table>
                <p style="margin-top:1rem; font-size:0.9rem; color:var(--text-secondary)">
                    Eliminates redundant O(2ⁿ) recalculations by caching subproblem results in O(n) time.
                </p>
            </div>
        `;
        document.getElementById('viz-explanation').innerHTML = "Tabulation builds solutions from the base cases up, avoiding call stack recursion limits.";
    }

    function generateCallStackSteps() {
        const canvas = document.getElementById('viz-canvas');
        if (!canvas) return;

        canvas.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem; width:260px;">
                <div style="font-weight:bold; color:var(--color-accent-amber); margin-bottom:0.5rem;">CALL STACK (factorial(4))</div>
                <div class="stack-element" style="background:#ef4444; width:100%;">factorial(1) -> returns 1</div>
                <div class="stack-element" style="background:#f59e0b; width:100%;">factorial(2) = 2 * factorial(1)</div>
                <div class="stack-element" style="background:#3b82f6; width:100%;">factorial(3) = 3 * factorial(2)</div>
                <div class="stack-element" style="background:#8b5cf6; width:100%;">factorial(4) = 4 * factorial(3)</div>
            </div>
        `;
        document.getElementById('viz-explanation').innerHTML = "Each recursive call pushes a stack frame onto memory. The base condition triggers unwinding.";
    }

    // --------------------------------------------------------
    // RENDER STEP (ANIMATION PLAYER)
    // --------------------------------------------------------
    function renderStep(idx) {
        if (!steps || steps.length === 0 || idx < 0 || idx >= steps.length) return;
        currentStepIndex = idx;
        const step = steps[idx];

        // Update step indicator
        const indicator = document.getElementById('step-indicator');
        if (indicator) indicator.textContent = `Step ${idx + 1} / ${steps.length}`;

        // Update explanation
        const exp = document.getElementById('viz-explanation');
        if (exp && step.desc) exp.innerHTML = step.desc;

        // Render bar chart if sorting/searching with arrays
        const canvas = document.getElementById('viz-canvas');
        if (!canvas || !step.arr) return;

        const maxVal = Math.max(...step.arr, 10);
        let html = '<div class="array-container">';

        step.arr.forEach((val, i) => {
            const height = Math.max(30, Math.floor((val / maxVal) * 200));
            let classes = 'array-bar';

            if (step.sorted && step.sorted.includes(i)) classes += ' sorted';
            else if (step.compared && step.compared.includes(i)) classes += ' compared';
            else if (step.mid === i) classes += ' active';
            else if (step.currentIndex === i) classes += ' active';

            html += `
                <div class="array-bar-wrapper">
                    <div class="${classes}" style="height:${height}px;">${val}</div>
                    <span class="array-index">${i}</span>
                </div>
            `;
        });

        html += '</div>';
        canvas.innerHTML = html;
    }

    function stepNext() {
        if (currentStepIndex < steps.length - 1) {
            renderStep(currentStepIndex + 1);
        } else {
            stopPlay();
        }
    }

    function stepPrev() {
        if (currentStepIndex > 0) {
            renderStep(currentStepIndex - 1);
        }
    }

    function togglePlay() {
        if (isPlaying) {
            stopPlay();
        } else {
            startPlay();
        }
    }

    function startPlay() {
        isPlaying = true;
        const btn = document.getElementById('viz-play-btn');
        if (btn) btn.innerHTML = '⏸ Pause';

        playInterval = setInterval(() => {
            if (currentStepIndex < steps.length - 1) {
                renderStep(currentStepIndex + 1);
            } else {
                stopPlay();
            }
        }, playSpeed);
    }

    function stopPlay() {
        isPlaying = false;
        clearInterval(playInterval);
        playInterval = null;
        const btn = document.getElementById('viz-play-btn');
        if (btn) btn.innerHTML = '▶ Play';
    }

    function reset() {
        stopPlay();
        switchMode(currentMode);
    }

    function randomize() {
        customArray = Array.from({length: 8}, () => Math.floor(Math.random() * 85 + 10));
        reset();
    }

    function setSpeed(ms) {
        playSpeed = 1350 - parseInt(ms);
        if (isPlaying) {
            stopPlay();
            startPlay();
        }
    }

    return {
        render, switchMode, stepNext, stepPrev, togglePlay, reset, randomize, setSpeed,
        stackPush, stackPop, queueEnqueue, queueDequeue, llInsertHead, llAppend, llDeleteHead
    };
})();
