# 🎯 EXERCICE-1: Les Commandes de Base

## Objectif
Apprendre les 4 commandes essentielles de Git:
- `git init` - Créer un repo
- `git add` - Ajouter des fichiers
- `git commit` - Valider les changements
- `git log` - Voir l'historique

## 📝 Instructions

### Étape 1: Créez un dossier de test
```bash
# Créez un dossier temporaire
mkdir mon-premier-repo
cd mon-premier-repo

# Vérifiez où vous êtes
pwd
```

### Étape 2: Initialisez un repo Git
```bash
# Créez le repo
git init

# Vérifiez que c'est bon
git status
```

**Résultat attendu:** Vous devriez voir "On branch master" ou "On branch main"

### Étape 3: Créez un fichier
```bash
# Créez un fichier README
echo "# Mon Premier Projet" > README.md

# Vérifiez que le fichier existe
ls
cat README.md
```

### Étape 4: Vérifiez l'état
```bash
git status
```

**Résultat attendu:** Vous devriez voir "Untracked files: README.md"

### Étape 5: Ajoutez le fichier à Git
```bash
# Ajouter le fichier
git add README.md

# Vérifiez
git status
```

**Résultat attendu:** Vous devriez voir "Changes to be committed: new file: README.md"

### Étape 6: Créez votre premier commit
```bash
# Validez avec un message
git commit -m "Ajoute README.md"

# Vérifiez
git status
```

**Résultat attendu:** "Working tree clean"

### Étape 7: Voyez l'historique
```bash
# Affiche tous les commits
git log

# Version courte (plus lisible)
git log --oneline
```

**Résultat attendu:** Vous devriez voir votre commit avec le message "Ajoute README.md"

---

## 🧪 Défi supplémentaire

Créez 3 fichiers et 3 commits différents:

```bash
# Fichier 1
echo "# Introduction" > intro.txt
git add intro.txt
git commit -m "Ajoute intro.txt"

# Fichier 2
echo "# Configuration" > config.txt
git add config.txt
git commit -m "Ajoute config.txt"

# Fichier 3
echo "# Documentation" > docs.txt
git add docs.txt
git commit -m "Ajoute docs.txt"
```

Vérifiez avec `git log --oneline` - vous devriez voir 4 commits:
```
1234567 Ajoute docs.txt
abcdefg Ajoute config.txt
bcdefgh Ajoute intro.txt
cdefghi Ajoute README.md
```

---

## ✅ Vérification

Vous avez fini l'exercice si:
- [x] Vous avez créé un repo avec `git init`
- [x] Vous avez créé et ajouté des fichiers
- [x] Vous avez créé au moins 3 commits
- [x] `git log --oneline` montre tous vos commits
- [x] `git status` affiche "nothing to commit"

---

## ❓ Besoin d'aide?

### "git: command not found"
**Problème:** Git n'est pas installé
**Solution:** Installez Git depuis https://git-scm.com

### "fatal: not a git repository"
**Problème:** Vous n'êtes pas dans un dossier Git
**Solution:** Faites `git init` ou vérifiez votre dossier

### "Please tell me who you are"
**Problème:** Git ne connaît pas votre nom/email
**Solution:** 
```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

---

## 📚 Résumé

| Commande | Utilité |
|----------|---------|
| `git init` | Créer un nouveau repo |
| `git add fichier` | Ajouter un fichier à l'index |
| `git commit -m "msg"` | Valider les changements |
| `git log` | Voir l'historique |
| `git status` | Vérifier l'état du repo |

---

**Prêt pour l'EXERCICE-2? 🚀** Consultez la SOLUTION.md si vous êtes bloqué.
