// Version simplifiee et tests

console.log('🔍 DIAGNOSTIC - Vérification des dépendances...');

// Diagnostic: Check si les classes sont chargées
console.log('✓ EventEmitter:', typeof EventEmitter !== 'undefined' ? '✅' : '❌');
console.log('✓ APP_EVENTS:', typeof APP_EVENTS !== 'undefined' ? '✅' : '❌');
console.log('✓ Task:', typeof Task !== 'undefined' ? '✅' : '❌');
console.log('✓ Category:', typeof Category !== 'undefined' ? '✅' : '❌');
console.log('✓ StorageService:', typeof StorageService !== 'undefined' ? '✅' : '❌');
console.log('✓ TaskService:', typeof TaskService !== 'undefined' ? '✅' : '❌');
console.log('✓ FilterService:', typeof FilterService !== 'undefined' ? '✅' : '❌');
console.log('✓ Validators:', typeof Validators !== 'undefined' ? '✅' : '❌');
console.log('✓ Helpers:', typeof Helpers !== 'undefined' ? '✅' : '❌');
console.log('✓ AppController:', typeof AppController !== 'undefined' ? '✅' : '❌');
console.log('✓ TaskListView:', typeof TaskListView !== 'undefined' ? '✅' : '❌');

if (
    typeof EventEmitter === 'undefined' ||
    typeof StorageService === 'undefined' ||
    typeof TaskService === 'undefined' ||
    typeof AppController === 'undefined'
) {
    console.error('❌ ERREUR: Des dépendances essentielles manquent. Les scripts n\'ont peut-être pas chargé correctement.');
    console.log('Vérifiez que tous les fichiers sont présents et que le navigateur ne montre pas d\'erreurs 404.');
    
    // Mode dégradé - afficher un message d'erreur
    document.addEventListener('DOMContentLoaded', function() {
        const taskList = document.getElementById('taskList');
        if (taskList) {
            taskList.innerHTML = '<li style="color: red; padding: 20px;"><strong>Erreur de chargement:</strong> Les fichiers JavaScript n\'ont pas pu se charger. Vérifiez la console pour plus de détails.</li>';
        }
    });
    
} else {
    console.log('✅ Toutes les dépendances sont chargées. Initialisation de l\'application...');

document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM chargé');
    
    try {
        // TEST 1: Recuperer les elements
        const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');
        const taskList = document.getElementById('taskList');
        
        console.log('📍 Éléments DOM:', {
            taskInput: taskInput ? '✅' : '❌',
            addBtn: addBtn ? '✅' : '❌',
            taskList: taskList ? '✅' : '❌'
        });
        
        if (!taskInput || !addBtn || !taskList) {
            console.error('ERREUR: Éléments manquants du DOM');
            return;
        }
        
        // TEST 2: Creer l'app
        console.log('🚀 Création de AppController...');
        const app = new AppController();
        console.log('✅ AppController initialisé');
        
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

} // Fin du bloc else les dépendances sont chargées

