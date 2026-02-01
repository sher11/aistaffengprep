# Company-Specific - Patterns and Frameworks

## Company Research Framework

### The CORE Research Method

```
C - Culture: Values, mission, how they work
O - Organization: Structure, team you'd join, growth
R - Recent: News, launches, challenges
E - Evaluation: Interview process, criteria
```

### Research Checklist Template

For each target company:

```markdown
## Company: [Name]

### Culture Research
- [ ] Read culture deck/values page
- [ ] Identify 3 key values
- [ ] Find behavioral story alignments
- [ ] Note language/terminology used

### Technical Research
- [ ] Review 5+ engineering blog posts
- [ ] Understand tech stack
- [ ] Identify domain-specific knowledge needed
- [ ] Review open source projects

### Interview Research
- [ ] Check Glassdoor (last 6 months)
- [ ] Review Blind discussions
- [ ] Understand round structure
- [ ] Identify unique round types

### Personal Alignment
- [ ] Why this company specifically?
- [ ] What excites you about their mission?
- [ ] Questions to ask them
```

---

## Interview Style Patterns

### Pattern 1: Non-LeetCode Practical (Stripe, Netflix, OpenAI)

**Characteristics:**
- Real-world problem scenarios
- Multi-part questions
- Code quality over algorithmic complexity
- Testing and edge cases evaluated

**Preparation Approach:**
1. Build actual systems (LRU cache, parsers, etc.)
2. Practice writing production-quality code
3. Focus on code organization and readability
4. Practice explaining your approach

**Sample Time Allocation:**
- Understand problem: 5 minutes
- Design approach: 5 minutes
- Implement core: 20 minutes
- Handle edge cases: 10 minutes
- Test/discuss: 5 minutes

### Pattern 2: Online Assessment First (Anthropic)

**Characteristics:**
- Automated initial screen
- Timed multi-level challenges
- Completion rate critical
- Clean code rewarded

**Preparation Approach:**
1. Practice timed coding sessions
2. Focus on completing more questions
3. Prioritize working solution over perfection
4. Build modular, reusable code patterns

**Time Management:**
- 4 levels in 70-90 minutes
- Level 1: 10-15 min (must complete)
- Level 2: 15-20 min (must complete)
- Level 3: 20-25 min (should complete)
- Level 4: 20-25 min (nice to have)

### Pattern 3: Systems-Heavy (Databricks, Snowflake)

**Characteristics:**
- Deep technical knowledge expected
- Database/distributed systems focus
- Presentation rounds possible
- Trade-off discussions

**Preparation Approach:**
1. Review distributed systems concepts
2. Understand database internals
3. Practice articulating trade-offs
4. Prepare technical presentation

**Key Topics:**
- Consistency models
- Transaction isolation levels
- Distributed consensus
- Storage engines
- Query optimization

---

## Company Value Alignment Framework

### Step 1: Identify Core Values

For each company, identify 3-5 core values:

| Company | Value 1 | Value 2 | Value 3 |
|---------|---------|---------|---------|
| Stripe | Users first | Move with urgency | Think rigorously |
| Netflix | Freedom & responsibility | Judgment | Candor |
| OpenAI | Safety | Broad benefit | Long-term |
| Anthropic | AI safety | Research rigor | Collaboration |

### Step 2: Map Stories to Values

Create a matrix:

```
         | Your Story 1 | Your Story 2 | Your Story 3
---------|--------------|--------------|-------------
Value 1  |      X       |              |      X
Value 2  |              |      X       |      X
Value 3  |      X       |      X       |
```

### Step 3: Adapt Framing

Same story, different emphasis:

**Story: Led migration project**

- **For Stripe (Users first):** Emphasize user impact and API stability
- **For Netflix (Judgment):** Emphasize decision-making with incomplete info
- **For OpenAI (Long-term):** Emphasize future-proofing and sustainability

---

## Unique Round Patterns

### Integration Round (Stripe)

**What to expect:**
- Download a GitHub repository
- Understand existing codebase quickly
- Implement new features or fix issues
- Focus on JSON handling, HTTP operations

**Framework:**
1. **Explore (5 min):** README, main entry points, tests
2. **Understand (10 min):** Data flow, existing patterns
3. **Plan (5 min):** Map requirements to implementation
4. **Implement (25 min):** Follow existing patterns
5. **Test (5 min):** Run tests, handle edge cases

**Tips:**
- Follow existing code style
- Ask clarifying questions early
- Run tests frequently
- Commit logical chunks

### Bug Squash Round (Stripe)

**What to expect:**
- Codebase with failing tests
- Find and fix multiple bugs
- Explain root causes

**Framework:**
1. **Run tests:** See what's failing
2. **Triage:** Prioritize by difficulty
3. **Debug:** Isolate each issue
4. **Fix:** Make minimal changes
5. **Verify:** Run tests after each fix
6. **Explain:** Articulate root causes

### Panel Presentation (Snowflake)

**What to expect:**
- 30-minute presentation
- 5-6 interviewers
- Deep technical questions
- Trade-off discussions

**Framework:**
1. **Context (5 min):** Problem space, constraints
2. **Approach (10 min):** Solution design, alternatives
3. **Deep Dive (10 min):** Technical details
4. **Results (5 min):** Outcomes, learnings

**Tips:**
- Know your project deeply
- Anticipate 10 potential questions
- Practice with timer
- Have backup slides for details

---

## Question Type Frameworks

### Multi-Part Questions (OpenAI style)

**Pattern:**
- Part A: Basic functionality
- Part B: Add complexity
- Part C: Handle edge cases
- Part D: Optimize or extend

**Strategy:**
1. Complete Part A fully before moving on
2. Don't over-engineer Part A
3. Refactor between parts if needed
4. Communicate trade-offs made for time

### System Design for Specific Companies

#### Stripe System Design
Focus areas:
- Payment processing
- Webhook reliability
- Idempotency
- Transaction consistency

#### Netflix System Design
Focus areas:
- Recommendation systems
- Content delivery
- Personalization
- High availability

#### Databricks System Design
Focus areas:
- Distributed computing
- Data lakes
- Query optimization
- Spark architecture

---

## Company-Specific Communication Patterns

### Stripe Communication

**Valued signals:**
- Precision in requirements
- Attention to edge cases
- API design thinking
- User impact awareness

**Example phrases:**
- "Let me clarify the API contract..."
- "What's the expected behavior when..."
- "For user experience, we should..."

### Netflix Communication

**Valued signals:**
- Independent judgment
- Clear articulation
- Trade-off reasoning
- Context awareness

**Example phrases:**
- "Given the context, I'd recommend..."
- "The trade-off here is..."
- "I'm making this judgment because..."

### OpenAI Communication

**Valued signals:**
- Completeness
- Bug-free code
- Clean organization
- Test coverage

**Example phrases:**
- "Let me verify this handles..."
- "I'll write a test for..."
- "For maintainability..."

---

## Decision Framework: Which Companies to Target

### Fit Assessment Matrix

| Factor | Your Score (1-5) | Weight |
|--------|------------------|--------|
| Interview style match | | 25% |
| Technical domain interest | | 25% |
| Culture alignment | | 20% |
| Career goals alignment | | 15% |
| Practical factors (location, etc.) | | 15% |

### Company Grouping Strategy

**If you excel at practical coding:**
→ Target Stripe, Netflix, OpenAI

**If you excel at timed assessments:**
→ Target Anthropic

**If you have deep systems background:**
→ Target Databricks, Snowflake

**Recommended approach:**
1. Choose 1 company from each group
2. Prepare for the common elements
3. Add company-specific prep 2 weeks before

---

## Quick Reference Cards

### Card 1: Stripe
```
Style: Practical, non-LeetCode
Unique: Integration, Bug Squash
Focus: Code quality, JSON/HTTP
Values: Users first, rigor
```

### Card 2: Netflix
```
Style: Real-world problems
Focus: Abstractions, articulation
Culture: Freedom & responsibility
Prep: Read culture deck!
```

### Card 3: OpenAI
```
Style: Multi-part questions
Focus: Completion rate, clean code
Approach: Speed + quality
Tip: Complete more parts
```

### Card 4: Anthropic
```
Style: CodeSignal OA first
Target: 520+/600
Focus: Completion, modularity
Tip: Timed practice essential
```

### Card 5: Databricks
```
Style: Systems-heavy
Focus: Deep understanding
Topics: Distributed systems, Spark
Prep: Know the fundamentals
```

### Card 6: Snowflake
```
Style: DB focus + Panel
Unique: 30-min presentation
Focus: Transactions, trade-offs
Prep: Present your best project
```
