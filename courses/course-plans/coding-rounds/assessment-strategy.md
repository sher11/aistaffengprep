# Coding Rounds - Assessment Strategy

## Assessment Framework

### Assessment Types

| Type | Purpose | Frequency | Weight |
|------|---------|-----------|--------|
| Self-Check Quizzes | Concept verification | After each lesson | 10% |
| Practice Problems | Skill application | Daily | 30% |
| Timed Challenges | Interview simulation | Weekly | 30% |
| Implementation Projects | Real-world readiness | Per module | 30% |

## Quiz Questions Bank

### Module 1: Foundations

**Easy**:
1. What is the time complexity of accessing an element in an array by index?
   - Answer: O(1)

2. What is the average case time complexity of hash table lookup?
   - Answer: O(1)

3. Which data structure follows LIFO principle?
   - Answer: Stack

**Medium**:
4. An algorithm has two nested loops, each iterating n times. The inner loop performs a hash table lookup. What is the overall time complexity?
   - Answer: O(n²) - hash lookups are O(1), so n × n × O(1) = O(n²)

5. What is the space complexity of a recursive function that makes n recursive calls, each using O(1) space?
   - Answer: O(n) - due to call stack

**Hard**:
6. Explain why hash table operations are O(1) average case but O(n) worst case.
   - Answer: Average case assumes good hash distribution. Worst case occurs when all keys hash to the same bucket (collision), requiring linear search through that bucket.

### Module 2: Arrays & Two Pointers

**Easy**:
1. When should you use two pointers moving toward each other?
   - Answer: When searching for pairs in a sorted array, or when checking palindromes

2. What is the time complexity of the sliding window maximum solution?
   - Answer: O(n) when using a deque

**Medium**:
3. Given a sorted array, find two numbers that sum to target. What's the optimal approach?
   - Answer: Two pointers from both ends, O(n) time, O(1) space

4. How would you find the longest substring without repeating characters?
   - Answer: Sliding window with a hash set to track characters in window

### Module 5: Dynamic Programming

**Easy**:
1. What are the two key properties that indicate a problem can be solved with DP?
   - Answer: Overlapping subproblems and optimal substructure

2. What is memoization?
   - Answer: Storing results of expensive function calls and returning cached results for same inputs

**Medium**:
3. Write the recurrence relation for the Longest Common Subsequence problem.
   - Answer:
   ```
   If s1[i] == s2[j]: LCS(i,j) = 1 + LCS(i-1, j-1)
   Else: LCS(i,j) = max(LCS(i-1,j), LCS(i,j-1))
   ```

4. How can you reduce space complexity in many 2D DP problems?
   - Answer: If current row only depends on previous row, use two 1D arrays or single array with careful iteration order

**Hard**:
5. Design the state and transition for "Best Time to Buy and Sell Stock with Cooldown".
   - Answer: Three states per day: holding stock, sold today (cooldown), not holding. Transitions based on buy/sell/rest decisions.

### Module 8: Non-LeetCode

**Medium**:
1. Why does LRU Cache use a doubly linked list instead of a singly linked list?
   - Answer: Need O(1) removal, which requires access to previous node. Doubly linked list provides this.

2. What data structure combination achieves O(1) for all LRU Cache operations?
   - Answer: HashMap for O(1) lookup + Doubly Linked List for O(1) ordering

**Hard**:
3. Design a thread-safe rate limiter. What synchronization mechanisms would you use?
   - Answer: Use mutex/lock for critical sections, consider read-write locks if reads are more frequent

## Practice Problems with Solutions

### Checkpoint 1 Problems (After Module 3)

**Problem 1**: Two Sum (LeetCode #1)
- Expected time: 10-15 minutes
- Key insight: Use hash map to store complement

```python
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []
```

**Problem 2**: Valid Parentheses (LeetCode #20)
- Expected time: 15 minutes
- Key insight: Stack for matching

```python
def is_valid(s):
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in pairs:
            if not stack or stack.pop() != pairs[char]:
                return False
        else:
            stack.append(char)

    return len(stack) == 0
```

### Checkpoint 2 Problems (After Module 5)

**Problem**: Coin Change (LeetCode #322)
- Expected time: 20-25 minutes
- Key insight: DP with state = amount needed

```python
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0

    for a in range(1, amount + 1):
        for coin in coins:
            if coin <= a:
                dp[a] = min(dp[a], dp[a - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1
```

### Checkpoint 3: Blind75 Completion Tracker

| Category | Problems | Target |
|----------|----------|--------|
| Array | 11 | Complete all easy/medium |
| Two Pointers | 5 | Complete all |
| Sliding Window | 4 | Complete all |
| Stack | 4 | Complete all |
| Binary Search | 5 | Complete all |
| Linked List | 6 | Complete all |
| Trees | 11 | Complete all easy/medium |
| Heap | 4 | Complete 3/4 |
| Graphs | 8 | Complete 6/8 |
| DP | 11 | Complete all easy/medium |
| Intervals | 5 | Complete all |
| Greedy | 3 | Complete all |

### Checkpoint 4: Implementation Project

**Project**: Build LRU Cache from Scratch

Requirements:
1. Implement without using OrderedDict
2. All operations O(1)
3. Include comprehensive tests
4. Handle edge cases (capacity 1, empty cache)
5. Write clear documentation

Evaluation Criteria:
- [ ] Correct implementation (40%)
- [ ] O(1) complexity achieved (20%)
- [ ] Code quality and readability (20%)
- [ ] Test coverage (10%)
- [ ] Documentation (10%)

## Self-Evaluation Rubrics

### Problem-Solving Rubric

| Score | Description |
|-------|-------------|
| 5 | Optimal solution within time limit, clean code, handles all edge cases |
| 4 | Working solution, minor inefficiency or small bug fixed quickly |
| 3 | Solution works with hints, reasonable complexity |
| 2 | Partial solution, needed significant help |
| 1 | Unable to make meaningful progress |

### Code Quality Rubric

| Aspect | Excellent (3) | Good (2) | Needs Work (1) |
|--------|--------------|----------|----------------|
| Naming | Descriptive, consistent | Mostly clear | Vague or single letters |
| Structure | Well-organized functions | Adequate separation | Monolithic code |
| Edge Cases | All handled | Most handled | Many missed |
| Comments | When needed, helpful | Some present | Absent or obvious |

### Communication Rubric

| Score | Description |
|-------|-------------|
| 5 | Clear explanation throughout, discusses alternatives, handles hints well |
| 4 | Good communication, occasional silence |
| 3 | Adequate explanation, prompts needed |
| 2 | Minimal communication |
| 1 | Unable to articulate approach |

## Mock Interview Assessment

### Format
- Duration: 45-60 minutes
- 1-2 problems
- Includes discussion of complexity and alternatives

### Evaluation Categories

1. **Problem Understanding** (15%)
   - Asks clarifying questions
   - Identifies edge cases upfront
   - Confirms understanding before coding

2. **Approach** (25%)
   - Discusses multiple approaches
   - Selects appropriate algorithm
   - Explains time/space trade-offs

3. **Implementation** (35%)
   - Clean, readable code
   - Correct logic
   - Handles edge cases

4. **Testing** (15%)
   - Tests with examples
   - Identifies and fixes bugs
   - Tests edge cases

5. **Communication** (10%)
   - Thinks aloud
   - Responds to hints
   - Discusses follow-ups

### Pass Criteria

| Level | Requirement |
|-------|-------------|
| Strong Hire | Score 4.0+, solves both problems optimally |
| Hire | Score 3.5+, solves one optimally, good progress on second |
| Lean Hire | Score 3.0+, solves one with minor issues |
| No Hire | Score below 3.0 |
