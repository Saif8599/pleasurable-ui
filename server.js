// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from "express";

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from "liquidjs";

// WHOIS API
const API_BASE_URL = "https://fdnd-agency.directus.app/items";

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express();

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }));

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static("public"));

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine("liquid", engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set("views", "./views");
 
// Ik maak hier een functie aan die specifieke pagina data ophaalt van de API
async function fetchPageContent(key) {
  // Ik wil eerst alle data ophalen van alle pagina's
  const response = await fetch(`${API_BASE_URL}/bib_content`);

  // Daarna zet ik de opgehaalde data om naar JSON, zodat ik ermee kan werken
  const json = await response.json();

  // Nu zoek ik in de lijst naar het ene object waarvan de key gelijk is aan de meegegeven parameter
  const pageContent = json.data.find((page) => page.key === key);
  
  // En dan geef ik dat ene stukje data terug, zodat ik het later in mijn routes kan gebruiken
  return pageContent;
}

// Hier maak ik een route aan die reageert op alle pagina's zoals /zaden, /partners etc.
// :key betekent dat het stukje na de slash (zoals 'zaden') automatisch wordt opgevangen als parameter
app.get("/:key", async function (request, response) {

  // Ik haal de waarde op uit de URL die is meegegeven als parameter
  // Bijvoorbeeld als je naar /zaden ga, dan wordt key automatisch 'zaden'
   const key = request.params.key;
   
   // Ik roep nu mijn functie aan die de content ophaalt van de juiste pagina
   // Die functie zoekt in de API data naar het object waarvan key gelijk is aan 'zaden'
   const content = await fetchPageContent(key);
     // Hier render ik de juiste Liquid template (zoals zaden.liquid)
     // Tegelijk geef ik de titel en tekst mee aan de pagina als variabelen
     // Deze worden in de .liquid file opgevangen met {{ headerTitle }} en {{ headerText }}
    response.render(`${key}.liquid`, {
      headerTitle: content.title,
      headerText: content.text,
      headerImage: content.image
    }); 
  });

// Home
app.get("/", async function (request, response) {
  const content = await fetchPageContent("home");
  response.render("index.liquid", {
    headerTitle: content.title,
    headerText: content.text,
    headerImage: content.image
  });
});

// Stekjes
app.get("/stekjes", async function (req, res) {
  // Haal de volledige lijst op van alle afbeeldingen
  const response = await fetch(`${API_BASE_URL}/bib_afbeeldingen`);

  // Zet de data om naar JSON zodat je ermee kunt werken
  const json = await response.json();

  // Filter alleen de afbeeldingen waarvan het type 'stekjes' is
  const stekjesImages = json.data.filter((image) => image.type === "stekjes");

  // Render de `stekjes.liquid` template uit de views-map
  // Geef de opgehaalde data mee als een variabele genaamd `images`, zodat deze in de template gebruikt kan worden
  res.render("stekjes.liquid", {
    images: stekjesImages, // hier zitten alleen de stekjesfoto’s in
  });
});

// Zaden
app.get("/zaden", async function (req, res) {
  // Haal de volledige lijst op van alle afbeeldingen
  const response = await fetch(`${API_BASE_URL}/bib_afbeeldingen`);

  // Zet de data om naar JSON zodat je ermee kunt werken
  const json = await response.json();

  // Filter alleen de afbeeldingen waarvan het type 'zaden' is
  const zadenImages = json.data.filter((image) => image.type === "zaden");

  // Render de `zaden.liquid` template uit de views-map
  // Geef de opgehaalde data mee als een variabele genaamd `images`, zodat deze in de template gebruikt kan worden
  res.render("zaden.liquid", {
    images: zadenImages, // hier zitten alleen de zadenfoto’s in
  });
});

// Geveltuin
app.get("/geveltuin", async function (request, response) {
  response.render("geveltuin.liquid");
});

// Agenda
app.get("/agenda", async function (request, response) {
  response.render("agenda.liquid");
});

// Partners
app.get("/partners", async function (request, response) {
  response.render("partners.liquid");
});

// Contact
app.get("/contact", async function (request, response) {
  response.render("contact.liquid");
});

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set("port", process.env.PORT || 8000);

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get("port"), function () {
  console.log(
    `Project draait via http://localhost:${app.get(
      "port"
    )}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`
  );
});
