// ============================================================
// PROJECTS DATA
// 15 Comprehensive Python & DSA Projects
// Beginner (5), Intermediate (5), Advanced (5)
// ============================================================

window.ProjectsData = [
    // --------------------------------------------------------
    // BEGINNER PROJECTS
    // --------------------------------------------------------
    {
        id: 'proj-1',
        title: 'Console Calculator',
        tier: 'Beginner',
        category: 'beginner',
        description: 'Build a menu-driven arithmetic calculator that handles operations (+, -, *, /, %, **) with robust error handling for division by zero and invalid inputs.',
        skills: ['Functions', 'Conditionals', 'Loops', 'Exception Handling', 'input()'],
        starterCode: `# PROJECT: Console Calculator\n# Implement basic arithmetic operations with input validation\n\ndef add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\ndef multiply(a, b):\n    return a * b\n\ndef divide(a, b):\n    # TODO: Handle division by zero\n    pass\n\ndef run_calculator():\n    # TODO: Implement interactive loop\n    print("--- Console Calculator ---")\n\nif __name__ == '__main__':\n    run_calculator()`,
        solutionCode: `def calculator():\n    print("=== Python Console Calculator ===")\n    operations = {\n        '+': lambda a, b: a + b,\n        '-': lambda a, b: a - b,\n        '*': lambda a, b: a * b,\n        '/': lambda a, b: a / b if b != 0 else 'Error: Division by zero',\n        '%': lambda a, b: a % b if b != 0 else 'Error: Modulo by zero',\n        '**': lambda a, b: a ** b\n    }\n    \n    # Demo calculation\n    a, op, b = 25, '*', 4\n    result = operations[op](a, b)\n    print(f"{a} {op} {b} = {result}")\n    \n    a, op, b = 10, '/', 0\n    result = operations[op](a, b)\n    print(f"{a} {op} {b} = {result}")\n\ncalculator()`,
        requirements: [
            'Support addition, subtraction, multiplication, division, modulo, and exponents',
            'Gracefully handle division by zero with informative error message',
            'Keep running until user types "exit" or "quit"'
        ]
    },
    {
        id: 'proj-2',
        title: 'Number Guessing Game',
        tier: 'Beginner',
        category: 'beginner',
        description: 'An interactive game where the computer picks a random secret number (1-100) and gives "Too High" or "Too Low" hints while tracking attempts.',
        skills: ['random module', 'while loops', 'Conditionals', 'User state tracking'],
        starterCode: `import random\n\ndef guessing_game():\n    secret = random.randint(1, 100)\n    attempts = 0\n    # TODO: Implement guessing logic\n    pass\n\nguessing_game()`,
        solutionCode: `import random\n\ndef guessing_game():\n    secret = random.randint(1, 50)\n    print(f"I have picked a secret number between 1 and 50.")\n    guesses = [25, 37, 42, secret] # Simulated inputs\n    \n    for guess in guesses:\n        print(f"Guess: {guess}")\n        if guess == secret:\n            print(f"🎉 Correct! The number was {secret}.")\n            break\n        elif guess < secret:\n            print("⬆️ Too Low!")\n        else:\n            print("⬇️ Too High!")\n\nguessing_game()`,
        requirements: [
            'Generate random integer between 1 and 100',
            'Count total attempts and display score',
            'Provide immediate "Too high" or "Too low" feedback'
        ]
    },
    {
        id: 'proj-3',
        title: 'Student Marks Manager',
        tier: 'Beginner',
        category: 'beginner',
        description: 'Store student names, test marks, compute class averages, find top performers, and generate letter grades.',
        skills: ['Dictionaries', 'Lists', 'Functions', 'Formatting'],
        starterCode: `class StudentManager:\n    def __init__(self):\n        self.students = {} # {name: [marks]}\n    \n    def add_mark(self, name, mark):\n        pass\n\n    def get_report(self):\n        pass`,
        solutionCode: `class StudentManager:\n    def __init__(self):\n        self.students = {}\n\n    def add_mark(self, name, mark):\n        if name not in self.students:\n            self.students[name] = []\n        self.students[name].append(mark)\n\n    def get_average(self, name):\n        marks = self.students.get(name, [])\n        return sum(marks) / len(marks) if marks else 0\n\n    def print_leaderboard(self):\n        print("=== Student Leaderboard ===")\n        for name in sorted(self.students, key=self.get_average, reverse=True):\n            avg = self.get_average(name)\n            grade = 'A' if avg >= 90 else 'B' if avg >= 80 else 'C'\n            print(f"{name:10} | Avg: {avg:.1f} | Grade: {grade}")\n\nsm = StudentManager()\nsm.add_mark("Rahul", 88); sm.add_mark("Rahul", 94)\nsm.add_mark("Priya", 95); sm.add_mark("Priya", 98)\nsm.add_mark("Aman", 72); sm.add_mark("Aman", 80)\nsm.print_leaderboard()`,
        requirements: [
            'Store multiple marks per student',
            'Calculate individual and class averages',
            'Assign letter grades (A, B, C, F)'
        ]
    },
    {
        id: 'proj-4',
        title: 'ATM Simulation',
        tier: 'Beginner',
        category: 'beginner',
        description: 'Simulate an Automated Teller Machine with PIN authentication, balance enquiry, deposit, and withdrawal with overdraft protection.',
        skills: ['Control Flow', 'Variables', 'Validation', 'State Management'],
        starterCode: `# ATM Simulation with PIN check, balance inquiry, deposit, withdrawal`,
        solutionCode: `class ATM:\n    def __init__(self, pin=1234, balance=1000):\n        self.pin = pin\n        self.balance = balance\n\n    def authenticate(self, entered_pin):\n        return self.pin == entered_pin\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.balance += amount\n            return f"Deposited \${amount}. New balance: \${self.balance}"\n        return "Invalid deposit amount."\n\n    def withdraw(self, amount):\n        if amount <= 0:\n            return "Invalid withdrawal amount."\n        if amount > self.balance:\n            return "Insufficient funds!"\n        self.balance -= amount\n        return f"Withdrew \${amount}. Remaining balance: \${self.balance}"\n\natm = ATM()\nprint(atm.deposit(500))\nprint(atm.withdraw(200))\nprint(atm.withdraw(2000))`,
        requirements: ['Check 4-digit PIN', 'Allow deposits and withdrawals', 'Prevent withdrawing more than current balance']
    },
    {
        id: 'proj-5',
        title: 'Quiz Application',
        tier: 'Beginner',
        category: 'beginner',
        description: 'A multiple-choice quiz engine that asks questions, checks answers, times questions, and outputs a final percentage score.',
        skills: ['List of Dictionaries', 'Loops', 'Score Calculation'],
        starterCode: `# Multiple choice quiz application`,
        solutionCode: `def run_quiz():\n    quiz = [\n        {\n            "question": "What is Python's primary design philosophy?",\n            "options": ["A. Speed", "B. Readability", "C. Verbosity", "D. Obfuscation"],\n            "answer": "B"\n        },\n        {\n            "question": "Which data structure is immutable?",\n            "options": ["A. list", "B. dict", "C. tuple", "D. set"],\n            "answer": "C"\n        }\n    ]\n    score = 0\n    for i, q in enumerate(quiz, 1):\n        print(f"Q{i}: {q['question']}")\n        for opt in q['options']: print(f"  {opt}")\n        user_ans = q['answer'] # simulated correct choice\n        if user_ans == q['answer']:\n            score += 1\n    print(f"Final Score: {score}/{len(quiz)} ({score/len(quiz)*100:.0f}%)")\n\nrun_quiz()`,
        requirements: ['Store questions with choices and answer key', 'Tally correct answers', 'Print final percentage']
    },

    // --------------------------------------------------------
    // INTERMEDIATE PROJECTS
    // --------------------------------------------------------
    {
        id: 'proj-6',
        title: 'Expense Tracker',
        tier: 'Intermediate',
        category: 'intermediate',
        description: 'Categorized personal finance tracker with budget limits, spending breakdown, and JSON export/import.',
        skills: ['JSON Serialization', 'Datetime', 'OOP', 'Data Aggregation'],
        starterCode: `# Expense tracker with categories and reporting`,
        solutionCode: `import json\nfrom datetime import date\n\nclass ExpenseTracker:\n    def __init__(self):\n        self.expenses = []\n\n    def add_expense(self, category, amount, description):\n        self.expenses.append({\n            "date": str(date.today()),\n            "category": category,\n            "amount": amount,\n            "desc": description\n        })\n\n    def category_summary(self):\n        summary = {}\n        for exp in self.expenses:\n            cat = exp['category']\n            summary[cat] = summary.get(cat, 0) + exp['amount']\n        return summary\n\nt = ExpenseTracker()\nt.add_expense("Food", 45.50, "Groceries")\nt.add_expense("Tech", 120.00, "Monitor stand")\nt.add_expense("Food", 15.00, "Lunch")\nprint("Category Spending:", t.category_summary())`,
        requirements: ['Track date, category, amount, note', 'Aggregate totals per category', 'Support JSON export']
    },
    {
        id: 'proj-7',
        title: 'Contact Management System',
        tier: 'Intermediate',
        category: 'intermediate',
        description: 'Complete CRUD (Create, Read, Update, Delete) address book with fast search by name or phone and regex email validation.',
        skills: ['Regex (re)', 'Dictionaries', 'CRUD Operations'],
        starterCode: `# Contact Manager with CRUD and Search`,
        solutionCode: `import re\n\nclass ContactManager:\n    def __init__(self):\n        self.contacts = {} # {phone: {name, email}}\n\n    def add_contact(self, name, phone, email):\n        if not re.match(r"^[^@]+@[^@]+\\.[^@]+$", email):\n            return "Invalid email format."\n        self.contacts[phone] = {"name": name, "email": email}\n        return f"Added {name} successfully."\n\n    def search(self, query):\n        return [c for c in self.contacts.values() if query.lower() in c['name'].lower()]\n\ncm = ContactManager()\nprint(cm.add_contact("Vikram Singh", "9876543210", "vikram@example.com"))\nprint("Search 'vik':", cm.search("vik"))`,
        requirements: ['Validate phone and email format', 'Search contacts with case-insensitive substring matching', 'Allow updates and deletions']
    },
    {
        id: 'proj-8',
        title: 'Library Management System',
        tier: 'Intermediate',
        category: 'intermediate',
        description: 'Manage book inventory, borrower memberships, checkouts, returns, and overdue fines computation.',
        skills: ['OOP (Classes & Inheritance)', 'Datetime calculations', 'State validation'],
        starterCode: `# Library Management System`,
        solutionCode: `class Book:\n    def __init__(self, isbn, title, author):\n        self.isbn = isbn\n        self.title = title\n        self.author = author\n        self.is_borrowed = False\n\nclass Library:\n    def __init__(self):\n        self.books = {}\n\n    def add_book(self, book):\n        self.books[book.isbn] = book\n\n    def borrow_book(self, isbn):\n        if isbn in self.books and not self.books[isbn].is_borrowed:\n            self.books[isbn].is_borrowed = True\n            return f"Checked out '{self.books[isbn].title}'."\n        return "Book unavailable."\n\nlib = Library()\nlib.add_book(Book("101", "Clean Code", "Robert Martin"))\nprint(lib.borrow_book("101"))\nprint(lib.borrow_book("101"))`,
        requirements: ['Manage book catalog with ISBN', 'Track borrowed status', 'Calculate late return fines']
    },
    {
        id: 'proj-9',
        title: 'Password Manager & Strength Evaluator',
        tier: 'Intermediate',
        category: 'intermediate',
        description: 'Generate cryptographic passwords, evaluate entropy/strength, and store credentials safely with XOR/hash obfuscation.',
        skills: ['secrets module', 'string operations', 'Hashing / Crypto basics'],
        starterCode: `# Password generator and strength meter`,
        solutionCode: `import secrets\nimport string\n\ndef generate_password(length=16):\n    chars = string.ascii_letters + string.digits + "!@#$%^&*()_+"\n    return "".join(secrets.choice(chars) for _ in range(length))\n\ndef evaluate_strength(pwd):\n    score = 0\n    if len(pwd) >= 12: score += 1\n    if any(c.isupper() for c in pwd): score += 1\n    if any(c.isdigit() for c in pwd): score += 1\n    if any(c in "!@#$%^&*()_+" for c in pwd): score += 1\n    tiers = {0: "Weak", 1: "Weak", 2: "Moderate", 3: "Strong", 4: "Very Strong"}\n    return tiers[score]\n\npwd = generate_password(16)\nprint(f"Generated Password: {pwd}")\nprint(f"Strength Evaluation: {evaluate_strength(pwd)}")`,
        requirements: ['Cryptographically secure random generation using `secrets`', 'Check length, digits, symbols, casing', 'Score password complexity']
    },
    {
        id: 'proj-10',
        title: 'Inventory Management System',
        tier: 'Intermediate',
        category: 'intermediate',
        description: 'Track retail products, stock levels, reorder thresholds, price history, and low-inventory alert notifications.',
        skills: ['OOP', 'Sorting & Filtering', 'File I/O'],
        starterCode: `# Inventory tracking system`,
        solutionCode: `class Inventory:\n    def __init__(self):\n        self.items = {}\n\n    def add_product(self, pid, name, price, stock, threshold=5):\n        self.items[pid] = {'name': name, 'price': price, 'stock': stock, 'threshold': threshold}\n\n    def restock_alerts(self):\n        return [p['name'] for p in self.items.values() if p['stock'] <= p['threshold']]\n\ninv = Inventory()\ninv.add_product('P1', 'Mechanical Keyboard', 85, 3)\ninv.add_product('P2', 'USB-C Cable', 12, 50)\nprint("Low stock alerts:", inv.restock_alerts())`,
        requirements: ['Maintain SKU/product records', 'Track stock levels', 'Trigger automated restock alerts']
    },

    // --------------------------------------------------------
    // ADVANCED PROJECTS
    // --------------------------------------------------------
    {
        id: 'proj-11',
        title: 'Banking Application with Transactions Ledger',
        tier: 'Advanced',
        category: 'advanced',
        description: 'Full-featured banking system with multiple account types (Savings, Checking), interest compounding, transaction audit history, and fund transfers between accounts.',
        skills: ['Advanced OOP', 'Inheritance', 'Audit Logging', 'Concurrency safety'],
        starterCode: `# Banking system with audit logging and transfers`,
        solutionCode: `import datetime\n\nclass Account:\n    def __init__(self, acc_num, holder, balance=0):\n        self.acc_num = acc_num\n        self.holder = holder\n        self.balance = balance\n        self.ledger = []\n\n    def record(self, action, amount):\n        self.ledger.append({\n            "time": str(datetime.datetime.now()),\n            "action": action,\n            "amount": amount,\n            "balance": self.balance\n        })\n\n    def transfer(self, target_account, amount):\n        if self.balance < amount:\n            return "Transfer failed: insufficient funds."\n        self.balance -= amount\n        self.record(f"Transfer to {target_account.acc_num}", -amount)\n        target_account.balance += amount\n        target_account.record(f"Transfer from {self.acc_num}", amount)\n        return f"Successfully transferred \${amount}."\n\na1 = Account("ACC-101", "Alice", 5000)\na2 = Account("ACC-102", "Bob", 1000)\nprint(a1.transfer(a2, 1500))\nprint(f"Alice: \${a1.balance}, Bob: \${a2.balance}")`,
        requirements: ['Thread-safe transaction records', 'Savings account with interest accrual', 'Rollback handling on transfer failures']
    },
    {
        id: 'proj-12',
        title: 'CLI File Management & Deduplication Tool',
        tier: 'Advanced',
        category: 'advanced',
        description: 'Directory scanner that computes MD5/SHA256 checksums to detect duplicate files, sorts files by size/extension, and generates disk usage reports.',
        skills: ['os / pathlib modules', 'hashlib', 'File System Traversal', 'DSA Hashing'],
        starterCode: `# File duplicate finder and cleaner`,
        solutionCode: `import hashlib\n\ndef mock_file_deduplicator():\n    files = [\n        {"path": "/docs/resume.pdf", "content": b"John Doe Resume Content"},\n        {"path": "/backup/resume.pdf", "content": b"John Doe Resume Content"},\n        {"path": "/photos/pic.jpg", "content": b"BinaryJPGData123"}\n    ]\n    hash_map = {}\n    duplicates = []\n    for f in files:\n        file_hash = hashlib.sha256(f['content']).hexdigest()\n        if file_hash in hash_map:\n            duplicates.append((f['path'], hash_map[file_hash]))\n        else:\n            hash_map[file_hash] = f['path']\n    return duplicates\n\nprint("Found Duplicates:", mock_file_deduplicator())`,
        requirements: ['Recursive folder traversal', 'SHA-256 content hashing', 'Report disk space reclaimable']
    },
    {
        id: 'proj-13',
        title: 'REST API Client with Rate Limiting & Caching',
        tier: 'Advanced',
        category: 'advanced',
        description: 'Custom HTTP API client with exponential backoff retries, local TTL in-memory cache, and token bucket rate limiter.',
        skills: ['requests concept', 'LRU Caching', 'Decorators', 'Error Retries'],
        starterCode: `# REST API client with caching and retry logic`,
        solutionCode: `import time\n\nclass APICache:\n    def __init__(self, ttl_seconds=60):\n        self.cache = {} # {key: (value, timestamp)}\n        self.ttl = ttl_seconds\n\n    def get(self, key):\n        if key in self.cache:\n            val, t = self.cache[key]\n            if time.time() - t < self.ttl:\n                return val\n            del self.cache[key]\n        return None\n\n    def set(self, key, value):\n        self.cache[key] = (value, time.time())\n\ncache = APICache(ttl_seconds=5)\ncache.set("users/1", {"name": "Aman", "role": "admin"})\nprint("Cache hit:", cache.get("users/1"))`,
        requirements: ['In-memory caching with TTL expiration', 'Retry requests with exponential backoff', 'Token bucket rate limiter']
    },
    {
        id: 'proj-14',
        title: 'SQLite Database Management Application',
        tier: 'Advanced',
        category: 'advanced',
        description: 'Build a relational database interface for managing e-commerce orders, customers, and product inventory with transactional queries and joins.',
        skills: ['sqlite3', 'SQL DDL/DML', 'Transactions & Commit/Rollback', 'Context Managers'],
        starterCode: `# SQLite Database manager`,
        solutionCode: `import sqlite3\n\ndef setup_database():\n    conn = sqlite3.connect(":memory:")\n    cursor = conn.cursor()\n    cursor.execute("""\n        CREATE TABLE products (\n            id INTEGER PRIMARY KEY,\n            name TEXT NOT NULL,\n            price REAL NOT NULL,\n            stock INTEGER DEFAULT 0\n        )\n    """)\n    cursor.executemany("INSERT INTO products (name, price, stock) VALUES (?, ?, ?)", [\n        ("Laptop", 1200.0, 10),\n        ("Mouse", 25.0, 50),\n        ("Keyboard", 75.0, 30)\n    ])\n    conn.commit()\n    cursor.execute("SELECT name, price FROM products WHERE price > 50")\n    results = cursor.fetchall()\n    conn.close()\n    return results\n\nprint("Products > $50:", setup_database())`,
        requirements: ['Relational schema with primary and foreign keys', 'Prepared SQL statements to prevent injection', 'Transaction rollback on failure']
    },
    {
        id: 'proj-15',
        title: 'Python Web Application (Micro-Framework)',
        tier: 'Advanced',
        category: 'advanced',
        description: 'Construct a lightweight WSGI-compliant web application with regex URL routing, query parameter parsing, and JSON response rendering.',
        skills: ['WSGI', 'Regex Routing', 'HTTP Protocol', 'Design Patterns'],
        starterCode: `# Micro web framework with regex router`,
        solutionCode: `import re\n\nclass MicroRouter:\n    def __init__(self):\n        self.routes = []\n\n    def route(self, path):\n        def decorator(handler):\n            self.routes.append((path, handler))\n            return handler\n        return decorator\n\n    def handle_request(self, path):\n        for route_path, handler in self.routes:\n            if route_path == path:\n                return handler()\n        return {"status": 404, "error": "Not Found"}\n\napp = MicroRouter()\n\n@app.route("/")\ndef home():\n    return {"status": 200, "message": "Welcome to Python Mastery API!"}\n\n@app.route("/stats")\ndef stats():\n    return {"status": 200, "topics": 150, "platform": "Python Mastery"}\n\nprint("GET / ->", app.handle_request("/"))\nprint("GET /stats ->", app.handle_request("/stats"))\nprint("GET /unknown ->", app.handle_request("/unknown"))`,
        requirements: ['Decorator-based route registration', 'HTTP status codes and headers', 'JSON serialization']
    }
];
