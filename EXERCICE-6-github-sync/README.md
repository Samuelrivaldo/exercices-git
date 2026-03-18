# 🎯 EXERCICE-6: Synchronisation avec GitHub

## Objectif
Apprendre à synchroniser votre code local avec GitHub:
- `git push` - envoyer vers GitHub
- `git pull` - récupérer depuis GitHub
- `git clone` - cloner un repo

## 📊 Diagramme

```
Votre ordinateur              GitHub (serveur)
    LOCAL                           REMOTE
   ┌─────┐                         ┌──────┐
   │main │  git push ─────────→   │ main │
   │     │                        │      │
   └─────┘                        └──────┘
   ┌─────┐                        ┌──────┐
   │feat1│         ←─ git pull ── │feat1 │
   └─────┘                        └──────┘

git clone ─────→ Copie tout du serveur vers local
```

## ⚠️ Prérequis

Vous devez avoir:
1. ✅ Un compte GitHub (https://github.com)
2. ✅ Créé un repo vide (sans README)
3. ✅ Noté l'URL: `https://github.com/VotreNom/repo-nom.git`

**Important:** Pour cet exercice, utilisez HTTPS (pas SSH)

## 📝 Instructions

### Étape 1: Créez un repo local
```bash
mkdir my-remote-project
cd my-remote-project
git init

git config user.name "Votre Nom"
git config user.email "votre.email@github.com"

# Créez quelques commits
echo "# Mon Projet" > README.md
git add README.md
git commit -m "Initialise le projet"

echo "console.log('hello');" > app.js
git add app.js
git commit -m "Ajoute app.js"

# Vérifiez
git log --oneline
```

### Étape 2: Ajoutez l'URL GitHub
```bash
# Remplacez PAR VOTRE URL GitHub
git remote add origin https://github.com/VOTRE-NOM/VOTRE-REPO.git

# Vérifiez
git remote -v
```

**Résultat attendu:** Vous voyez l'URL deux fois (fetch et push)

### Étape 3: Envoyez vers GitHub (PUSH)
```bash
# Envoyez la branche main
git push -u origin main

# (-u = set upstream, vous permet de faire "git push" sans spécifier)
```

**Si vous avez une erreur "master vs main":**
```bash
# Vérifiez le nom de votre branche
git branch

# Si c'est "master", utilisez:
git push -u origin master
```

### Étape 4: Vérifiez sur GitHub
- Allez sur https://github.com/VOTRE-NOM/VOTRE-REPO
- Vous devriez voir README.md et app.js!

### Étape 5: Modifiez localement et re-PUSH
```bash
# Modifiez un fichier
echo "Version 2" >> app.js

# Committez
git add app.js
git commit -m "Améliore app.js v2"

# Envoyez
git push origin main
```

### Étape 6: Modifiez sur GitHub
- Allez sur GitHub
- Cliquez sur `README.md`
- Cliquez le crayon (edit)
- Ajoutez une ligne (ex: "Bienvenue!")
- Committez en bas avec un message
- Done!

### Étape 7: PULL pour récupérer
```bash
# Récupérez les changements depuis GitHub
git pull origin main

# Vérifiez
cat README.md
```

**Résultat attendu:** Vous voyez la ligne que vous avez ajoutée sur GitHub!

---

## 🧪 Défi: Clone d'un repo existant

1. Allez sur GitHub et trouvez un repo public intéressant
2. Copiez son URL HTTPS
3. Clonez-le:

```bash
# Clonez le repo (cela crée un nouveau dossier)
git clone https://github.com/quelqu-un/un-projet.git

# Allez dedans
cd un-projet

# Explorez
git log --oneline
git branch -a
```

Vous avez maintenant une copie complète du repo avec tout l'historique!

---

## ✅ Vérification

Vous avez réussi si:
- [x] Vous avez poussé des commits sur GitHub
- [x] Vous voyez vos fichiers sur GitHub.com
- [x] Vous avez poussé une nouvelle version
- [x] Vous pouvez tirer les changements du serveur

---

## 🆘 Problèmes courants

### "fatal: not a git repository"
**Solution:** Assurez-vous que vous êtes dans le bon dossier et que `git init` a été exécuté

### "Authentication failed"
**Solution:**
- Utilisez l'URL HTTPS, pas SSH
- Vérifiez votre nom d'utilisateur/email
- Parfois GitHub demande un token d'accès personnelle

### "Your branch is behind origin"
**Solution:**
```bash
git pull origin main
```

---

**Prêt pour l'EXERCICE-7 sur les Pull Requests? 🚀**
