/**
 * Python Mastery - Complete Python Syllabus Data
 * 
 * Defines the full Python programming curriculum organized into 17 levels,
 * from fundamentals through advanced topics, databases, and testing.
 * 
 * Each topic includes:
 *   - Unique ID (py-{level}-{topicNum})
 *   - Title, description, difficulty, estimated time
 *   - Prerequisites (logical dependency chain)
 *   - Playground and visualization flags
 */

window.PythonSyllabus = {
  id: 'python',
  title: 'Python Programming',
  description: 'Complete Python from beginner to advanced',
  levels: [

    // =========================================================================
    // LEVEL 1: PYTHON FUNDAMENTALS
    // =========================================================================
    {
      id: 'py-level-1',
      number: 1,
      title: 'Python Fundamentals',
      description: 'Learn the basics of Python programming including variables, data types, operators, and basic I/O',
      topics: [
        {
          id: 'py-1-1',
          title: 'Introduction to Python',
          description: 'What is Python, its history, and why it is one of the most popular programming languages today',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: [],
          hasPlayground: false,
          hasVisualization: false
        },
        {
          id: 'py-1-2',
          title: 'Installing Python',
          description: 'How to download and install Python on Windows, macOS, and Linux',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-1-1'],
          hasPlayground: false,
          hasVisualization: false
        },
        {
          id: 'py-1-3',
          title: 'IDEs and Code Editors',
          description: 'Overview of popular development environments like VS Code, PyCharm, and IDLE for writing Python code',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-1-2'],
          hasPlayground: false,
          hasVisualization: false
        },
        {
          id: 'py-1-4',
          title: 'First Python Program',
          description: 'Write and run your very first Python program using the interpreter and a script file',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-1-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-5',
          title: 'print()',
          description: 'Use the print() function to display output to the console with various arguments and formatting',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-1-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-6',
          title: 'Comments',
          description: 'Add single-line and multi-line comments to make your code more readable and maintainable',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-1-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-7',
          title: 'Variables',
          description: 'Understand how to create variables to store data and how Python handles variable assignment',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['py-1-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-1-8',
          title: 'Naming Conventions',
          description: 'Learn the rules and best practices for naming variables, functions, and other identifiers in Python',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-1-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-9',
          title: 'Data Types',
          description: 'Explore Python\'s built-in data types including int, float, str, bool, and NoneType',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['py-1-7'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-1-10',
          title: 'type()',
          description: 'Use the type() function to check the data type of any value or variable at runtime',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-1-9'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-11',
          title: 'Type Casting',
          description: 'Convert between data types using int(), float(), str(), and bool() conversion functions',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-1-10'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-12',
          title: 'input()',
          description: 'Accept user input from the keyboard using the input() function and process it in your programs',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-1-11'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-13',
          title: 'Output Formatting',
          description: 'Format output using string concatenation, commas in print(), and format specifiers',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-1-5', 'py-1-9'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-14',
          title: 'Arithmetic Operators',
          description: 'Perform mathematical operations using +, -, *, /, //, %, and ** operators',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-1-9'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-15',
          title: 'Assignment Operators',
          description: 'Assign and update variable values using =, +=, -=, *=, /= and other compound assignment operators',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-1-14'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-16',
          title: 'Comparison Operators',
          description: 'Compare values using ==, !=, >, <, >=, and <= operators that return Boolean results',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-1-14'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-17',
          title: 'Logical Operators',
          description: 'Combine conditions using and, or, and not operators for complex decision-making',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-1-16'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-18',
          title: 'Identity Operators',
          description: 'Check if two variables point to the same object in memory using is and is not operators',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-1-16'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-19',
          title: 'Membership Operators',
          description: 'Test whether a value exists within a sequence using in and not in operators',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-1-16'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-1-20',
          title: 'Bitwise Operators',
          description: 'Manipulate individual bits of integers using &, |, ^, ~, <<, and >> bitwise operators',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-1-14'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 2: CONDITIONAL STATEMENTS
    // =========================================================================
    {
      id: 'py-level-2',
      number: 2,
      title: 'Conditional Statements',
      description: 'Control the flow of your programs using if-else statements and conditional expressions',
      topics: [
        {
          id: 'py-2-1',
          title: 'if Statement',
          description: 'Execute a block of code only when a specified condition evaluates to True',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-1-16', 'py-1-17'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-2-2',
          title: 'if-else Statement',
          description: 'Choose between two code paths based on whether a condition is True or False',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-2-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-2-3',
          title: 'if-elif-else Statement',
          description: 'Handle multiple conditions in sequence using elif to test additional cases',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['py-2-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-2-4',
          title: 'Nested if Statements',
          description: 'Place if statements inside other if statements to create multi-level decision trees',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-2-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-2-5',
          title: 'Short-hand if',
          description: 'Write concise single-line if statements for simple conditional operations',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-2-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-2-6',
          title: 'Ternary Operator',
          description: 'Use Python\'s conditional expression syntax to assign values based on conditions in one line',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-2-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-2-7',
          title: 'Match-Case Statement',
          description: 'Use structural pattern matching introduced in Python 3.10 to match values against patterns',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-2-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-2-8',
          title: 'Truthy and Falsy Values',
          description: 'Understand which values Python considers True or False in a Boolean context',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-2-1', 'py-1-9'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 3: STRINGS
    // =========================================================================
    {
      id: 'py-level-3',
      number: 3,
      title: 'Strings',
      description: 'Master string creation, manipulation, and formatting techniques in Python',
      topics: [
        {
          id: 'py-3-1',
          title: 'String Creation',
          description: 'Create strings using single quotes, double quotes, and triple quotes for multi-line text',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-1-9'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-3-2',
          title: 'String Indexing',
          description: 'Access individual characters in a string using their position index starting from zero',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-3-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-3-3',
          title: 'Negative Indexing',
          description: 'Access characters from the end of a string using negative index values',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-3-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-3-4',
          title: 'String Slicing',
          description: 'Extract substrings from a string using the start, stop, and step slice notation',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['py-3-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-3-5',
          title: 'String Immutability',
          description: 'Understand that strings cannot be changed in place and how to work with this constraint',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-3-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-3-6',
          title: 'String Concatenation',
          description: 'Combine multiple strings together using the + operator and other techniques',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-3-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-3-7',
          title: 'String Repetition',
          description: 'Repeat a string multiple times using the * operator to create repeated patterns',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-3-6'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-3-8',
          title: 'String Methods',
          description: 'Explore commonly used string methods like upper(), lower(), title(), capitalize(), and swapcase()',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['py-3-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-3-9',
          title: 'split()',
          description: 'Break a string into a list of substrings based on a specified delimiter',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-3-8'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-3-10',
          title: 'join()',
          description: 'Combine a list of strings into a single string using a specified separator',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-3-9'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-3-11',
          title: 'strip()',
          description: 'Remove leading and trailing whitespace or specified characters from a string',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-3-8'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-3-12',
          title: 'replace()',
          description: 'Replace occurrences of a substring with another substring within a string',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-3-8'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-3-13',
          title: 'find()',
          description: 'Search for a substring and return the index of its first occurrence or -1 if not found',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-3-2', 'py-3-8'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-3-14',
          title: 'count()',
          description: 'Count how many times a substring appears within a string',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-3-8'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-3-15',
          title: 'startswith() and endswith()',
          description: 'Check whether a string begins or ends with a specified substring',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-3-8'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-3-16',
          title: 'String Formatting',
          description: 'Format strings using the format() method and % operator for dynamic content insertion',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['py-3-6', 'py-1-13'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-3-17',
          title: 'f-Strings',
          description: 'Use formatted string literals with embedded expressions for clean and readable string formatting',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-3-16'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 4: LOOPS
    // =========================================================================
    {
      id: 'py-level-4',
      number: 4,
      title: 'Loops',
      description: 'Repeat actions and iterate over data using for loops, while loops, and related control structures',
      topics: [
        {
          id: 'py-4-1',
          title: 'for Loop',
          description: 'Iterate over sequences like lists, strings, and ranges using the for loop construct',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['py-1-7', 'py-1-14', 'py-2-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-4-2',
          title: 'while Loop',
          description: 'Repeat a block of code as long as a specified condition remains True',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['py-1-16', 'py-2-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-4-3',
          title: 'range()',
          description: 'Generate sequences of numbers using range() with start, stop, and step parameters',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-4-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-4-4',
          title: 'Nested Loops',
          description: 'Place loops inside other loops to handle multi-dimensional data and complex iterations',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-4-1', 'py-4-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-4-5',
          title: 'break Statement',
          description: 'Exit a loop prematurely when a certain condition is met using the break keyword',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-4-1', 'py-4-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-4-6',
          title: 'continue Statement',
          description: 'Skip the current iteration and move to the next one using the continue keyword',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-4-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-4-7',
          title: 'pass Statement',
          description: 'Use the pass keyword as a placeholder for code that will be implemented later',
          difficulty: 'beginner',
          estimatedTime: '5 min',
          prerequisites: ['py-4-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-4-8',
          title: 'Loop with else',
          description: 'Attach an else clause to a loop that executes when the loop finishes without a break',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-4-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-4-9',
          title: 'enumerate()',
          description: 'Get both the index and value while iterating over a sequence using enumerate()',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-4-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-4-10',
          title: 'zip()',
          description: 'Iterate over multiple sequences simultaneously by pairing their elements together',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-4-9'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-4-11',
          title: 'Iterating Through Strings',
          description: 'Loop through each character in a string using for loops and index-based access',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-4-1', 'py-3-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-4-12',
          title: 'Iterating Through Collections',
          description: 'Loop through lists, tuples, sets, and dictionaries using appropriate iteration patterns',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-4-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-4-13',
          title: 'Infinite Loops',
          description: 'Understand how infinite loops occur with while True and how to control them safely',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-4-2', 'py-4-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-4-14',
          title: 'Pattern Programming',
          description: 'Build star, number, and character patterns using nested loops to strengthen loop logic',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['py-4-4', 'py-4-3'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 5: LISTS
    // =========================================================================
    {
      id: 'py-level-5',
      number: 5,
      title: 'Lists',
      description: 'Work with Python\'s most versatile data structure for storing ordered collections of items',
      topics: [
        {
          id: 'py-5-1',
          title: 'List Introduction',
          description: 'Understand what lists are and why they are one of the most commonly used data structures in Python',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-1-9'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-5-2',
          title: 'Creating Lists',
          description: 'Create lists using square brackets, the list() constructor, and various initialization techniques',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-5-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-3',
          title: 'List Indexing',
          description: 'Access individual elements in a list using positive and negative index positions',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-5-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-5-4',
          title: 'List Slicing',
          description: 'Extract sublists using slice notation with start, stop, and step parameters',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-5-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-5-5',
          title: 'Updating Elements',
          description: 'Modify list elements by assigning new values to specific index positions',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-5-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-6',
          title: 'append()',
          description: 'Add a single element to the end of a list using the append() method',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-5-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-5-7',
          title: 'extend()',
          description: 'Add all elements from one iterable to the end of a list using the extend() method',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-5-6'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-8',
          title: 'insert()',
          description: 'Add an element at a specific position in a list using the insert() method',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-5-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-5-9',
          title: 'remove()',
          description: 'Remove the first occurrence of a specified value from a list',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-5-6'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-10',
          title: 'pop()',
          description: 'Remove and return an element at a given index position from a list',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-5-9'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-5-11',
          title: 'clear()',
          description: 'Remove all elements from a list leaving it empty',
          difficulty: 'beginner',
          estimatedTime: '5 min',
          prerequisites: ['py-5-9'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-12',
          title: 'index()',
          description: 'Find the index position of the first occurrence of a specified value in a list',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-5-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-13',
          title: 'count()',
          description: 'Count how many times a specific value appears in a list',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-5-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-14',
          title: 'sort()',
          description: 'Sort the elements of a list in ascending or descending order in place',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-5-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-5-15',
          title: 'sorted()',
          description: 'Create a new sorted list from any iterable without modifying the original sequence',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-5-14'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-16',
          title: 'reverse()',
          description: 'Reverse the order of elements in a list in place',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-5-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-17',
          title: 'copy()',
          description: 'Create a shallow copy of a list to avoid unintended modifications to the original',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-5-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-18',
          title: 'List Concatenation',
          description: 'Combine two or more lists together using the + operator',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-5-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-19',
          title: 'List Repetition',
          description: 'Create repeated copies of a list using the * operator',
          difficulty: 'beginner',
          estimatedTime: '5 min',
          prerequisites: ['py-5-18'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-20',
          title: 'Nested Lists',
          description: 'Create and work with lists that contain other lists as elements',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-5-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-5-21',
          title: 'List Traversal',
          description: 'Iterate through list elements using for loops, while loops, and various iteration techniques',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-5-3', 'py-4-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-22',
          title: 'List Comprehensions',
          description: 'Create new lists using concise one-line expressions with optional filtering conditions',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['py-5-21', 'py-4-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-5-23',
          title: '2D Lists',
          description: 'Work with two-dimensional lists (matrices) for grid-based data and table-like structures',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-5-20', 'py-4-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-5-24',
          title: 'Shallow Copy and Deep Copy',
          description: 'Understand the difference between shallow and deep copies of lists and when to use each',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-5-17', 'py-5-20'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 6: TUPLES
    // =========================================================================
    {
      id: 'py-level-6',
      number: 6,
      title: 'Tuples',
      description: 'Learn to use immutable ordered sequences for fixed collections of data',
      topics: [
        {
          id: 'py-6-1',
          title: 'Tuple Creation',
          description: 'Create tuples using parentheses, the tuple() constructor, and comma-separated values',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-5-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-6-2',
          title: 'Tuple Indexing',
          description: 'Access individual elements of a tuple using positive and negative index positions',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-6-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-6-3',
          title: 'Tuple Slicing',
          description: 'Extract portions of a tuple using slice notation with start, stop, and step values',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-6-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-6-4',
          title: 'Tuple Immutability',
          description: 'Understand why tuples cannot be modified after creation and the benefits of immutability',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-6-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-6-5',
          title: 'Tuple count()',
          description: 'Count the number of times a specified value appears in a tuple',
          difficulty: 'beginner',
          estimatedTime: '5 min',
          prerequisites: ['py-6-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-6-6',
          title: 'Tuple index()',
          description: 'Find the index of the first occurrence of a specified value in a tuple',
          difficulty: 'beginner',
          estimatedTime: '5 min',
          prerequisites: ['py-6-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-6-7',
          title: 'Tuple Packing',
          description: 'Pack multiple values into a single tuple by assigning them together',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-6-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-6-8',
          title: 'Tuple Unpacking',
          description: 'Extract tuple values into individual variables in a single assignment statement',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-6-7'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-6-9',
          title: 'Multiple Assignment',
          description: 'Assign multiple variables at once using tuple unpacking and the starred expression',
          difficulty: 'intermediate',
          estimatedTime: '10 min',
          prerequisites: ['py-6-8'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-6-10',
          title: 'Tuple and List Conversion',
          description: 'Convert between tuples and lists using the tuple() and list() constructors',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-6-1', 'py-5-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-6-11',
          title: 'Nested Tuples',
          description: 'Create and work with tuples that contain other tuples or mixed data structures',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-6-2', 'py-6-4'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 7: SETS
    // =========================================================================
    {
      id: 'py-level-7',
      number: 7,
      title: 'Sets',
      description: 'Use unordered collections of unique elements for mathematical set operations',
      topics: [
        {
          id: 'py-7-1',
          title: 'Set Introduction',
          description: 'Understand what sets are and how they store unique unordered elements in Python',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-5-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-7-2',
          title: 'Creating Sets',
          description: 'Create sets using curly braces and the set() constructor from various iterables',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-7-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-7-3',
          title: 'Empty Sets',
          description: 'Learn why you must use set() instead of {} to create an empty set in Python',
          difficulty: 'beginner',
          estimatedTime: '5 min',
          prerequisites: ['py-7-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-7-4',
          title: 'add()',
          description: 'Add a single element to a set using the add() method',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-7-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-7-5',
          title: 'update()',
          description: 'Add multiple elements from an iterable to a set using the update() method',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-7-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-7-6',
          title: 'remove()',
          description: 'Remove a specified element from a set, raising a KeyError if the element is not found',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-7-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-7-7',
          title: 'discard()',
          description: 'Remove a specified element from a set without raising an error if the element is absent',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-7-6'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-7-8',
          title: 'pop()',
          description: 'Remove and return an arbitrary element from a set',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-7-6'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-7-9',
          title: 'clear()',
          description: 'Remove all elements from a set leaving it empty',
          difficulty: 'beginner',
          estimatedTime: '5 min',
          prerequisites: ['py-7-6'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-7-10',
          title: 'Union',
          description: 'Combine elements from two or more sets using the union() method or | operator',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-7-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-7-11',
          title: 'Intersection',
          description: 'Find common elements between sets using the intersection() method or & operator',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-7-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-7-12',
          title: 'Difference',
          description: 'Find elements present in one set but not in another using difference() or - operator',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-7-11'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-7-13',
          title: 'Symmetric Difference',
          description: 'Find elements in either set but not in both using symmetric_difference() or ^ operator',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-7-12'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-7-14',
          title: 'Subset',
          description: 'Check if all elements of one set exist in another using issubset() or <= operator',
          difficulty: 'intermediate',
          estimatedTime: '10 min',
          prerequisites: ['py-7-11'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-7-15',
          title: 'Superset',
          description: 'Check if a set contains all elements of another set using issuperset() or >= operator',
          difficulty: 'intermediate',
          estimatedTime: '10 min',
          prerequisites: ['py-7-14'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-7-16',
          title: 'Disjoint Sets',
          description: 'Determine if two sets have no elements in common using the isdisjoint() method',
          difficulty: 'intermediate',
          estimatedTime: '10 min',
          prerequisites: ['py-7-11'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-7-17',
          title: 'Frozenset',
          description: 'Create immutable sets using frozenset() that can be used as dictionary keys or set elements',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-7-2', 'py-6-4'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 8: DICTIONARIES
    // =========================================================================
    {
      id: 'py-level-8',
      number: 8,
      title: 'Dictionaries',
      description: 'Store and retrieve data efficiently using key-value pair mappings',
      topics: [
        {
          id: 'py-8-1',
          title: 'Dictionary Introduction',
          description: 'Understand dictionaries as unordered collections of key-value pairs for fast data lookup',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-5-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-8-2',
          title: 'Key-Value Pairs',
          description: 'Learn how dictionaries map unique keys to their associated values',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-8-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-8-3',
          title: 'Creating Dictionaries',
          description: 'Create dictionaries using curly braces, the dict() constructor, and dict comprehensions',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-8-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-4',
          title: 'Accessing Values',
          description: 'Retrieve values from a dictionary using square bracket notation and key references',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-8-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-5',
          title: 'Adding Elements',
          description: 'Add new key-value pairs to a dictionary by assigning a value to a new key',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-8-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-6',
          title: 'Updating Elements',
          description: 'Modify the value associated with an existing key in a dictionary',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-8-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-7',
          title: 'Removing Elements',
          description: 'Remove key-value pairs from a dictionary using del and other removal techniques',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-8-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-8',
          title: 'get()',
          description: 'Safely retrieve values using get() which returns a default value instead of raising an error',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-8-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-9',
          title: 'keys()',
          description: 'Get a view of all keys in a dictionary using the keys() method',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-8-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-10',
          title: 'values()',
          description: 'Get a view of all values in a dictionary using the values() method',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-8-9'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-11',
          title: 'items()',
          description: 'Get a view of all key-value pairs as tuples using the items() method',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-8-10'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-12',
          title: 'update()',
          description: 'Merge another dictionary or key-value pairs into an existing dictionary',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-8-6'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-13',
          title: 'pop()',
          description: 'Remove a key-value pair by key and return the value using the pop() method',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-8-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-14',
          title: 'popitem()',
          description: 'Remove and return the last inserted key-value pair from a dictionary',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-8-13'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-15',
          title: 'setdefault()',
          description: 'Get a value by key or insert a default value if the key does not exist',
          difficulty: 'intermediate',
          estimatedTime: '10 min',
          prerequisites: ['py-8-8'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-16',
          title: 'clear()',
          description: 'Remove all key-value pairs from a dictionary leaving it empty',
          difficulty: 'beginner',
          estimatedTime: '5 min',
          prerequisites: ['py-8-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-17',
          title: 'Nested Dictionaries',
          description: 'Create dictionaries within dictionaries to represent hierarchical or complex data',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-8-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-8-18',
          title: 'Dictionary Iteration',
          description: 'Loop through dictionary keys, values, and items using for loops',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-8-11', 'py-4-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-19',
          title: 'Dictionary Comprehensions',
          description: 'Create new dictionaries using concise one-line comprehension expressions',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-8-18', 'py-5-22'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-8-20',
          title: 'Merging Dictionaries',
          description: 'Combine multiple dictionaries using update(), unpacking operators, and the merge operator',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-8-12'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 9: FUNCTIONS
    // =========================================================================
    {
      id: 'py-level-9',
      number: 9,
      title: 'Functions',
      description: 'Organize code into reusable blocks with parameters, return values, and advanced function concepts',
      topics: [
        {
          id: 'py-9-1',
          title: 'Function Introduction',
          description: 'Understand what functions are and why they are essential for writing organized reusable code',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-4-1', 'py-2-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-2',
          title: 'Creating Functions Using def',
          description: 'Define your own functions using the def keyword with proper syntax and indentation',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-9-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-3',
          title: 'Function Calling',
          description: 'Invoke a defined function by its name to execute the code within it',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-9-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-9-4',
          title: 'Parameters and Arguments',
          description: 'Pass data into functions using parameters in the definition and arguments in the call',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-9-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-9-5',
          title: 'Positional Arguments',
          description: 'Pass arguments to functions based on their position in the function call',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-9-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-6',
          title: 'Keyword Arguments',
          description: 'Pass arguments by explicitly naming the parameter they correspond to',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-9-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-7',
          title: 'Default Arguments',
          description: 'Set default values for parameters that are used when no argument is provided',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-9-6'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-8',
          title: 'Return Statement',
          description: 'Send a value back from a function to the caller using the return keyword',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-9-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-9-9',
          title: 'Return vs Print',
          description: 'Understand the critical difference between returning a value and printing it to the console',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-9-8'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-10',
          title: 'Multiple Return Values',
          description: 'Return multiple values from a function using tuples and tuple unpacking',
          difficulty: 'intermediate',
          estimatedTime: '10 min',
          prerequisites: ['py-9-8', 'py-6-8'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-11',
          title: 'Variable Scope',
          description: 'Understand how Python determines the visibility and lifetime of variables in different contexts',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-9-8'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-9-12',
          title: 'Local Variables',
          description: 'Variables defined inside a function that are only accessible within that function',
          difficulty: 'intermediate',
          estimatedTime: '10 min',
          prerequisites: ['py-9-11'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-13',
          title: 'Global Variables',
          description: 'Variables defined outside functions and how to access them using the global keyword',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-9-12'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-14',
          title: 'nonlocal Keyword',
          description: 'Access and modify variables from an enclosing function scope using the nonlocal keyword',
          difficulty: 'intermediate',
          estimatedTime: '10 min',
          prerequisites: ['py-9-13'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-15',
          title: '*args',
          description: 'Accept any number of positional arguments in a function using the *args parameter',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-9-5', 'py-6-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-16',
          title: '**kwargs',
          description: 'Accept any number of keyword arguments in a function using the **kwargs parameter',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-9-15', 'py-8-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-17',
          title: 'Lambda Functions',
          description: 'Create small anonymous functions using the lambda keyword for quick inline operations',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-9-8'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-18',
          title: 'Recursive Functions',
          description: 'Write functions that call themselves to solve problems that can be broken into subproblems',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['py-9-8', 'py-2-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-9-19',
          title: 'Higher-Order Functions',
          description: 'Functions that accept other functions as arguments or return functions as results',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-9-17'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-20',
          title: 'map()',
          description: 'Apply a function to every item in an iterable and return a new iterable of results',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-9-19', 'py-9-17'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-21',
          title: 'filter()',
          description: 'Select elements from an iterable that satisfy a condition defined by a function',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-9-20'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-22',
          title: 'reduce()',
          description: 'Cumulatively combine all elements of an iterable into a single value using functools.reduce()',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-9-21'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-23',
          title: 'Function Annotations',
          description: 'Add type hints to function parameters and return values for better code documentation',
          difficulty: 'intermediate',
          estimatedTime: '10 min',
          prerequisites: ['py-9-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-9-24',
          title: 'Docstrings',
          description: 'Document your functions with descriptive docstrings accessible via the help() function',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-9-2'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 10: COMPREHENSIONS
    // =========================================================================
    {
      id: 'py-level-10',
      number: 10,
      title: 'Comprehensions',
      description: 'Master Pythonic one-liner expressions for creating lists, sets, dictionaries, and generators',
      topics: [
        {
          id: 'py-10-1',
          title: 'List Comprehension',
          description: 'Create new lists by applying an expression to each item in an iterable in a single concise line',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-5-22'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-10-2',
          title: 'Set Comprehension',
          description: 'Build sets using comprehension syntax to generate unique elements from an iterable',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-10-1', 'py-7-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-10-3',
          title: 'Dictionary Comprehension',
          description: 'Construct dictionaries dynamically using comprehension syntax with key-value expressions',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-10-1', 'py-8-19'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-10-4',
          title: 'Nested Comprehensions',
          description: 'Use comprehensions within comprehensions to create multi-dimensional data structures',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-10-1', 'py-4-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-10-5',
          title: 'Conditional Comprehensions',
          description: 'Add if and if-else conditions to comprehensions for filtering and conditional transformation',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-10-1', 'py-2-6'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-10-6',
          title: 'Generator Expressions',
          description: 'Create memory-efficient iterators using generator expressions with parentheses syntax',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-10-1'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 11: MODULES AND PACKAGES
    // =========================================================================
    {
      id: 'py-level-11',
      number: 11,
      title: 'Modules and Packages',
      description: 'Organize code into modules, use built-in libraries, and manage packages with pip',
      topics: [
        {
          id: 'py-11-1',
          title: 'Modules',
          description: 'Understand how Python modules allow you to organize code into separate reusable files',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-9-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-11-2',
          title: 'import Statement',
          description: 'Import entire modules into your program to use their functions, classes, and variables',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-11-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-11-3',
          title: 'from import',
          description: 'Import specific functions or objects from a module to use them directly without the module prefix',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-11-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-11-4',
          title: 'Aliasing',
          description: 'Create shorthand names for modules or imported objects using the as keyword',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-11-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-11-5',
          title: 'Built-in Modules',
          description: 'Explore the rich collection of modules included with Python\'s standard library',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-11-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-11-6',
          title: 'math Module',
          description: 'Perform advanced mathematical operations using functions from the math module',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-11-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-11-7',
          title: 'random Module',
          description: 'Generate random numbers and make random selections using the random module',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-11-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-11-8',
          title: 'datetime Module',
          description: 'Work with dates, times, and time intervals using the datetime module',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-11-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-11-9',
          title: 'os Module',
          description: 'Interact with the operating system for file paths, directories, and environment variables',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-11-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-11-10',
          title: 'sys Module',
          description: 'Access system-specific parameters and functions using the sys module',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-11-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-11-11',
          title: 'Creating Custom Modules',
          description: 'Write your own Python modules and import them into other programs',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-11-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-11-12',
          title: 'Packages',
          description: 'Organize related modules into packages using directories and __init__.py files',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-11-11'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-11-13',
          title: 'pip',
          description: 'Install and manage third-party Python packages using the pip package manager',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-11-12'],
          hasPlayground: false,
          hasVisualization: false
        },
        {
          id: 'py-11-14',
          title: 'Virtual Environments',
          description: 'Create isolated Python environments to manage project-specific dependencies',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-11-13'],
          hasPlayground: false,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 12: EXCEPTION HANDLING
    // =========================================================================
    {
      id: 'py-level-12',
      number: 12,
      title: 'Exception Handling',
      description: 'Handle errors gracefully using try-except blocks and custom exception classes',
      topics: [
        {
          id: 'py-12-1',
          title: 'Errors and Exceptions',
          description: 'Understand the difference between errors and exceptions and how Python reports them',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-9-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-12-2',
          title: 'Syntax Errors',
          description: 'Identify and fix syntax errors that prevent Python from parsing your code',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-12-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-12-3',
          title: 'Runtime Errors',
          description: 'Understand exceptions that occur during program execution like ZeroDivisionError and TypeError',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-12-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-12-4',
          title: 'Logical Errors',
          description: 'Recognize bugs where the program runs but produces incorrect results due to flawed logic',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-12-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-12-5',
          title: 'try and except',
          description: 'Catch and handle exceptions using try-except blocks to prevent program crashes',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['py-12-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-12-6',
          title: 'Multiple except Blocks',
          description: 'Handle different types of exceptions separately using multiple except clauses',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-12-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-12-7',
          title: 'else Clause',
          description: 'Execute code only when no exception occurs using the else clause in try-except',
          difficulty: 'intermediate',
          estimatedTime: '10 min',
          prerequisites: ['py-12-6'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-12-8',
          title: 'finally Clause',
          description: 'Ensure cleanup code always runs regardless of exceptions using the finally clause',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-12-7'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-12-9',
          title: 'raise Statement',
          description: 'Deliberately trigger exceptions using the raise keyword to signal error conditions',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-12-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-12-10',
          title: 'Custom Exceptions',
          description: 'Create your own exception classes by inheriting from the built-in Exception class',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-12-9'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-12-11',
          title: 'Exception Hierarchy',
          description: 'Explore the inheritance hierarchy of built-in exceptions from BaseException to specific types',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-12-10'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 13: FILE HANDLING
    // =========================================================================
    {
      id: 'py-level-13',
      number: 13,
      title: 'File Handling',
      description: 'Read from and write to files including text, CSV, and JSON formats',
      topics: [
        {
          id: 'py-13-1',
          title: 'File Introduction',
          description: 'Understand file handling concepts and how Python interacts with the file system',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-12-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-13-2',
          title: 'Opening Files',
          description: 'Open files using the open() function and understand file object handles',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-13-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-13-3',
          title: 'File Modes (r, w, a, x)',
          description: 'Choose the correct file mode for reading, writing, appending, or exclusive creation',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-13-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-13-4',
          title: 'read()',
          description: 'Read the entire contents of a file or a specified number of characters using read()',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-13-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-13-5',
          title: 'readline()',
          description: 'Read a file one line at a time using the readline() method',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-13-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-13-6',
          title: 'readlines()',
          description: 'Read all lines of a file into a list of strings using readlines()',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-13-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-13-7',
          title: 'write()',
          description: 'Write string data to a file using the write() method',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-13-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-13-8',
          title: 'writelines()',
          description: 'Write a list of strings to a file at once using the writelines() method',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-13-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-13-9',
          title: 'with Statement',
          description: 'Use the with statement as a context manager to automatically close files after use',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-13-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-13-10',
          title: 'Closing Files',
          description: 'Properly close file handles using close() and understand why it is important',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['py-13-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-13-11',
          title: 'Text Files',
          description: 'Work with plain text files for reading and writing human-readable data',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['py-13-9', 'py-13-4', 'py-13-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-13-12',
          title: 'CSV Files',
          description: 'Read and write comma-separated value files using the csv module',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-13-11', 'py-11-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-13-13',
          title: 'JSON Files',
          description: 'Parse and generate JSON data using the json module for data interchange',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-13-11', 'py-8-3', 'py-11-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-13-14',
          title: 'File Handling Exceptions',
          description: 'Handle common file-related errors like FileNotFoundError and PermissionError',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-13-9', 'py-12-6'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 14: OBJECT-ORIENTED PROGRAMMING
    // =========================================================================
    {
      id: 'py-level-14',
      number: 14,
      title: 'Object-Oriented Programming',
      description: 'Design programs using classes, objects, inheritance, polymorphism, and encapsulation',
      topics: [
        {
          id: 'py-14-1',
          title: 'OOP Introduction',
          description: 'Understand the principles of object-oriented programming and how it differs from procedural code',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-9-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-2',
          title: 'Classes',
          description: 'Define classes as blueprints for creating objects with shared structure and behavior',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-14-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-3',
          title: 'Objects',
          description: 'Create instances of classes and understand how objects hold their own data',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-4',
          title: 'Attributes',
          description: 'Define and access data properties that belong to objects and classes',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-5',
          title: 'Methods',
          description: 'Define functions inside classes that operate on object data and define behavior',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-6',
          title: '__init__()',
          description: 'Use the constructor method to initialize object attributes when creating a new instance',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-14-5'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-7',
          title: 'self Parameter',
          description: 'Understand how self refers to the current object instance inside methods',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-8',
          title: 'Instance Variables',
          description: 'Create variables that belong to individual objects and hold unique data per instance',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-9',
          title: 'Class Variables',
          description: 'Define variables shared across all instances of a class for common data',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-8'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-10',
          title: 'Instance Methods',
          description: 'Define methods that operate on individual object instances using self',
          difficulty: 'intermediate',
          estimatedTime: '10 min',
          prerequisites: ['py-14-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-11',
          title: 'Class Methods',
          description: 'Define methods that operate on the class itself using the @classmethod decorator and cls parameter',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-10', 'py-14-9'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-12',
          title: 'Static Methods',
          description: 'Define utility methods inside a class that do not depend on instance or class data',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-11'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-13',
          title: 'Encapsulation',
          description: 'Bundle data and methods together and restrict direct access to internal state',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-14-8'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-14',
          title: 'Access Conventions',
          description: 'Use single and double underscore prefixes to indicate protected and private members',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-13'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-15',
          title: 'Inheritance',
          description: 'Create new classes that inherit attributes and methods from existing parent classes',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['py-14-6', 'py-14-5'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-16',
          title: 'Single Inheritance',
          description: 'Create a child class that inherits from exactly one parent class',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-15'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-17',
          title: 'Multiple Inheritance',
          description: 'Create a class that inherits from two or more parent classes simultaneously',
          difficulty: 'advanced',
          estimatedTime: '20 min',
          prerequisites: ['py-14-16'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-18',
          title: 'Multilevel Inheritance',
          description: 'Build inheritance chains where a child class inherits from another child class',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-16'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-19',
          title: 'Hierarchical Inheritance',
          description: 'Create multiple child classes that inherit from a single parent class',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-16'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-20',
          title: 'Hybrid Inheritance',
          description: 'Combine multiple types of inheritance in a single class hierarchy',
          difficulty: 'advanced',
          estimatedTime: '20 min',
          prerequisites: ['py-14-17', 'py-14-18'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-21',
          title: 'Polymorphism',
          description: 'Use objects of different classes through a common interface with different behaviors',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-14-15'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-22',
          title: 'Method Overriding',
          description: 'Redefine inherited methods in a child class to provide specialized behavior',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-21'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-23',
          title: 'Method Overloading Concepts',
          description: 'Understand how Python handles method overloading differently from other languages using default arguments',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-22', 'py-9-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-24',
          title: 'Abstraction',
          description: 'Hide complex implementation details and expose only essential features to the user',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-13'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-25',
          title: 'Abstract Classes',
          description: 'Create abstract base classes using the abc module to enforce method implementation in subclasses',
          difficulty: 'advanced',
          estimatedTime: '20 min',
          prerequisites: ['py-14-24', 'py-14-15', 'py-11-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-26',
          title: 'super()',
          description: 'Call parent class methods from within a child class using the super() function',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-22'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-27',
          title: 'Method Resolution Order (MRO)',
          description: 'Understand how Python determines which method to call in complex inheritance hierarchies',
          difficulty: 'advanced',
          estimatedTime: '20 min',
          prerequisites: ['py-14-17', 'py-14-26'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-14-28',
          title: 'Magic Methods',
          description: 'Implement special double-underscore methods like __str__, __repr__, and __len__ to customize class behavior',
          difficulty: 'advanced',
          estimatedTime: '25 min',
          prerequisites: ['py-14-6', 'py-14-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-29',
          title: 'Operator Overloading',
          description: 'Define how operators like +, -, and == work with your custom objects using magic methods',
          difficulty: 'advanced',
          estimatedTime: '20 min',
          prerequisites: ['py-14-28'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-14-30',
          title: 'Composition and Aggregation',
          description: 'Build complex objects by combining simpler objects as an alternative to inheritance',
          difficulty: 'advanced',
          estimatedTime: '20 min',
          prerequisites: ['py-14-3', 'py-14-15'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 15: ADVANCED PYTHON
    // =========================================================================
    {
      id: 'py-level-15',
      number: 15,
      title: 'Advanced Python',
      description: 'Explore advanced concepts including iterators, generators, decorators, async programming, and memory management',
      topics: [
        {
          id: 'py-15-1',
          title: 'Iterables',
          description: 'Understand iterable objects and the iterable protocol that enables looping in Python',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-4-1', 'py-14-28'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-15-2',
          title: 'Iterators',
          description: 'Learn how iterator objects maintain state and produce values one at a time',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-15-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-15-3',
          title: '__iter__() and __next__()',
          description: 'Implement the iterator protocol by defining __iter__() and __next__() in your own classes',
          difficulty: 'advanced',
          estimatedTime: '20 min',
          prerequisites: ['py-15-2', 'py-14-28'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-15-4',
          title: 'Generators',
          description: 'Create memory-efficient iterators using generator functions with the yield keyword',
          difficulty: 'advanced',
          estimatedTime: '25 min',
          prerequisites: ['py-15-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-15-5',
          title: 'yield Keyword',
          description: 'Use yield to produce values lazily and pause function execution between each value',
          difficulty: 'advanced',
          estimatedTime: '15 min',
          prerequisites: ['py-15-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-15-6',
          title: 'Decorators',
          description: 'Modify or enhance function behavior using the decorator pattern and @ syntax',
          difficulty: 'advanced',
          estimatedTime: '30 min',
          prerequisites: ['py-9-19', 'py-15-7'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-15-7',
          title: 'Closures',
          description: 'Understand how inner functions capture and remember variables from their enclosing scope',
          difficulty: 'advanced',
          estimatedTime: '20 min',
          prerequisites: ['py-9-14', 'py-9-19'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-15-8',
          title: 'Higher-Order Functions (Advanced)',
          description: 'Master advanced patterns with functions that accept and return other functions',
          difficulty: 'advanced',
          estimatedTime: '20 min',
          prerequisites: ['py-9-19', 'py-15-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-15-9',
          title: 'Context Managers',
          description: 'Create custom context managers to manage resource setup and teardown automatically',
          difficulty: 'advanced',
          estimatedTime: '20 min',
          prerequisites: ['py-13-9', 'py-14-28'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-15-10',
          title: 'with Statement Internals',
          description: 'Understand how the with statement works internally using __enter__() and __exit__() methods',
          difficulty: 'advanced',
          estimatedTime: '15 min',
          prerequisites: ['py-15-9'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-15-11',
          title: 'Regular Expressions',
          description: 'Match and manipulate text patterns using regular expression syntax and concepts',
          difficulty: 'advanced',
          estimatedTime: '30 min',
          prerequisites: ['py-3-8'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-15-12',
          title: 're Module',
          description: 'Use Python\'s re module functions like search(), match(), findall(), and sub() for pattern matching',
          difficulty: 'advanced',
          estimatedTime: '25 min',
          prerequisites: ['py-15-11', 'py-11-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-15-13',
          title: 'Type Hints',
          description: 'Add static type annotations to variables, parameters, and return values for better tooling support',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-9-23'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-15-14',
          title: 'Dataclasses',
          description: 'Reduce boilerplate code for data-holding classes using the @dataclass decorator',
          difficulty: 'advanced',
          estimatedTime: '20 min',
          prerequisites: ['py-14-6', 'py-15-13'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-15-15',
          title: 'Enumerations',
          description: 'Create sets of named constants using the enum module for cleaner and safer code',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-14-2', 'py-11-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-15-16',
          title: 'Unpacking Operators',
          description: 'Use * and ** operators for unpacking iterables and dictionaries in function calls and assignments',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-9-15', 'py-9-16'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-15-17',
          title: 'Walrus Operator',
          description: 'Assign values within expressions using the := walrus operator introduced in Python 3.8',
          difficulty: 'intermediate',
          estimatedTime: '10 min',
          prerequisites: ['py-1-15', 'py-4-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-15-18',
          title: 'Async Programming',
          description: 'Understand asynchronous programming concepts and how Python handles concurrent tasks',
          difficulty: 'advanced',
          estimatedTime: '25 min',
          prerequisites: ['py-9-19', 'py-15-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-15-19',
          title: 'async and await',
          description: 'Write asynchronous functions using async def and await keywords with the asyncio module',
          difficulty: 'advanced',
          estimatedTime: '25 min',
          prerequisites: ['py-15-18'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-15-20',
          title: 'Multithreading',
          description: 'Run multiple threads concurrently using the threading module for I/O-bound tasks',
          difficulty: 'advanced',
          estimatedTime: '25 min',
          prerequisites: ['py-15-18', 'py-11-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-15-21',
          title: 'Multiprocessing',
          description: 'Run multiple processes in parallel using the multiprocessing module for CPU-bound tasks',
          difficulty: 'advanced',
          estimatedTime: '25 min',
          prerequisites: ['py-15-20'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-15-22',
          title: 'GIL Concepts',
          description: 'Understand the Global Interpreter Lock and its impact on multi-threaded Python programs',
          difficulty: 'advanced',
          estimatedTime: '15 min',
          prerequisites: ['py-15-20'],
          hasPlayground: false,
          hasVisualization: true
        },
        {
          id: 'py-15-23',
          title: 'Memory Management',
          description: 'Learn how Python manages memory allocation, reference counting, and object storage',
          difficulty: 'advanced',
          estimatedTime: '20 min',
          prerequisites: ['py-14-3', 'py-1-18'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-15-24',
          title: 'Garbage Collection',
          description: 'Understand how Python automatically reclaims memory from unused objects using garbage collection',
          difficulty: 'advanced',
          estimatedTime: '15 min',
          prerequisites: ['py-15-23'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-15-25',
          title: 'Shallow vs Deep Copy',
          description: 'Master the differences between shallow and deep copies of complex objects and when to use each',
          difficulty: 'advanced',
          estimatedTime: '15 min',
          prerequisites: ['py-5-24', 'py-15-23'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 16: DATABASE AND PYTHON
    // =========================================================================
    {
      id: 'py-level-16',
      number: 16,
      title: 'Database and Python',
      description: 'Connect Python to databases and perform CRUD operations using SQL',
      topics: [
        {
          id: 'py-16-1',
          title: 'Database Introduction',
          description: 'Understand what databases are, types of databases, and why they are essential for applications',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-13-13'],
          hasPlayground: false,
          hasVisualization: true
        },
        {
          id: 'py-16-2',
          title: 'SQL Basics',
          description: 'Learn the fundamentals of Structured Query Language for interacting with relational databases',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['py-16-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-16-3',
          title: 'SQLite',
          description: 'Work with SQLite, a lightweight serverless database engine included with Python',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-16-2', 'py-11-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-16-4',
          title: 'Connecting Python to Databases',
          description: 'Establish connections between Python programs and databases using the sqlite3 module',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-16-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-16-5',
          title: 'CREATE',
          description: 'Create database tables with defined columns and data types using the CREATE TABLE statement',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-16-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-16-6',
          title: 'INSERT',
          description: 'Add new rows of data into database tables using the INSERT INTO statement',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-16-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-16-7',
          title: 'SELECT',
          description: 'Retrieve data from database tables using the SELECT statement with various options',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-16-6'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-16-8',
          title: 'UPDATE',
          description: 'Modify existing data in database tables using the UPDATE statement',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-16-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-16-9',
          title: 'DELETE',
          description: 'Remove rows from database tables using the DELETE statement with conditions',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-16-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-16-10',
          title: 'WHERE Clause',
          description: 'Filter database results using the WHERE clause with comparison and logical operators',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-16-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-16-11',
          title: 'ORDER BY',
          description: 'Sort query results in ascending or descending order using the ORDER BY clause',
          difficulty: 'intermediate',
          estimatedTime: '10 min',
          prerequisites: ['py-16-10'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-16-12',
          title: 'JOIN',
          description: 'Combine data from multiple tables using INNER JOIN, LEFT JOIN, and other join types',
          difficulty: 'advanced',
          estimatedTime: '25 min',
          prerequisites: ['py-16-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'py-16-13',
          title: 'CRUD Operations',
          description: 'Build complete Create, Read, Update, and Delete workflows with Python and SQLite',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['py-16-6', 'py-16-7', 'py-16-8', 'py-16-9'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-16-14',
          title: 'Python Database Projects',
          description: 'Build practical database-driven Python applications like contact managers and todo apps',
          difficulty: 'advanced',
          estimatedTime: '45 min',
          prerequisites: ['py-16-13', 'py-12-5'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 17: TESTING AND DEVELOPMENT TOOLS
    // =========================================================================
    {
      id: 'py-level-17',
      number: 17,
      title: 'Testing and Development Tools',
      description: 'Debug, test, version control, and interact with APIs using professional development tools',
      topics: [
        {
          id: 'py-17-1',
          title: 'Debugging',
          description: 'Learn techniques and strategies for finding and fixing bugs in your Python programs',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-12-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-17-2',
          title: 'Breakpoints',
          description: 'Set breakpoints to pause program execution and inspect state using pdb or IDE debuggers',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-17-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-17-3',
          title: 'Logging',
          description: 'Record program events and errors using the logging module instead of print statements',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-17-1', 'py-11-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-17-4',
          title: 'unittest',
          description: 'Write and run unit tests using Python\'s built-in unittest framework',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['py-14-15', 'py-11-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-17-5',
          title: 'pytest',
          description: 'Use the popular pytest framework for writing simpler and more expressive tests',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['py-17-4', 'py-11-13'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-17-6',
          title: 'Assertions',
          description: 'Verify conditions during development using assert statements to catch bugs early',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-17-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-17-7',
          title: 'Git Basics',
          description: 'Track code changes and manage versions using Git\'s core commands and workflows',
          difficulty: 'beginner',
          estimatedTime: '25 min',
          prerequisites: ['py-1-3'],
          hasPlayground: false,
          hasVisualization: false
        },
        {
          id: 'py-17-8',
          title: 'GitHub Basics',
          description: 'Host code repositories and collaborate with others using GitHub\'s platform features',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['py-17-7'],
          hasPlayground: false,
          hasVisualization: false
        },
        {
          id: 'py-17-9',
          title: 'API Introduction',
          description: 'Understand what APIs are and how they enable communication between software applications',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-8-3', 'py-13-13'],
          hasPlayground: false,
          hasVisualization: true
        },
        {
          id: 'py-17-10',
          title: 'HTTP Methods',
          description: 'Learn about GET, POST, PUT, DELETE, and other HTTP methods used in web APIs',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['py-17-9'],
          hasPlayground: false,
          hasVisualization: false
        },
        {
          id: 'py-17-11',
          title: 'JSON APIs',
          description: 'Work with REST APIs that use JSON format for data exchange between client and server',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['py-17-10', 'py-13-13'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'py-17-12',
          title: 'requests Library',
          description: 'Make HTTP requests to web APIs using the popular requests library in Python',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['py-17-11', 'py-11-13'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    }
  ]
};
