// ============================================================
// PYTHON MASTERY - Comprehensive Topic Content
// Formatted strictly according to pedagogical requirements:
// 1. Definition, 2. Why use it, 3. Concepts, 4. Syntax,
// 5. Types & variations, 6. Syntax breakdown, 7. Code examples,
// 8. Expected output, 9. Common mistakes, 10. Complexity, 11. Key takeaways
// ============================================================

window.PythonContent = {
    // --------------------------------------------------------
    // LEVEL 1: FUNDAMENTALS
    // --------------------------------------------------------
    'py-1-1': {
        definition: "Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum and released in 1991. It emphasizes code readability with its notable use of significant whitespace.",
        whyUse: "Python allows you to write clear, logical code for both small and large-scale projects. It has a massive ecosystem of libraries for Web Development, Artificial Intelligence, Data Science, Automation, and DSA.",
        concepts: [
            "Interpreted: Code executes line-by-line without pre-compilation.",
            "Dynamically Typed: You do not need to declare variable types explicitly.",
            "Multi-paradigm: Supports Procedural, Object-Oriented, and Functional programming.",
            "Batteries Included: Comes with a comprehensive standard library."
        ],
        syntax: "# Your first Python script\nprint('Hello, Python!')",
        syntaxExplanation: "The `print()` function sends text or variables to the console output. Single or double quotes denote a string literal.",
        examples: [
            {
                title: "Basic Greeting and Calculations",
                description: "Using Python as a calculator and message printer.",
                code: "print('Welcome to Python Mastery!')\nprint('Calculation 5 * 10 =', 5 * 10)",
                output: "Welcome to Python Mastery!\nCalculation 5 * 10 = 50"
            }
        ],
        commonMistakes: [
            {
                wrong: "Print('Hello')",
                right: "print('Hello')",
                explanation: "Python is strictly case-sensitive. `Print` with a capital 'P' will throw a NameError."
            }
        ],
        complexity: [
            { operation: "Script parsing and execution", time: "O(n) where n is code size", space: "O(n)" }
        ],
        keyTakeaways: [
            "Python focuses on human readability and developer velocity.",
            "It is the industry standard for Data Science, AI, and competitive programming."
        ]
    },

    'py-1-5': {
        definition: "`print()` is a built-in Python function that outputs the specified message or values to the screen or other standard output device.",
        whyUse: "We use `print()` to display results, communicate with users, debug code state, and inspect variable values during program execution.",
        concepts: [
            "Can accept zero or multiple arguments separated by commas.",
            "Default separator `sep` is a space `' '`.",
            "Default ending `end` is a newline character `\\n`.",
            "Values are automatically converted to strings before printing."
        ],
        syntax: "print(*objects, sep=' ', end='\\n', file=sys.stdout, flush=False)",
        types: [
            { name: "Single Value", description: "Printing a literal or variable", example: "print('Hello')" },
            { name: "Multiple Values", description: "Separated by commas", example: "print('Score:', 95, 'Grade:', 'A')" },
            { name: "Custom Separator", description: "Using sep parameter", example: "print('2026', '11', '10', sep='-')" },
            { name: "Custom Ending", description: "Preventing newline with end parameter", example: "print('Loading', end='...')" }
        ],
        syntaxExplanation: "`*objects` accepts any number of items. `sep` defines what goes between them. `end` defines what is appended at the very end.",
        examples: [
            {
                title: "Custom Separator and End",
                code: "print('Python', 'Mastery', 'Platform', sep=' -> ')\nprint('Progress: 100%', end=' [DONE]\\n')",
                output: "Python -> Mastery -> Platform\nProgress: 100% [DONE]"
            }
        ],
        commonMistakes: [
            {
                wrong: "print 'Hello World'  # Python 2 syntax",
                right: "print('Hello World')",
                explanation: "In Python 3, `print` is a function and parentheses are mandatory. Omitting them causes a SyntaxError."
            }
        ],
        complexity: [
            { operation: "print(m characters)", time: "O(m)", space: "O(1)" }
        ],
        keyTakeaways: [
            "Always wrap arguments in parentheses.",
            "Use `sep` and `end` to customize output formatting easily without extra string concatenation."
        ]
    },

    'py-1-7': {
        definition: "A variable in Python is a named reference or label pointing to a memory location where an object/value is stored.",
        whyUse: "Variables store data that can be referenced, updated, and manipulated throughout a program, making programs dynamic and flexible.",
        concepts: [
            "Dynamic typing: A variable's type is inferred from the assigned value at runtime.",
            "Assignment operator (`=`): Assigns the evaluated right-hand side object to the left-hand identifier.",
            "Everything in Python is an object, including integers, functions, and classes."
        ],
        syntax: "variable_name = value",
        types: [
            { name: "Numeric", description: "int, float, complex", example: "age = 21\nprice = 19.99" },
            { name: "Text", description: "str", example: "username = 'coder123'" },
            { name: "Boolean", description: "bool (True / False)", example: "is_active = True" }
        ],
        syntaxExplanation: "The identifier on the left binds to the object generated on the right. Multiple assignments can be done: `x, y = 10, 20`.",
        examples: [
            {
                title: "Variable Assignment & Reassignment",
                code: "counter = 1\nprint('Initial:', counter)\ncounter = counter + 5\nprint('Updated:', counter)",
                output: "Initial: 1\nUpdated: 6"
            }
        ],
        commonMistakes: [
            {
                wrong: "2x = 50",
                right: "x2 = 50",
                explanation: "Variable names cannot start with a digit or contain special symbols like `@, $, %`."
            }
        ],
        complexity: [
            { operation: "Variable assignment / lookup", time: "O(1)", space: "O(1)" }
        ],
        keyTakeaways: [
            "Variables do not contain the value directly; they hold a reference to an object in memory.",
            "Use snake_case for Python variable names according to PEP 8 standards."
        ]
    },

    'py-1-14': {
        definition: "Operators are special symbols and keywords in Python that perform specific mathematical, logical, or relational operations on values (operands).",
        whyUse: "Operators are the building blocks of algorithms, calculations, decision logic, and data manipulation.",
        concepts: [
            "Arithmetic: `+, -, *, /, // (floor div), % (modulus), ** (power)`",
            "Comparison: `==, !=, >, <, >=, <=` (evaluate to boolean True or False)",
            "Logical: `and, or, not` (combine boolean expressions)",
            "Assignment: `=, +=, -=, *=, /=, //=`",
            "Identity: `is, is not` (checks memory reference equality)",
            "Membership: `in, not in` (checks existence in a sequence)",
            "Bitwise: `&, |, ^, ~, <<, >>` (bitwise manipulation)"
        ],
        syntax: "result = operand1 <OPERATOR> operand2",
        examples: [
            {
                title: "Arithmetic and Modulo",
                code: "a, b = 17, 5\nprint('Floor Division:', a // b)\nprint('Remainder (Mod):', a % b)\nprint('Power:', 2 ** 4)",
                output: "Floor Division: 3\nRemainder (Mod): 2\nPower: 16"
            },
            {
                title: "Logical and Membership",
                code: "nums = [1, 2, 3, 4, 5]\nprint('Is 3 in nums?', 3 in nums)\nprint('Logic check:', (10 > 5) and (3 < 1))",
                output: "Is 3 in nums? True\nLogic check: False"
            }
        ],
        commonMistakes: [
            {
                wrong: "if x = 5:  # Assignment instead of comparison",
                right: "if x == 5:",
                explanation: "`=` is for variable assignment; `==` checks value equality."
            },
            {
                wrong: "a is b  # when checking value equality",
                right: "a == b",
                explanation: "`==` checks if values are equal; `is` checks if they are the exact same object in memory."
            }
        ],
        complexity: [
            { operation: "Primitive arithmetic & comparison", time: "O(1)", space: "O(1)" }
        ],
        keyTakeaways: [
            "`//` rounds down towards negative infinity (floor division).",
            "`and` / `or` employ short-circuit evaluation."
        ]
    },

    // --------------------------------------------------------
    // LEVEL 2: CONDITIONALS
    // --------------------------------------------------------
    'py-2-1': {
        definition: "Conditional statements control the execution flow of a program based on whether specified boolean conditions evaluate to `True` or `False`.",
        whyUse: "They allow programs to make decisions, handle edge cases, validate inputs, and execute different branches of logic dynamically.",
        concepts: [
            "`if` evaluates the condition.",
            "`elif` (short for else if) tests subsequent conditions if previous ones were False.",
            "`else` executes when none of the preceding conditions were met.",
            "Indentation (typically 4 spaces) defines the code block scope."
        ],
        syntax: "if condition1:\n    # code block\nelif condition2:\n    # code block\nelse:\n    # fallback code block",
        examples: [
            {
                title: "Grade Evaluation",
                code: "score = 88\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'F'\nprint('Grade is:', grade)",
                output: "Grade is: B"
            }
        ],
        commonMistakes: [
            {
                wrong: "if score >= 80\n    print('Pass')",
                right: "if score >= 80:\n    print('Pass')",
                explanation: "Every conditional header must conclude with a colon (`:`)."
            }
        ],
        complexity: [
            { operation: "Evaluating n conditions", time: "O(n) worst case", space: "O(1)" }
        ],
        keyTakeaways: [
            "Conditions are evaluated top to bottom; the first true branch runs and remaining branches are skipped."
        ]
    },

    // --------------------------------------------------------
    // LEVEL 3: STRINGS
    // --------------------------------------------------------
    'py-3-4': {
        definition: "String slicing is the operation of extracting a portion (substring) of a string using index boundaries `[start:stop:step]`.",
        whyUse: "Slicing enables fast text manipulation, substring extraction, reversing strings, and data cleaning without manual loops.",
        concepts: [
            "`start` is inclusive (defaults to 0).",
            "`stop` is exclusive (defaults to length of string).",
            "`step` determines direction and increment (defaults to 1).",
            "Strings are immutable; slicing creates a new string object."
        ],
        syntax: "substring = original_string[start:stop:step]",
        examples: [
            {
                title: "Basic & Negative Slicing",
                code: "s = 'PythonMastery'\nprint('First 6:', s[:6])\nprint('From index 6:', s[6:])\nprint('Every 2nd char:', s[::2])\nprint('Reversed:', s[::-1])",
                output: "First 6: Python\nFrom index 6: Mastery\nEvery 2nd char: PtoMser\nReversed: yretsaMnohtyP"
            }
        ],
        commonMistakes: [
            {
                wrong: "s = 'hello'\ns[0] = 'H'  # TypeError!",
                right: "s = 'H' + s[1:]",
                explanation: "Strings are immutable in Python. You cannot modify individual characters in-place."
            }
        ],
        complexity: [
            { operation: "Slice of length k", time: "O(k)", space: "O(k)" }
        ],
        keyTakeaways: [
            "`s[::-1]` is the idiomatic Python way to reverse any sequence.",
            "Slice bounds never throw IndexError if out of range; they clip cleanly."
        ]
    },

    // --------------------------------------------------------
    // LEVEL 4: LOOPS
    // --------------------------------------------------------
    'py-4-1': {
        definition: "A `for` loop in Python iterates over members of a sequence (such as a list, string, tuple, or range) in sequential order.",
        whyUse: "Loops automate repetitive tasks, traverse datasets, process collections, and perform algorithm iterations without code duplication.",
        concepts: [
            "`range(start, stop, step)` generates integer arithmetic progressions.",
            "`break` terminates the loop immediately.",
            "`continue` skips the remainder of the current iteration.",
            "`else` on a loop executes only if the loop finished naturally without a `break`."
        ],
        syntax: "for item in iterable:\n    # loop body\nelse:\n    # executes if no break occurred",
        examples: [
            {
                title: "Sum of First N Natural Numbers",
                code: "total = 0\nfor i in range(1, 6):\n    total += i\nprint('Sum of 1..5 is:', total)",
                output: "Sum of 1..5 is: 15"
            }
        ],
        commonMistakes: [
            {
                wrong: "for i in range(1, 5): # expects 5 included\n    print(i)",
                right: "for i in range(1, 6):",
                explanation: "`range(start, stop)` stops at `stop - 1`. The upper bound is exclusive."
            }
        ],
        complexity: [
            { operation: "For loop with n iterations", time: "O(n)", space: "O(1)" }
        ],
        keyTakeaways: [
            "Prefer `for` loops when the number of iterations or sequence is known in advance."
        ]
    },

    // --------------------------------------------------------
    // LEVEL 5: LISTS
    // --------------------------------------------------------
    'py-5-1': {
        definition: "A list is an ordered, mutable sequence of items that can hold heterogeneous data types, enclosed in square brackets `[]`.",
        whyUse: "Lists are Python's most versatile and ubiquitous container data structure, providing dynamic resizing and fast indexed access.",
        concepts: [
            "Zero-indexed: First element is at index 0.",
            "Mutable: Elements can be added, updated, or removed in-place.",
            "Under the hood: Implemented as dynamic arrays (contiguous pointers).",
            "Key methods: `append()`, `extend()`, `pop()`, `insert()`, `remove()`."
        ],
        syntax: "my_list = [item1, item2, item3]",
        examples: [
            {
                title: "List Operations",
                code: "nums = [10, 20, 30]\nnums.append(40)\nnums.insert(1, 15)\nprint('List after modifications:', nums)\npopped = nums.pop()\nprint('Popped element:', popped)\nprint('Remaining:', nums)",
                output: "List after modifications: [10, 15, 20, 30, 40]\nPopped element: 40\nRemaining: [10, 15, 20, 30]"
            }
        ],
        commonMistakes: [
            {
                wrong: "nums = [1, 2, 3]\nresult = nums.append(4)\nprint(result) # prints None!",
                right: "nums.append(4)\nprint(nums)",
                explanation: "`append()`, `sort()`, and `reverse()` modify the list in-place and return `None`."
            }
        ],
        complexity: [
            { operation: "Access by index arr[i]", time: "O(1)", space: "O(1)" },
            { operation: "Append to end arr.append()", time: "O(1) amortized", space: "O(1)" },
            { operation: "Insert / Delete at index 0", time: "O(n) due to shifting", space: "O(1)" }
        ],
        keyTakeaways: [
            "Use `append()` and `pop()` for efficient stack behavior.",
            "For frequent inserts/deletes at both ends, use `collections.deque` instead of lists."
        ]
    },

    // --------------------------------------------------------
    // LEVEL 8: DICTIONARIES
    // --------------------------------------------------------
    'py-8-1': {
        definition: "A dictionary (`dict`) is an unordered (insertion-ordered in Python 3.7+), mutable mapping of unique hashable keys to arbitrary values, enclosed in curly braces `{}`.",
        whyUse: "Dictionaries provide near instantaneous O(1) average lookup, insertion, and deletion by key, making them foundational for databases, caches, and fast counting.",
        concepts: [
            "Keys must be hashable and immutable (e.g., int, str, tuple).",
            "Values can be any data type, including other dictionaries or lists.",
            "Implemented using high-performance hash tables with collision resolution.",
            "Methods: `.get(key, default)`, `.keys()`, `.values()`, `.items()`."
        ],
        syntax: "my_dict = {key1: val1, key2: val2}",
        examples: [
            {
                title: "Word Frequency Counter",
                code: "words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']\nfreq = {}\nfor w in words:\n    freq[w] = freq.get(w, 0) + 1\nprint('Word Frequencies:', freq)",
                output: "Word Frequencies: {'apple': 3, 'banana': 2, 'orange': 1}"
            }
        ],
        commonMistakes: [
            {
                wrong: "d = {[1, 2]: 'val'} # TypeError: unhashable type: 'list'",
                right: "d = {(1, 2): 'val'} # Tuples are immutable and hashable",
                explanation: "Lists cannot be dictionary keys because they are mutable."
            }
        ],
        complexity: [
            { operation: "Key Lookup / Insert / Delete", time: "O(1) average, O(n) worst", space: "O(n)" }
        ],
        keyTakeaways: [
            "Always prefer `dict.get(key, default)` over `dict[key]` when a key might not exist to prevent `KeyError`."
        ]
    },

    // --------------------------------------------------------
    // LEVEL 9: FUNCTIONS
    // --------------------------------------------------------
    'py-9-1': {
        definition: "A function is an organized, reusable block of code that takes zero or more arguments, performs actions, and returns an optional result using the `return` keyword.",
        whyUse: "Functions promote DRY (Don't Repeat Yourself) architecture, modularity, readability, and ease of unit testing.",
        concepts: [
            "Defined with `def` keyword.",
            "Parameters vs Arguments: Parameters are variable names in the definition; arguments are the values supplied on call.",
            "Default parameters: Must appear after positional parameters.",
            "`*args`: Variable positional arguments collected into a tuple.",
            "`**kwargs`: Variable keyword arguments collected into a dictionary."
        ],
        syntax: "def function_name(param1, param2=default_val, *args, **kwargs):\n    \"\"\"Docstring description.\"\"\"\n    # logic\n    return result",
        examples: [
            {
                title: "Fibonacci Calculation Function",
                code: "def fibonacci(n):\n    \"\"\"Return the nth Fibonacci number.\"\"\"\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\n\nprint('7th Fibonacci number is:', fibonacci(7))",
                output: "7th Fibonacci number is: 13"
            }
        ],
        commonMistakes: [
            {
                wrong: "def add_item(item, lst=[]): # Dangerous mutable default argument!\n    lst.append(item)\n    return lst",
                right: "def add_item(item, lst=None):\n    if lst is None:\n        lst = []\n    lst.append(item)\n    return lst",
                explanation: "Default arguments are evaluated once at function definition time. Never use mutable defaults (lists/dicts)."
            }
        ],
        complexity: [
            { operation: "Function call overhead", time: "O(1)", space: "O(1) stack frame" }
        ],
        keyTakeaways: [
            "Functions without an explicit `return` return `None` by default.",
            "Keep functions short, focused on a single responsibility."
        ]
    },

    // --------------------------------------------------------
    // LEVEL 14: OOP
    // --------------------------------------------------------
    'py-14-1': {
        definition: "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which contain data (attributes) and code (methods) that manipulate that data.",
        whyUse: "OOP models complex real-world entities, encapsulates state, enables code reuse through inheritance, and establishes polymorphic interfaces.",
        concepts: [
            "Class: A blueprint for creating objects.",
            "Object/Instance: A concrete instance created from a class.",
            "`__init__()`: The constructor method executed upon instantiation.",
            "`self`: Refers to the specific instance invoking the method.",
            "Four Pillars: Encapsulation, Abstraction, Inheritance, Polymorphism."
        ],
        syntax: "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        self.balance += amount\n        return self.balance",
        examples: [
            {
                title: "Encapsulation and Methods",
                code: "class Student:\n    def __init__(self, name, roll):\n        self.name = name\n        self.roll = roll\n        self.marks = []\n\n    def add_mark(self, mark):\n        self.marks.append(mark)\n\n    def get_average(self):\n        return sum(self.marks) / len(self.marks) if self.marks else 0\n\ns = Student('Aditi', 101)\ns.add_mark(90)\ns.add_mark(96)\nprint(f'{s.name} average: {s.get_average():.1f}')",
                output: "Aditi average: 93.0"
            }
        ],
        commonMistakes: [
            {
                wrong: "class Dog:\n    def bark(): # Missing self\n        print('Woof!')",
                right: "class Dog:\n    def bark(self):\n        print('Woof!')",
                explanation: "Instance methods must accept `self` as their first parameter."
            }
        ],
        complexity: [
            { operation: "Object instantiation", time: "O(1)", space: "O(1)" }
        ],
        keyTakeaways: [
            "Use classes to bundle related state and behavior into reusable, clean modules."
        ]
    }
};
