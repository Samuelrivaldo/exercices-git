// TaskListView simple et sans bugs

class TaskListViewSimple {
    constructor(containerId, controller) {
        this.container = document.getElementById(containerId);
        this.controller = controller;
        this.init();
    }

    init() {
        try {
            this.controller.on(APP_EVENTS.TASKS_FILTERED, (tasks) => this.render(tasks));
            this.controller.on(APP_EVENTS.TASK_UPDATED, () => this.refresh());
            this.controller.on(APP_EVENTS.TASK_DELETED, () => this.refresh());
        } catch(e) {
            console.log('Event binding failed, will refresh manually', e);
        }
    }

    render(tasks) {
        if (!tasks) {
            tasks = this.controller.getFilteredTasks() || [];
        }
        
        this.container.innerHTML = '';

        if (tasks.length === 0) {
            this.container.innerHTML = '<li class="empty-state">Aucune tache</li>';
            return;
        }

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = 'task-item ' + (task.completed ? 'completed' : '');
            
            const colors = { urgent: '#e74c3c', high: '#f39c12', medium: '#3498db', low: '#95a5a6' };
            li.style.borderLeftColor = colors[task.priority] || '#3498db';
            
            li.innerHTML = '<div class="task-header"><input type="checkbox" class="task-checkbox" ' + (task.completed ? 'checked' : '') + '><span class="task-title">' + task.title + '</span></div><div class="task-actions"><button class="btn-delete">Supprimer</button></div>';
            
            const checkbox = li.querySelector('.task-checkbox');
            checkbox.onclick = () => {
                this.controller.toggleTask(task.id);
                this.refresh();
            };
            
            const deleteBtn = li.querySelector('.btn-delete');
            deleteBtn.onclick = () => {
                this.controller.deleteTask(task.id);
                this.refresh();
            };
            
            this.container.appendChild(li);
        });
    }

    refresh() {
        const tasks = this.controller.getFilteredTasks() || [];
        this.render(tasks);
    }
}

// Remplacement du TaskListView original
TaskListView = TaskListViewSimple;
