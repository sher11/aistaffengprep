# Instructions for Building Interactive Learning GitHub Pages

## Project Overview

The Software Developer want to be great staff engineer, Create an interactive GitHub Pages site to help a software developer learn and retain concepts across four key interview preparation domains:
1. Coding Rounds
2. System Design Rounds
3. Company-Specific Preparation
4. Behavioral Rounds

**Base Resource**: https://staffengprep.com/prepguide/

## Project Structure
```
courses/
├── research/
│   ├── coding-rounds/research.md
│   ├── system-design/research.md
│   ├── company-specific/research.md
│   └── behavioral/research.md
├── course-plans/
│   ├── coding-rounds/plan.md
│   ├── system-design/plan.md
│   ├── company-specific/plan.md
│   └── behavioral/plan.md
└── github-pages/
    ├── coding-rounds/subtopic/
    ├── system-design/subtopic/
    ├── company-specific/subtopic/
    └── behavioral/subtopic/
```

## Phase 1: Deep Research (Per Topic)

### For Each Topic, You Must:

1. **Navigate the Base Guide**
   - Start at https://staffengprep.com/prepguide/
   - Identify the section for the specific topic (e.g., System Design rounds)
   - Extract all links, resources, and references

2. **Follow All Linked Resources**
   - Visit every link mentioned in the guide
   - For PDFs (especially research papers): Extract key concepts, frameworks, patterns
   - For articles: Summarize main points, extract actionable insights
   - For external resources: Document methodologies and approaches

3. **Create Comprehensive Research Documents**
   
   Each research folder should contain:
   
   **a) `00-overview.md`**
   - Topic definition and importance
   - Scope and boundaries
   - Learning objectives
   - Common challenges and how to overcome them
   
   **b) `01-core-concepts.md`**
   - Fundamental principles
   - Key terminology and definitions
   - Mental models and frameworks
   - Visual diagrams (using Mermaid syntax)
   
   **c) `02-resources-inventory.md`**
   - Categorized list of all resources found
   - For each resource:
     * Link/reference
     * Summary (2-3 sentences)
     * Key takeaways
     * Difficulty level
     * Estimated time to consume
   
   **d) `03-patterns-and-frameworks.md`**
   - Common patterns identified across resources
   - Decision-making frameworks
   - Templates and structures
   - Best practices vs anti-patterns
   
   **e) `04-deep-dive-notes.md`**
   - Detailed notes from research papers
   - Case studies and examples
   - Advanced concepts
   - Connection between different resources

## Phase 2: Course Plan Creation (Per Topic)

### Using Research as Foundation, Create:

1. **`course-structure.md`**
   ```markdown
   # Course Structure for [Topic]
   
   ## Learning Path
   - Beginner → Intermediate → Advanced progression
   - Estimated total time
   - Prerequisites
   
   ## Modules
   ### Module 1: [Name]
   - Duration: X hours
   - Learning objectives
   - Key concepts covered
   - Dependencies
   
   [Repeat for all modules]
   ```

2. **`module-breakdown/`** (folder with files for each module)
   
   Each module file should include:
   - **Learning Objectives**: Specific, measurable outcomes
   - **Core Content**: Structured lessons (bite-sized chunks)
   - **Interactive Elements**: 
     * Self-check questions
     * Practice problems
     * Scenario-based exercises
   - **Visual Components**: 
     * Diagrams to create
     * Flowcharts
     * Mind maps
   - **Spaced Repetition Points**: Concepts that need reinforcement
   - **Real-world Applications**: Where this is used in practice

3. **`assessment-strategy.md`**
   - Quiz questions bank (categorized by difficulty)
   - Practice problems with solutions
   - Project ideas
   - Self-evaluation rubrics

4. **`retention-strategy.md`**
   - Spaced repetition schedule
   - Key concepts to review weekly/monthly
   - Progressive difficulty increases
   - Connection maps between modules

## Phase 3: GitHub Pages Content Generation

### Interactive Features to Implement:

1. **Progressive Disclosure**
   - Start with high-level overview
   - Allow user to expand sections
   - Collapsible details for advanced topics

2. **Interactive Quizzes**
   - Multiple choice questions
   - Code challenges (with built-in editor if possible)
   - Scenario-based questions
   - Immediate feedback with explanations

3. **Visual Learning Components**
   - Mermaid diagrams for:
     * System architecture
     * Flowcharts
     * Sequence diagrams
     * Mind maps
   - Interactive SVGs where applicable
   - Animated explanations for complex concepts

4. **Spaced Repetition System**
   - Local storage to track progress
   - Schedule for reviewing concepts
   - Progressive unlocking of content
   - Review reminders based on learning schedule

5. **Practice Integration**
   - Code snippets with syntax highlighting
   - Embedded coding challenges
   - Design problems with solution templates
   - Behavioral question frameworks with examples

### For Each Module Page, Include:

```html
Structure:
├── Navigation (progress tracker)
├── Learning Objectives (what you'll master)
├── Core Content
│   ├── Concept explanation (with visuals)
│   ├── Examples (2-3 practical examples)
│   ├── Interactive component (quiz/exercise)
│   └── Common pitfalls (what to avoid)
├── Practice Section
│   ├── Easy problems (2-3)
│   ├── Medium problems (2-3)
│   └── Hard problems (1-2)
├── Quick Review (key points summary)
├── Spaced Repetition Scheduler
└── Next Steps (what to learn next)
```

### Technology Stack Recommendations:

- **Framework**: Jekyll or vanilla HTML/CSS/JS
- **Styling**: Tailwind CSS or custom CSS
- **Diagrams**: Mermaid.js
- **Code Highlighting**: Prism.js or Highlight.js
- **Storage**: LocalStorage for progress tracking
- **Interactivity**: Vanilla JavaScript or React (as .jsx artifact)

## Specific Requirements by Topic:

### 1. Coding Rounds
- Focus on: Algorithms, data structures, problem-solving patterns
- Visuals needed: 
  * Algorithm flowcharts
  * Complexity analysis graphs
  * Data structure visualizations
- Interactive elements:
  * Code editor integration
  * Step-by-step algorithm execution
  * Complexity calculator

### 2. System Design Rounds
- Focus on: Scalability, trade-offs, architectural patterns
- Visuals needed:
  * System architecture diagrams
  * Data flow diagrams
  * CAP theorem illustrations
  * Load balancing strategies
- Interactive elements:
  * Design exercise templates
  * Trade-off decision trees
  * Capacity estimation calculators

### 3. Company-Specific Preparation
- Focus on: Company culture, values, recent news, specific processes
- Visuals needed:
  * Company comparison matrices
  * Interview process flowcharts
  * Timeline trackers
- Interactive elements:
  * Company research checklist
  * Question bank by company
  * Success story templates

### 4. Behavioral Rounds
- Focus on: STAR method, common questions, storytelling
- Visuals needed:
  * STAR framework diagrams
  * Story structure templates
  * Impact measurement frameworks
- Interactive elements:
  * Story builder tool
  * Question-answer matcher
  * Response evaluator

## Execution Instructions for Claude:

### Step-by-Step Process:

**For Each of the 4 Topics:**

1. **Start Research Phase**
   ```
   "I want to research [TOPIC] from the staffengprep guide. 
   Please:
   1. Visit https://staffengprep.com/prepguide/
   2. Navigate to the [TOPIC] section
   3. Extract and visit all linked resources
   4. Create comprehensive research documents in the structure defined above
   5. Save all research files to research/[topic-name]/"
   ```

2. **Create Course Plan**
   ```
   "Using the research from research/[topic-name]/, create a structured course plan:
   1. Design the learning progression (beginner → advanced)
   2. Break down into modules (aim for 6-10 modules)
   3. Create detailed module breakdowns
   4. Develop assessment and retention strategies
   5. Save all plans to course-plans/[topic-name]/"
   ```

3. **Generate Interactive GitHub Pages**
   ```
   "Using the course plan from course-plans/[topic-name]/, create interactive HTML pages:
   1. Generate index.html (course overview)
   2. Create module pages (module-1.html, module-2.html, etc.)
   3. Implement interactive quizzes and exercises
   4. Add visual components (Mermaid diagrams, flowcharts)
   5. Integrate spaced repetition system
   6. Add progress tracking
   7. Save all to github-pages/[topic-name]/"
   ```

### Quality Checklist:

For each completed topic, verify:
- [ ] All links from the guide have been researched
- [ ] Research documents are comprehensive and well-organized
- [ ] Course plan has clear progression and objectives
- [ ] Interactive elements are functional
- [ ] Visual aids enhance understanding
- [ ] Spaced repetition is integrated
- [ ] Content is accurate and up-to-date
- [ ] Pages are mobile-responsive
- [ ] Progress tracking works

## Example Prompt to Start:

```
I want to build an interactive learning system based on https://staffengprep.com/prepguide/

Let's start with System Design Rounds:

PHASE 1 - RESEARCH:
1. Visit the prepguide and navigate to System Design section
2. Extract all resources, links, and PDF references
3. Follow each link and PDF to gather comprehensive information
4. Create detailed research documents covering:
   - Overview and core concepts
   - Resources inventory with summaries
   - Patterns and frameworks identified
   - Deep-dive notes from all materials
5. Save research to research/system-design/

Please begin and show me what you find.
```

## Notes:
- Prioritize depth over breadth in research phase
- Ensure interactivity enhances learning, not just aesthetics
- Design for retention and recall, not just initial understanding
- Make content progressively challenging
- Include real-world applications throughout