# Bieb in Bloei
Redesign Bieb in Bloei (BiB) webiste.

## Feedback afgelopen sprint
Vorige sprint hadden wij feedback gekregen. Dit hebben wij bijna volledig verwerkt.
Feedback: https://github.com/Saif8599/pleasurable-ui/issues/21#issue-3056564069

## Het product
De Bieb in Bloei website bestaat uit:
(foto's per pagina)
- Wat op elke pagina terugkomt is de header en de footer. In de header kan je navigeren tussen alle pagina's en in de footer staat informatie.
- Home pagina - daar staat informatie over onderanderen de stekjeskast en de zadenbibliotheek.
- Stekjes/Zaden pagina - onder de header is een informatieblok te vinden over de stekjes kast/zaden bibliotheek. Daaronder staat een carousel met foto's van de kast en daaronder staan de stekjes/zaden in een grid.
- Agenda pagina - hierin staat weer onder de header een informatieblok met informatie over de pagina (in dit geval workshops). Daaronder staan alle workshops met informatie over wat de workshop is, tijd, locatie etc. Ook is er een aanmeld link die je stuurt naar de contact pagina waar een form staat die dan ingevuld moet worden.
- Partners pagina - hier staat weer onder de header een informatieblok. Daaronder staan in blokken de partners van Bieb in Bloei.
- Contact pagina - op deze pagina staat aan de linker kant een form die je kan invullen als je interesse hebt in workshops, events en activiteiten. Aan de rechterkant van het form staat in een maps view de locatie van 'Oba Linnaeus'.

## Ontwerpkeuzes
Figma designs: https://www.figma.com/design/rAUnwuAdidiFPfgPXgxWVz/BIB-team?node-id=0-1&t=waIufYPtiFGG1bUt-1

### Home ![image](https://github.com/user-attachments/assets/18337eb3-04b4-47fa-9433-caed783e0aa5)
Hier hebben we ervoor gekozen om Harry meteen zichtbaar te maken. Dit zorgt voor vriendelijk en speelsheid wat goed bij Bieb in Bloei past.

### Navigatie ![image](https://github.com/user-attachments/assets/f53ec82f-fa6d-4eb0-afcd-3d76f65a7c3b)
We hebben ervoor gekozen om alle pagina's in de navigatie naast elkaar te zetten. Hierdoor hoeft de gebruiker niet eerst ergens op te klikken voordat alle pagina's te zien zijn. In dit geval kan dit, omdat er niet heel veel pagina's zijn.

### Footer ![image](https://github.com/user-attachments/assets/24bf84d6-1b5c-42c4-a0e2-9907d7d0d899)
We hebben ervoor gekozen om ook een navigatie in de footer toe te voegen. Hiermee kan de gebruiker onderaan de pagina al navigeren naar een andere pagina zonder helemaal naar boven te scrollen.
Ook zijn de linkjes oranje om aan te geven dat het klikbaar is.

### Header beschrijving ![image](https://github.com/user-attachments/assets/c9a3b83f-c8a3-4f2b-aae5-c07fb86176f0)
We hebben gekozen om de tekst deze 2 kleuren te geven, omdat het bruine de aarde moet voorstellen en het groene de natuur. Deze kleuren op deze manier komt vaker terug op de website. Dit zorgt voor consistentie en zorgt voor herkenbaarheid voor de gebruiker.

### Carousel ![image](https://github.com/user-attachments/assets/07fe803a-b896-4917-b43f-48b0da2c50f3)
We hebben ervoor gekozen om een zichtbare scroll onder de carousel toe te voegen. Hierdoor kan de gebruiker ook zien dat dit scrollbaar is.

### Contact ![image](https://github.com/user-attachments/assets/d5bd0abf-e030-45d4-bb0d-5a5831099dff)
![Schermopname (83)](https://github.com/user-attachments/assets/557986aa-3d4e-431e-9b53-f6d498a9ea89)
We hebben ervoor gekozen om een leuke Harry animatie toe te voegen wanneer je op de button focust. Dit is een leuke verstopte toevoeging. Dit zorgt voor een element wat de gebreuker onthoud na het gebruiken van de website, waardoor de kans groter is dat die persoon terug keert naar de website.


## Kenmerken
(makkelijk uitleggen)


## Performance


## Toegankelijkheid
De website is getest door de lighthouse test in je browser. Daaruit kwam een mooie uitslag van 93%.
![image](https://github.com/user-attachments/assets/d16a8253-9a25-48cf-bff9-db972d6e3720)

Verder kan je door de hele website tabben en is er rekening gehouden met het contrast tussen voorgrond en achtergrond. Bij het testen van het contrast kwam er wel 1 min punt uit en dat is dat de witte tekst en de créme achtergrond een te lage contrast hebben. Dit gaat aangepast worden mochten we hiermee verder gaan.
![image](https://github.com/user-attachments/assets/58f361d5-f41b-4783-9811-61ebab4511d1)

(principes en standaarden)

## Installatie
Ga naar de website van Node.js (https://nodejs.org/en) en download de LTS versie. Allereerst is het belangrijk om de repo te forken en clonen zodat je in je eigen omgeving zit. Ga daarom naar github en als je in de juiste repo zit druk dan fork. Na het forken open je de repo met github desktop door op de groene 'code' button en daarna op 'open with GitHub Desktop' te drukken. In github desktop clone je de repo zodat de code in vscode staat. Nu open je je terminal en navigeer je naar de juiste map (waar je je repo lokaal hebt staan) en voer " cd 'locatie/pad van repo' " uit. Ook kan dit door in github desktop op 'repository' te drukken en daarna op 'open in command prompt'. Met de laatste manier ben je automatisch al in de juiste locatie/pad in de terminal. Nu je in je terminal in de juiste map bent voer je 'npm install' uit in terminal om alle benodigde paketten te installeren. Voer nu 'npm start' uit in terminal om lokaal je 'server' op te starten. Open het adres wat te zien is na het uitvoeren van stap 4 (http://localhost:'port') Mocht je dingen veranderen in server.js moet je je lokale 'server' opnieuw starten door 'ctrl + c' of 'cmd + c' te typen in de terminal waar je ook de server hebt opgestart. Om hem op te starten typ je weer 'npm start' in de terminal. Nu kun je werken in je eigen omgeving doormiddel van node :)

## Bronnen
