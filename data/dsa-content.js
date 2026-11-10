// ============================================================
// DSA MASTERY - Comprehensive Topic Content
// Foundations to Advanced DSA formatted strictly per requirement
// ============================================================

window.DSAContent = {
    // --------------------------------------------------------
    // LEVEL 1: FOUNDATIONS
    // --------------------------------------------------------
    'dsa-1-1': {
        definition: "Data Structures and Algorithms (DSA) is the study of how data is systematically organized, stored, and managed (Data Structures) alongside finite step-by-step procedures designed to solve specific computational problems (Algorithms).",
        whyUse: "DSA is the core foundation of software engineering and computer science. It teaches you how to write code that scales gracefully from handling 10 items to billions of items without crashing or consuming unmanageable memory.",
        concepts: [
            "Data Structure: A specialized format for organizing, processing, retrieving and storing data (e.g. Arrays, Trees, Graphs).",
            "Algorithm: A well-defined computational procedure that takes an input and produces an output.",
            "Scalability & Resource Trade-offs: Balancing CPU cycles (time) against RAM consumption (space)."
        ],
        syntax: "# Measuring execution efficiency in Python\nimport time\nt0 = time.time()\n# algorithm logic\nt1 = time.time()",
        syntaxExplanation: "We evaluate algorithms mathematically using asymptotic analysis rather than purely wall-clock time, ensuring independent evaluation of hardware differences.",
        examples: [
            {
                title: "Linear Search vs Direct Calculation",
                description: "Sum of first N integers: O(n) loop vs O(1) mathematical formula.",
                code: "n = 1000000\n# Approach 1: O(n) loop\ndef sum_loop(n):\n    s = 0\n    for i in range(1, n + 1):\n        s += i\n    return s\n\n# Approach 2: O(1) Gauss formula\ndef sum_math(n):\n    return n * (n + 1) // 2\n\nprint('Math Result:', sum_math(n))",
                output: "Math Result: 500000500000"
            }
        ],
        commonMistakes: [
            {
                wrong: "Assuming faster hardware eliminates the need for optimal algorithms.",
                right: "An O(n^2) algorithm on a supercomputer is outpaced by an O(n log n) algorithm on a smartphone for large n.",
                explanation: "Asymptotic growth rate dominates hardware execution speed as dataset size grows."
            }
        ],
        complexity: [
            { operation: "Sum formula n*(n+1)//2", time: "O(1)", space: "O(1)" },
            { operation: "Sum loop 1..n", time: "O(n)", space: "O(1)" }
        ],
        keyTakeaways: [
            "DSA equips you with problem-solving patterns applicable to any programming language.",
            "Always analyze algorithm efficiency before jumping into coding."
        ]
    },

    'dsa-1-4': {
        definition: "Time complexity quantifies the amount of time an algorithm takes to run as a function of the length of the input, expressed via asymptotic Big O notation.",
        whyUse: "It allows software engineers to predict performance bottlenecks, evaluate trade-offs between different approaches, and choose optimal algorithms for production.",
        concepts: [
            "Big O (O): Upper bound / worst-case execution time guarantee.",
            "Big Omega (Ω): Lower bound / best-case scenario.",
            "Big Theta (Θ): Tight bound (both upper and lower bound match).",
            "Dominant terms: Drop lower-order terms and constant coefficients as n -> infinity."
        ],
        syntax: "T(n) = O(f(n))",
        types: [
            { name: "O(1) Constant", description: "Operation completes in same time regardless of input size", example: "arr[0] or dict[key]" },
            { name: "O(log n) Logarithmic", description: "Problem size halved each step", example: "Binary search in sorted array" },
            { name: "O(n) Linear", description: "Time grows proportionally with input size", example: "Single pass through an array" },
            { name: "O(n log n) Linearithmic", description: "Efficient sorting algorithms", example: "Merge Sort, Quick Sort (avg), Heap Sort" },
            { name: "O(n²) Quadratic", description: "Nested loops over input", example: "Bubble Sort, Selection Sort" }
        ],
        examples: [
            {
                title: "Comparing Growth Rates",
                code: "# For n = 1000:\n# O(1)        ~ 1 op\n# O(log n)    ~ 10 ops\n# O(n)        ~ 1,000 ops\n# O(n log n)  ~ 10,000 ops\n# O(n^2)      ~ 1,000,000 ops\n# O(2^n)      ~ 10^301 ops (impossible to compute!)\nprint('Logarithmic search takes ~10 operations for 1,000 elements!')",
                output: "Logarithmic search takes ~10 operations for 1,000 elements!"
            }
        ],
        commonMistakes: [
            {
                wrong: "O(2n + 5) -> Stating constants in Big O",
                right: "O(n) -> Drop multiplicative constants and additions",
                explanation: "Asymptotic notation focuses solely on the rate of growth as n approaches infinity."
            }
        ],
        complexity: [
            { operation: "Constant O(1)", time: "O(1)", space: "O(1)" },
            { operation: "Logarithmic O(log n)", time: "O(log n)", space: "O(1)" }
        ],
        keyTakeaways: [
            "In tech interviews, stating the Time and Space complexity is mandatory for every solution."
        ]
    },

    // --------------------------------------------------------
    // LEVEL 2: ARRAYS & TWO POINTERS
    // --------------------------------------------------------
    'dsa-2-8': {
        definition: "The Two-Pointer technique uses two reference pointers that traverse a sequence (typically an array or string) either in opposing directions or in tandem at different speeds.",
        whyUse: "It transforms brute-force O(n²) pair-matching or partitioning problems into blazing fast O(n) single-pass solutions.",
        concepts: [
            "Opposite Ends: Pointer L starts at 0, R starts at n-1, converging inwards (e.g. Two Sum on sorted array, Palindrome).",
            "Same Direction (Fast & Slow): Pointers start at 0 and move at differing speeds (e.g. Remove duplicates in-place, cycle detection).",
            "Sorted invariant: Sorting enables informed pointer movements based on sum comparisons."
        ],
        syntax: "left, right = 0, len(arr) - 1\nwhile left < right:\n    current_sum = arr[left] + arr[right]\n    if current_sum == target: return (left, right)\n    elif current_sum < target: left += 1\n    else: right -= 1",
        examples: [
            {
                title: "Two Sum on Sorted Array (O(n) time, O(1) space)",
                code: "def two_sum_sorted(nums, target):\n    left, right = 0, len(nums) - 1\n    while left < right:\n        s = nums[left] + nums[right]\n        if s == target:\n            return [left, right]\n        elif s < target:\n            left += 1\n        else:\n            right -= 1\n    return []\n\nprint('Indices:', two_sum_sorted([2, 7, 11, 15], 9))",
                output: "Indices: [0, 1]"
            }
        ],
        commonMistakes: [
            {
                wrong: "Using opposite-direction pointers on an unsorted array for sum problems",
                right: "Ensure array is sorted before applying the two-pointer sum technique",
                explanation: "Opposite pointers depend strictly on monotonic ordering to decide whether to increment left or decrement right."
            }
        ],
        complexity: [
            { operation: "Two-pointer traversal", time: "O(n)", space: "O(1)" }
        ],
        keyTakeaways: [
            "Replaces nested O(n²) loops with a single O(n) pass.",
            "Conserves memory with O(1) auxiliary space."
        ]
    },

    // --------------------------------------------------------
    // LEVEL 4: SEARCHING
    // --------------------------------------------------------
    'dsa-4-2': {
        definition: "Binary Search is a divide-and-conquer search algorithm that repeatedly halves the search space of a sorted array until the target value is found or search interval is exhausted.",
        whyUse: "It reduces search time from O(n) linear search to O(log n), allowing you to search 1 billion elements in just ~30 comparisons.",
        concepts: [
            "Requires the input collection to be sorted.",
            "Calculate mid safely: `mid = left + (right - left) // 2` to prevent potential integer overflow.",
            "If `arr[mid] == target`, return `mid`.",
            "If `arr[mid] < target`, discard left half: `left = mid + 1`.",
            "If `arr[mid] > target`, discard right half: `right = mid - 1`."
        ],
        syntax: "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1",
        examples: [
            {
                title: "Standard Iterative Binary Search",
                code: "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n\nnumbers = [3, 8, 12, 19, 25, 33, 47, 56]\nidx = binary_search(numbers, 25)\nprint('Element 25 found at index:', idx)",
                output: "Element 25 found at index: 4"
            }
        ],
        commonMistakes: [
            {
                wrong: "while low < high:  # Missing equal sign can skip single-element checks",
                right: "while low <= high:",
                explanation: "When `low == high`, there is still one candidate element at `mid` that must be evaluated."
            }
        ],
        complexity: [
            { operation: "Binary Search", time: "O(log n)", space: "O(1) iterative" }
        ],
        keyTakeaways: [
            "Binary search can be generalized to search over the answer space for monotonic functions ('Binary Search on Answer')."
        ]
    },

    // --------------------------------------------------------
    // LEVEL 5: SORTING
    // --------------------------------------------------------
    'dsa-5-4': {
        definition: "Merge Sort is a stable, divide-and-conquer comparison sorting algorithm that recursively splits an array into halves until singletons remain, then merges the sorted halves back together.",
        whyUse: "Merge Sort guarantees predictable O(n log n) worst-case performance, unlike Quick Sort which can degrade to O(n²).",
        concepts: [
            "Divide: Divide array at midpoint into left and right subarrays.",
            "Conquer: Recursively sort left and right halves.",
            "Combine: Merge two sorted subarrays using two pointers into one unified sorted array.",
            "Stability: Preserves the relative order of equal elements."
        ],
        syntax: "def merge_sort(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)",
        examples: [
            {
                title: "Complete Merge Sort Implementation",
                code: "def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    \n    # Merge procedure\n    merged = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            merged.append(left[i])\n            i += 1\n        else:\n            merged.append(right[j])\n            j += 1\n    merged.extend(left[i:])\n    merged.extend(right[j:])\n    return merged\n\nprint('Sorted:', merge_sort([38, 27, 43, 3, 9, 82, 10]))",
                output: "Sorted: [3, 9, 10, 27, 38, 43, 82]"
            }
        ],
        commonMistakes: [
            {
                wrong: "Forgetting base condition `if len(arr) <= 1: return arr`",
                right: "Always include the singleton / empty array base case",
                explanation: "Without a base condition, recursion enters infinite call recursion depth."
            }
        ],
        complexity: [
            { operation: "Best, Average, Worst Case", time: "O(n log n)", space: "O(n) auxiliary space" }
        ],
        keyTakeaways: [
            "Merge sort is the foundation of Timsort (Python's built-in `sorted()` and `.sort()`)."
        ]
    },

    // --------------------------------------------------------
    // LEVEL 7: LINKED LISTS
    // --------------------------------------------------------
    'dsa-7-1': {
        definition: "A Linked List is a linear data structure consisting of nodes where each node contains data and a reference (pointer) to the next node in sequence.",
        whyUse: "Linked lists allow O(1) dynamic insertion and deletion at any known node position without memory reallocation or shifting subsequent elements.",
        concepts: [
            "Node: Data + Next pointer.",
            "Head: Entry pointer to the first node of the list.",
            "Tail: Last node whose `next` pointer is `None`.",
            "Non-contiguous memory: Nodes reside in arbitrary heap locations."
        ],
        syntax: "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next",
        examples: [
            {
                title: "Reversing a Singly Linked List in O(n) Time and O(1) Space",
                code: "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverse_list(head):\n    prev = None\n    curr = head\n    while curr:\n        next_temp = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_temp\n    return prev\n\n# Construct 1 -> 2 -> 3\nhead = ListNode(1, ListNode(2, ListNode(3)))\nrev = reverse_list(head)\nvals = []\nwhile rev:\n    vals.append(str(rev.val))\n    rev = rev.next\nprint(' -> '.join(vals))",
                output: "3 -> 2 -> 1"
            }
        ],
        commonMistakes: [
            {
                wrong: "Losing the next pointer: `curr.next = prev` before saving `curr.next`",
                right: "`next_node = curr.next` saved in temp variable first",
                explanation: "Overwriting `curr.next` without a temporary variable permanently cuts access to the remainder of the list."
            }
        ],
        complexity: [
            { operation: "Prepend / Insert at head", time: "O(1)", space: "O(1)" },
            { operation: "Access / Search element at k", time: "O(k)", space: "O(1)" }
        ],
        keyTakeaways: [
            "Use a Dummy (Sentinel) node at the head to simplify edge cases during insertions and deletions."
        ]
    },

    // --------------------------------------------------------
    // LEVEL 11: TREES
    // --------------------------------------------------------
    'dsa-11-7': {
        definition: "A Binary Search Tree (BST) is a binary tree where every node satisfies the BST invariant: all keys in the left subtree are strictly smaller than the node's key, and all keys in the right subtree are strictly greater.",
        whyUse: "A balanced BST provides average O(log n) time complexity for search, insertion, deletion, minimum, and maximum operations.",
        concepts: [
            "Inorder Traversal (Left, Root, Right) of a BST produces elements in strictly ascending sorted order.",
            "Degeneration: In worst case (inserting sorted data), a BST degenerates into a linked list with O(n) operations.",
            "Self-balancing variants (AVL, Red-Black) prevent degradation."
        ],
        syntax: "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right",
        examples: [
            {
                title: "BST Insertion and Inorder Verification",
                code: "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef insert(root, val):\n    if not root: return TreeNode(val)\n    if val < root.val: root.left = insert(root.left, val)\n    else: root.right = insert(root.right, val)\n    return root\n\ndef inorder(root, res):\n    if root:\n        inorder(root.left, res)\n        res.append(root.val)\n        inorder(root.right, res)\n\nroot = None\nfor v in [50, 30, 70, 20, 40, 60, 80]:\n    root = insert(root, v)\nres = []\ninorder(root, res)\nprint('Inorder traversal (sorted):', res)",
                output: "Inorder traversal (sorted): [20, 30, 40, 50, 60, 70, 80]"
            }
        ],
        commonMistakes: [
            {
                wrong: "Checking only immediate children when validating a BST",
                right: "Pass min_val and max_val constraints down to recursive subtrees",
                explanation: "Every node in the entire left subtree must be less than the root, not just the direct left child."
            }
        ],
        complexity: [
            { operation: "Search / Insert / Delete (Balanced)", time: "O(log n)", space: "O(log n) recursion stack" },
            { operation: "Worst Case (Skewed BST)", time: "O(n)", space: "O(n)" }
        ],
        keyTakeaways: [
            "Inorder traversal of BST gives elements in sorted order."
        ]
    },

    // --------------------------------------------------------
    // LEVEL 14: DYNAMIC PROGRAMMING
    // --------------------------------------------------------
    'dsa-14-1': {
        definition: "Dynamic Programming (DP) is an algorithmic optimization paradigm that solves complex problems by breaking them down into simpler subproblems, solving each subproblem once, and storing their solutions in a lookup table (memoization or tabulation).",
        whyUse: "It turns exponential time O(2ⁿ) recursive algorithms into lightning-fast polynomial O(n) or O(n²) solutions by eliminating redundant calculations.",
        concepts: [
            "Overlapping Subproblems: Subproblems are computed repeatedly in a naive recursion tree.",
            "Optimal Substructure: The optimal solution to the problem can be constructed from optimal solutions of its subproblems.",
            "Top-Down (Memoization): Recursive approach augmented with a cache hash table / array.",
            "Bottom-Up (Tabulation): Iterative table-filling starting from the base cases."
        ],
        syntax: "# Bottom-Up Tabulation Pattern\ndp = [0] * (n + 1)\ndp[0], dp[1] = base_0, base_1\nfor i in range(2, n + 1):\n    dp[i] = transition_relation(dp[i-1], dp[i-2])",
        examples: [
            {
                title: "Climbing Stairs (n steps taking 1 or 2 steps at a time)",
                code: "def climb_stairs(n):\n    if n <= 2: return n\n    dp = [0] * (n + 1)\n    dp[1], dp[2] = 1, 2\n    for i in range(3, n + 1):\n        dp[i] = dp[i - 1] + dp[i - 2]\n    return dp[n]\n\nprint('Ways to climb 5 stairs:', climb_stairs(5))",
                output: "Ways to climb 5 stairs: 8"
            }
        ],
        commonMistakes: [
            {
                wrong: "Jumping directly into code without formulating the mathematical recurrence relation",
                right: "State the recurrence relation, base cases, and state dimensions clearly first",
                explanation: "DP is about identifying state representation: what subproblem does `dp[i]` actually represent?"
            }
        ],
        complexity: [
            { operation: "1D DP Tabulation", time: "O(n)", space: "O(n) or O(1) space optimized" }
        ],
        keyTakeaways: [
            "Identify DP: If a problem asks for min/max/count of ways with choices, investigate DP.",
            "If only the previous two states are needed, space can be optimized from O(n) to O(1)."
        ]
    }
};
