// === GESTIONNAIRE DE TÂCHES ===
// Un projet simple pour pratiquer Git et JavaScript

class TaskManager {
    constructor() {
        // Éléments DOM
        this.taskInput = document.getElementById('taskInput');
        this.addBtn = document.getElementById('addBtn');
        this.taskList = document.getElementById('taskList');
        this.clearBtn = document.getElementById('clearBtn');
        this.exportBtn = document.getElementById('exportBtn');
        this.taskCountEl = document.getElementById('taskCount');
        this.completedCountEl = document.getElementById('completedCount');

        // Données
        this.tasks = this.loadTasks();

        // Initialisation
        this.init();
    }

    init() {
        this.render();
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.addBtn.addEventListener('click', () => this.addTask());
        this.clearBtn.addEventListener('click', () => this.clearAll());
        this.exportBtn.addEventListener('click', () => this.exportTasks());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });
    }

    addTask() {
        const taskText = this.taskInput.value.trim();
        
        if (!taskText) {
            alert('Veuillez entrer une tâche!');
            return;
        }

        const task = {
            id: Date.now(),
            text: taskText,
            completed: false,
            createdAt: new Date().toLocaleDateString('fr-FR')
        };

        this.tasks.push(task);
        this.taskInput.value = '';
        this.taskInput.focus();
        this.saveTasks();
        this.render();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.render();
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.render();
        }
    }

    clearAll() {
        if (this.tasks.length === 0) return;
        if (confirm('Êtes-vous sûr de vouloir effacer toutes les tâches?')) {
            this.tasks = [];
            this.saveTasks();
            this.render();
        }
    }

    exportTasks() {
        if (this.tasks.length === 0) {
            alert('Aucune tâche à exporter!');
            return;
        }

        const data = this.tasks
            .map(task => `☐ ${task.text} (${task.completed ? '✓' : '✗'}) - ${task.createdAt}`)
            .join('\n');
        
        const blob = new Blob([data], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `taches_${new Date().toISOString().split('T')[0]}.txt`;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    render() {
        this.taskList.innerHTML = '';

        if (this.tasks.length === 0) {
            this.taskList.innerHTML = '<li class="empty-state">Aucune tâche pour l\'instant. Commencez en en ajoutant une!</li>';
        } else {
            this.tasks.forEach(task => {
                const li = document.createElement('li');
                li.className = task.completed ? 'completed' : '';
                li.innerHTML = `
                    <div class="task-content">
                        <input 
                            type="checkbox" 
                            class="task-checkbox" 
                            ${task.completed ? 'checked' : ''}
                            data-id="${task.id}"
                        >
                        <span class="task-text">${this.escapeHtml(task.text)}</span>
                    </div>
                    <button class="delete-btn" data-id="${task.id}">Supprimer</button>
                `;
                this.taskList.appendChild(li);
            });
        }

        this.updateStats();
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.taskList.querySelectorAll('.task-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.toggleTask(parseInt(e.target.dataset.id));
            });
        });

        this.taskList.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.deleteTask(parseInt(e.target.dataset.id));
            });
        });
    }

    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        this.taskCountEl.textContent = `Tâches totales: ${total}`;
        this.completedCountEl.textContent = `Complétées: ${completed}`;
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    loadTasks() {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialiser l'application au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new TaskManager();
    });
} else {
    new TaskManager();
}