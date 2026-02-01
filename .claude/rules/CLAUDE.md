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
│   └── js/app.js             # Progress tracking, Quiz class, utilities
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
└── courses/                  # Legacy folder (research & course plans)
    ├── research/
    └── course-plans/
```

## Completion Status

| Section | Modules | Status |
|---------|---------|--------|
| Coding Rounds | 9 modules | Complete |
| System Design | 12 modules + 4 problem breakdowns | Complete |
| Company-Specific | 6 modules | Complete |
| Behavioral | 6 modules | Complete |

## Technology Stack

- **Framework**: Vanilla HTML/CSS/JS (no build step required)
- **Diagrams**: Mermaid.js (loaded via CDN)
- **Storage**: LocalStorage for progress tracking
- **Styling**: Custom CSS with CSS variables for theming

## Key Features Implemented

### 1. Left Sidebar Navigation (HelloInterview-style)
- Sticky sidebar on desktop (280px width)
- Collapsible on mobile with toggle button
- Shows module completion status
- Organized by category sections

### 2. Interactive Components
- **Quizzes**: Multiple choice with instant feedback
- **Collapsibles**: Expandable content sections
- **Progress Tracking**: LocalStorage-based completion tracking
- **Spaced Repetition**: Review schedule with checkboxes

### 3. Visual Learning
- Mermaid diagrams for architecture, flowcharts, sequences
- Comparison tables for trade-offs
- Code blocks with syntax highlighting

## Style Guidelines

### CSS Classes
```css
.layout-with-sidebar    /* Flex container for sidebar + content */
.sidebar               /* Left navigation sidebar */
.sidebar-link          /* Navigation links */
.sidebar-link.active   /* Currently active page */
.sidebar-link.completed /* Module marked complete */
.main-content          /* Main content area (max-width: 900px) */
.main-content-wide     /* Full-width main content */
.collapsible           /* Expandable section */
.collapsible.open      /* Expanded state */
.quiz-container        /* Quiz wrapper */
.card                  /* Content card */
.card-grid             /* Grid of cards */
.diagram-container     /* Mermaid diagram wrapper */
.code-block            /* Code snippet */
```

### JavaScript API
```javascript
// Progress tracking
StaffEngPrep.ProgressTracker.markModuleComplete('systemDesign', 1);
StaffEngPrep.ProgressTracker.isModuleComplete('systemDesign', 1);
StaffEngPrep.ProgressTracker.getOverallProgress('systemDesign');

// Quiz
const quiz = new StaffEngPrep.Quiz('container-id', questionsArray);
quiz.render();

// Review schedule
StaffEngPrep.renderReviewSchedule('container-id', conceptsArray);
```

## Adding New Content

### Adding a New Module
1. Copy an existing module-XX.html as template
2. Update the sidebar navigation (mark new module as active)
3. Update sidebar links in related modules
4. Add quiz questions specific to the content
5. Update the index.html module list

### Adding a Problem Breakdown
1. Create new file in `system-design/problems/`
2. Follow the structure: Requirements → Estimation → API → Schema → Architecture → Deep Dive
3. Add link to sidebar in index.html and related modules

### Module Page Template
```html
<div class="layout-with-sidebar">
    <aside class="sidebar" id="sidebar">
        <!-- Sidebar navigation -->
    </aside>
    <button class="sidebar-toggle" id="sidebarToggle">☰</button>
    <div class="sidebar-overlay" id="sidebarOverlay"></div>
    <main class="main-content">
        <!-- Module content -->
    </main>
</div>
```

## Content References

### System Design Topics (HelloInterview parity)
- Core Concepts: Scalability, Databases, Distributed Systems, Storage, Seminal Papers, API Design, Numbers to Know
- Patterns: Real-time Updates, Rate Limiting
- Problems: URL Shortener, News Feed, Chat System, Video Streaming

### Authoritative Resources
- System Design: https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction
- DDIA Book: Designing Data-Intensive Applications by Martin Kleppmann
- System Design Primer: https://github.com/donnemartin/system-design-primer
- Company interviews: https://www.levels.fyi/, https://www.glassdoor.com/

## Maintenance Tasks

### Regular Updates Needed
- [ ] Keep company-specific interview processes current
- [ ] Add new problem breakdowns as requested
- [ ] Update latency/capacity numbers if industry standards change
- [ ] Check external links periodically

### Testing Checklist
- [ ] All pages return HTTP 200
- [ ] Mermaid diagrams render correctly
- [ ] Quizzes show feedback on answer selection
- [ ] Collapsibles expand/collapse
- [ ] Sidebar navigation works on mobile
- [ ] Progress tracking persists across sessions

## Git Workflow

When making changes:
1. Test locally with `python -m http.server 8080`
2. Verify all new pages load correctly
3. Check browser console for JavaScript errors
4. Commit with descriptive message
5. Push to main branch (GitHub Pages auto-deploys)

## Notes

- All paths are relative to repository root
- No build step required - static HTML served directly
- LocalStorage keys prefixed with course name (e.g., `systemDesign_module_1`)
- Mobile breakpoint at 900px for sidebar collapse
