# 🎯 EXERCICE-3: Écrire de Bons Commits

## Objectif
Apprendre à écrire des messages de commits clairs et utiles.
C'est crucial pour collaborer en équipe!

## 📝 Format d'un bon commit

### ❌ Mauvais messages
```
git commit -m "fix"
git commit -m "update"
git commit -m "test"
git commit -m "asdjkl"
```

### ✅ Bons messages
```
git commit -m "Ajoute la validation du formulaire"
git commit -m "Corrige le bug du login"
git commit -m "Modifie la couleur du bouton"
git commit -m "Supprime la fonction non utilisée"
```

## 📋 Règles pour un bon commit

### 1️⃣ Commencer par un verbe d'action
- **Ajoute** - pour les nouvelles fonctionnalités
- **Modifie** - pour les changements
- **Corrige** ou **Fix** - pour les bugs
- **Supprime** - pour le nettoyage
- **Refactor** - pour améliorer sans changer le résultat

### 2️⃣ Être spécifique
```
❌ "Ajoute du code"
✅ "Ajoute la page de connexion avec validation"

❌ "Modifie"
✅ "Modifie la couleur du bouton principal #667eea"

❌ "Fix bugs"
✅ "Corrige le bug d'affichage sur mobile"
```

### 3️⃣ Être en français (ou en anglais, mais cohérent)
```
Project cohérent = + facile à lire
Mélanger anglais/français = confus!
```

### 4️⃣ Limite à ~50 caractères
Le message doit tenir dans une ligne quand vous faites `git log --oneline`

## 📝 Instructions

### Étape 1: Créez un repo de test
```bash
mkdir commits-test
cd commits-test
git init

# Configuration
git config user.name "Votre Nom"
git config user.email "email@example.com"
```

### Étape 2: Créez 5 fichiers avec de BONS messages

```bash
# ✅ Bon message
echo "<!DOCTYPE html>" > index.html
git add index.html
git commit -m "Crée la page d'accueil"

# ✅ Bon message
echo "body { margin: 0; }" > style.css
git add style.css
git commit -m "Ajoute la feuille de style de base"

# ✅ Bon message
echo "console.log('Hello');" > script.js
git add script.js
git commit -m "Ajoute le script principal"

# ✅ Bon message - spécifique
echo "# Mon App" > README.md
git add README.md
git commit -m "Ajoute README.md avec description"

# ✅ Bon message - correction
echo "bugfix" > .gitignore
git add .gitignore
git add -A
git commit -m "Corrige la configuration d'exclusion des fichiers"
```

### Étape 3: Regardez vos commits
```bash
git log --oneline
```

**Résultat attendu:**
```
xxxxx Corrige la configuration d'exclusion des fichiers
xxxxx Ajoute README.md avec description
xxxxx Ajoute le script principal
xxxxx Ajoute la feuille de style de base
xxxxx Crée la page d'accueil
```

---

## 🧪 Défi: Refactorisez vos commits

Modifiez les fichiers et committez avec de bons messages:

```bash
# 1. Modifiez plusieurs fichiers pour améliorer l'HTML
echo "<body><h1>Welcome</h1></body>" >> index.html
git add index.html
git commit -m "Structure son le contenu de la page d'accueil"

# 2. Améliorez le CSS
echo "h1 { color: blue; }" >> style.css
git add style.css
git commit -m "Style le titre en bleu"

# 3. Ajoutez une nouvelle fonction
echo "function greet() { return 'Hello'; }" >> script.js
git add script.js
git commit -m "Ajoute la fonction greet()"

# 4. Voyez tous vos commits
git log --oneline
```

---

## ✅ Vérification

Vous avez réussi si:
- [x] Tous vos messages commencent par un verbe
- [x] Chaque message est spécifique et court
- [x] Les messages sont en français (cohérent)
- [x] `git log --oneline` affiche des messages clairs

---

## 💡 Conseil professionnel

Imaginez que dans 6 mois, un collègue lit votre historique pour comprendre un bug.
Vos messages de commits doivent être assez clairs pour qu'il comprenne **POURQUOI** vous avez fait ce changement, pas juste **QUOI**.

---

**Prêt pour l'EXERCICE-4 sur les branches? 🚀**
