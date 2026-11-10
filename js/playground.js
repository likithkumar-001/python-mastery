// ============================================
// Code Playground - Python execution with Pyodide
// ============================================
window.Playground = (() => {
    let pyodideReady = false;
    let pyodideLoading = false;
    let pyodide = null;
    let editor = null;
    let currentTopicId = null;

    function render(initialCode) {
        const content = document.getElementById('page-content');
        const savedCode = initialCode || '';

        content.innerHTML = `
            <div class="playground-page">
                <div class="playground-header">
                    <h1>💻 Python Code Playground</h1>
                    <p>Write, run, and test Python code directly in your browser</p>
                </div>
                <div class="playground-container">
                    <div class="playground-editor-section">
                        <div class="playground-toolbar">
                            <div class="toolbar-left">
                                <span class="toolbar-title">📝 Editor</span>
                                <select id="code-template" onchange="Playground.loadTemplate(this.value)">
                                    <option value="">-- Templates --</option>
                                    <option value="hello">Hello World</option>
                                    <option value="variables">Variables & Types</option>
                                    <option value="conditionals">If-Else</option>
                                    <option value="loops">Loops</option>
                                    <option value="functions">Functions</option>
                                    <option value="lists">Lists</option>
                                    <option value="dict">Dictionaries</option>
                                    <option value="classes">Classes</option>
                                    <option value="sorting">Sorting</option>
                                    <option value="bst">Binary Search Tree</option>
                                    <option value="linkedlist">Linked List</option>
                                    <option value="graph">Graph BFS/DFS</option>
                                </select>
                            </div>
                            <div class="toolbar-right">
                                <button class="btn btn-success btn-sm" onclick="Playground.run()" id="run-btn">
                                    ▶ Run
                                </button>
                                <button class="btn btn-secondary btn-sm" onclick="Playground.clear()">
                                    🗑 Clear
                                </button>
                                <button class="btn btn-secondary btn-sm" onclick="Playground.reset()">
                                    ↺ Reset
                                </button>
                                <button class="btn btn-secondary btn-sm" onclick="Playground.copyCode()">
                                    📋 Copy
                                </button>
                            </div>
                        </div>
                        <div class="editor-wrapper">
                            <div class="line-numbers" id="line-numbers"></div>
                            <textarea id="code-editor"
                                      class="code-editor"
                                      spellcheck="false"
                                      placeholder="# Write your Python code here...&#10;&#10;print('Hello, Python Mastery!')"
                            >${savedCode}</textarea>
                        </div>
                    </div>
                    <div class="playground-output-section">
                        <div class="playground-toolbar">
                            <div class="toolbar-left">
                                <span class="toolbar-title">📤 Output</span>
                                <span id="execution-status" class="execution-status"></span>
                            </div>
                            <div class="toolbar-right">
                                <button class="btn btn-secondary btn-sm" onclick="Playground.clearOutput()">
                                    Clear Output
                                </button>
                            </div>
                        </div>
                        <div id="output-panel" class="output-display">
                            <div class="output-placeholder">
                                <p>🐍 Click <strong>Run</strong> to execute your code</p>
                                <p class="text-muted">Output will appear here</p>
                            </div>
                        </div>
                        <div id="input-panel" class="input-panel hidden">
                            <label>Input required:</label>
                            <input type="text" id="user-input" placeholder="Enter input value...">
                            <button class="btn btn-primary btn-sm" onclick="Playground.submitInput()">Submit</button>
                        </div>
                    </div>
                </div>
                <div class="playground-footer">
                    <div class="pyodide-status" id="pyodide-status">
                        ${pyodideReady ? '✅ Python engine ready' : '⏳ Python engine will load when you click Run'}
                    </div>
                    <div class="playground-info">
                        <span>Powered by Pyodide (Python in the browser)</span>
                        <span>•</span>
                        <span>Safe execution environment</span>
                    </div>
                </div>
            </div>
        `;

        // Set up editor
        const editorEl = document.getElementById('code-editor');
        if (editorEl) {
            editorEl.addEventListener('input', updateLineNumbers);
            editorEl.addEventListener('scroll', syncScroll);
            editorEl.addEventListener('keydown', handleEditorKeys);
            updateLineNumbers();
        }
    }

    function updateLineNumbers() {
        const editorEl = document.getElementById('code-editor');
        const lineNums = document.getElementById('line-numbers');
        if (!editorEl || !lineNums) return;

        const lines = editorEl.value.split('\n').length;
        let html = '';
        for (let i = 1; i <= lines; i++) {
            html += `<div>${i}</div>`;
        }
        lineNums.innerHTML = html;
    }

    function syncScroll() {
        const editorEl = document.getElementById('code-editor');
        const lineNums = document.getElementById('line-numbers');
        if (editorEl && lineNums) {
            lineNums.scrollTop = editorEl.scrollTop;
        }
    }

    function handleEditorKeys(e) {
        const editor = e.target;
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
            editor.selectionStart = editor.selectionEnd = start + 4;
            updateLineNumbers();
        }
        // Ctrl+Enter to run
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            run();
        }
    }

    async function loadPyodide() {
        if (pyodideReady) return true;
        if (pyodideLoading) return false;

        pyodideLoading = true;
        const statusEl = document.getElementById('pyodide-status');
        if (statusEl) statusEl.innerHTML = '⏳ Loading Python engine...';

        try {
            // Load Pyodide from CDN
            if (!window.loadPyodide) {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
                document.head.appendChild(script);
                await new Promise((resolve, reject) => {
                    script.onload = resolve;
                    script.onerror = reject;
                });
            }

            pyodide = await window.loadPyodide({
                indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
            });

            pyodideReady = true;
            pyodideLoading = false;
            if (statusEl) statusEl.innerHTML = '✅ Python engine ready';
            return true;
        } catch (err) {
            pyodideLoading = false;
            if (statusEl) statusEl.innerHTML = '❌ Failed to load Python engine. Check internet connection.';
            console.error('Pyodide load error:', err);
            return false;
        }
    }

    async function run() {
        const editorEl = document.getElementById('code-editor');
        const outputEl = document.getElementById('output-panel');
        const runBtn = document.getElementById('run-btn');
        const statusEl = document.getElementById('execution-status');

        if (!editorEl || !outputEl) return;

        const code = editorEl.value.trim();
        if (!code) {
            outputEl.innerHTML = '<div class="output-empty">No code to run.</div>';
            return;
        }

        // Show loading
        if (runBtn) runBtn.disabled = true;
        if (statusEl) statusEl.textContent = 'Running...';
        outputEl.innerHTML = '<div class="output-loading">⏳ Running code...</div>';

        // Try to load Pyodide
        const loaded = await loadPyodide();

        if (!loaded) {
            // Fallback: simulate basic output
            outputEl.innerHTML = `
                <div class="error-panel">
                    <p>⚠️ Python engine could not be loaded (requires internet connection).</p>
                    <p>Using basic simulation mode. For full Python support, ensure internet access.</p>
                </div>
            `;
            simulateRun(code, outputEl);
            if (runBtn) runBtn.disabled = false;
            if (statusEl) statusEl.textContent = '';
            return;
        }

        try {
            // Redirect stdout/stderr
            pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
            `);

            // Handle input() calls by replacing with predetermined inputs
            const modifiedCode = code.replace(/input\s*\(\s*(['"].*?['"]\s*)?\)/g, (match, prompt) => {
                return `input(${prompt || '""'})`;
            });

            // Set up input handling
            pyodide.runPython(`
import builtins
_input_queue = []
_input_index = 0
_original_input = builtins.input
def _custom_input(prompt=""):
    global _input_index
    sys.stdout.write(str(prompt))
    if _input_index < len(_input_queue):
        val = _input_queue[_input_index]
        _input_index += 1
        sys.stdout.write(str(val) + "\\n")
        return val
    return ""
builtins.input = _custom_input
            `);

            // Run user code
            pyodide.runPython(code);

            // Get output
            const stdout = pyodide.runPython('sys.stdout.getvalue()');
            const stderr = pyodide.runPython('sys.stderr.getvalue()');

            let outputHtml = '';
            if (stdout) {
                outputHtml += `<pre class="output-text">${Components.escapeHtml(stdout)}</pre>`;
            }
            if (stderr) {
                outputHtml += `<div class="error-panel"><pre>${Components.escapeHtml(stderr)}</pre></div>`;
            }
            if (!stdout && !stderr) {
                outputHtml = '<div class="output-empty">Code executed successfully (no output)</div>';
            }

            outputEl.innerHTML = outputHtml;
            if (statusEl) statusEl.innerHTML = '<span class="status-success">✓ Done</span>';

        } catch (err) {
            const errMsg = err.message || String(err);
            outputEl.innerHTML = `
                <div class="error-panel">
                    <div class="error-header">❌ Error</div>
                    <pre class="error-text">${Components.escapeHtml(errMsg)}</pre>
                </div>
            `;
            if (statusEl) statusEl.innerHTML = '<span class="status-error">✗ Error</span>';
        }

        if (runBtn) runBtn.disabled = false;

        // Save code if tied to a topic
        if (currentTopicId) {
            ProgressManager.saveCode(currentTopicId, editorEl.value);
        }
    }

    function simulateRun(code, outputEl) {
        // Very basic print() extraction for offline mode
        const printRegex = /print\s*\((.*)\)/g;
        let outputs = [];
        let match;
        while ((match = printRegex.exec(code)) !== null) {
            let arg = match[1].trim();
            // Remove quotes for simple strings
            if ((arg.startsWith("'") && arg.endsWith("'")) || (arg.startsWith('"') && arg.endsWith('"'))) {
                outputs.push(arg.slice(1, -1));
            } else if (arg.startsWith("f'") || arg.startsWith('f"')) {
                outputs.push(arg.slice(2, -1) + ' (f-string - values not evaluated)');
            } else {
                outputs.push(`${arg} (expression - not evaluated)`);
            }
        }

        if (outputs.length > 0) {
            outputEl.innerHTML += `<pre class="output-text">${outputs.map(o => Components.escapeHtml(o)).join('\n')}</pre>`;
        }
    }

    function clear() {
        const editorEl = document.getElementById('code-editor');
        if (editorEl) {
            editorEl.value = '';
            updateLineNumbers();
        }
    }

    function reset() {
        clear();
        clearOutput();
    }

    function clearOutput() {
        const outputEl = document.getElementById('output-panel');
        if (outputEl) {
            outputEl.innerHTML = '<div class="output-placeholder"><p>🐍 Click <strong>Run</strong> to execute your code</p></div>';
        }
        const statusEl = document.getElementById('execution-status');
        if (statusEl) statusEl.textContent = '';
    }

    function copyCode() {
        const editorEl = document.getElementById('code-editor');
        if (editorEl) {
            navigator.clipboard.writeText(editorEl.value).then(() => {
                Components.toast('Code copied!', 'success');
            });
        }
    }

    function openWith(encodedCode) {
        const code = decodeURIComponent(encodedCode);
        App.navigate('playground');
        setTimeout(() => {
            const editorEl = document.getElementById('code-editor');
            if (editorEl) {
                editorEl.value = code;
                updateLineNumbers();
            }
        }, 100);
    }

    function loadTemplate(templateName) {
        const templates = {
            hello: `# Hello World
print("Hello, Python Mastery!")
print("Welcome to your coding journey!")

name = "Student"
print(f"Hello, {name}! Let's learn Python!")`,

            variables: `# Variables and Data Types
name = "Alice"          # str
age = 25                # int
height = 5.6            # float
is_student = True       # bool

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}")
print(f"Student: {is_student}")

# Check types
print(f"\\nType of name: {type(name)}")
print(f"Type of age: {type(age)}")
print(f"Type of height: {type(height)}")
print(f"Type of is_student: {type(is_student)}")`,

            conditionals: `# Conditional Statements
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Score: {score}")
print(f"Grade: {grade}")

# Ternary operator
result = "Pass" if score >= 60 else "Fail"
print(f"Result: {result}")`,

            loops: `# Loops
# For loop with range
print("Counting 1 to 5:")
for i in range(1, 6):
    print(i, end=" ")
print()

# While loop
print("\\nCountdown:")
n = 5
while n > 0:
    print(n, end=" ")
    n -= 1
print("Go!")

# Iterating through a list
fruits = ["apple", "banana", "cherry"]
print("\\nFruits:")
for fruit in fruits:
    print(f"  - {fruit}")

# Enumerate
print("\\nWith index:")
for i, fruit in enumerate(fruits):
    print(f"  {i}: {fruit}")`,

            functions: `# Functions
def greet(name, greeting="Hello"):
    """Greet a person with a custom greeting."""
    return f"{greeting}, {name}!"

print(greet("Alice"))
print(greet("Bob", "Hi"))

# Function with *args and **kwargs
def summarize(*args, **kwargs):
    print(f"Positional args: {args}")
    print(f"Keyword args: {kwargs}")

summarize(1, 2, 3, name="Alice", age=25)

# Lambda function
square = lambda x: x ** 2
numbers = [1, 2, 3, 4, 5]
squared = list(map(square, numbers))
print(f"\\nSquared: {squared}")

# Recursive function
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(f"\\n5! = {factorial(5)}")`,

            lists: `# Lists
numbers = [64, 34, 25, 12, 22, 11, 90]
print(f"Original: {numbers}")

# List operations
numbers.append(50)
print(f"After append(50): {numbers}")

numbers.sort()
print(f"Sorted: {numbers}")

numbers.reverse()
print(f"Reversed: {numbers}")

# List comprehension
evens = [x for x in numbers if x % 2 == 0]
print(f"Even numbers: {evens}")

squares = [x**2 for x in range(1, 6)]
print(f"Squares: {squares}")

# Slicing
print(f"First 3: {numbers[:3]}")
print(f"Last 3: {numbers[-3:]}")`,

            dict: `# Dictionaries
student = {
    "name": "Alice",
    "age": 20,
    "grades": {"math": 95, "science": 88, "english": 92}
}

print(f"Name: {student['name']}")
print(f"Age: {student.get('age')}")

# Iterate
print("\\nGrades:")
for subject, grade in student["grades"].items():
    print(f"  {subject}: {grade}")

# Dictionary comprehension
numbers = [1, 2, 3, 4, 5]
squares = {n: n**2 for n in numbers}
print(f"\\nSquares: {squares}")

# Word frequency counter
text = "hello world hello python world hello"
freq = {}
for word in text.split():
    freq[word] = freq.get(word, 0) + 1
print(f"\\nWord frequency: {freq}")`,

            classes: `# Object-Oriented Programming
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def speak(self):
        return f"{self.name} makes a sound"

    def __str__(self):
        return f"{self.name} ({self.species})"

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Dog")
        self.breed = breed

    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

# Create objects
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", "Cat")

print(dog)
print(dog.speak())
print(cat)
print(cat.speak())

# Polymorphism
animals = [dog, cat]
for animal in animals:
    print(animal.speak())`,

            sorting: `# Sorting Algorithms

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# Test
data = [64, 34, 25, 12, 22, 11, 90]
print(f"Original:  {data}")
print(f"Bubble:    {bubble_sort(data.copy())}")
print(f"Selection: {selection_sort(data.copy())}")
print(f"Built-in:  {sorted(data)}")`,

            bst: `# Binary Search Tree
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, val):
        self.root = self._insert(self.root, val)

    def _insert(self, node, val):
        if not node:
            return Node(val)
        if val < node.val:
            node.left = self._insert(node.left, val)
        else:
            node.right = self._insert(node.right, val)
        return node

    def inorder(self):
        result = []
        self._inorder(self.root, result)
        return result

    def _inorder(self, node, result):
        if node:
            self._inorder(node.left, result)
            result.append(node.val)
            self._inorder(node.right, result)

    def search(self, val):
        return self._search(self.root, val)

    def _search(self, node, val):
        if not node:
            return False
        if val == node.val:
            return True
        elif val < node.val:
            return self._search(node.left, val)
        else:
            return self._search(node.right, val)

# Test
bst = BST()
for val in [50, 30, 70, 20, 40, 60, 80]:
    bst.insert(val)

print(f"Inorder: {bst.inorder()}")
print(f"Search 40: {bst.search(40)}")
print(f"Search 45: {bst.search(45)}")`,

            linkedlist: `# Linked List Implementation
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def delete(self, data):
        if not self.head:
            return
        if self.head.data == data:
            self.head = self.head.next
            return
        current = self.head
        while current.next and current.next.data != data:
            current = current.next
        if current.next:
            current.next = current.next.next

    def display(self):
        elements = []
        current = self.head
        while current:
            elements.append(str(current.data))
            current = current.next
        return " -> ".join(elements) + " -> None"

    def reverse(self):
        prev = None
        current = self.head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head = prev

# Test
ll = LinkedList()
for val in [1, 2, 3, 4, 5]:
    ll.append(val)
print(f"Original: {ll.display()}")

ll.prepend(0)
print(f"Prepend 0: {ll.display()}")

ll.delete(3)
print(f"Delete 3: {ll.display()}")

ll.reverse()
print(f"Reversed: {ll.display()}")`,

            graph: `# Graph with BFS and DFS
from collections import deque

class Graph:
    def __init__(self):
        self.adj = {}

    def add_edge(self, u, v):
        if u not in self.adj:
            self.adj[u] = []
        if v not in self.adj:
            self.adj[v] = []
        self.adj[u].append(v)
        self.adj[v].append(u)

    def bfs(self, start):
        visited = set()
        queue = deque([start])
        visited.add(start)
        result = []
        while queue:
            node = queue.popleft()
            result.append(node)
            for neighbor in sorted(self.adj.get(node, [])):
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        return result

    def dfs(self, start):
        visited = set()
        result = []
        self._dfs(start, visited, result)
        return result

    def _dfs(self, node, visited, result):
        visited.add(node)
        result.append(node)
        for neighbor in sorted(self.adj.get(node, [])):
            if neighbor not in visited:
                self._dfs(neighbor, visited, result)

# Test
g = Graph()
edges = [(0,1), (0,2), (1,3), (1,4), (2,5), (2,6)]
for u, v in edges:
    g.add_edge(u, v)

print(f"BFS from 0: {g.bfs(0)}")
print(f"DFS from 0: {g.dfs(0)}")`
        };

        const code = templates[templateName];
        if (code) {
            const editorEl = document.getElementById('code-editor');
            if (editorEl) {
                editorEl.value = code;
                updateLineNumbers();
            }
        }
    }

    function submitInput() {
        // Handle user input for running code
        const inputEl = document.getElementById('user-input');
        if (inputEl && inputEl.value) {
            // This would feed into pyodide's input
            inputEl.value = '';
        }
    }

    return { render, run, clear, reset, clearOutput, copyCode, openWith, loadTemplate, submitInput };
})();
