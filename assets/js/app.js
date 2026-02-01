// Staff Engineer Interview Prep - Main JavaScript

// Collapsible Sections
function initCollapsibles() {
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', () => {
            const collapsible = header.parentElement;
            collapsible.classList.toggle('open');
        });
    });
}

// Initialize Mermaid
function initMermaid() {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            securityLevel: 'loose'
        });
    }
}

// Page Initialization
document.addEventListener('DOMContentLoaded', () => {
    initCollapsibles();
    initMermaid();
});
