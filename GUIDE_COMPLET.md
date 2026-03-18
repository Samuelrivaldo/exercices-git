# 📚 Guide Complet pour Apprendre Git & GitHub

## Bienvenue! 👋

Ce projet contient **7 exercices pratiques** pour maîtriser les commandes Git essentielles.

### 📋 Structure des exercices

```
exercices-git/
├── GUIDE_COMPLET.md           ← Vous êtes ici
├── EXERCICE-1-basics/         ← Les commandes de base
├── EXERCICE-2-staging-area/   ← La zone de staging
├── EXERCICE-3-commit/         ← Faire un bon commit
├── EXERCICE-4-branches/       ← Créer des branches
├── EXERCICE-5-merge/          ← Fusionner du code
├── EXERCICE-6-github-sync/    ← Synchroniser avec GitHub
└── EXERCICE-7-pull-request/   ← Créer une Pull Request
```

---

## 🎯 Progression recommandée

### Niveau 1️⃣ - Les Bases (1 à 2 heures)
1. **EXERCICE-1**: Configurez Git, votre premier commit
2. **EXERCICE-2**: Comprenez la staging area (index)
3. **EXERCICE-3**: Écrivez de bons messages de commit

### Niveau 2️⃣ - Intermédiaire (2 à 3 heures)
4. **EXERCICE-4**: Travaillez avec les branches
5. **EXERCICE-5**: Fusionnez du code (merge)
6. **EXERCICE-6**: Synchronisez avec GitHub (push/pull)

### Niveau 3️⃣ - Collaboration (1 à 2 heures)
7. **EXERCICE-7**: Créez une Pull Request pour la collaboration

---

## 🚀 Comment faire les exercices?

### Pour chaque exercice:
1. Ouvrez le dossier `EXERCICE-X-xxxxx/`
2. Lisez le `README.md` pour l'objectif
3. Suivez les instructions étape par étape
4. Testez vos commandes dans le terminal
5. Vérifiez votre travail avec `git status` ou `git log`
6. Consultez `SOLUTION.md` si vous êtes bloqué

### Terminal à utiliser:
```bash
# Naviguez dans le dossier du projet
cd exercices-git

# Vérifiez votre configuration Git
git config --global user.name
git config --global user.email

# Commande très utile (utilisez-la souvent!)
git status
```

---

## 🛠️ Configuration initiale (⚠️ À faire en premier!)

Si c'est votre première fois avec Git, configurez d'abord votre identité:

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

Vérifiez que c'est bon:
```bash
git config --global user.name
git config --global user.email
```

---

## 📖 Les commandes Git essentielles

### Configuration
```bash
git config --global user.name "Nom"      # Définir votre nom
git config --global user.email "email"   # Définir votre email
git config --list                        # Afficher toute la config
```

### Commandes de base
```bash
git init                    # Créer un nouveau repo local
git status                  # Voir l'état du repo
git add <file>             # Ajouter un fichier à l'index
git add .                  # Ajouter tous les fichiers modifiés
git commit -m "message"    # Valider avec un message
git log                    # Voir l'historique
git log --oneline          # Historique format court
```

### Branches
```bash
git branch                           # Lister les branches
git branch <nom>                    # Créer une branche
git checkout <nom>                  # Changer de branche
git checkout -b <nom>               # Créer et aller à la branche
git merge <nom>                     # Fusionner une branche
```

### Synchronisation (GitHub)
```bash
git remote add origin <url>         # Ajouter un serveur distant
git remote -v                       # Voir les serveurs distants
git push origin <branche>           # Envoyer vers GitHub
git pull origin <branche>           # Récupérer depuis GitHub
git clone <url>                     # Cloner un repo
```

---

## 💡 Conseils pour réussir

✅ **À FAIRE:**
- ✔️ Utilisez `git status` après chaque commande
- ✔️ Écrivez des messages clairs et en français: "Ajoute la page d'accueil"
- ✔️ Committez souvent (une fonctionnalité = un commit)
- ✔️ Créez une branche pour chaque feature
- ✔️ Testez localement avant de pousser sur GitHub

❌ **À ÉVITER:**
- ❌ Ne pas faire `git push` trop tôt (testez d'abord!)
- ❌ Les messages vagues ("fix", "update", "test")
- ❌ Committer tous les fichiers à la fois
- ❌ Oublier de `git pull` avant de travailler

---

## 🆘 Besoin d'aide?

### Problème courant
**"Erreur: Your name and email are not configured"**
→ Faites la configuration initiale ci-dessus

**"fatal: not a git repository"**
→ Assurez-vous que vous êtes dans le bon dossier avec `pwd`

**"Le fichier n'apparaît pas dans git status"**
→ Peut-être qu'il est dans `.gitignore`, c'est normal!

---

## 📊 Progression

Cochez les exercices complétés:
- [ ] EXERCICE-1: Les commandes de base
- [ ] EXERCICE-2: La staging area
- [ ] EXERCICE-3: Écrire de bons commits
- [ ] EXERCICE-4: Les branches
- [ ] EXERCICE-5: Fusionner du code
- [ ] EXERCICE-6: Synchroniser avec GitHub
- [ ] EXERCICE-7: Créer une Pull Request

---

## 🎓 Ressources supplémentaires

- [Git Documentation Officielle](https://git-scm.com/doc)
- [GitHub Skills (Gratuit)](https://skills.github.com/)
- [Pro Git Book (Gratuit)](https://git-scm.com/book/fr/v2)

---

**Prêt? Allez à l'EXERCICE-1! 🚀**
