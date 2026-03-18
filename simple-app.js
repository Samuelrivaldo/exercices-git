// Version ultra-simple sans dépendances complexes
// Teste si la structure de base fonctionne

console.log('✅ Simple app loading...');

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');
    
    if (!taskInput || !addBtn || !taskList) {
        console.error('❌ DOM elements missing');
        return;
    }
    
    console.log('✅ DOM ready');
    
    // Simple in-memory storage
    let tasks = [];
    
    function render() {
        taskList.innerHTML = '';
        if (tasks.length === 0) {
            taskList.innerHTML = '<li class="empty-state">Aucune tâche - Ajouter une!</li>';
            return;
        }
        
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = 'task-item ' + (task.done ? 'completed' : '');
            li.innerHTML = `
                <div class="task-header">
                    <input type="checkbox" class="task-checkbox" ${task.done ? 'checked' : ''}>
                    <span class="task-title">${task.title}</span>
                </div>
                <div class="task-actions">
                    <button class="btn-delete">Supprimer</button>
                </div>
            `;
            
            li.querySelector('.task-checkbox').onchange = function() {
                task.done = this.checked;
                render();
            };
            
            li.querySelector('.btn-delete').onclick = function(e) {
                e.preventDefault();
                tasks.splice(index, 1);
                render();
            };
            
            taskList.appendChild(li);
        });
    }
    
    addBtn.onclick = function(e) {
        e.preventDefault();
        const title = taskInput.value.trim();
        if (title) {
            tasks.push({ title: title, done: false });
            taskInput.value = '';
            render();
            console.log('✅ Tâche ajoutée:', title);
        }
    };
    
    taskInput.onkeypress = function(e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    };
    
    // Clear all
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.onclick = function(e) {
            e.preventDefault();
            if (confirm('Effacer tout?')) {
                tasks = [];
                render();
            }
        };
    }
    
    render();
    console.log('✅ Application simple prête!');
    window.tasksDebug = tasks; // Pour debug dans la console
});
