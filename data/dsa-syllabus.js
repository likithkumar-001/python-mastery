/**
 * DSA Syllabus Data
 * Complete Data Structures and Algorithms curriculum organized by levels.
 * Covers foundations through advanced topics across 15 progressive levels.
 */
window.DSASyllabus = {
  id: 'dsa',
  title: 'Data Structures and Algorithms',
  description: 'Complete DSA from foundations to advanced — master the building blocks of efficient software engineering.',
  levels: [
    // =========================================================================
    // LEVEL 1: FOUNDATIONS
    // =========================================================================
    {
      id: 'dsa-level-1',
      number: 1,
      title: 'Foundations',
      description: 'Understanding the basics of DSA — why it matters, how we measure efficiency, and the first steps into algorithmic thinking.',
      topics: [
        {
          id: 'dsa-1-1',
          title: 'What is DSA?',
          description: 'Introduction to the field of data structures and algorithms, why they are essential for every programmer, and how they form the backbone of computer science.',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: [],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-1-2',
          title: 'What is an Algorithm?',
          description: 'A step-by-step procedure for solving a problem. Learn the formal definition, properties of good algorithms, and how to express them in pseudocode.',
          difficulty: 'beginner',
          estimatedTime: '25 min',
          prerequisites: ['dsa-1-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-1-3',
          title: 'What is a Data Structure?',
          description: 'Understand how data is organized, stored, and accessed in memory. Explore the difference between primitive and non-primitive data structures.',
          difficulty: 'beginner',
          estimatedTime: '25 min',
          prerequisites: ['dsa-1-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-1-4',
          title: 'Time Complexity',
          description: 'Learn how to quantify the running time of an algorithm as the input size grows. Understand why constant factors are ignored in asymptotic analysis.',
          difficulty: 'beginner',
          estimatedTime: '30 min',
          prerequisites: ['dsa-1-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-1-5',
          title: 'Space Complexity',
          description: 'Measure the amount of memory an algorithm uses relative to the input size. Learn to distinguish between auxiliary space and total space.',
          difficulty: 'beginner',
          estimatedTime: '25 min',
          prerequisites: ['dsa-1-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-1-6',
          title: 'Big O Notation',
          description: 'The mathematical notation used to describe the upper bound of an algorithm\'s growth rate. Master the language every developer uses to talk about efficiency.',
          difficulty: 'beginner',
          estimatedTime: '35 min',
          prerequisites: ['dsa-1-4', 'dsa-1-5'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-1-7',
          title: 'O(1) — Constant Time',
          description: 'Operations that take the same amount of time regardless of input size. Examples include array indexing and hash table lookups.',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['dsa-1-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-1-8',
          title: 'O(log n) — Logarithmic Time',
          description: 'Algorithms that halve the problem size at each step. Understand why binary search and balanced-tree operations are logarithmic.',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['dsa-1-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-1-9',
          title: 'O(n) — Linear Time',
          description: 'Algorithms whose running time scales directly with the input size. Simple traversals and single-pass scans are classic examples.',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['dsa-1-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-1-10',
          title: 'O(n log n) — Linearithmic Time',
          description: 'The gold-standard complexity for comparison-based sorting. Understand why merge sort and quick sort (on average) achieve this bound.',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['dsa-1-8', 'dsa-1-9'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-1-11',
          title: 'O(n²) — Quadratic Time',
          description: 'Algorithms with nested iterations over the input, such as bubble sort and brute-force pair comparisons. Learn when quadratic is acceptable.',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['dsa-1-9'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-1-12',
          title: 'Best, Average, and Worst Cases',
          description: 'Understand the three scenarios used to analyze algorithm performance and why worst-case analysis is the most commonly reported.',
          difficulty: 'beginner',
          estimatedTime: '25 min',
          prerequisites: ['dsa-1-6'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-1-13',
          title: 'Time Complexity Analysis of Loops',
          description: 'Practice determining the Big O of single loops — counting iterations, recognizing arithmetic and geometric progressions in loop variables.',
          difficulty: 'beginner',
          estimatedTime: '30 min',
          prerequisites: ['dsa-1-6'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-1-14',
          title: 'Complexity of Nested Loops',
          description: 'Analyze doubly and triply nested loops. Learn how to multiply complexities of independent loops and add those of sequential loops.',
          difficulty: 'beginner',
          estimatedTime: '30 min',
          prerequisites: ['dsa-1-13'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-1-15',
          title: 'Recursion Introduction',
          description: 'Understand the concept of a function calling itself, identify base and recursive cases, and trace simple recursive calls on paper.',
          difficulty: 'beginner',
          estimatedTime: '35 min',
          prerequisites: ['dsa-1-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-1-16',
          title: 'Recursion Tree Basics',
          description: 'Visualize recursive calls as a tree to understand branching, depth, and how to compute time complexity from the tree structure.',
          difficulty: 'beginner',
          estimatedTime: '30 min',
          prerequisites: ['dsa-1-15', 'dsa-1-6'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 2: ARRAYS AND PYTHON LISTS
    // =========================================================================
    {
      id: 'dsa-level-2',
      number: 2,
      title: 'Arrays and Python Lists',
      description: 'Master the most fundamental data structure — arrays. Learn traversal, manipulation, and powerful techniques like two pointers and sliding window.',
      topics: [
        {
          id: 'dsa-2-1',
          title: 'Array Introduction',
          description: 'Understand what arrays are, how they are stored in contiguous memory, and how Python lists implement dynamic arrays under the hood.',
          difficulty: 'beginner',
          estimatedTime: '25 min',
          prerequisites: ['dsa-1-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-2',
          title: 'Static and Dynamic Arrays',
          description: 'Compare fixed-size arrays (as in C/Java) with Python\'s dynamically resizing lists. Understand amortized O(1) append and the doubling strategy.',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['dsa-2-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-3',
          title: 'Array Traversal',
          description: 'Iterate through arrays using index-based loops, for-each loops, and enumerate. Build the foundation for every array algorithm.',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['dsa-2-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-4',
          title: 'Array Insertion',
          description: 'Insert elements at the beginning, end, or any arbitrary index. Understand the O(n) cost of shifting elements in the worst case.',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['dsa-2-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-5',
          title: 'Array Deletion',
          description: 'Remove elements by index or value. Learn how deletion triggers element shifts and how to handle edge cases like empty arrays.',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['dsa-2-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-6',
          title: 'Array Searching',
          description: 'Find elements using linear search. Understand when to scan the entire array and when a sorted array enables faster approaches.',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['dsa-2-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-7',
          title: 'Array Updating',
          description: 'Modify elements in-place by index. Practice common update patterns such as swapping, conditional replacement, and in-place transformations.',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['dsa-2-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-8',
          title: 'Two-Pointer Technique',
          description: 'Use two indices moving toward or away from each other to solve problems in O(n). Classic examples: pair sum in sorted array, removing duplicates.',
          difficulty: 'intermediate',
          estimatedTime: '35 min',
          prerequisites: ['dsa-2-6', 'dsa-1-9'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-9',
          title: 'Sliding Window Technique',
          description: 'Maintain a window of elements that slides across the array. Solve maximum sum subarray, smallest subarray with a target sum, and more.',
          difficulty: 'intermediate',
          estimatedTime: '40 min',
          prerequisites: ['dsa-2-3', 'dsa-1-9'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-10',
          title: 'Prefix Sums',
          description: 'Precompute cumulative sums to answer range-sum queries in O(1). A foundational technique for competitive programming and real-world analytics.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-2-3', 'dsa-1-9'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-11',
          title: 'Suffix Sums',
          description: 'Compute cumulative sums from the end of the array. Combine with prefix sums for powerful range queries and partition problems.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-2-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-12',
          title: 'Kadane\'s Algorithm',
          description: 'Find the maximum sum contiguous subarray in O(n). Understand the elegant dynamic-programming idea behind one of the most famous array algorithms.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-2-9', 'dsa-2-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-13',
          title: 'Array Rotation',
          description: 'Rotate an array left or right by k positions using brute force, temporary arrays, and the reversal algorithm (O(n) in-place).',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-2-7'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-14',
          title: 'Subarrays',
          description: 'Enumerate all contiguous subarrays, understand their count O(n²), and solve problems involving subarray sums, products, and properties.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-2-3', 'dsa-1-14'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-2-15',
          title: 'Matrix Basics',
          description: 'Represent 2D data using lists of lists in Python. Understand rows, columns, and how matrices map to real-world grids and tables.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-2-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-16',
          title: '2D Arrays',
          description: 'Create, access, and modify elements in two-dimensional arrays. Learn row-major vs column-major ordering and memory layout.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-2-15'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-2-17',
          title: 'Matrix Traversal',
          description: 'Traverse matrices row-wise, column-wise, diagonally, and in spiral order. These patterns appear in image processing, game boards, and more.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-2-16'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 3: STRINGS
    // =========================================================================
    {
      id: 'dsa-level-3',
      number: 3,
      title: 'Strings',
      description: 'Dive into string manipulation — one of the most common categories of interview and real-world problems.',
      topics: [
        {
          id: 'dsa-3-1',
          title: 'String Traversal',
          description: 'Iterate over characters in a string by index and by character. Understand string immutability in Python and its implications.',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['dsa-2-3'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-3-2',
          title: 'Character Frequency',
          description: 'Count how often each character appears using dictionaries and collections.Counter. Build frequency maps for string analysis.',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['dsa-3-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-3-3',
          title: 'Palindrome Checking',
          description: 'Determine whether a string reads the same forward and backward. Implement checks using two pointers and string slicing.',
          difficulty: 'beginner',
          estimatedTime: '25 min',
          prerequisites: ['dsa-3-1', 'dsa-2-8'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-3-4',
          title: 'Anagrams',
          description: 'Check if two strings are anagrams by sorting or frequency counting. Explore group-anagram problems and their applications.',
          difficulty: 'beginner',
          estimatedTime: '25 min',
          prerequisites: ['dsa-3-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-3-5',
          title: 'String Reversal',
          description: 'Reverse strings in-place (via list conversion) and using slicing. Extend to reversing words in a sentence.',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['dsa-3-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-3-6',
          title: 'Substrings',
          description: 'Extract and enumerate substrings. Solve problems involving longest substring without repeating characters and substring searches.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-3-1', 'dsa-2-14'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-3-7',
          title: 'Two-Pointer String Problems',
          description: 'Apply the two-pointer technique to string problems: valid palindrome with special chars, container with most water on strings, and more.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-3-3', 'dsa-2-8'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-3-8',
          title: 'Sliding Window String Problems',
          description: 'Use sliding windows to find the minimum window substring, longest substring with at most k distinct characters, and permutation in string.',
          difficulty: 'intermediate',
          estimatedTime: '35 min',
          prerequisites: ['dsa-3-6', 'dsa-2-9'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-3-9',
          title: 'String Hashing Basics',
          description: 'Convert strings to numeric hash values for fast comparison. Learn polynomial rolling hash and its role in pattern matching.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-3-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-3-10',
          title: 'Pattern Matching Introduction',
          description: 'Search for a pattern within a text using brute-force O(n·m) approach. Understand the motivation for faster algorithms like KMP and Rabin-Karp.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-3-6', 'dsa-3-9'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 4: SEARCHING ALGORITHMS
    // =========================================================================
    {
      id: 'dsa-level-4',
      number: 4,
      title: 'Searching Algorithms',
      description: 'Learn the fundamental searching algorithms — from linear scan to the powerful binary search and its many variations.',
      topics: [
        {
          id: 'dsa-4-1',
          title: 'Linear Search',
          description: 'The simplest search: check every element one by one. Understand when linear search is the only option and its O(n) time complexity.',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['dsa-2-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-4-2',
          title: 'Binary Search',
          description: 'Efficiently search a sorted array by repeatedly halving the search space. Achieve O(log n) performance — one of the most important algorithms.',
          difficulty: 'intermediate',
          estimatedTime: '35 min',
          prerequisites: ['dsa-4-1', 'dsa-1-8'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-4-3',
          title: 'Binary Search Variations',
          description: 'Explore iterative vs recursive implementations, inclusive vs exclusive bounds, and common pitfalls like integer overflow in midpoint calculation.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-4-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-4-4',
          title: 'First Occurrence',
          description: 'Use binary search to find the first (leftmost) position of a target value in a sorted array. Handle duplicates elegantly.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-4-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-4-5',
          title: 'Last Occurrence',
          description: 'Use binary search to find the last (rightmost) position of a target value. Combine with first occurrence to count element frequency.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-4-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-4-6',
          title: 'Lower Bound',
          description: 'Find the smallest index where the element is greater than or equal to a target. Understand its role in sorted insertions and range queries.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-4-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-4-7',
          title: 'Upper Bound',
          description: 'Find the smallest index where the element is strictly greater than the target. Pair with lower bound for powerful range operations.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-4-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-4-8',
          title: 'Search in Rotated Sorted Array',
          description: 'Apply modified binary search to an array that was sorted and then rotated. Identify the sorted half to decide which side to search.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-4-3', 'dsa-2-13'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-4-9',
          title: 'Binary Search on Answer',
          description: 'Use binary search not on an array, but on the answer space. Solve optimization problems like minimum capacity, allocate pages, and more.',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-4-3'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 5: SORTING ALGORITHMS
    // =========================================================================
    {
      id: 'dsa-level-5',
      number: 5,
      title: 'Sorting Algorithms',
      description: 'Explore all the major sorting algorithms, from simple quadratic sorts to efficient divide-and-conquer and non-comparison-based sorts.',
      topics: [
        {
          id: 'dsa-5-1',
          title: 'Bubble Sort',
          description: 'Repeatedly swap adjacent elements if they are in the wrong order. A simple but O(n²) algorithm useful for understanding sorting fundamentals.',
          difficulty: 'beginner',
          estimatedTime: '25 min',
          prerequisites: ['dsa-2-7', 'dsa-1-11'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-5-2',
          title: 'Selection Sort',
          description: 'Find the minimum element in the unsorted portion and place it at the beginning. O(n²) but performs fewer swaps than bubble sort.',
          difficulty: 'beginner',
          estimatedTime: '25 min',
          prerequisites: ['dsa-2-6', 'dsa-1-11'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-5-3',
          title: 'Insertion Sort',
          description: 'Build a sorted array one element at a time by inserting each into its correct position. Efficient for small or nearly sorted data.',
          difficulty: 'beginner',
          estimatedTime: '25 min',
          prerequisites: ['dsa-2-4', 'dsa-1-11'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-5-4',
          title: 'Merge Sort',
          description: 'A divide-and-conquer algorithm that splits the array in half, sorts each half, and merges them. Guaranteed O(n log n) time complexity.',
          difficulty: 'intermediate',
          estimatedTime: '40 min',
          prerequisites: ['dsa-1-15', 'dsa-1-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-5-5',
          title: 'Quick Sort',
          description: 'Choose a pivot, partition elements around it, and recursively sort partitions. Average O(n log n) but O(n²) worst-case without careful pivot selection.',
          difficulty: 'intermediate',
          estimatedTime: '40 min',
          prerequisites: ['dsa-1-15', 'dsa-1-10', 'dsa-1-12'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-5-6',
          title: 'Heap Sort',
          description: 'Build a max-heap and repeatedly extract the maximum to sort. O(n log n) in all cases with O(1) extra space.',
          difficulty: 'intermediate',
          estimatedTime: '35 min',
          prerequisites: ['dsa-5-2', 'dsa-1-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-5-7',
          title: 'Counting Sort',
          description: 'A non-comparison-based sort that counts occurrences of each value. Achieves O(n + k) time where k is the range of input values.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-5-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-5-8',
          title: 'Radix Sort',
          description: 'Sort numbers digit by digit from least significant to most significant using a stable subroutine like counting sort. O(d·(n+k)) time.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-5-7'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-5-9',
          title: 'Sorting Stability',
          description: 'Understand what it means for a sort to be stable (preserving relative order of equal elements) and which algorithms are stable or unstable.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-5-1', 'dsa-5-3', 'dsa-5-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-5-10',
          title: 'In-Place Sorting',
          description: 'Sorting algorithms that use O(1) extra memory. Compare in-place sorts (bubble, selection, quick, heap) with out-of-place sorts (merge, counting).',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-5-4', 'dsa-5-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-5-11',
          title: 'Time and Space Complexity Comparison',
          description: 'Side-by-side comparison of all sorting algorithms — best, average, and worst case time, space usage, stability, and when to use each one.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-5-1', 'dsa-5-2', 'dsa-5-3', 'dsa-5-4', 'dsa-5-5', 'dsa-5-6', 'dsa-5-7', 'dsa-5-8'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 6: HASHING
    // =========================================================================
    {
      id: 'dsa-level-6',
      number: 6,
      title: 'Hashing',
      description: 'Unlock O(1) average-case lookups. Master hash tables, hash maps, and sets — the workhorses behind countless efficient algorithms.',
      topics: [
        {
          id: 'dsa-6-1',
          title: 'Hash Tables',
          description: 'Understand the hash table data structure: an array of buckets indexed by hash values. Learn how it achieves O(1) average-case operations.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-2-1', 'dsa-1-7'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-6-2',
          title: 'Hash Functions',
          description: 'Learn what makes a good hash function: uniform distribution, determinism, and efficiency. Explore modular hashing and Python\'s built-in hash().',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-6-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-6-3',
          title: 'Hash Collisions',
          description: 'When two keys map to the same bucket. Explore collision resolution: chaining (linked lists per bucket) and open addressing (linear/quadratic probing).',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-6-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-6-4',
          title: 'Dictionaries in Python',
          description: 'Python\'s dict type — a highly optimized hash map. Master creation, access, iteration, .get(), .setdefault(), defaultdict, and OrderedDict.',
          difficulty: 'beginner',
          estimatedTime: '25 min',
          prerequisites: ['dsa-6-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-6-5',
          title: 'Sets in Python',
          description: 'Python\'s set type for unique collections with O(1) membership testing. Learn set operations: union, intersection, difference, and symmetric difference.',
          difficulty: 'beginner',
          estimatedTime: '20 min',
          prerequisites: ['dsa-6-1'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-6-6',
          title: 'Frequency Counting',
          description: 'Use hash maps to count element occurrences in O(n). The building block for many problems: most frequent element, top-k elements, and more.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-6-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-6-7',
          title: 'Two Sum',
          description: 'The iconic problem: find two numbers that add to a target. Solve it in O(n) using a hash map — a technique that generalizes to many similar problems.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-6-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-6-8',
          title: 'Duplicate Detection',
          description: 'Detect duplicates in an array using sets for O(n) time. Explore variations: find all duplicates, first repeating element, and unique elements.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-6-5'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-6-9',
          title: 'Grouping Anagrams',
          description: 'Group words that are anagrams of each other using sorted strings or frequency tuples as hash keys. A classic hash map application.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-6-4', 'dsa-3-4'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-6-10',
          title: 'Hash Maps and Sets Problems',
          description: 'Practice a curated set of hash-based problems: intersection of arrays, longest consecutive sequence, subarray sum equals k, and isomorphic strings.',
          difficulty: 'intermediate',
          estimatedTime: '35 min',
          prerequisites: ['dsa-6-6', 'dsa-6-7', 'dsa-6-8'],
          hasPlayground: true,
          hasVisualization: false
        }
      ]
    },

    // =========================================================================
    // LEVEL 7: LINKED LISTS
    // =========================================================================
    {
      id: 'dsa-level-7',
      number: 7,
      title: 'Linked Lists',
      description: 'Explore pointer-based data structures. Linked lists teach fundamental concepts of nodes, references, and dynamic memory management.',
      topics: [
        {
          id: 'dsa-7-1',
          title: 'Linked List Introduction',
          description: 'Understand linked lists as a sequence of nodes where each node points to the next. Compare with arrays for insertions, deletions, and access.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-1-3', 'dsa-2-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-7-2',
          title: 'Nodes',
          description: 'The building block of linked lists: a node holds data and a reference to the next node. Implement a Node class in Python.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-7-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-7-3',
          title: 'Singly Linked List',
          description: 'Each node has one pointer to the next node. Implement a complete SinglyLinkedList class with head tracking and basic operations.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-7-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-7-4',
          title: 'Doubly Linked List',
          description: 'Each node has pointers to both the next and previous nodes. Enables O(1) deletion when you have a reference to the node.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-7-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-7-5',
          title: 'Circular Linked List',
          description: 'The last node points back to the head, forming a circle. Useful for round-robin scheduling and circular buffer implementations.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-7-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-7-6',
          title: 'Linked List Traversal',
          description: 'Walk through the linked list from head to tail, processing each node. Implement print, length, and search using traversal.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-7-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-7-7',
          title: 'Linked List Insertion',
          description: 'Insert nodes at the head, tail, or at a specific position. Understand how pointer manipulation enables O(1) insertion at the head.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-7-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-7-8',
          title: 'Linked List Deletion',
          description: 'Delete nodes from the head, tail, or by value. Handle edge cases like deleting the only node or the last node.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-7-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-7-9',
          title: 'Linked List Searching',
          description: 'Search for a value in a linked list by traversing from head. Understand why it\'s O(n) and cannot benefit from binary search.',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['dsa-7-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-7-10',
          title: 'Reversing Linked Lists',
          description: 'Reverse a singly linked list iteratively and recursively. One of the most classic linked-list problems and a common interview question.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-7-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-7-11',
          title: 'Fast and Slow Pointers',
          description: 'The tortoise-and-hare technique: one pointer moves twice as fast. A powerful pattern for cycle detection and finding midpoints.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-7-6', 'dsa-2-8'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-7-12',
          title: 'Detecting Cycles',
          description: 'Use Floyd\'s cycle detection algorithm to determine if a linked list has a loop. Find the start of the cycle with a mathematical proof.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-7-11'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-7-13',
          title: 'Finding Middle Node',
          description: 'Find the middle of a linked list in a single pass using the fast-and-slow pointer technique. Handle even and odd length lists.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-7-11'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-7-14',
          title: 'Merging Linked Lists',
          description: 'Merge two sorted linked lists into one sorted list. A key subroutine for merge sort on linked lists and a popular interview problem.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-7-6', 'dsa-5-4'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 8: STACKS
    // =========================================================================
    {
      id: 'dsa-level-8',
      number: 8,
      title: 'Stacks',
      description: 'Master the LIFO (Last-In, First-Out) data structure. Stacks underpin function calls, undo systems, and expression evaluation.',
      topics: [
        {
          id: 'dsa-8-1',
          title: 'Stack Introduction',
          description: 'Understand the stack abstract data type: a collection where elements are added and removed from the same end (the top).',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-1-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-8-2',
          title: 'LIFO Principle',
          description: 'Last-In, First-Out: the most recently added element is the first to be removed. Relate LIFO to real-world examples like a stack of plates.',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['dsa-8-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-8-3',
          title: 'Push Operation',
          description: 'Add an element to the top of the stack. Implement push using Python lists and understand its O(1) amortized time complexity.',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['dsa-8-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-8-4',
          title: 'Pop Operation',
          description: 'Remove and return the top element of the stack. Handle the empty-stack edge case and understand its O(1) time complexity.',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['dsa-8-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-8-5',
          title: 'Peek Operation',
          description: 'View the top element without removing it. Useful for checking the current state of the stack before making decisions.',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['dsa-8-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-8-6',
          title: 'Stack Implementation',
          description: 'Build a Stack class from scratch using a Python list and using a linked list. Compare the trade-offs of each approach.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-8-4', 'dsa-8-5', 'dsa-7-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-8-7',
          title: 'Balanced Parentheses',
          description: 'Use a stack to check if brackets in an expression are balanced. Handle multiple bracket types: (), [], {}. A classic stack application.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-8-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-8-8',
          title: 'Next Greater Element',
          description: 'For each element, find the next element that is greater. Solve in O(n) using a stack instead of brute-force O(n²).',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-8-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-8-9',
          title: 'Monotonic Stack',
          description: 'A stack that maintains elements in increasing or decreasing order. The key technique behind problems like largest rectangle in histogram.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-8-8'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-8-10',
          title: 'Min Stack',
          description: 'Design a stack that supports push, pop, and retrieving the minimum element, all in O(1). Use an auxiliary stack or encode the minimum.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-8-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-8-11',
          title: 'Expression Evaluation',
          description: 'Evaluate infix, postfix (reverse Polish), and prefix expressions using stacks. Convert between notations with the Shunting-Yard algorithm.',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-8-7'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 9: QUEUES
    // =========================================================================
    {
      id: 'dsa-level-9',
      number: 9,
      title: 'Queues',
      description: 'Master the FIFO (First-In, First-Out) data structure. Queues power scheduling systems, BFS, and message processing.',
      topics: [
        {
          id: 'dsa-9-1',
          title: 'Queue Introduction',
          description: 'Understand the queue abstract data type: elements enter at the rear and leave from the front, just like a real-world queue.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-1-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-9-2',
          title: 'FIFO Principle',
          description: 'First-In, First-Out: the element that has waited the longest is served first. Contrast with LIFO behavior of stacks.',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['dsa-9-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-9-3',
          title: 'Enqueue Operation',
          description: 'Add an element to the rear of the queue. Implement enqueue using Python lists, deque, and linked lists.',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['dsa-9-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-9-4',
          title: 'Dequeue Operation',
          description: 'Remove and return the front element of the queue. Understand why list-based dequeue is O(n) and deque-based is O(1).',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['dsa-9-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-9-5',
          title: 'Front and Rear',
          description: 'Peek at the front and rear elements without removing them. Implement helper methods for queue inspection.',
          difficulty: 'beginner',
          estimatedTime: '10 min',
          prerequisites: ['dsa-9-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-9-6',
          title: 'Circular Queue',
          description: 'Use a fixed-size array with wrap-around to avoid wasted space. Implement enqueue and dequeue with modular arithmetic.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-9-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-9-7',
          title: 'Deque (Double-Ended Queue)',
          description: 'A queue that supports insertion and deletion at both ends. Learn Python\'s collections.deque and its O(1) operations.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-9-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-9-8',
          title: 'Priority Queue',
          description: 'A queue where each element has a priority and higher-priority elements are served first. Implemented with heaps for O(log n) operations.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-9-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-9-9',
          title: 'Queue Implementation',
          description: 'Build a Queue class using a Python list, collections.deque, and a linked list. Benchmark the performance differences.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-9-4', 'dsa-7-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-9-10',
          title: 'BFS Introduction',
          description: 'Breadth-First Search uses a queue to explore all neighbors at the current depth before moving deeper. Preview graph and tree BFS traversal.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-9-9'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 10: RECURSION AND BACKTRACKING
    // =========================================================================
    {
      id: 'dsa-level-10',
      number: 10,
      title: 'Recursion and Backtracking',
      description: 'Deepen your recursion skills and learn backtracking — a systematic way to explore all possible solutions by building and undoing choices.',
      topics: [
        {
          id: 'dsa-10-1',
          title: 'Base Condition',
          description: 'The termination condition that stops recursive calls. Learn how to identify and design correct base cases to prevent infinite recursion.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-1-15'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-10-2',
          title: 'Recursive Calls',
          description: 'How a function calls itself with a smaller or simpler input. Trace recursive calls step-by-step and understand the reduction principle.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-10-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-10-3',
          title: 'Call Stack',
          description: 'Visualize how the system stack grows with each recursive call and shrinks as calls return. Understand stack overflow and recursion depth limits.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-10-2', 'dsa-8-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-10-4',
          title: 'Factorial',
          description: 'Compute n! recursively and iteratively. Analyze the time and space complexity of both approaches and understand tail recursion.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-10-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-10-5',
          title: 'Fibonacci',
          description: 'Compute the n-th Fibonacci number recursively. See the exponential time complexity of naive recursion and the motivation for memoization.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-10-2', 'dsa-1-16'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-10-6',
          title: 'Sum of Digits',
          description: 'Recursively compute the sum of digits of a number. A simple problem that reinforces breaking down a number using modulo and integer division.',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['dsa-10-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-10-7',
          title: 'Reverse String Recursively',
          description: 'Reverse a string using recursion by taking the last character and prepending it to the reversed rest. Compare with iterative approaches.',
          difficulty: 'intermediate',
          estimatedTime: '15 min',
          prerequisites: ['dsa-10-2', 'dsa-3-5'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-10-8',
          title: 'Subsets',
          description: 'Generate all subsets (power set) of a given set using recursion. Include or exclude each element at every step to build all 2^n subsets.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-10-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-10-9',
          title: 'Permutations',
          description: 'Generate all permutations of a collection. Understand the n! growth and implement using swapping and backtracking.',
          difficulty: 'intermediate',
          estimatedTime: '35 min',
          prerequisites: ['dsa-10-8'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-10-10',
          title: 'Combination Problems',
          description: 'Generate all combinations of k elements from n. Use recursion to pick or skip each element while maintaining the count constraint.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-10-8'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-10-11',
          title: 'Maze Problems',
          description: 'Navigate a grid from start to end using recursion. Explore all paths, count valid paths, and find the shortest path using backtracking.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-10-9', 'dsa-2-17'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-10-12',
          title: 'N-Queens',
          description: 'Place N queens on an N×N chessboard so no two queens threaten each other. The quintessential backtracking problem with constraint checking.',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-10-11'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-10-13',
          title: 'Backtracking Concepts',
          description: 'Formalize the backtracking paradigm: choose, explore, un-choose. Learn pruning strategies that cut branches early to improve performance.',
          difficulty: 'advanced',
          estimatedTime: '30 min',
          prerequisites: ['dsa-10-9', 'dsa-10-12'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 11: TREES
    // =========================================================================
    {
      id: 'dsa-level-11',
      number: 11,
      title: 'Trees',
      description: 'Explore hierarchical data structures — from basic binary trees to balanced AVL trees and heaps. Trees are everywhere in computing.',
      topics: [
        {
          id: 'dsa-11-1',
          title: 'Tree Introduction',
          description: 'A non-linear data structure consisting of nodes connected by edges with a single root. Understand tree terminology and real-world applications.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-7-1', 'dsa-1-15'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-2',
          title: 'Root, Parent, and Child',
          description: 'The root is the topmost node, each node can be a parent of other nodes (children), and every node except the root has exactly one parent.',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['dsa-11-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-3',
          title: 'Leaf Nodes',
          description: 'Nodes with no children are called leaves. Learn to identify, count, and operate on leaf nodes in a tree.',
          difficulty: 'beginner',
          estimatedTime: '15 min',
          prerequisites: ['dsa-11-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-4',
          title: 'Height and Depth',
          description: 'Height is the longest path from a node to a leaf; depth is the path from the root to that node. Compute both recursively.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-11-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-5',
          title: 'Binary Trees',
          description: 'A tree where each node has at most two children (left and right). Implement a binary tree node class and basic operations.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-11-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-6',
          title: 'Binary Search Trees',
          description: 'A binary tree where left children are smaller and right children are larger. This ordering enables O(log n) search, insert, and delete on average.',
          difficulty: 'intermediate',
          estimatedTime: '35 min',
          prerequisites: ['dsa-11-5', 'dsa-4-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-7',
          title: 'Tree Insertion',
          description: 'Insert a new value into a BST by comparing with each node and going left or right. Maintain the BST property after insertion.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-11-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-8',
          title: 'Tree Deletion',
          description: 'Delete a node from a BST handling three cases: leaf node, one child, and two children. Use the inorder successor or predecessor for replacement.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-11-7'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-9',
          title: 'Tree Searching',
          description: 'Search for a value in a BST by leveraging the ordering property. Compare with linear search in an unsorted tree.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-11-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-10',
          title: 'Inorder Traversal',
          description: 'Visit left subtree, then root, then right subtree. For a BST, inorder traversal produces elements in sorted ascending order.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-11-5', 'dsa-1-15'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-11',
          title: 'Preorder Traversal',
          description: 'Visit root first, then left subtree, then right subtree. Used for tree serialization and creating a copy of the tree.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-11-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-12',
          title: 'Postorder Traversal',
          description: 'Visit left subtree, then right subtree, then root. Used for deleting a tree and evaluating expression trees.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-11-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-13',
          title: 'Level-Order Traversal',
          description: 'Visit nodes level by level using a queue (BFS). Essential for problems like finding the width of a tree or zigzag traversal.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-11-5', 'dsa-9-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-14',
          title: 'Balanced Trees',
          description: 'A tree where the heights of left and right subtrees differ by at most one. Understand why balance is crucial for O(log n) operations.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-11-4', 'dsa-11-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-15',
          title: 'AVL Trees',
          description: 'Self-balancing BSTs that maintain a balance factor of -1, 0, or 1 at every node. Learn single and double rotations for rebalancing.',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-11-14'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-16',
          title: 'Red-Black Trees',
          description: 'Self-balancing BSTs using node coloring (red/black) and rotation rules. Used internally by many language libraries (e.g., Java TreeMap).',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-11-15'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-17',
          title: 'Heap',
          description: 'A complete binary tree where each parent is greater (max-heap) or smaller (min-heap) than its children. Stored efficiently in an array.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-11-5'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-18',
          title: 'Min Heap',
          description: 'A heap where the smallest element is always at the root. Python\'s heapq module implements a min heap for priority queue operations.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-11-17'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-19',
          title: 'Max Heap',
          description: 'A heap where the largest element is at the root. Implement using negation with Python\'s heapq or build a custom max-heap class.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-11-18'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-11-20',
          title: 'Heap Operations',
          description: 'Insert (bubble up), extract-min/max (bubble down), heapify an array in O(n), and build a heap. Understand the O(log n) cost of insertions and deletions.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-11-18', 'dsa-11-19'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 12: GRAPHS
    // =========================================================================
    {
      id: 'dsa-level-12',
      number: 12,
      title: 'Graphs',
      description: 'Model real-world networks — social graphs, maps, dependencies — and learn the algorithms that power navigation, scheduling, and more.',
      topics: [
        {
          id: 'dsa-12-1',
          title: 'Graph Introduction',
          description: 'A data structure consisting of vertices (nodes) and edges (connections). Understand graph terminology and where graphs appear in the real world.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-11-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-2',
          title: 'Vertices and Edges',
          description: 'Vertices represent entities and edges represent relationships. Learn about degree, self-loops, and multi-edges.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-12-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-3',
          title: 'Directed Graphs',
          description: 'Graphs where edges have a direction (from one vertex to another). Model one-way streets, dependencies, and Twitter-style follows.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-12-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-4',
          title: 'Undirected Graphs',
          description: 'Graphs where edges have no direction — connections are bidirectional. Model friendships, roads, and network links.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-12-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-5',
          title: 'Weighted Graphs',
          description: 'Each edge carries a weight (cost, distance, capacity). Essential for shortest path, minimum spanning tree, and network flow problems.',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-12-3', 'dsa-12-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-6',
          title: 'Adjacency Matrix',
          description: 'Represent a graph as a 2D matrix where entry [i][j] indicates an edge from vertex i to vertex j. O(V²) space, O(1) edge lookup.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-12-5', 'dsa-2-16'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-7',
          title: 'Adjacency List',
          description: 'Represent a graph as a dictionary (or list of lists) mapping each vertex to its neighbors. O(V+E) space, efficient for sparse graphs.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-12-5', 'dsa-6-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-8',
          title: 'Graph Traversal',
          description: 'Systematically visit all vertices and edges. Understand the two fundamental approaches: BFS (level-by-level) and DFS (dive deep first).',
          difficulty: 'intermediate',
          estimatedTime: '20 min',
          prerequisites: ['dsa-12-6', 'dsa-12-7'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-9',
          title: 'Breadth-First Search (BFS)',
          description: 'Explore all neighbors at the current depth before going deeper. Uses a queue. Finds shortest paths in unweighted graphs. O(V+E) time.',
          difficulty: 'intermediate',
          estimatedTime: '35 min',
          prerequisites: ['dsa-12-8', 'dsa-9-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-10',
          title: 'Depth-First Search (DFS)',
          description: 'Explore as far as possible along each branch before backtracking. Uses a stack (or recursion). O(V+E) time. Great for path finding and cycle detection.',
          difficulty: 'intermediate',
          estimatedTime: '35 min',
          prerequisites: ['dsa-12-8', 'dsa-10-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-11',
          title: 'Connected Components',
          description: 'Find groups of vertices that are reachable from each other using BFS or DFS. Count components and identify which vertices belong together.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-12-9', 'dsa-12-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-12',
          title: 'Cycle Detection',
          description: 'Detect cycles in directed graphs using DFS with coloring (white/gray/black) and in undirected graphs using parent tracking.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-12-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-13',
          title: 'Topological Sorting',
          description: 'Order vertices of a DAG so every directed edge goes from earlier to later. Used for build systems, course scheduling, and dependency resolution.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-12-12', 'dsa-12-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-14',
          title: 'Dijkstra\'s Algorithm',
          description: 'Find the shortest path from a source to all other vertices in a weighted graph with non-negative edges. Uses a priority queue. O((V+E) log V).',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-12-9', 'dsa-12-5', 'dsa-9-8'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-15',
          title: 'Bellman-Ford Algorithm',
          description: 'Find shortest paths even with negative-weight edges. Detect negative cycles. Runs in O(V·E) time by relaxing all edges V-1 times.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-12-14'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-16',
          title: 'Floyd-Warshall Algorithm',
          description: 'Find shortest paths between all pairs of vertices using dynamic programming. O(V³) time with an elegant triple-nested loop.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-12-15'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-17',
          title: 'Minimum Spanning Tree',
          description: 'Find a subset of edges that connects all vertices with the minimum total weight and no cycles. Understand the cut property and MST applications.',
          difficulty: 'advanced',
          estimatedTime: '25 min',
          prerequisites: ['dsa-12-5', 'dsa-12-11'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-18',
          title: 'Prim\'s Algorithm',
          description: 'Build the MST greedily by always adding the cheapest edge that connects a new vertex to the growing tree. Uses a priority queue.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-12-17', 'dsa-9-8'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-12-19',
          title: 'Kruskal\'s Algorithm',
          description: 'Build the MST by sorting all edges by weight and adding them one by one if they don\'t form a cycle. Uses Union-Find for efficient cycle checking.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-12-17'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 13: GREEDY ALGORITHMS
    // =========================================================================
    {
      id: 'dsa-level-13',
      number: 13,
      title: 'Greedy Algorithms',
      description: 'Learn the greedy paradigm — making the locally optimal choice at each step to arrive at a global optimum. Simple yet powerful.',
      topics: [
        {
          id: 'dsa-13-1',
          title: 'Greedy Approach',
          description: 'Understand the greedy strategy: at each step, pick the choice that looks best right now. Learn when greedy works and when it fails.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-1-2', 'dsa-5-11'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-13-2',
          title: 'Activity Selection',
          description: 'Select the maximum number of non-overlapping activities. Sort by finish time and greedily pick the next compatible activity.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-13-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-13-3',
          title: 'Fractional Knapsack',
          description: 'Maximize the value you can carry when items can be fractionally divided. Sort by value-to-weight ratio and fill greedily.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-13-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-13-4',
          title: 'Job Sequencing',
          description: 'Schedule jobs with deadlines and profits to maximize total profit. Assign each job to the latest available slot before its deadline.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-13-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-13-5',
          title: 'Interval Scheduling',
          description: 'Solve interval-based problems: merge overlapping intervals, insert intervals, and find the minimum number of meeting rooms.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-13-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-13-6',
          title: 'Minimum Number of Coins',
          description: 'Make change using the fewest coins possible. Works greedily for standard coin systems but learn when it fails for arbitrary denominations.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-13-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-13-7',
          title: 'Huffman Coding',
          description: 'Build an optimal prefix-free binary code for data compression. Use a priority queue to repeatedly merge the two lowest-frequency nodes.',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-13-1', 'dsa-11-17', 'dsa-9-8'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 14: DYNAMIC PROGRAMMING
    // =========================================================================
    {
      id: 'dsa-level-14',
      number: 14,
      title: 'Dynamic Programming',
      description: 'Solve complex problems by breaking them into overlapping subproblems. DP is the most powerful optimization technique in algorithm design.',
      topics: [
        {
          id: 'dsa-14-1',
          title: 'DP Introduction',
          description: 'Understand the dynamic programming paradigm: solve each subproblem once and store its result. Compare with brute force and greedy approaches.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-10-5', 'dsa-13-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-2',
          title: 'Overlapping Subproblems',
          description: 'Identify when a problem has subproblems that recur multiple times. The Fibonacci sequence is the textbook example of overlapping subproblems.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-14-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-3',
          title: 'Optimal Substructure',
          description: 'A problem has optimal substructure if the optimal solution can be constructed from optimal solutions of its subproblems.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-14-2'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-14-4',
          title: 'Memoization (Top-Down)',
          description: 'Add caching to recursive solutions. Store computed results in a dictionary or array to avoid redundant calculations. Turn O(2^n) into O(n).',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-14-2', 'dsa-6-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-5',
          title: 'Tabulation (Bottom-Up)',
          description: 'Build solutions iteratively from the smallest subproblems up to the full problem. Uses an array (DP table) and eliminates recursion overhead.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-14-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-6',
          title: 'Fibonacci DP',
          description: 'Solve Fibonacci with memoization (top-down) and tabulation (bottom-up). Optimize space to O(1) by keeping only the last two values.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-14-4', 'dsa-14-5'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-7',
          title: 'Climbing Stairs',
          description: 'Count the number of ways to climb n stairs taking 1 or 2 steps at a time. A Fibonacci variant that introduces DP thinking.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-14-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-8',
          title: 'House Robber',
          description: 'Maximize money stolen from non-adjacent houses. Define dp[i] as the max money from the first i houses and build the recurrence relation.',
          difficulty: 'intermediate',
          estimatedTime: '25 min',
          prerequisites: ['dsa-14-5'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-9',
          title: '0/1 Knapsack',
          description: 'Maximize value with a weight constraint where each item is taken or left (no fractions). The definitive DP problem with a 2D state table.',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-14-5', 'dsa-13-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-10',
          title: 'Coin Change',
          description: 'Find the minimum number of coins to make a target amount. Build a 1D DP table where dp[i] represents the fewest coins for amount i.',
          difficulty: 'intermediate',
          estimatedTime: '30 min',
          prerequisites: ['dsa-14-5', 'dsa-13-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-11',
          title: 'Longest Common Subsequence',
          description: 'Find the longest subsequence present in both strings. Build a 2D DP table comparing characters and trace back for the actual LCS.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-14-5', 'dsa-3-6'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-12',
          title: 'Longest Increasing Subsequence',
          description: 'Find the length of the longest strictly increasing subsequence. Solve in O(n²) with DP and O(n log n) with binary search optimization.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-14-5', 'dsa-4-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-13',
          title: 'Grid DP',
          description: 'Solve path-counting and minimum-cost path problems on 2D grids. Build DP tables that process cells left-to-right, top-to-bottom.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-14-5', 'dsa-2-17'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-14',
          title: 'Partition Problems',
          description: 'Determine if an array can be partitioned into subsets with equal sums. A variant of 0/1 knapsack with boolean DP states.',
          difficulty: 'advanced',
          estimatedTime: '30 min',
          prerequisites: ['dsa-14-9'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-15',
          title: 'DP on Trees',
          description: 'Apply dynamic programming on tree structures. Solve problems like maximum path sum, diameter of tree, and counting subtree properties.',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-14-5', 'dsa-11-12'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-14-16',
          title: 'DP on Graphs Basics',
          description: 'Combine DP with graph traversal. Shortest paths (Bellman-Ford, Floyd-Warshall) are DP on graphs. Solve DAG-based DP problems.',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-14-5', 'dsa-12-13', 'dsa-12-16'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    },

    // =========================================================================
    // LEVEL 15: ADVANCED DSA
    // =========================================================================
    {
      id: 'dsa-level-15',
      number: 15,
      title: 'Advanced DSA',
      description: 'Master advanced data structures and algorithms used in competitive programming, system design, and cutting-edge software engineering.',
      topics: [
        {
          id: 'dsa-15-1',
          title: 'Trie',
          description: 'A tree-like data structure for storing strings where each node represents a character. Enables O(L) prefix searches, autocomplete, and spell checking.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-11-1', 'dsa-3-1'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-15-2',
          title: 'Segment Tree',
          description: 'A binary tree for efficient range queries (sum, min, max) and point/range updates. Supports O(log n) queries on mutable arrays.',
          difficulty: 'advanced',
          estimatedTime: '45 min',
          prerequisites: ['dsa-11-5', 'dsa-2-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-15-3',
          title: 'Fenwick Tree (Binary Indexed Tree)',
          description: 'A space-efficient tree for prefix sums and point updates in O(log n). Simpler to implement than a segment tree for additive queries.',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-2-10', 'dsa-15-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-15-4',
          title: 'Disjoint Set Union (DSU)',
          description: 'Maintain a collection of disjoint sets with efficient union and find operations. The backbone of Kruskal\'s algorithm and connectivity queries.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-12-19'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-15-5',
          title: 'Union-Find',
          description: 'Implement DSU with path compression and union by rank for nearly O(1) amortized operations. Solve connected-component problems efficiently.',
          difficulty: 'advanced',
          estimatedTime: '30 min',
          prerequisites: ['dsa-15-4'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-15-6',
          title: 'Sparse Table',
          description: 'A static data structure for O(1) range minimum/maximum queries after O(n log n) preprocessing. Ideal when the array doesn\'t change.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-2-10', 'dsa-1-8'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-15-7',
          title: 'Bit Manipulation',
          description: 'Operate directly on binary representations: AND, OR, XOR, NOT, shifts. Solve problems with O(1) space using bitwise tricks.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-1-2'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-15-8',
          title: 'XOR Techniques',
          description: 'Exploit XOR properties: a^a=0, a^0=a. Find the single non-duplicate, swap without temp, and solve advanced XOR-based problems.',
          difficulty: 'advanced',
          estimatedTime: '30 min',
          prerequisites: ['dsa-15-7'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-15-9',
          title: 'Advanced Graph Algorithms',
          description: 'Go beyond basic BFS/DFS with advanced graph techniques: Euler paths, Hamiltonian paths, bipartite checking, and network flow concepts.',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-12-10', 'dsa-12-14'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-15-10',
          title: 'Strongly Connected Components',
          description: 'Find maximal groups of vertices where every vertex is reachable from every other vertex. Implement Kosaraju\'s and Tarjan\'s algorithms.',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-15-9', 'dsa-12-3'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-15-11',
          title: 'Bridges and Articulation Points',
          description: 'Find edges (bridges) and vertices (articulation points) whose removal disconnects the graph. Critical for network reliability analysis.',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-15-9', 'dsa-12-11'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-15-12',
          title: 'Shortest Path Algorithms',
          description: 'A comprehensive comparison of all shortest-path algorithms: BFS (unweighted), Dijkstra, Bellman-Ford, Floyd-Warshall, and A*. When to use each.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-12-14', 'dsa-12-15', 'dsa-12-16'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-15-13',
          title: 'String Algorithms',
          description: 'Overview of advanced string algorithms: pattern matching, string hashing, suffix arrays, and their applications in text processing and bioinformatics.',
          difficulty: 'advanced',
          estimatedTime: '30 min',
          prerequisites: ['dsa-3-10'],
          hasPlayground: true,
          hasVisualization: false
        },
        {
          id: 'dsa-15-14',
          title: 'KMP Algorithm',
          description: 'Knuth-Morris-Pratt pattern matching in O(n+m) time. Build the failure function (partial match table) to skip redundant comparisons.',
          difficulty: 'advanced',
          estimatedTime: '40 min',
          prerequisites: ['dsa-15-13', 'dsa-3-10'],
          hasPlayground: true,
          hasVisualization: true
        },
        {
          id: 'dsa-15-15',
          title: 'Rabin-Karp Algorithm',
          description: 'Use rolling hash functions for average-case O(n+m) pattern matching. Handle hash collisions and understand worst-case O(n·m) scenarios.',
          difficulty: 'advanced',
          estimatedTime: '35 min',
          prerequisites: ['dsa-15-13', 'dsa-3-9'],
          hasPlayground: true,
          hasVisualization: true
        }
      ]
    }
  ]
};
