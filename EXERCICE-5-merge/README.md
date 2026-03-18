# 🎯 EXERCICE-5: Fusionner des Branches (Merge)

## Objectif
Comprendre comment ramener le code d'une branche vers une autre:
- `git merge` - fusionner une branche
- Résoudre les conflits simples
- Comprendre le merge commit

## 📊 Visualisation du merge

```
AVANT le merge:
main:     A ─ B ─ C
               │
feature:       └─ D ─ E

APRÈS "git merge feature":
main:     A ─ B ─ C ─ M (merge commit)
               │       /
feature:       └─ D ─E
```

## 📝 Instructions

### Étape 1: Préparez le repo
```bash
mkdir merge-test
cd merge-test
git init

git config user.name "Votre Nom"
git config user.email "email@example.com"

# Créez des commits sur main
echo "Bienvenue" > index.html
git add index.html
git commit -m "Crée index.html"

echo "body { color: black; }" > style.css
git add style.css
git commit -m "Crée style.css"
```

### Étape 2: Créez une branche feature
```bash
# Créez et allez sur la branche feature
git checkout -b feature/form

# Ajoutez des commits
echo "<form>...</form>" > form.html
git add form.html
git commit -m "Ajoute un formulaire"

echo "input { padding: 10px; }" >> style.css
git add style.css
git commit -m "Style le formulaire"

# Vérifiez
git log --oneline
```

### Étape 3: Retournez sur main
```bash
git checkout main
# ou git checkout master

# Vérifiez que form.html n'existe pas
ls
```

### Étape 4: Fusionnez la branche
```bash
# Fusionnez feature/form dans main
git merge feature/form

# Vérifiez le résultat
git log --oneline
ls
```

**Résultat attendu:**
- `form.html` apparaît
- Un commit de merge est créé
- `git log --oneline` montre tous les commits

### Étape 5: Voyez la structure complète
```bash
git log --oneline --graph --all --decorate
```

---

## 🚨 Gérer les conflits

### Étape 6: Créez un conflit (intentionnel)
```bash
# Retournez sur main
git checkout main

# Modifiez style.css
echo "/* modification sur main */" >> style.css
git add style.css
git commit -m "Modifie style.css sur main"

# Créez une nouvelle branche depuis le début
git checkout -b feature/theme

# Modifiez le MÊME fichier différemment
echo "/* nouvelle couleur */" >> style.css
git add style.css
git commit -m "Change le thème"

# Retournez sur main
git checkout main

# ESSAYEZ de fusionner
git merge feature/theme
```

**Résultat attendu:** CONFLICT! Le fichier a des conflits

### Étape 7: Résolvez le conflit
```bash
# Ouvrez style.css
cat style.css
```

**Vous verrez:**
```
<<<<<<< HEAD
/* modification sur main */
=======
/* nouvelle couleur */
>>>>>>> feature/theme
```

**Pour résoudre:**
1. Ouvrez le fichier dans un éditeur
2. Choisissez quelle version garder (ou les deux)
3. Supprimez les marqueurs `<<<<<<<`, `=======`, `>>>>>>>`
4. Savegardez

**Exemple de résolution:**
```css
/* modification sur main */
/* nouvelle couleur */
```

### Étape 8: Finalisez la fusion
```bash
# Ajoutez le fichier résolu
git add style.css

# Committez
git commit -m "Résout le conflit de style.css"

# Vérifiez
git log --oneline
```

---

## 🧪 Défi supplémentaire

1. Créez 3 branches: `feature/nav`, `feature/footer`, `feature/banner`
2. Ajoutez 1 commit sur chaque (chacun crée un nouveau fichier)
3. Fusionnez-les TOUTES dans main, une par une
4. Utilisez `git log --oneline --graph --all --decorate` pour voir le graphique final

```bash
# Feature 1: nav
git checkout -b feature/nav
echo "nav content" > nav.html
git add nav.html
git commit -m "Ajoute la navigation"
git checkout main
git merge feature/nav

# Feature 2: footer (même processus)
git checkout -b feature/footer
echo "footer content" > footer.html
git add footer.html
git commit -m "Ajoute le footer"
git checkout main
git merge feature/footer

# Feature 3: banner
git checkout -b feature/banner
echo "banner content" > banner.html
git add banner.html
git commit -m "Ajoute la bannière"
git checkout main
git merge feature/banner

# Voyez le graphique finale
git log --oneline --graph --all --decorate
```

---

## ✅ Vérification

Vous avez réussi si:
- [x] Vous avez fusionné une branche sans conflit
- [x] Vous avez créé un conflit intentionnel
- [x] Vous avez résolu le conflit manuellement
- [x] Le merge commit a été créé
- [x] `git log --graph` montre un beau graphique

---

## 💡 Conseils

```
✅ Faire régulièrement git merge
❌ Attendre trop longtemps avant de fusionner
   (plus le temps passe, plus les risques de conflits!)

✅ Résoudre les conflits rapidement
❌ Laisser les marqueurs <<<<<<< en place
```

---

**Prêt pour l'EXERCICE-6 sur la synchronisation avec GitHub? 🚀**
