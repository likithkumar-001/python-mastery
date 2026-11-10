// ============================================================
// PRACTICE QUESTIONS REPOSITORY
// Minimum 5 questions per topic, categorized into Easy, Medium, Hard
// Includes hints, test cases, and hidden solutions
// ============================================================

window.Questions = {
    // --------------------------------------------------------
    // PYTHON FUNDAMENTALS - PRINT() & OPERATORS
    // --------------------------------------------------------
    'py-1-5': [
        {
            difficulty: 'easy',
            question: "Write a program using `print()` that prints the text 'Python' and 'Mastery' separated by three hyphens '---' and ending with an exclamation mark '!' instead of a newline.",
            testCases: [
                { input: "None", expected: "Python---Mastery!" }
            ],
            hints: [
                "Think about the keyword arguments available inside the `print()` function.",
                "Use `sep='---'` to set the separator.",
                "Use `end='!'` to set what appears at the end."
            ],
            solution: "print('Python', 'Mastery', sep='---', end='!')",
            explanation: "`sep` controls what is placed between arguments, while `end` controls what is appended after the last argument."
        },
        {
            difficulty: 'easy',
            question: "Print a countdown sequence `3... 2... 1... GO!` on a single line using a single or multiple `print()` statements with custom `end` parameters.",
            testCases: [
                { input: "None", expected: "3... 2... 1... GO!" }
            ],
            hints: [
                "Pass `end=' '` in sequential print statements to prevent line breaks.",
                "Combine numbers and text gracefully."
            ],
            solution: "print('3...', end=' ')\nprint('2...', end=' ')\nprint('1...', end=' ')\nprint('GO!')",
            explanation: "Overriding `end` prevents the default newline `\\n` behavior."
        },
        {
            difficulty: 'medium',
            question: "Format a shopping receipt line. Given item = 'Notebook', quantity = 3, and price_each = 4.5, print: `Item: Notebook | Qty: 3 | Total: $13.50` using f-strings with price formatted to exactly two decimal places.",
            testCases: [
                { input: "Notebook, 3, 4.5", expected: "Item: Notebook | Qty: 3 | Total: $13.50" }
            ],
            hints: [
                "Calculate total as quantity * price_each.",
                "In f-strings, format float decimals using `:.2f` syntax."
            ],
            solution: "item = 'Notebook'\nqty = 3\nprice = 4.5\ntotal = qty * price\nprint(f'Item: {item} | Qty: {qty} | Total: ${total:.2f}')",
            explanation: "`{total:.2f}` forces two decimal digits for currency display."
        },
        {
            difficulty: 'medium',
            question: "Given a list of words `['data', 'structures', 'algorithms']`, print them joined by `' -> '` without using the `.join()` method, using only `print()` with argument unpacking `*`.",
            testCases: [
                { input: "['data', 'structures', 'algorithms']", expected: "data -> structures -> algorithms" }
            ],
            hints: [
                "The `*` operator unrolls a collection into individual function arguments.",
                "Combine `*words` with `sep=' -> '` inside `print()`."
            ],
            solution: "words = ['data', 'structures', 'algorithms']\nprint(*words, sep=' -> ')",
            explanation: "`*words` unpacks the 3 elements into individual arguments passed directly to `print()`."
        },
        {
            difficulty: 'hard',
            question: "Design an ASCII art border banner printer. Given a message string like `'LEARN PYTHON'`, print it enclosed inside an exact box of asterisks `*` with 1 space of padding on all sides.",
            testCases: [
                { input: "'LEARN PYTHON'", expected: "****************\n* LEARN PYTHON *\n****************" }
            ],
            hints: [
                "Measure the length of message using `len(msg)`.",
                "Total banner width is `len(msg) + 4` (for `* ` on left and ` *` on right).",
                "Repeat string using `*` operator: `'*' * width`."
            ],
            solution: "msg = 'LEARN PYTHON'\nwidth = len(msg) + 4\nprint('*' * width)\nprint(f'* {msg} *')\nprint('*' * width)",
            explanation: "String multiplication `'*' * width` dynamically sizes the border according to the message length."
        }
    ],

    // --------------------------------------------------------
    // LEVEL 2: CONDITIONALS
    // --------------------------------------------------------
    'py-2-1': [
        {
            difficulty: 'easy',
            question: "Write a function `check_even_odd(n)` that returns `'Even'` if integer n is divisible by 2 and `'Odd'` otherwise.",
            testCases: [
                { input: "4", expected: "'Even'" },
                { input: "7", expected: "'Odd'" }
            ],
            hints: [
                "Use the modulo operator `%`.",
                "Check `if n % 2 == 0:`."
            ],
            solution: "def check_even_odd(n):\n    return 'Even' if n % 2 == 0 else 'Odd'",
            explanation: "The ternary operator `A if cond else B` cleanly yields the appropriate result."
        },
        {
            difficulty: 'easy',
            question: "Write a function `is_leap_year(year)` that returns `True` if a year is a leap year according to the Gregorian calendar, else `False`.",
            testCases: [
                { input: "2024", expected: "True" },
                { input: "1900", expected: "False" },
                { input: "2000", expected: "True" }
            ],
            hints: [
                "A year is leap if divisible by 4, except end-of-century years which must be divisible by 400.",
                "Formula: `(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)`."
            ],
            solution: "def is_leap_year(year):\n    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)",
            explanation: "Century years like 1900 are not leap years, whereas 2000 is because it's divisible by 400."
        },
        {
            difficulty: 'medium',
            question: "Write a function `ticket_price(age, is_student)` that returns: 0 for toddlers (< 4), $10 for children (4-12), $15 for seniors (65+), $12 for students of any age (13-64), and $20 for standard adults.",
            testCases: [
                { input: "age=3, is_student=False", expected: "0" },
                { input: "age=20, is_student=True", expected: "12" },
                { input: "age=35, is_student=False", expected: "20" }
            ],
            hints: [
                "Structure your conditions from the most specific / youngest age up to older brackets.",
                "Check `age < 4` first, then `age <= 12`, then check `age >= 65` before handling students."
            ],
            solution: "def ticket_price(age, is_student):\n    if age < 4:\n        return 0\n    elif age <= 12:\n        return 10\n    elif age >= 65:\n        return 15\n    elif is_student:\n        return 12\n    else:\n        return 20",
            explanation: "Ordered conditions guarantee correct tier application without conflicting logic."
        },
        {
            difficulty: 'medium',
            question: "Write a function `fizz_buzz(n)` that returns `'FizzBuzz'` if n is divisible by both 3 and 5, `'Fizz'` if divisible only by 3, `'Buzz'` if divisible only by 5, and string of `str(n)` otherwise.",
            testCases: [
                { input: "15", expected: "'FizzBuzz'" },
                { input: "9", expected: "'Fizz'" },
                { input: "10", expected: "'Buzz'" },
                { input: "7", expected: "'7'" }
            ],
            hints: [
                "Check the combined condition `n % 15 == 0` first!",
                "If you check `% 3` first, `% 15` will never be reached."
            ],
            solution: "def fizz_buzz(n):\n    if n % 15 == 0:\n        return 'FizzBuzz'\n    elif n % 3 == 0:\n        return 'Fizz'\n    elif n % 5 == 0:\n        return 'Buzz'\n    return str(n)",
            explanation: "Checking the most restrictive condition first prevents early false positives."
        },
        {
            difficulty: 'hard',
            question: "Implement a rock-paper-scissors referee function `play_rps(p1, p2)` that takes choices from `'rock'`, `'paper'`, `'scissors'` and returns `'Player 1 wins'`, `'Player 2 wins'`, or `'Tie'` without using 9 nested if-else statements.",
            testCases: [
                { input: "'rock', 'scissors'", expected: "'Player 1 wins'" },
                { input: "'paper', 'paper'", expected: "'Tie'" },
                { input: "'rock', 'paper'", expected: "'Player 2 wins'" }
            ],
            hints: [
                "First handle `if p1 == p2: return 'Tie'`.",
                "Map each move to what it defeats using a dictionary or tuple pairs."
            ],
            solution: "def play_rps(p1, p2):\n    if p1 == p2:\n        return 'Tie'\n    wins = {'rock': 'scissors', 'scissors': 'paper', 'paper': 'rock'}\n    if wins[p1] == p2:\n        return 'Player 1 wins'\n    return 'Player 2 wins'",
            explanation: "Using a winning lookup map `{move: defeats}` collapses 9 conditionals into O(1) clean code."
        }
    ],

    // --------------------------------------------------------
    // DSA LEVEL 2 - ARRAYS & TWO POINTERS
    // --------------------------------------------------------
    'dsa-2-8': [
        {
            difficulty: 'easy',
            question: "Given a 1-indexed sorted array of integers `numbers` and an integer `target`, return the indices of the two numbers such that they add up to `target`. Must use O(1) extra space.",
            testCases: [
                { input: "numbers=[2, 7, 11, 15], target=9", expected: "[1, 2]" },
                { input: "numbers=[2, 3, 4], target=6", expected: "[1, 3]" }
            ],
            hints: [
                "Since the array is sorted, place pointer L at index 0 and R at the last element.",
                "If `numbers[L] + numbers[R] > target`, we must decrease the sum, so move R to the left.",
                "If sum < target, move L to the right."
            ],
            solution: "def two_sum_ii(numbers, target):\n    l, r = 0, len(numbers) - 1\n    while l < r:\n        s = numbers[l] + numbers[r]\n        if s == target:\n            return [l + 1, r + 1] # 1-indexed\n        elif s < target:\n            l += 1\n        else:\n            r -= 1\n    return []",
            explanation: "Two pointers converge in O(n) time and O(1) space on a sorted array."
        },
        {
            difficulty: 'easy',
            question: "Valid Palindrome: Given a string `s`, return `True` if it is a palindrome considering only alphanumeric characters and ignoring cases.",
            testCases: [
                { input: "'A man, a plan, a canal: Panama'", expected: "True" },
                { input: "'race a car'", expected: "False" }
            ],
            hints: [
                "Use two pointers L at 0, R at len(s)-1.",
                "Advance L if `not s[L].isalnum()`, decrement R if `not s[R].isalnum()`.",
                "Compare lowercase equivalents."
            ],
            solution: "def is_palindrome(s):\n    l, r = 0, len(s) - 1\n    while l < r:\n        while l < r and not s[l].isalnum(): l += 1\n        while l < r and not s[r].isalnum(): r -= 1\n        if s[l].lower() != s[r].lower():\n            return False\n        l, r = l + 1, r - 1\n    return True",
            explanation: "Two pointers check characters inwards while skipping non-alphanumeric punctuation in O(n) time and O(1) space."
        },
        {
            difficulty: 'medium',
            question: "Container With Most Water: Given n non-negative integers `height` where each represents a point at coordinate (i, height[i]), find two lines that together with the x-axis form a container containing the most water.",
            testCases: [
                { input: "[1,8,6,2,5,4,8,3,7]", expected: "49" },
                { input: "[1,1]", expected: "1" }
            ],
            hints: [
                "Area is determined by `min(height[L], height[R]) * (R - L)`.",
                "Always move the pointer pointing to the shorter vertical bar inwards, because moving the taller one can never increase area."
            ],
            solution: "def max_area(height):\n    l, r = 0, len(height) - 1\n    max_w = 0\n    while l < r:\n        h = min(height[l], height[r])\n        max_w = max(max_w, h * (r - l))\n        if height[l] < height[r]:\n            l += 1\n        else:\n            r -= 1\n    return max_w",
            explanation: "O(n) time complexity since each step discards the limiting boundary."
        },
        {
            difficulty: 'medium',
            question: "3Sum: Given an integer array `nums`, return all the unique triplets `[nums[i], nums[j], nums[k]]` such that `i != j != k` and `nums[i] + nums[j] + nums[k] == 0`.",
            testCases: [
                { input: "[-1, 0, 1, 2, -1, -4]", expected: "[[-1, -1, 2], [-1, 0, 1]]" }
            ],
            hints: [
                "Sort the array first in O(n log n).",
                "Fix one element `nums[i]` and use Two-Pointers for the remaining subarray to find pairs summing to `-nums[i]`.",
                "Skip duplicate elements to avoid redundant triplets in results."
            ],
            solution: "def three_sum(nums):\n    nums.sort()\n    res = []\n    for i in range(len(nums) - 2):\n        if i > 0 and nums[i] == nums[i - 1]: continue\n        l, r = i + 1, len(nums) - 1\n        while l < r:\n            s = nums[i] + nums[l] + nums[r]\n            if s == 0:\n                res.append([nums[i], nums[l], nums[r]])\n                while l < r and nums[l] == nums[l + 1]: l += 1\n                while l < r and nums[r] == nums[r - 1]: r -= 1\n                l, r = l + 1, r - 1\n            elif s < 0: l += 1\n            else: r -= 1\n    return res",
            explanation: "Sorting plus two-pointers gives O(n²) time complexity, much better than O(n³) brute force."
        },
        {
            difficulty: 'hard',
            question: "Trapping Rain Water: Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
            testCases: [
                { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", expected: "6" },
                { input: "[4,2,0,3,2,5]", expected: "9" }
            ],
            hints: [
                "Water trapped at index i is `max(0, min(max_left, max_right) - height[i])`.",
                "Solve in O(1) space using two pointers tracking `left_max` and `right_max`."
            ],
            solution: "def trap(height):\n    if not height: return 0\n    l, r = 0, len(height) - 1\n    l_max, r_max = height[l], height[r]\n    water = 0\n    while l < r:\n        if l_max < r_max:\n            l += 1\n            l_max = max(l_max, height[l])\n            water += l_max - height[l]\n        else:\n            r -= 1\n            r_max = max(r_max, height[r])\n            water += r_max - height[r]\n    return water",
            explanation: "The two-pointer technique solves Trapping Rain Water in optimal O(n) time and O(1) auxiliary space."
        }
    ],

    // --------------------------------------------------------
    // DSA LEVEL 4 - BINARY SEARCH
    // --------------------------------------------------------
    'dsa-4-2': [
        {
            difficulty: 'easy',
            question: "Implement standard Binary Search: Return index of target in sorted array, or -1 if not found.",
            testCases: [
                { input: "nums=[-1,0,3,5,9,12], target=9", expected: "4" },
                { input: "nums=[-1,0,3,5,9,12], target=2", expected: "-1" }
            ],
            hints: ["Use `mid = (low + high) // 2`."],
            solution: "def search(nums, target):\n    l, r = 0, len(nums) - 1\n    while l <= r:\n        m = (l + r) // 2\n        if nums[m] == target: return m\n        elif nums[m] < target: l = m + 1\n        else: r = m - 1\n    return -1",
            explanation: "Divides search range by 2 each iteration, achieving O(log n)."
        },
        {
            difficulty: 'easy',
            question: "Find First and Last Position of Element in Sorted Array: Given array sorted in non-decreasing order, return `[first, last]` indices of target in O(log n).",
            testCases: [
                { input: "nums=[5,7,7,8,8,10], target=8", expected: "[3, 4]" },
                { input: "nums=[5,7,7,8,8,10], target=6", expected: "[-1, -1]" }
            ],
            hints: ["Run two binary searches: one biased to search left on match, one biased right."],
            solution: "def search_range(nums, target):\n    def find_bound(first):\n        l, r, ans = 0, len(nums) - 1, -1\n        while l <= r:\n            m = (l + r) // 2\n            if nums[m] == target:\n                ans = m\n                if first: r = m - 1\n                else: l = m + 1\n            elif nums[m] < target: l = m + 1\n            else: r = m - 1\n        return ans\n    return [find_bound(True), find_bound(False)]",
            explanation: "Two O(log n) binary search passes locate the exact boundaries."
        },
        {
            difficulty: 'medium',
            question: "Search in Rotated Sorted Array: An integer array sorted in ascending order is rotated at an unknown pivot. Find index of target in O(log n) time.",
            testCases: [
                { input: "nums=[4,5,6,7,0,1,2], target=0", expected: "4" },
                { input: "nums=[4,5,6,7,0,1,2], target=3", expected: "-1" }
            ],
            hints: [
                "Notice that one half of the array (either left or right of mid) is always strictly sorted.",
                "Check if target lies inside the sorted half."
            ],
            solution: "def search_rotated(nums, target):\n    l, r = 0, len(nums) - 1\n    while l <= r:\n        m = (l + r) // 2\n        if nums[m] == target: return m\n        if nums[l] <= nums[m]: # Left half is sorted\n            if nums[l] <= target < nums[m]: r = m - 1\n            else: l = m + 1\n        else: # Right half is sorted\n            if nums[m] < target <= nums[r]: l = m + 1\n            else: r = m - 1\n    return -1",
            explanation: "Leveraging the sorted invariant maintains O(log n) even through pivot rotations."
        },
        {
            difficulty: 'medium',
            question: "Find Peak Element: An element is a peak if strictly greater than its neighbors. Given array nums, find a peak index in O(log n).",
            testCases: [
                { input: "nums=[1,2,3,1]", expected: "2" },
                { input: "nums=[1,2,1,3,5,6,4]", expected: "5 (or 1)" }
            ],
            hints: [
                "Compare `nums[mid]` with `nums[mid + 1]`.",
                "If `nums[mid] < nums[mid + 1]`, there must be a peak on the right side."
            ],
            solution: "def find_peak(nums):\n    l, r = 0, len(nums) - 1\n    while l < r:\n        m = (l + r) // 2\n        if nums[m] < nums[m + 1]:\n            l = m + 1\n        else:\n            r = m\n    return l",
            explanation: "Following the ascending slope guarantees finding a local maximum in O(log n)."
        },
        {
            difficulty: 'hard',
            question: "Koko Eating Bananas (Binary Search on Answer): Koko eats bananas from piles. Guard returns in `h` hours. Find minimum integer eating speed `k` per hour to eat all bananas within `h` hours.",
            testCases: [
                { input: "piles=[3,6,7,11], h=8", expected: "4" },
                { input: "piles=[30,11,23,4,20], h=5", expected: "30" }
            ],
            hints: [
                "Search space for k is between `1` and `max(piles)`.",
                "For a given k, hours needed is `sum(math.ceil(p / k) for p in piles)`.",
                "Binary search for the smallest k where hours <= h."
            ],
            solution: "import math\ndef min_eating_speed(piles, h):\n    low, high = 1, max(piles)\n    ans = high\n    while low <= high:\n        k = (low + high) // 2\n        hours = sum(math.ceil(p / k) for p in piles)\n        if hours <= h:\n            ans = k\n            high = k - 1 # Try to find smaller speed\n        else:\n            low = k + 1\n    return ans",
            explanation: "Binary Search on Answer tests monotonicity in O(N log(max_pile)) time."
        }
    ]
};
