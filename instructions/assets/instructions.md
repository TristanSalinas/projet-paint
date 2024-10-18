# Projet Paint

Durée : 1J

## Rappels utiles

### Concaténation

Vous pouvez "assembler" (le vrai mot c'est concaténer) des chaines de caractères en JavaScript. Par exemple :

```js
let name = "Mari";

let direBonjour = "Bonjour " + name;

console.log(direBonjour); // affichera Bonjour Mari
```

Vous pouvez également concaténer une chaine de caractères et un nombre : 

```js
let direAge = "J'ai " + 35 + " ans";

console.log(direAge); // affichera J'ai 35 ans
```

### Injection

Vous pouvez aussi injecter du contenu dans une chaine de caractère, la syntaxe change juste un peu, il faudra utiliser les backquotes et mettre `${}` autour du contenu à  injecter:

```js
let age = 35;
let direAge = `J'ai ${age} ans`;

console.log(direAge); // affichera J'ai 35 ans
```

### Utilisation de la concaténation et de l'injection

C'est parfois très pratique pour créer vos sélecteurs (particulièrement dans une boucle).

## Exercice 0

Pour cet exercice, créez un repository public, sans licence et avec un README.md que vous appellerez `bre03-projet-paint`. Faites ensuite les commandes suivantes :

```sh
# rendez vous dans le bon dossier
cd sites

# Clonez le repository
git clone [url-du-repository]

# Placez vous dans le dossier du repository
cd bre03-projet-paint
```


## Etape 1 : Afficher la palette

Complétez la fonction `loadPalette` pour que chacune des couleurs du tableau `colors` devienne la couleur de fond d'une des `<div>` du `<header>`.


## Etape 2 : un évenement pour les couleurs

Créez un event listener qui à  chaque fois que l'on clique sur une `<div>` du header (n'importe laquelle) la fonction `selectColor` sans parenthèses est appelée.

*Indice : Vous allez devoir utiliser une boucle pour ça*

Pour tester si cela fonctionne utilisez ceci : 

```js
console.log(getSelectedColor());
```

Si cela n'affiche pas `null` mai une couleur RGB c'est que c'est bon.


## Etape 3 : Colorier les cases

Créez un event listener qui quand on clique sur une `div` du main va appliqer la dernière couleur cliquée dans le header comme couleur de fond de la `div`.

Vous pouvez utiliser : 

```js
let color = getSelectedColor(); 
```

pour récupérer la dernière couleur cliquée dans la variable color.

Si vous n'avez pas encore cliqué sur une couleur du header cela ne doit rien faire.


## Etape 4 : Vider les cases

Dans votre event listener de l'étape 3 vous allez ajouter un comportement : si votre case a déjà  une couleur de fond vous l'effacez.

*Indice : si un élément n'a pas de background color c'est l'équivalent de false*


## Bonus 1 :

A l'aide de votre Paint : Dessinez moi un mouton et postez le screen sur le channel Discord BRE03 general en taggant @marieb6261 pour lui notifier votre chef d'oeuvre.


## Bonus 2 :

Faites en sorte de pouvoir utiliser une palette de 16 couleurs.


## Bonus 3 :

En utilisant des `<input type='color'>` , faites en sorte de pouvoir configurer la couleur de fond de chacune des `<div>` dans le `<header>`.


## Bonus 4 :

Modifiez le HTML et CSS de façon à pouvoir avoir une zone de dessin de 20 cases par 20 cases.


## Bonus 5 :

En utilisant la librairie javascript `html2canvas` https://html2canvas.hertzen.com/, faites en sorte de pouvoir sauvegarder votre dessin au format PNG.


## Bonus 6 :

Faites en sorte de pouvoir générer une grille à  la taille voulue grâce à  des `<input type="number">` dans le header.
