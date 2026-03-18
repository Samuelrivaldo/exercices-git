# 📖 Exercices Git Avancés

Après avoir terminé les 7 exercices principaux ([GUIDE_COMPLET.md](GUIDE_COMPLET.md)), voici des exercices plus avancés pour maîtriser Git en profondeur.

## 🔵 Niveau Avancé - Techniques Essentielles

### Exercice A1: Rebase - Nettoyer l'Historique

#### Concept
Le rebase réapplique vos commits sur une base différente, créant un historique plus linéaire et propre.

```bash
# Situation : vous avez 3 commits locaux, master a avancé
git log --oneline
# abc1234 Votre commit 3
# def5678 Votre commit 2
# ghi9012 Votre commit 1
# jkl3456 Ancien commit master

# Solution : rebase sur master
git fetch origin
git rebase origin/master

# Résultat : vos commits sont "replayed" sur le master actuel
```

#### À faire:
1. Créez une branche `practice/rebase`
2. Faites 3 commits
3. Retournez sur main et faites un commit
4. Retournez sur votre branche
5. Faites `git rebase main`
6. Vérifiez avec `git log --graph --oneline`

---

### Exercice A2: Cherry-pick - Sélectionner des Commits

#### Concept
Cherry-pick vous permet de prendre un ou plusieurs commits spécifiques et de les appliquer sur votre branche actuelle.

```bash
# Voir les commits disponibles
git log --oneline master

# Appliquer un commit spécifique
git cherry-pick abc1234

# Appliquer plusieurs commits
git cherry-pick abc1234 def5678 ghi9012
```

#### À faire:
1. Créez 2 branches: `feature/A` et `feature/B`
2. Faites 2 commits sur chacune
3. Allez sur `feature/B`
4. Cherry-pick un commit de `feature/A`
5. Vérifiez que le commit est maintenant sur B

#### Cas d'usage réel
Vous avez fait un bugfix sur une branche, mais vous le besoin sur une autre branche maintenant.

---

### Exercice A3: Interactive Rebase - Réorganiser les Commits

#### Concept
L'interactive rebase permet de reorder, squash, rename, ou drop des commits.

```bash
# Ouvrez l'éditeur pour les 3 derniers commits
git rebase -i HEAD~3

# Dans l'éditeur, vous verrez:
# pick abc1234 Commit 1
# pick def5678 Commit 2
# pick ghi9012 Commit 3

# Commandes disponibles:
# pick  = garder le commit
# reword = garder mais éditer le message
# squash = fusionner avec le commit précédent
# fixup = squash mais ignorer le message
# drop  = supprimer le commit
# exec  = exécuter une commande shell
```

#### À faire:
1. Créez une branche `practice/interactive-rebase`
2. Faites 4-5 commits avec des messages
3. Utilisez `git rebase -i HEAD~4` pour:
   - Reorder les commits (inverser l'ordre)
   - Reword le dernier commit
   - Squash 2 commits ensemble
4. Vérifiez le résultat

#### Exemple pratique
```bash
# Vous avez:
# pick abc1234 Ajoute fonction
# pick def5678 Fix typo dans la fonction
# pick ghi9012 Refactor la fonction

# Vous voulez:
# pick ghi9012 Fonction refactorisée
# pick abc1234 Ajoute fonction

# Et squash le fix avec la fonction initiale
```

---

### Exercice A4: Stash - Sauvegarder le Travail Temporaire

#### Concept
Stash sauvegarde temporairement les changements non-committés pour revenir à un état propre.

```bash
# Sauvegarder le travail actuel
git stash

# Voir la liste des stash
git stash list

# Récupérer le dernier stash
git stash pop

# Récupérer un stash spécifique
git stash pop stash@{2}

# Appliquer sans supprimer (apply au lieu de pop)
git stash apply stash@{0}

# Supprimer un stash
git stash drop stash@{0}
```

#### À faire:
1. Modifiez un fichier (ne committez pas)
2. Créez un stash: `git stash`
3. Créez une autre branche et faites quelque chose
4. Retournez sur la branche initiale
5. Récupérez votre stash: `git stash pop`

#### Cas d'usage
Vous travaillez, puis vous réalisez que vous êtes sur la mauvaise branche!

---

### Exercice A5: Reset - Annuler les Commits

#### Concept
Reset vous permet d'annuler les commits, avec différents niveaux.

```bash
# soft  = annule le commit, garde les changements staged
git reset --soft HEAD~1

# mixed = annule le commit, garde les changements unstaged (défaut)
git reset --mixed HEAD~1

# hard  = annule le commit ET les changements
git reset --hard HEAD~1
```

#### À faire:
1. Créez 3 commits
2. Utilisez `git reset --soft HEAD~1` - vérifiez que les changements sont staged
3. Utilisez `git reset --mixed HEAD~1` - vérifiez que les changements sont unstaged
4. Utilisez `git reset --hard HEAD~1` - vérifiez que tout est parti

⚠️ **Attention:** `--hard` supprime définitivement!

---

### Exercice A6: Reflog - Récupérer les Commits "Perdus"

#### Concept
Reflog (reference log) enregistre tous les changements des références, même après un reset.

```bash
# Voir tout ce que vous avez fait
git reflog

# Restaurer un commit "perdu"
git reset --hard abc1234
```

#### À faire:
1. Créez un commit
2. Faites `git reset --hard HEAD~1` (oups!)
3. Regardez `git reflog`
4. Trouvez le commit
5. Restaurez-le: `git reset --hard <commit>`

**C'est magique! Rien n'est vraiment perdu!**

---

### Exercice A7: Worktree - Travailler sur Plusieurs Branches

#### Concept
Worktree vous permet d'avoir plusieurs branches checkoutées en même temps dans des dossiers différents.

```bash
# Créer un worktree
git worktree add ../autre-feature feature/autre

# Lister les worktrees
git worktree list

# Supprimer un worktree
git worktree remove ../autre-feature
```

#### À faire:
1. Vous avez une branche principale
2. Créez un worktree pour une autre branche
3. Dans le nouveau dossier, faites des modifications
4. Committez
5. Retournez au dossier principal et gerez votre branche normalement

---

## 🏆 Défis Avancés

### Challenge A1: Clean Commit History
Créez une branche avec 5 commits mal nommés et désorganisés, puis utilisez interactive rebase pour:
- Reorder les commits par thème
- Squash les commits liés
- Renommer avec de bons messages

### Challenge A2: Conflict Resolution
Créez 2 branches qui modifient les mêmes lignes différemment, fusionnez-les, résolvez les conflits manuellement.

### Challenge A3: Rebase vs Merge
Comparez les résultats:
- Une fusion avec merge
- Une fusion avec rebase
- Comprenez les différences visuellement

### Challenge A4: Perfect Commit
Créez un workflow parfait:
1. Branche feature
2. Plusieurs commits logiques ET bien nommés
3. Rebase sur main
4. Merge fast-forward
5. Push
6. Résultat: main a un historique parfait

---

## 📊 Comparaison: Rebase vs Merge

### Merge (Ce que nous avons appris)
```
main:     A ─ B ─ C ─ M
              │       /
feature:      └─ D ─E
```
- ✅ Préserve l'historique complet
- ✅ Montre la collaboration
- ❌ Crée des "merge commits"
- ❌ Historique peut être complexe

### Rebase (Plus avancé)
```
main:     A ─ B ─ C ─ D ─ E
```
- ✅ Historique linéaire et propre
- ✅ Chaque commit peut être compris seul
- ❌ Réécrit l'histoire (attention!)
- ❌ Impossible en équipe si quelqu'un pull déjà

---

## 💡 Bonnes Pratiques

```
✅ À FAIRE:
- Utiliser rebase pour "replayer" vos commits
- Squash les petits commits de correction en un
- Reword les mauvais messages avant de merger
- Utiliser cherry-pick pour les hotfixes
- Utiliser worktree pour travailler en paralèle

❌ À ÉVITER:
- Rebase sur une branche partagée (problèmes d'équipe!)
- Rebase après avoir poussé vers GitHub
- Oublier que stash est temporaire
- Hard reset si vous n'êtes pas sûr
- Récrire l'historique public
```

---

## 🎓 Ressources Avancées

- [Git rebase documentation](https://git-scm.com/docs/git-rebase)
- [Atlassian: Golden Rule of Rebase](https://www.atlassian.com/git/tutorials/merging-vs-rebasing#the-golden-rule-of-rebasing)
- [Pro Git: Interactive Staging](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging)
- [Understanding git reset](https://www.atlassian.com/git/tutorials/undoing-changes/git-reset)

---

**🎉 Bravo! Vous maîtrisez maintenant Git à un niveau professionnel!**

Passez à la contribution au projet: [CONTRIBUTING.md](CONTRIBUTING.md)
