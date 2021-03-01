# Formular
I første del af opgaven skal du oprette en HTML formular med de felter som er i skitsen [skitse-formular.jpg]

Hint: DropDown-listen er en `<seclect>`
Du skal lave filerne:
* index.html
* app.js
# Validering
I anden del af opgaven skal du validere det input der modtages i din formular og give de rigtige fejlmeddelelser i Javascript. Du skal løse dette ved at bruge funktioner.

 - Brugeren skal ikke miste det data der allerede er indtastet.
 - Der skal være *focus* på det element der bruges.

Du kan med fordel kigge på følgende indbyggede funktioner i javascript: 
* isNaN
* focus()
* .value.length - konceptet
* .checked

# URL Parametre

I denne del af opgaven skal du vise, at du kan bruge URL parametre til at transportere data fra én HTML-side til en anden.

Du skal tilføje filen
* modtager.html

I `index.html`har du lavet formularen med et input-felter og en submit-knap. Formularen skal sende brugeren videre til `modtager.html` med metoden `GET`.

På `modtager.html` skal du benytte dig af DOM-manipulation og URL-parametre til at skrive det, som brugeren udfyldte i formularen på `index-html`, ud på siden, evt. i et `P`-tag eller noget lignende.

## OBS
Hvis brugeren _ikke_ har udfyldt noget i formularen på `index.html`, så skal der stå på `modtager.html`

> "Formularen blev ikke udfyldt"

