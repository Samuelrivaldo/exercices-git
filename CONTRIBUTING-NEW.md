# 🤝 Guide de Contribution

Merci de s'intéresser à ce projet! Voici comment vous pouvez contribuer de manière efficace.

## 📋 Avant de commencer

1. Lisez le [README-EXERCICES.md](README-EXERCICES.md) pour comprendre la structure
2. Consultez [GUIDE_COMPLET.md](GUIDE_COMPLET.md) pour les bases
3. Assurez-vous que Git est configuré:
   ```bash
   git config --global user.name "Votre Nom"
   git config --global user.email "votre.email@example.com"
   ```

## 🚀 Workflow de Contribution

### Étape 1: Clonez le projet
```bash
git clone https://github.com/Samuelrivaldo/exercices-git.git
cd exercices-git
```

### Étape 2: Créez une branche feature
```bash
# Format: feature/description-courte
git checkout -b feature/votre-fonctionnalite
```

### Étape 3: Faites vos modifications
- ✅ Modifiez les fichiers pertinents
- ✅ Testez dans le navigateur
- ✅ Testez sur plusieurs navigateurs (Chrome, Firefox, Safari)
- ✅ Vérifiez la console pour les erreurs

### Étape 4: Committez avec des messages clairs
```bash
# Exemples de BONS commits
git commit -m "Ajoute validation du formulaire"
git commit -m "Corrige affichage sur mobile"
git commit -m "Améliore l'accessibilité ARIA"

# ❌ À ÉVITER
git commit -m "fix"
git commit -m "update"
git commit -m "test"
```

### Étape 5: Poussez votre branche
```bash
git push origin feature/votre-fonctionnalite
```

### Étape 6: Créez une Pull Request
- Allez sur https://github.com/Samuelrivaldo/exercices-git
- Cliquez "Compare & pull request"
- Décrivez vos changements clairement
- Soumettez la PR

## 💡 Idées de Contributions Bienvenues

### Exercices
- [ ] Ajouter des exercices sur rebase, cherry-pick
- [ ] Créer des tutoriels vidéo
- [ ] Traduire dans d'autres langues

### Application Task Master
- [ ] Mode sombre/clair
- [ ] Catégories personnalisées
- [ ] Système de priorités avancé
- [ ] Récurrence de tâches
- [ ] Synchronisation avec un serveur
- [ ] Notifications locales
- [ ] Graphiques de productivité
- [ ] Support multi-langue

### Documentation
- [ ] Corriger les fautes de frappe
- [ ] Ajouter des schémas/diagrammes
- [ ] Ajouter plus d'exemples
- [ ] Améliorer les explications

## ✅ Critères de Qualité

Votre contribution doit respecter:

- ✔️ Code lisible et bien commenté
- ✔️ Testé dans tous les navigateurs modernes
- ✔️ Indentation cohérente (2-4 espaces)
- ✔️ Pas de `console.log()` ou code de debug
- ✔️ Messages de commit clairs et en français
- ✔️ Commits logiques et séparés
- ✔️ S'appuyer sur les conventions du projet

## 📝 Style de Code

```javascript
// ✅ BON
function calculateProgress(tasks) {
    const completed = tasks.filter(t => t.done).length;
    return (completed / tasks.length) * 100;
}

// ❌ MAUVAIS
function calc(t){return (t.filter(x=>x.done).length/t.length)*100}
```

## 🐛 Signaler un Bug

Ouvrez une issue avec:
- **Description détaillée** du problème
- **Étapes pour reproduire** le bug
- **Navigateur et version** utilisés
- **Capture d'écran** si possible
- **Console d'erreur** (F12)

Exemple:
```
**Bug:** Les tâches supprimées réapparaissent après rechargement
**Étapes:**
1. Ajouter une tâche
2. Cliquer le bouton supprimer
3. Recharger la page
**Résultat inattendu:** La tâche réapparaît
**Navigateur:** Chrome 120
```

## 🙋 Questions?

- Ouvrez une discussion dans les Issues
- Demandez de l'aide en commentaire sur votre PR
- Consultez [AIDE-MEMOIRE.md](AIDE-MEMOIRE.md)

---

## 🎓 Pour Apprendre

Avant de contribuer, c'est une bonne idée de:
1. Terminer les 7 exercices principaux
2. Consulter [EXERCISES.md](EXERCISES.md) pour les techniques avancées
3. Pratiquer avec votre propre fork

---

**Merci d'avoir choisi de contribuer! Heureux de coder! 🚀**
