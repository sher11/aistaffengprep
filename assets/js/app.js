// Staff Engineer Interview Prep - Main JavaScript

// Progress Tracking System
const ProgressTracker = {
    STORAGE_KEY: 'staffengprep_progress',

    getProgress() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : this.getDefaultProgress();
    },

    getDefaultProgress() {
        return {
            coding: { completed: [], currentModule: 1, quizScores: {} },
            systemDesign: { completed: [], currentModule: 1, quizScores: {} },
            companySpecific: { completed: [], currentModule: 1, quizScores: {} },
            behavioral: { completed: [], currentModule: 1, quizScores: {} },
            spacedRepetition: {},
            lastVisit: new Date().toISOString()
        };
    },

    saveProgress(progress) {
        progress.lastVisit = new Date().toISOString();
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
    },

    markModuleComplete(topic, moduleId) {
        const progress = this.getProgress();
        if (!progress[topic].completed.includes(moduleId)) {
            progress[topic].completed.push(moduleId);
            progress[topic].currentModule = Math.max(progress[topic].currentModule, moduleId + 1);
        }
        this.saveProgress(progress);
        return progress;
    },

    saveQuizScore(topic, quizId, score, total) {
        const progress = this.getProgress();
        progress[topic].quizScores[quizId] = { score, total, date: new Date().toISOString() };
        this.saveProgress(progress);
        return progress;
    },

    getOverallProgress(topic) {
        const progress = this.getProgress();
        const totalModules = this.getModuleCount(topic);
        return Math.round((progress[topic].completed.length / totalModules) * 100);
    },

    getModuleCount(topic) {
        const counts = {
            coding: 9,
            systemDesign: 8,
            companySpecific: 6,
            behavioral: 6
        };
        return counts[topic] || 1;
    },

    updateSpacedRepetition(conceptId, remembered) {
        const progress = this.getProgress();
        const now = new Date();

        if (!progress.spacedRepetition[conceptId]) {
            progress.spacedRepetition[conceptId] = {
                interval: 1, // days
                lastReview: now.toISOString(),
                easeFactor: 2.5
            };
        }

        const concept = progress.spacedRepetition[conceptId];

        if (remembered) {
            concept.interval = Math.round(concept.interval * concept.easeFactor);
            concept.easeFactor = Math.min(concept.easeFactor + 0.1, 3.0);
        } else {
            concept.interval = 1;
            concept.easeFactor = Math.max(concept.easeFactor - 0.2, 1.3);
        }

        concept.lastReview = now.toISOString();
        concept.nextReview = new Date(now.getTime() + concept.interval * 24 * 60 * 60 * 1000).toISOString();

        this.saveProgress(progress);
        return concept;
    },

    getDueReviews() {
        const progress = this.getProgress();
        const now = new Date();
        const due = [];

        for (const [conceptId, concept] of Object.entries(progress.spacedRepetition)) {
            if (new Date(concept.nextReview) <= now) {
                due.push({ conceptId, ...concept });
            }
        }

        return due;
    }
};

// Quiz System
class Quiz {
    constructor(containerId, questions) {
        this.container = document.getElementById(containerId);
        this.questions = questions;
        this.currentQuestion = 0;
        this.score = 0;
        this.answered = false;
    }

    render() {
        if (this.currentQuestion >= this.questions.length) {
            this.showResults();
            return;
        }

        const q = this.questions[this.currentQuestion];

        this.container.innerHTML = `
            <div class="quiz-progress mb-2">
                Question ${this.currentQuestion + 1} of ${this.questions.length}
            </div>
            <div class="quiz-question">${q.question}</div>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `
                    <label class="quiz-option" data-index="${i}">
                        <input type="radio" name="quiz-answer" value="${i}">
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
            <div class="quiz-feedback" id="quiz-feedback"></div>
            <div class="mt-3">
                <button class="btn btn-primary" id="check-answer" ${this.answered ? 'disabled' : ''}>
                    Check Answer
                </button>
                <button class="btn btn-secondary" id="next-question" style="display: none; margin-left: 0.5rem;">
                    Next Question
                </button>
            </div>
        `;

        this.attachEventListeners();
    }

    attachEventListeners() {
        const options = this.container.querySelectorAll('.quiz-option');
        const checkBtn = this.container.querySelector('#check-answer');
        const nextBtn = this.container.querySelector('#next-question');

        options.forEach(opt => {
            opt.addEventListener('click', () => {
                if (this.answered) return;
                options.forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                opt.querySelector('input').checked = true;
            });
        });

        checkBtn.addEventListener('click', () => this.checkAnswer());
        nextBtn.addEventListener('click', () => {
            this.currentQuestion++;
            this.answered = false;
            this.render();
        });
    }

    checkAnswer() {
        const selected = this.container.querySelector('input[name="quiz-answer"]:checked');
        if (!selected) return;

        this.answered = true;
        const answer = parseInt(selected.value);
        const correct = this.questions[this.currentQuestion].correct;
        const feedback = this.container.querySelector('#quiz-feedback');
        const options = this.container.querySelectorAll('.quiz-option');

        options.forEach((opt, i) => {
            if (i === correct) {
                opt.classList.add('correct');
            } else if (i === answer && answer !== correct) {
                opt.classList.add('incorrect');
            }
        });

        if (answer === correct) {
            this.score++;
            feedback.className = 'quiz-feedback show correct';
            feedback.textContent = 'Correct! ' + (this.questions[this.currentQuestion].explanation || '');
        } else {
            feedback.className = 'quiz-feedback show incorrect';
            feedback.textContent = 'Incorrect. ' + (this.questions[this.currentQuestion].explanation || '');
        }

        this.container.querySelector('#check-answer').disabled = true;
        this.container.querySelector('#next-question').style.display = 'inline-block';
    }

    showResults() {
        const percentage = Math.round((this.score / this.questions.length) * 100);

        this.container.innerHTML = `
            <div class="text-center">
                <h3>Quiz Complete!</h3>
                <p class="mt-2">You scored ${this.score} out of ${this.questions.length} (${percentage}%)</p>
                <div class="progress-bar mt-3" style="max-width: 300px; margin: 0 auto;">
                    <div class="progress-fill" style="width: ${percentage}%"></div>
                </div>
                <button class="btn btn-primary mt-3" onclick="location.reload()">
                    Retry Quiz
                </button>
            </div>
        `;
    }
}

// Collapsible Sections
function initCollapsibles() {
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', () => {
            const collapsible = header.parentElement;
            collapsible.classList.toggle('open');
        });
    });
}

// Progress Bar Update
function updateProgressBar(elementId, progress) {
    const bar = document.getElementById(elementId);
    if (bar) {
        bar.querySelector('.progress-fill').style.width = `${progress}%`;
        const label = bar.querySelector('.progress-label');
        if (label) {
            label.textContent = `${progress}% Complete`;
        }
    }
}

// Module Navigation
function initModuleNavigation(topic) {
    const progress = ProgressTracker.getProgress();
    const modules = document.querySelectorAll('.module-item');

    modules.forEach((module, index) => {
        const moduleId = index + 1;
        const isCompleted = progress[topic].completed.includes(moduleId);

        const numberEl = module.querySelector('.module-number');
        const statusEl = module.querySelector('.module-status');

        if (isCompleted) {
            numberEl.classList.add('completed');
            numberEl.innerHTML = '&#10003;';
            statusEl.textContent = 'Completed';
            statusEl.classList.add('completed');
        } else if (moduleId === progress[topic].currentModule) {
            statusEl.textContent = 'In Progress';
            statusEl.classList.add('in-progress');
        }
    });
}

// Spaced Repetition UI
function renderReviewSchedule(containerId, concepts) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const progress = ProgressTracker.getProgress();
    const now = new Date();

    container.innerHTML = concepts.map(concept => {
        const sr = progress.spacedRepetition[concept.id];
        let dueText = 'New';
        let dueClass = '';

        if (sr) {
            const nextReview = new Date(sr.nextReview);
            if (nextReview <= now) {
                dueText = 'Due now';
                dueClass = 'overdue';
            } else {
                const days = Math.ceil((nextReview - now) / (1000 * 60 * 60 * 24));
                dueText = `Due in ${days} day${days > 1 ? 's' : ''}`;
            }
        }

        return `
            <div class="review-item">
                <input type="checkbox" class="review-checkbox"
                       data-concept="${concept.id}"
                       onchange="handleReviewCheck(this)">
                <span class="review-concept">${concept.name}</span>
                <span class="review-due ${dueClass}">${dueText}</span>
            </div>
        `;
    }).join('');
}

function handleReviewCheck(checkbox) {
    const conceptId = checkbox.dataset.concept;
    ProgressTracker.updateSpacedRepetition(conceptId, checkbox.checked);

    // Visual feedback
    const item = checkbox.closest('.review-item');
    if (checkbox.checked) {
        item.style.opacity = '0.5';
        setTimeout(() => {
            item.style.opacity = '1';
            location.reload(); // Refresh to show new due date
        }, 500);
    }
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

    // Update overall progress on homepage
    const overallProgress = document.getElementById('overall-progress');
    if (overallProgress) {
        const progress = ProgressTracker.getProgress();
        const topics = ['coding', 'systemDesign', 'companySpecific', 'behavioral'];
        let total = 0;

        topics.forEach(topic => {
            const topicProgress = ProgressTracker.getOverallProgress(topic);
            total += topicProgress;

            const bar = document.getElementById(`${topic}-progress`);
            if (bar) {
                updateProgressBar(`${topic}-progress`, topicProgress);
            }
        });

        const avg = Math.round(total / topics.length);
        overallProgress.querySelector('.progress-fill').style.width = `${avg}%`;
    }
});

// Export for use in pages
window.StaffEngPrep = {
    ProgressTracker,
    Quiz,
    updateProgressBar,
    initModuleNavigation,
    renderReviewSchedule
};
