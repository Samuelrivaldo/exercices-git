// Version simplifiee et tests

console.log('App en cours de chargement...');

document.addEventListener('DOMContentLoaded', function() {
    console.log('1. DOM charge');
    
    try {
        // TEST 1: Recuperer les elements
        const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');
        const taskList = document.getElementById('taskList');
        
        console.log('2. Elements trouves:', taskInput ? 'OUI' : 'NON', addBtn ? 'OUI' : 'NON');
        
        if (!taskInput || !addBtn || !taskList) {
            console.error('ERREUR: Elements manquants');
            return;
        }
        
        // TEST 2: Creer l'app
        console.log('3. Creation AppController...');
        const app = new AppController();
        console.log('4. AppController OK');
        
        // TEST 3: Creer les vues
        console.log('5. Creation vues...');
        const taskListView = new TaskListView('taskList', app);
        const filterView = new FilterView('filterPanel', app);
        const analyticsView = new AnalyticsView('analyticsPanel', app);
        console.log('6. Vues OK');
        
        // TEST 4: Fonction creation tache
        function createTask() {
            const title = taskInput.value.trim();
            console.log('Titre entre:', title);
            
            if (!title) {
                alert('Entrez un titre');
                return;
            }
            
            console.log('Appel createTask avec:', title);
            app.createTask({
                title: title,
                priority: 'medium',
                tags: [],
                completed: false
            });
            
            taskInput.value = '';
            console.log('Tache creee OK');
        }
        
        // Bouton Ajouter
        addBtn.onclick = function(e) {
            console.log('CLICK addBtn');
            e.preventDefault();
            createTask();
        };
        
        // Entree clavier
        taskInput.onkeypress = function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                createTask();
            }
        };
        
        // Bouton Supprimer tout
        const clearBtn = document.getElementById('clearBtn');
        if (clearBtn) {
            clearBtn.onclick = function(e) {
                e.preventDefault();
                if (confirm('Vraiment effacer tout?')) {
                    app.getAllTasks().forEach(t => app.deleteTask(t.id));
                    taskListView.refresh();
                }
            };
        }
        
        // Bouton Export
        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) {
            exportBtn.onclick = function(e) {
                e.preventDefault();
                const json = app.exportAsJSON();
                const blob = new Blob([json], {type: 'application/json'});
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'tasks.json';
                a.click();
                URL.revokeObjectURL(url);
            };
        }
        
        // Bouton Import
        const importBtn = document.getElementById('importBtn');
        if (importBtn) {
            importBtn.onclick = function(e) {
                e.preventDefault();
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                input.onchange = function(evt) {
                    const file = evt.target.files[0];
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        app.importFromJSON(event.target.result);
                        taskListView.refresh();
                        filterView.render();
                        alert('Import OK');
                    };
                    reader.readAsText(file);
                };
                input.click();
            };
        }
        
        // Gestion tabs
        const navTabs = document.querySelectorAll('.nav-tab');
        const sidebarContents = document.querySelectorAll('.sidebar-content');
        
        navTabs.forEach(function(tab) {
            tab.onclick = function(e) {
                e.preventDefault();
                const tabName = e.target.dataset.tab;
                
                navTabs.forEach(function(t) { t.classList.remove('active'); });
                sidebarContents.forEach(function(c) { c.classList.remove('active'); });
                
                e.target.classList.add('active');
                const panel = document.getElementById(tabName + 'Panel');
                if (panel) panel.classList.add('active');
            };
        });
        
        // Afficher taches
        console.log('7. Affichage des taches...');
        taskListView.refresh();
        
        console.log('SUCCESS: Application prete!');
        console.log('window.app est accessible');
        
        window.app = app;
        window.taskListView = taskListView;
        
    } catch (error) {
        console.error('ERREUR:', error.message);
        console.error(error.stack);
        alert('Erreur: ' + error.message);
        document.body.innerHTML = '<pre style="color: red; padding: 20px;">' + error.stack + '</pre>';
    }
});

