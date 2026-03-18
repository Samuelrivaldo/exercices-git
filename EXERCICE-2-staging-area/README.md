# 🎯 EXERCICE-2: Comprendre la Staging Area

## Objectif
Comprendre les 3 zones de Git:
- **Working Directory** (dossier local)
- **Staging Area** (l'index - ce qu'on va committer)
- **Repository** (l'historique Git)

## 📊 Diagramme

```
┌─────────────────────────────────┐
│  WORKING DIRECTORY              │  (votre dossier)
│  (fichiers modifiés)            │
│ ├─ file1.txt (modifié)          │
│ ├─ file2.txt (nouveau)          │
│ └─ file3.txt (pas modifié)      │
└────────────┬────────────────────┘
             │
        git add
             │
             ▼
┌─────────────────────────────────┐
│  STAGING AREA (INDEX)           │  ← git add ajoute ici
│  (prêt à committer)             │
│ ├─ file1.txt ✓                  │
│ ├─ file2.txt ✓                  │
│ └─ file3.txt                    │  (pas ajouté)
└────────────┬────────────────────┘
             │
       git commit
             │
             ▼
┌─────────────────────────────────┐
│  REPOSITORY                     │  ← historique Git
│  (commits validés)              │
│ ├─ Commit 1                     │
│ ├─ Commit 2                     │
│ └─ Commit 3 (latest)            │
└─────────────────────────────────┘
```

## 📝 Instructions

### Étape 1: Créez un repo de test
```bash
mkdir staging-test
cd staging-test
git init
git config user.name "Votre Nom"
git config user.email "email@example.com"

git status
```

### Étape 2: Créez 3 fichiers
```bash
echo "Contenu 1" > file1.txt
echo "Contenu 2" > file2.txt
echo "Contenu 3" > file3.txt

git status
```

**Résultat attendu:** 
- 3 fichiers "Untracked files"

### Étape 3: Ajoutez seulement 2 fichiers
```bash
# Ajouter file1.txt et file2.txt
git add file1.txt file2.txt

# Vérifiez
git status
```

**Résultat attendu:**
- file1.txt et file2.txt en vert (staged)
- file3.txt en rouge (untracked)

### Étape 4: Modifiez file3.txt et ajoutez-le
```bash
# Modifiez file3.txt
echo "Contenu 3 modifié" >> file3.txt

# Ajoutez-le
git add file3.txt

# Vérifiez
git status
```

**Résultat attendu:** Les 3 fichiers sont staged (verts)

### Étape 5: Créez un commit avec seulement les fichiers staged
```bash
git commit -m "Ajoute 3 fichiers de contenu"

git status
```

**Résultat attendu:** "working tree clean"

### Étape 6: Modifiez file1.txt
```bash
# Modifiez le fichier
echo "Nouveau contenu" >> file1.txt

# Vérifiez sans l'ajouter
git status
```

**Résultat attendu:**
- file1.txt apparaît en rouge (modified, not staged)

### Étape 7: Voyez la différence
```bash
# Voir ce qui a changé dans file1.txt
git diff file1.txt
```

**Résultat attendu:** Vous voyez les lignes ajoutées en rouge (avec +)

### Étape 8: Ajoutez et committez
```bash
git add file1.txt

# Voir ce qui a changé (maintenant staged)
git diff --staged

# Committez
git commit -m "Modifie file1.txt"

git status
```

---

## 🧪 Défi supplémentaire

1. Créez 4 fichiers (a.txt, b.txt, c.txt, d.txt)
2. Ajoutez seulement a.txt et b.txt
3. Committez avec le message "Ajoute a et b"
4. Modifiez les 4 fichiers
5. Ajoutez et committez seulement c.txt avec "Modifie c"
6. Laissez d.txt non-staged
7. Utilisez `git status` pour vérifier l'état

---

## ✅ Vérification

Vous avez réussi si:
- [x] Vous comprenez `git status` et ses 3 zones
- [x] Vous savez que `git add` met un fichier en staging
- [x] Vous savez que `git commit` valide seulement ce qui est staged
- [x] Vous pouvez utiliser `git diff` pour voir les changements
- [x] Vous pouvez utiliser `git diff --staged` pour voir ce qui sera committé

---

## 💡 Règle importante

```
⚠️  RULE: Un commit = changements LOGIQUES

❌ MAUVAIS:
git add .
git commit -m "fix"  ← Trop de fichiers, message vague

✅ BON:
git add feature/login.js
git commit -m "Ajoute la page de login"
```

---

**Prêt pour l'EXERCICE-3? 🚀**
