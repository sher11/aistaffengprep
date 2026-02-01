# Behavioral Rounds - Deep Dive Notes

## Staff Engineer Archetypes and Behavioral Implications

### The Four Archetypes (Will Larson)

#### 1. Tech Lead
**Role:** Guides technical direction for a team
**Behavioral Focus:**
- Mentorship stories
- Technical decision-making
- Balancing delivery with quality
- Managing technical debt

**Key Questions:**
- "How do you balance feature delivery with technical investment?"
- "Tell me about mentoring a struggling engineer"
- "Describe setting technical direction for your team"

#### 2. Architect
**Role:** Responsible for technical quality across domains
**Behavioral Focus:**
- Cross-team influence
- Long-term technical strategy
- Trade-off communication
- Building consensus

**Key Questions:**
- "How do you drive alignment on technical standards?"
- "Tell me about introducing a new architecture"
- "Describe a time you had to deprecate a beloved system"

#### 3. Solver
**Role:** Tackles focused, complex problems
**Behavioral Focus:**
- Deep technical problem-solving
- Working under ambiguity
- Delivering critical projects
- Knowledge transfer

**Key Questions:**
- "Tell me about your most challenging technical problem"
- "How do you approach completely unfamiliar domains?"
- "Describe transferring knowledge after solving a problem"

#### 4. Right Hand
**Role:** Extends executive's reach
**Behavioral Focus:**
- Strategic thinking
- Executive communication
- Organizational awareness
- Navigating politics

**Key Questions:**
- "How do you align technical and business priorities?"
- "Tell me about communicating bad news to leadership"
- "Describe influencing strategy at your company"

## Deep Dive: Handling Failure Questions

### Why Companies Ask About Failures

1. **Self-awareness test:** Can you recognize mistakes?
2. **Growth mindset:** Do you learn and improve?
3. **Ownership:** Do you take responsibility?
4. **Risk assessment:** How do you handle setbacks?
5. **Authenticity:** Are you honest about imperfections?

### Failure Story Selection Criteria

**Good failures:**
- Significant enough to show real learning
- Clearly resolved (not ongoing)
- Shows growth trajectory
- Doesn't reveal serious judgment lapses
- Doesn't violate confidentiality

**Failures to avoid:**
- Ethical violations
- Ongoing interpersonal conflicts
- Things that show poor judgment on safety/security
- Situations where you learned nothing
- Very recent unresolved issues

### Failure Response Framework

```
1. Own it (5 seconds)
   "I made a significant mistake when..."

2. Context (15 seconds)
   Brief situation, not excuses

3. What happened (20 seconds)
   The failure itself and impact

4. Your reflection (30 seconds)
   - What you learned
   - Why it happened
   - What you'd do differently

5. Changes made (20 seconds)
   - Concrete changes in behavior/process
   - Evidence of improvement

6. Application (10 seconds)
   - How you've applied learning since
```

### Example: Good Failure Response

"I once underestimated the complexity of a migration project. I was leading a database migration and committed to a two-week timeline without fully understanding the data dependencies. We ended up taking six weeks.

The impact was significant - we delayed a product launch and frustrated stakeholders.

Looking back, I failed in two ways: I didn't consult enough with the teams whose data we were migrating, and I gave an estimate before doing proper discovery.

Since then, I've changed my approach to estimation. I now always do a week of discovery before committing to timelines, and I explicitly identify dependencies and get sign-off from affected teams. Last quarter, I applied this to a similar migration that we completed on time."

## Deep Dive: Influence Without Authority

### Why It's Critical at Staff Level

Staff engineers must:
- Drive technical initiatives across teams
- Change entrenched behaviors/practices
- Align stakeholders with different incentives
- Lead without formal reporting structure

### Influence Tactics Hierarchy

```
Most Effective
    ↓
1. Shared Goals - "We both want X, here's how"
2. Data & Evidence - "The numbers show..."
3. Expert Credibility - "In my experience..."
4. Relationships - "I understand your constraints..."
5. Coalition Building - "Teams A, B, C all agree..."
6. Favors/Reciprocity - "You helped me, I'll help you"
7. Escalation - "Let's involve leadership"
    ↓
Least Effective (but sometimes necessary)
```

### Influence Story Structure

**Setup (20%):**
- What change was needed
- Why you didn't have authority
- Who the stakeholders were

**Building influence (40%):**
- Understanding perspectives
- Finding common ground
- Presenting compelling case
- Handling objections

**Resolution (20%):**
- How alignment was achieved
- What was agreed

**Outcome (20%):**
- Results of the initiative
- Relationship impact
- What you learned

### Example: Influence Story

"We needed to adopt a new testing framework across three teams, but each team lead had their own preferred approach.

I didn't have authority to mandate a choice, so I approached it differently. First, I had 1:1s with each lead to understand their priorities and concerns. I learned Team A valued speed, Team B valued reliability, and Team C was worried about migration cost.

I then created a comparison matrix showing how my recommended framework addressed each concern, with data from a proof-of-concept I ran. I found that Teams A and C actually had similar underlying needs, so I got them aligned first.

With two of three teams on board, I scheduled a joint meeting. Team B raised valid concerns about edge cases, which I incorporated into the adoption plan.

We agreed on a phased rollout. Six months later, all three teams are using the framework, test coverage increased 40%, and the relationships I built have made future collaborations easier."

## Deep Dive: Technical Leadership Questions

### What "Technical Leadership" Means at Staff Level

Not just:
- Writing good code
- Knowing technical answers

But also:
- Setting technical direction
- Making difficult trade-offs
- Building team capabilities
- Balancing short and long-term

### Technical Decision Story Framework

**Context (15%):**
- What decision needed to be made
- Constraints and pressures
- Stakeholders involved

**Analysis (25%):**
- Options considered
- Trade-offs evaluated
- Data gathered
- Input sought

**Decision (20%):**
- What you decided
- Why (key reasoning)
- How you communicated it

**Execution (20%):**
- How it was implemented
- Challenges encountered
- Adjustments made

**Outcome (20%):**
- Results (quantified)
- What you learned
- What you'd do differently

### Common Technical Leadership Questions

1. **"Tell me about a technical decision you made that you later regretted."**
   - Show you can admit mistakes
   - Demonstrate learning and adaptation
   - Own the decision, don't blame circumstances

2. **"Describe a time you had to choose between technical quality and speed."**
   - Show pragmatic judgment
   - Explain trade-off reasoning
   - Demonstrate you understand both perspectives

3. **"How do you handle disagreement with your technical direction?"**
   - Show openness to feedback
   - Demonstrate collaborative resolution
   - Evidence of changing your mind when appropriate

## Deep Dive: Cross-Team Collaboration

### Common Challenges

1. **Misaligned incentives** - Teams have different OKRs
2. **Communication gaps** - Different contexts/assumptions
3. **Resource constraints** - Everyone is busy
4. **Technical debt** - Different tolerance levels
5. **Relationship deficits** - Haven't built trust

### Collaboration Story Elements

**Effective responses include:**
- How you built relationships
- How you understood other team's constraints
- How you found mutual benefit
- How you navigated disagreements
- Long-term impact on collaboration

### Cross-Team Anti-Patterns

**Things to avoid in your stories:**
- "They were wrong" framing
- Escalation as first response
- Ignoring their constraints
- Taking credit for team work
- Burning bridges for short-term wins

## Deep Dive: Conflict Resolution

### The Crucial Conversations Framework

For high-stakes, emotional, differing-opinion situations:

1. **Start with heart** - What do you really want?
2. **Learn to look** - Recognize when safety is at risk
3. **Make it safe** - Establish mutual purpose
4. **Master my stories** - Separate facts from interpretations
5. **STATE my path** - Share facts, tell story, ask for their view
6. **Explore others' paths** - Ask, mirror, paraphrase, prime
7. **Move to action** - Who does what by when

### Conflict Story Framework

**Setup (15%):**
- Who was involved
- What was the conflict
- Stakes involved

**Your internal process (20%):**
- Initial reaction
- How you managed emotions
- What you tried to understand

**Resolution approach (35%):**
- How you engaged
- Specific conversation/actions
- Finding common ground

**Outcome (20%):**
- How it was resolved
- Relationship afterward
- What you learned

**Key learning (10%):**
- How this changed your approach
- Application to future situations

## Company-Specific Behavioral Patterns

### Amazon (Leadership Principles)

**Key principles to demonstrate:**
- Customer Obsession
- Ownership
- Bias for Action
- Have Backbone; Disagree and Commit
- Deliver Results

**Story preparation:** Map each story to 2-3 principles

### Google (Googleyness)

**Key signals:**
- Intellectual humility
- Collaborative nature
- Effective communication
- Enjoys ambiguity
- Takes initiative

### Meta (Core Values)

**Key signals:**
- Move fast
- Be bold
- Focus on impact
- Be open
- Build social value

### Netflix (Culture)

**Key signals:**
- Judgment
- Communication
- Curiosity
- Courage
- Selflessness

### Stripe (Operating Principles)

**Key signals:**
- Users first
- Move with urgency
- Think rigorously
- Trust and amplify
- Global optimization

## Advanced Behavioral Patterns

### The "Second Layer" Technique

After giving your initial STAR response, be prepared for:

**"What else could you have done?"**
→ Shows you considered alternatives

**"What would you do differently?"**
→ Shows continuous improvement mindset

**"How did this change your approach?"**
→ Shows applied learning

**"What did others think of your approach?"**
→ Shows awareness of perception

### The "Unpacking" Technique

When asked a broad question:
1. Acknowledge the breadth
2. Offer to focus on one aspect
3. Be ready to discuss others

Example: "There are several aspects to that - the technical challenge, the stakeholder management, and the team dynamics. Let me focus on [X], and I'm happy to dive into the others if helpful."

### The "Bridge" Technique

Connecting to your prepared stories:
"That reminds me of a situation where..." → bridge to strong story

But don't force it - relevance matters.

## Self-Assessment Questions

Before each interview, ask yourself:

1. Do I have stories for each major category?
2. Can I quantify results in each story?
3. Have I practiced each story aloud?
4. Do my stories match this company's values?
5. Am I prepared for follow-up questions?
6. Can I discuss failures without defensiveness?
7. Do my stories show staff-level impact?

## Interview Day Checklist

**Before:**
- [ ] Review company values
- [ ] Refresh key stories
- [ ] Prepare questions to ask
- [ ] Check logistics

**During:**
- [ ] Take a breath before answering
- [ ] Use STAR framework
- [ ] Watch time (2-3 minutes)
- [ ] Ask clarifying questions if needed

**After:**
- [ ] Note questions asked
- [ ] Assess your performance
- [ ] Send thank you if appropriate
- [ ] Update stories based on learnings
