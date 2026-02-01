# Company-Specific - Deep Dive Notes

## Deep Dive: Interview Process Details

### Stripe Interview Deep Dive

#### Technical Screen (45-60 minutes)
- Usually 1-2 coding questions
- Focus on practical problems
- Code quality evaluated
- Sometimes includes system design discussion

#### Onsite Structure (4-5 rounds)
1. **Coding Round 1:** Practical problem solving
2. **Coding Round 2:** Different domain
3. **Integration Round:** GitHub repo work
4. **Bug Squash:** Debugging exercise
5. **System Design:** Staff+ level

#### Integration Round Details
**What you'll see:**
- Pre-existing codebase (usually Python or JavaScript)
- README with requirements
- Existing tests that may or may not pass
- JSON data files or API endpoints

**Common tasks:**
- Parse and transform data
- Implement new API endpoints
- Connect to external services
- Handle error cases

**Evaluation criteria:**
- Follows existing patterns
- Clean, readable code
- Proper error handling
- Completes requirements
- Runs without errors

#### Bug Squash Round Details
**Format:**
- Codebase with intentional bugs
- Test suite showing failures
- 45 minutes to find and fix

**Common bug types:**
- Off-by-one errors
- Incorrect string handling
- Missing null checks
- Logic errors in conditionals
- Type mismatches

**Strategy:**
1. Run all tests first
2. Group by failure type
3. Start with easiest fixes
4. Document root causes
5. Verify after each fix

---

### Netflix Interview Deep Dive

#### Culture Deck Key Points

**Freedom & Responsibility:**
- High performers given autonomy
- Expected to make good decisions
- Context over control

**Judgment:**
- Make wise decisions
- Identify root causes
- Use data over intuition

**Communication:**
- Listen well, speak candidly
- Be concise
- Calm in stressful situations

**Curiosity:**
- Learn rapidly
- Seek to understand
- Contribute outside your specialty

**Courage:**
- Say what you think
- Make tough decisions
- Question actions inconsistent with values

#### Interview Focus Areas
- Code hygiene and clean abstractions
- Articulation of approach
- How you think through problems
- Cultural alignment with values

---

### OpenAI Interview Deep Dive

#### Multi-Part Question Strategy

**Part A (Foundation):**
- Basic implementation
- Core data structures
- Simple interface
- Should take 10-15 minutes

**Part B (Extension):**
- Add functionality
- Handle new requirements
- May refactor Part A
- 15-20 minutes

**Part C (Complexity):**
- Edge cases
- Error handling
- Performance considerations
- 20-25 minutes

**Part D (Advanced):**
- Optimization
- Concurrency
- Advanced features
- Bonus points

**Key insight:** Better to complete A, B, C cleanly than A, B, C, D with bugs.

#### Sample Multi-Part: In-Memory SQL Database

**Part A:** Create table, insert records
```python
# Expected interface:
# create_table("users", ["id", "name", "age"])
# insert("users", [1, "Alice", 30])
# insert("users", [2, "Bob", 25])
```

**Part B:** SELECT queries
```python
# select("users") -> all records
# select("users", ["name", "age"]) -> specific columns
```

**Part C:** WHERE clauses
```python
# select("users", where={"age": 30})
# select("users", where={"age": (">", 25)})
```

**Part D:** ORDER BY, LIMIT, JOIN
```python
# select("users", order_by="age", limit=10)
```

---

### Anthropic Interview Deep Dive

#### CodeSignal Assessment Details

**Format:**
- 70-90 minutes total
- 4 levels of increasing difficulty
- Each level builds on previous
- Automated scoring

**Scoring Breakdown:**
- Level 1: ~100 points
- Level 2: ~150 points
- Level 3: ~175 points
- Level 4: ~175 points
- Total: 600 points

**Target:** 520+ to advance (87%)

**Code Quality Factors:**
- Correctness (tests pass)
- Cleanliness (formatting, naming)
- Modularity (function decomposition)
- Efficiency (reasonable complexity)

#### Sample 4-Level Problem: Inventory System

**Level 1: Basic CRUD**
```python
class Inventory:
    def add_item(self, item_id, quantity): pass
    def remove_item(self, item_id, quantity): pass
    def get_quantity(self, item_id): pass
```

**Level 2: Search functionality**
```python
    def search_by_prefix(self, prefix): pass
    def search_by_suffix(self, suffix): pass
```

**Level 3: Multi-user with capacity**
```python
    def reserve_for_user(self, user_id, item_id, quantity): pass
    def get_user_reservations(self, user_id): pass
    def set_capacity_limit(self, item_id, limit): pass
```

**Level 4: Handle duplicates and conflicts**
```python
    def merge_duplicates(self): pass
    def resolve_over_capacity(self): pass
```

---

### Databricks Interview Deep Dive

#### Systems Knowledge Required

**Distributed Systems Concepts:**
- CAP theorem
- Consistency models (strong, eventual)
- Consensus algorithms (Paxos, Raft)
- Distributed transactions

**Data Systems:**
- LSM trees vs B-trees
- Write-ahead logging
- Compaction strategies
- Indexing approaches

**Spark Basics (helpful):**
- RDD vs DataFrame vs Dataset
- Transformations vs Actions
- Partitioning strategies
- Shuffle operations

#### Sample Problem: Concurrent Data Writer

**Requirements:**
- Multiple threads write to shared file
- Maintain per-thread ordering
- Maximize throughput
- Handle failures gracefully

**Considerations:**
- Thread synchronization
- Buffer management
- Flush strategies
- Error recovery

---

### Snowflake Interview Deep Dive

#### Panel Presentation Guide

**Preparation Timeline:**
- 2 weeks before: Choose project, outline
- 1 week before: Create slides, practice
- 3 days before: Dry run with friend
- Day before: Final review

**Slide Structure (10-12 slides):**
1. Title and intro
2. Context/problem space
3. Requirements/constraints
4. Solution overview
5. Architecture diagram
6. Key technical decisions
7. Trade-offs considered
8. Implementation challenges
9. Results/metrics
10. Learnings
11. Q&A placeholder

**Common Questions:**
- "Why didn't you choose X approach?"
- "How would this scale to 10x?"
- "What would you do differently?"
- "How did you handle [edge case]?"
- "What was the hardest part?"

**Tips:**
- Know exact numbers (latency, throughput, etc.)
- Be honest about what you don't know
- Have backup details ready
- Practice timing (30 min strict)

---

## Deep Dive: Company Engineering Cultures

### Stripe Engineering Philosophy

**Key principles:**
1. **Users first:** Every decision considers user impact
2. **Rigor:** Precise, well-reasoned approaches
3. **Craft:** Code as a craft, attention to detail
4. **Scale:** Build for 10x, think long-term

**What this means in interviews:**
- Ask about user impact
- Be precise in requirements
- Show attention to edge cases
- Discuss scalability

### Netflix Engineering Philosophy

**Key principles:**
1. **Freedom & Responsibility:** Autonomy with accountability
2. **Context over Control:** Understand why, not just what
3. **Highly Aligned, Loosely Coupled:** Agreement on goals, freedom in execution
4. **Farm for Talent:** Top performers only

**What this means in interviews:**
- Show independent judgment
- Explain your reasoning
- Demonstrate alignment seeking
- Show high standards

### OpenAI/Anthropic Engineering Philosophy

**Key principles:**
1. **Safety First:** Consider implications
2. **Research Rigor:** Thorough, principled approaches
3. **High Impact:** Work on important problems
4. **Collaboration:** Build on each other's work

**What this means in interviews:**
- Consider edge cases carefully
- Show systematic thinking
- Discuss implications
- Be thorough

---

## Interview Question Bank by Company

### Stripe Questions Seen Recently

**Coding:**
- Currency conversion with exchange rates
- Credit card number validation (Luhn)
- HTTP header parsing
- String expansion (a3b2 -> aaabb)
- Transaction ledger with balance

**System Design:**
- Webhook delivery system
- Merchant dashboard metrics
- Payment retry system
- API rate limiting

### Netflix Questions Seen Recently

**Coding:**
- Movie viewing history with dedup
- Latency percentile calculator
- LRU cache with weights
- Log processor with time windows
- Dependency graph resolution

**System Design:**
- Recommendation cache
- User session management
- A/B testing platform
- Content delivery optimization

### OpenAI Questions Seen Recently

**Coding:**
- Resumable iterator with state
- In-memory database with SQL
- Versioned key-value store
- Unix cd command implementation
- Programming language parser

**System Design:**
- Webhook service at scale
- Search with geolocation
- Collaborative document editing

---

## Pre-Interview Checklists

### 1 Week Before

- [ ] Review company values/culture
- [ ] Practice 10 company-specific questions
- [ ] Read 5 recent engineering blog posts
- [ ] Check Glassdoor for recent experiences
- [ ] Prepare 5 questions to ask them
- [ ] Map your stories to their values

### 1 Day Before

- [ ] Review technical concepts
- [ ] Practice 2-3 problems
- [ ] Prepare your workspace
- [ ] Test equipment (camera, mic)
- [ ] Get good sleep

### Day Of

- [ ] Review your key stories
- [ ] Review company values
- [ ] Have water ready
- [ ] Close unnecessary apps
- [ ] Take deep breaths

---

## Company-Specific Gotchas

### Stripe Gotchas
- Integration round code style matters
- Bug squash: explain root causes
- API design questions common
- Know idempotency concepts

### Netflix Gotchas
- Culture questions are serious
- Must align with freedom/responsibility
- Code hygiene heavily weighted
- Be ready to articulate trade-offs

### OpenAI Gotchas
- Speed matters but correctness more
- Multi-part questions build on each other
- Test your code before moving on
- Comments help with code review

### Anthropic Gotchas
- CodeSignal timing is tight
- Completion rate > perfection
- Modular code scores better
- Read requirements carefully

### Databricks Gotchas
- Deep systems questions expected
- Know distributed systems basics
- Concurrency questions common
- Be ready for follow-up depth

### Snowflake Gotchas
- Panel presentation is make-or-break
- Transaction questions likely
- Know your project deeply
- Practice Q&A scenarios
