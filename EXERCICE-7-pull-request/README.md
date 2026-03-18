# 🎯 EXERCICE-7: Créer une Pull Request

## Objectif
Comprendre le workflow collaboratif GitHub:
- Créer une branche feature
- Pousser vers GitHub
- Créer une Pull Request (PR)
- Voir la fusion automatique

## 📊 Workflow Pull Request

```
1. Créez une branche feature  (local)
   git checkout -b feature/new-button

2. Modifiez, committez  (local)
   echo "new button" >> app.js
   git commit -m "Ajoute nouveau bouton"

3. Poussez la branche  (GitHub)
   git push origin feature/new-button

4. Créez une PR sur GitHub.com
   (GitHub détecte automatiquement)

5. Review → Approve → Merge
   (dans l'interface GitHub)

6. Terminez localement
   git checkout main
   git pull origin main
```

## 📝 Instructions

### Prérequis
- Vous avez un repo sur GitHub (voir EXERCICE-6)
- Vous avez des commits locaux à envoyer

### Étape 1: Créez une branche feature locale
```bash
# Assurez-vous que vous êtes sur main
git checkout main

# Créez une nouvelle branche
git checkout -b feature/add-button

# Vérifiez
git branch
```

### Étape 2: Faites des changements
```bash
# Modifiez ou créez un fichier
echo "<button>Click me</button>" > button.html
git add button.html
git commit -m "Ajoute un nouveau bouton"

# Modifiez un existant
echo "// New feature" >> app.js
git add app.js
git commit -m "Ajoute nouvelle fonctionnalité"

# Vérifiez
git log --oneline
```

### Étape 3: Poussez la branche vers GitHub
```bash
# Poussez cette branche (pas main!)
git push origin feature/add-button

# Vérifiez
git branch -v
```

### Étape 4: Créez la Pull Request sur GitHub

1. Allez sur https://github.com/VOTRE-NOM/VOTRE-REPO
2. GitHub devrait montrer un popup "Compare & pull request"
3. Sinon, cliquez l'onglet "Pull requests" → "New pull request"
4. Sélectionnez:
   - **base**: main (où vous voulez fusionner)
   - **compare**: feature/add-button (ce que vous envoyez)
5. Remplissez le titre et description:
   ```
   Titre: Ajoute un nouveau bouton
   
   Description:
   - Crée un fichier button.html
   - Ajoute une nouvelle fonctionnalité dans app.js
   - Le bouton est complètement fonctionnel
   ```
6. Cliquez "Create pull request"

### Étape 5: Revue et approbation

**Pour simuler une revue:**
1. Sur la page PR, allez "Conversation"
2. Commentez (ex: "Looks good!")
3. Allez "Review changes" → "Approve" → "Submit review"

### Étape 6: Fusionnez la PR

1. Cliquez "Merge pull request"
2. Cliquez "Confirm merge"
3. (Optionnel) Cliquez "Delete branch" pour nettoyer

**Résultat:** Vos commits sont maintenant dans main sur GitHub!

### Étape 7: Synchronisez localement

```bash
# Retournez sur main
git checkout main

# Récupérez les changements
git pull origin main

# Vérifiez que button.html existe
ls
cat button.html

# Supprimez la branche locale (optionnel)
git branch -d feature/add-button
```

---

## 🧪 Défi: Plusieurs PRs

Créez 3 PRs différentes:

1. **PR 1: feature/dark-mode**
   - Créez `dark-mode.css`
   - Committez et poussez
   - Créez une PR
   - Fusionnez

2. **PR 2: feature/search**
   - Créez `search.html`
   - Modifiez `app.js`
   - Committez et poussez
   - Créez une PR avec description longue
   - Fusionnez

3. **PR 3: bugfix/typo**
   - Corrigez une typo
   - Committez et poussez
   - Créez une PR
   - Fusionnez

Après: `git log --oneline` devrait afficher tous vos commits!

---

## ✅ Vérification

Vous avez réussi si:
- [x] Vous avez créé une branche locale
- [x] Vous avez poussé la branche vers GitHub
- [x] Vous avez créé une PR
- [x] Vous avez fusionné la PR
- [x] Vos changements sont maintenant dans main

---

## 💡 Workflow professionnel réel

```
1. BRANCHING
   - main = production (toujours stable)
   - develop = version en développement
   - feature/* = nouvelles fonctionnalités
   - bugfix/* = corrections

2. PULL REQUEST
   - Obligatoire avant de fusionner
   - Au moins 1 review obligatoire
   - Tests automatiques (CI)
   - Tout doit passer avant merge

3. MERGE
   - "Squash and merge" pour une seule ligne
   - "Rebase and merge" pour l'historique propre
   - "Create merge commit" pour garder la structure
```

---

## 🎉 Bravo! Vous maîtrisez Git & GitHub!

Vous savez maintenant:
- ✅ Les commandes de base (add, commit, log)
- ✅ La staging area (index)
- ✅ Écrire de bons messages
- ✅ Créer et fusionner les branches
- ✅ Synchroniser avec GitHub
- ✅ Créer des Pull Requests

**Prochaines étapes:**
- Contribuez à des projets open-source
- Travaillez en équipe
- Aprenez le rebase, stash, et autres commandes avancées

**Continuez à pratiquer! 🚀**
