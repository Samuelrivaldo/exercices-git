# 🎯 EXERCICE-4: Créer et Gérer les Branches

## Objectif
Comprendre pourquoi les branches sont essentielles:
- Travailler sur plusieurs fonctionnalités en même temps
- Ne pas casser le code principal (main)
- Tester avant de fusionner

## 📊 Diagramme des branches

```
main (branche principale - production)
│
├─ commit 1 ✓
├─ commit 2 ✓
└─ commit 3 ✓
   │
   ├─── feature/login (branche feature)
   │    ├─ commit 4 (ajoute formulaire)
   │    └─ commit 5 (ajoute validation)
   │
   └─── bugfix/header (branche pour correction)
        └─ commit 6 (corrige header)
```

## 📝 Instructions

### Étape 1: Créez un repo et des commits de base
```bash
mkdir branches-test
cd branches-test
git init

git config user.name "Votre Nom"
git config user.email "email@example.com"

# Créez 3 commits sur main
echo "Version 1" > app.txt
git add app.txt
git commit -m "Version initiale"

echo "Version 2" >> app.txt
git add app.txt
git commit -m "Améliore version 2"

echo "Version 3" >> app.txt
git add app.txt
git commit -m "Améliore version 3"

# Vérifiez
git log --oneline
```

### Étape 2: Listez les branches
```bash
git branch
```

**Résultat attendu:** Seulement `* master` ou `* main`

### Étape 3: Créez une nouvelle branche
```bash
# Créez une branche pour une nouvelle feature
git branch feature/nouveau-design

# Vérifiez
git branch
```

**Résultat attendu:**
```
  feature/nouveau-design
* master
```

### Étape 4: Changez de branche
```bash
# Allez sur la nouvelle branche
git checkout feature/nouveau-design

# Vérifiez (le * devrait être sur feature/nouveau-design)
git branch
```

### Étape 5: Créez des commits sur la branche
```bash
# Modifiez le fichier sur la branche feature
echo "Nouveau design v1" > design.txt
git add design.txt
git commit -m "Ajoute nouveau design v1"

echo "Nouveau design v2" >> design.txt
git add design.txt
git commit -m "Améliore le nouveau design"

# Vérifiez l'historique
git log --oneline
```

### Étape 6: Retournez sur main
```bash
# Retournez sur main
git checkout master  (ou main)

# Vérifiez que design.txt a disparu!
ls
cat app.txt
```

**Résultat attendu:** `design.txt` n'existe plus sur main!

### Étape 7: Créez une autre branche
```bash
# Créez une branche pour un bugfix
git checkout -b bugfix/header

# Créez un commit
echo "Fix header" > header.txt
git add header.txt
git commit -m "Corrige le header"

# Vérifiez les branches
git branch
```

### Étape 8: Voyez toutes vos branches et leurs commits
```bash
# Affiche un graphique des branches
git log --oneline --graph --all --decorate
```

**Résultat attendu:** Un beau graphique avec vos branches!

---

## 🧪 Défi supplémentaire

Créez cette situation:
1. Branche `feature/login` avec 2 commits
2. Branche `feature/profile` avec 3 commits
3. Branche `bugfix/css` avec 1 commit
4. Retournez sur master
5. Utilisez `git branch -v` pour voir toutes les branches et leurs commits

```bash
# Créez feature/login
git checkout -b feature/login
echo "login" > login.js
git add login.js
git commit -m "Ajoute formulaire de login"
echo "validation" >> login.js
git add login.js
git commit -m "Ajoute validation du login"

# Retour à main, créez feature/profile
git checkout master
git checkout -b feature/profile
echo "profile" > profile.js
git add profile.js
git commit -m "Ajoute page profil"
# ... 2 commits de plus

# Retour à main, créez bugfix/css
git checkout master
git checkout -b bugfix/css
echo "fix" > styles.css
git add styles.css
git commit -m "Corrige les styles CSS"

# Retour à main
git checkout master

# Voyez toutes les branches
git branch -v
```

---

## ✅ Vérification

Vous avez réussi si:
- [x] Vous pouvez créer une branche avec `git branch`
- [x] Vous pouvez changer de branche avec `git checkout`
- [x] Vous pouvez créer une branche et aller dessus en une commande
- [x] Les commits sur une branche n'affectent pas l'autre

---

## 💡 Bonnes pratiques

```
✅ Noms de branches clairs:
  feature/login
  feature/profile
  bugfix/header
  hotfix/urgent-fix

❌ À éviter:
  test
  wip
  branch1
  mychange
```

---

**Prêt pour l'EXERCICE-5 sur la fusion des branches? 🚀**
