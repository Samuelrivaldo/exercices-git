# 🚀 Commandes Git Essentielles - Pense-bête

## Imprimer cette page et garder à portée!

### Configuration (à faire une fois)
```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

---

## Les 10 Commandes les Plus Utilisées

### 1. Initialiser un repo
```bash
git init                    # Crée un nouveau repo local
```

### 2. Voir l'état
```bash
git status                  # État actuel du repo  ⭐ UTILISEZ SOUVENT!
```

### 3. Ajouter des fichiers (staging)
```bash
git add file.txt            # Ajouter un fichier
git add .                   # Ajouter tous les fichiers modifiés
```

### 4. Valider les changements
```bash
git commit -m "Message"     # Créer un commit
```

### 5. Voir l'historique
```bash
git log                     # Tous les commits
git log --oneline           # Format court (meilleur!)
git log --graph --all       # Graphique des branches
```

### 6. Créer une branche
```bash
git branch nom              # Créer
git checkout nom            # Aller dessus
git checkout -b nom         # Créer ET aller dessus
```

### 7. Fusionner une branche
```bash
git merge feature           # Fusionner 'feature' dans la branche actuelle
```

### 8. Synchroniser avec GitHub
```bash
git remote add origin URL   # Ajouter serveur distant
git push origin main        # Envoyer vers serveur
git pull origin main        # Récupérer depuis serveur
git clone URL               # Copier un repo complet
```

### 9. Voir les branches
```bash
git branch                  # Branch locale
git branch -v               # Avec détails
git branch -a               # Toutes branches (locale + distante)
```

### 10. Annuler/Corriger
```bash
git diff                    # Voir les changements non committé
git show commit-id          # Voir un commit spécifique
```

---

## Workflow typique (pas à pas)

```bash
# 1. Créez une branche
git checkout -b feature/my-feat

# 2. Travaillez (modifiez des fichiers)
# 3. Vérifiez ce que vous avez changé
git status

# 4. Ajoutez les changements prêts
git add file1.js file2.css

# 5. Committez
git commit -m "Ajoute ma fonctionnalité"

# 6. Retournez sur main
git checkout main

# 7. Fusionnez votre branche
git merge feature/my-feat

# 8. Poussez sur GitHub
git push origin main
```

---

## Résoudre les Conflits

Quand vous voyez:
```
<<<<<<< HEAD
Mon code
=======
Leur code
>>>>>>> feature
```

**Faites:**
1. Éditez le fichier, gardez ce que vous voulez
2. Supprimez les marqueurs `<<<<`, `====`, `>>>>`
3. `git add fichier`
4. `git commit -m "Résout conflit"`

---

## Erreurs Courantes et Solutions

| Erreur | Solution |
|--------|----------|
| "git: command not found" | Installez Git |
| "fatal: not a git repository" | Faites `git init` ou changez de dossier |
| "Please tell me who you are" | Configurez user.name & user.email |
| "Authentication failed" | Utilisez HTTPS, vérifiez mot de passe |
| "Would be overwritten by merge" | Committez d'abord vos changements |

---

## Alias utiles (pour aller plus vite)

Ajoutez ceci à votre config Git:
```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.lo "log --oneline"
git config --global alias.graph "log --oneline --graph --all"
```

Après, vous pouvez utiliser:
```bash
git st          # au lieu de git status
git co -b feat  # au lieu de git checkout -b
git lo          # au lieu de git log --oneline
```

---

## Règles d'Or 🏆

```
✅ À FAIRE:
1. Committez souvent (1 fonctionnalité = 1 commit)
2. Messages clairs et en français
3. git pull avant de travailler
4. git status régulièrement
5. Testez avant de pousser

❌ À ÉVITER:
1. git push directement sur main
2. Laisser du code non commité longtemps
3. Messages vagues ("fix", "update")
4. Mélanger plusieurs fonctionnalités dans un commit
```

---

## En cas de panique 😅

```bash
# Annuler les changements non committé
git checkout -- file.txt    # Restaure un fichier

# Voir l'historique des changements
git reflog

# Chercher dans l'historique
git log --grep="mot-clé"
```

---

📌 **Gardez cette feuille de route pour revenir la consulter!**
