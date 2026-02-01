# Staff Engineer Interview Prep - Project Guidelines

## Project Overview

This is an interactive GitHub Pages site for staff engineer interview preparation, covering four domains:
1. **Coding Rounds** - Algorithms, data structures, problem-solving patterns
2. **System Design** - Scalability, distributed systems, architectural patterns
3. **Company-Specific** - Interview processes for top tech companies
4. **Behavioral** - STAR method, leadership stories, communication

**Live Site**: Served from repository root via GitHub Pages

## Current Project Structure

```
/ (repository root - GitHub Pages served from here)
├── index.html                 # Main landing page
├── assets/
│   ├── css/style.css         # Global styles (includes sidebar CSS)
│   └── js/app.js             # Collapsible sections, Mermaid init
├── coding-rounds/
│   ├── index.html            # Course overview (9 modules)
│   └── module-01.html - module-09.html
├── system-design/
│   ├── index.html            # Course overview with left sidebar
│   ├── module-01.html - module-12.html  # Core modules
│   └── problems/             # Detailed problem breakdowns
│       ├── url-shortener.html
│       ├── news-feed.html
│       ├── chat-system.html
│       └── video-streaming.html
├── company-specific/
│   ├── index.html            # Course overview (6 modules)
│   └── module-01.html - module-06.html
├── behavioral/
│   ├── index.html            # Course overview (6 modules)
│   └── module-01.html - module-06.html
```

## Technology Stack

- **Framework**: Vanilla HTML/CSS/JS (no build step required)
- **Diagrams**: Mermaid.js (loaded via CDN)
- **Styling**: Custom CSS with CSS variables for theming

## Key Features

### 1. Left Sidebar Navigation (HelloInterview-style)
- Sticky sidebar on desktop (280px width)
- Collapsible on mobile with toggle button
- Organized by category sections

### 2. Interactive Components
- **Collapsibles**: Expandable content sections
- **Clickable Cards**: All cards must link to relevant modules/resources

### 3. Visual Learning
- Mermaid diagrams for architecture, flowcharts, sequences
- Comparison tables for trade-offs
- Code blocks with syntax highlighting

## Content Quality Requirements (CRITICAL)

### Depth Standards
Every module MUST include:

1. **Conceptual Foundation** (not just bullet points)
   - Explain WHY, not just WHAT
   - Include the reasoning behind design decisions
   - Discuss trade-offs in depth

2. **Real-World Examples**
   - How Netflix/Google/Amazon implements this
   - Actual numbers and scale (e.g., "Twitter handles 500M tweets/day")
   - Case studies of failures and successes

3. **Code Samples** (where applicable)
   - Working code snippets, not pseudocode
   - Multiple language examples (Python, Java, Go)
   - Comments explaining key decisions

4. **Visual Diagrams**
   - Architecture diagrams using Mermaid
   - Sequence diagrams for complex flows
   - Comparison tables for trade-offs

5. **Interview Tips**
   - Common follow-up questions
   - What interviewers look for
   - Red flags to avoid

6. **Deep Dive Sections**
   - Advanced topics for senior candidates
   - Edge cases and failure scenarios
   - Performance optimization techniques

### Content Anti-Patterns (AVOID)
- ❌ Superficial bullet point lists without explanation
- ❌ Cards/sections without clickable links
- ❌ Generic descriptions without specific examples
- ❌ Missing "why" behind concepts
- ❌ No code samples in technical modules
- ❌ Placeholder or empty sections

### Clickable Elements
- ALL cards in card-grid MUST link to relevant content
- Use `onclick="window.location.href='...'"` or wrap in `<a>` tags
- Never have non-functional UI elements

## Style Guidelines

### CSS Classes
```css
.layout-with-sidebar    /* Flex container for sidebar + content */
.sidebar               /* Left navigation sidebar */
.sidebar-link          /* Navigation links */
.sidebar-link.active   /* Currently active page */
.main-content          /* Main content area (max-width: 900px) */
.main-content-wide     /* Full-width main content */
.collapsible           /* Expandable section */
.collapsible.open      /* Expanded state */
.card                  /* Content card - MUST be clickable */
.card-grid             /* Grid of cards */
.diagram-container     /* Mermaid diagram wrapper */
.code-block            /* Code snippet */
```

### Card Template (Clickable)
```html
<div class="card" onclick="window.location.href='module-01.html'" style="cursor: pointer;">
    <h3>Card Title</h3>
    <p>Description of what this covers</p>
</div>
```

## Adding New Content

### Module Page Structure
```html
<main class="main-content">
    <h1>Module Title</h1>

    <!-- Learning objectives -->
    <div class="card">
        <h3>What You'll Learn</h3>
        <ul>...</ul>
    </div>

    <!-- Core content with depth -->
    <h2>Topic 1</h2>
    <div class="collapsible open">
        <div class="collapsible-header">
            <span>Detailed Explanation</span>
        </div>
        <div class="collapsible-content">
            <!-- In-depth explanation with WHY -->
            <!-- Real-world examples -->
            <!-- Code samples -->
            <!-- Diagrams -->
        </div>
    </div>

    <!-- More topics... -->

    <!-- Navigation -->
    <div class="flex flex-between mt-4">
        <a href="previous.html" class="btn btn-secondary">← Previous</a>
        <a href="next.html" class="btn btn-primary">Next →</a>
    </div>
</main>
```

## Testing Checklist

Before committing:
- [ ] All pages return HTTP 200
- [ ] All cards are clickable and navigate correctly
- [ ] Mermaid diagrams render correctly
- [ ] Collapsibles expand/collapse
- [ ] Sidebar navigation works on mobile
- [ ] No empty or placeholder sections
- [ ] Content has sufficient depth (not just bullet points)
- [ ] Check browser console for JavaScript errors

## Content References

### Authoritative Resources
- System Design: https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction
- DDIA Book: Designing Data-Intensive Applications by Martin Kleppmann
- System Design Primer: https://github.com/donnemartin/system-design-primer
- Company interviews: https://www.levels.fyi/, https://www.glassdoor.com/

## Git Workflow

1. Test locally with `python -m http.server 8080`
2. Verify all pages load and cards are clickable
3. Check browser console for JavaScript errors
4. Commit with descriptive message
5. Push to main branch (GitHub Pages auto-deploys)
