# ✅ SOLUTION - EXERCICE-1

Voici la solution complète de l'exercice 1.

## Commandes à exécuter (dans l'ordre)

```bash
# Étape 1: Créer un dossier de test
mkdir mon-premier-repo
cd mon-premier-repo

# Étape 2: Initialiser Git
git init

# Vérifier l'état
git status
# Résultat: On branch master (ou main)

# Étape 3: Créer un fichier
echo "# Mon Premier Projet" > README.md

# Étape 4: Vérifier l'état
git status
# Résultat: Untracked files: README.md

# Étape 5: Ajouter le fichier
git add README.md
git status
# Résultat: Changes to be committed: new file: README.md

# Étape 6: Faire le premier commit
git commit -m "Ajoute README.md"

# Vérifier
git status
# Résultat: working tree clean

# Étape 7: Voir l'historique
git log --oneline
```

## Pour le défi supplémentaire:

```bash
# Créer 3 fichiers avec commits
echo "# Introduction" > intro.txt
git add intro.txt
git commit -m "Ajoute intro.txt"

echo "# Configuration" > config.txt
git add config.txt
git commit -m "Ajoute config.txt"

echo "# Documentation" > docs.txt
git add docs.txt
git commit -m "Ajoute docs.txt"

# Voir l'historique complet
git log --oneline
```

## Résultat final

Vous devriez avoir 4 commits visibles avec `git log --oneline`:
```
xxxxx Ajoute docs.txt
xxxxx Ajoute config.txt
xxxxx Ajoute intro.txt
xxxxx Ajoute README.md
```

---

✅ **Exercice 1 réussi! Passez à EXERCICE-2**
