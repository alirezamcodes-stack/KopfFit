# Projektfortschritt – KopfFit

**Bestandsaufnahme: 24. September 2026**

KopfFit hat eine weitgehend angelegte Frontend-Struktur. Acht Flask-Routen
rendern eine Landingpage, die Spieleübersicht, vier Spielseiten sowie die
internen Seiten Garten und Fortschritt. Merk-Mix besitzt inzwischen einen
vollständigen Rundenablauf im Browser. Speicherung und gemeinsame Backend-Daten
zwischen den Seiten fehlen weiterhin.

## Implementiert

### Grundstruktur und Navigation

- `base.html` stellt HTML-Grundlage, Metadaten, Icons, Stylesheet und
  Template-Blöcke bereit.
- `app_base.html` enthält das gemeinsame interne Layout mit Sidebar.
- Die Sidebar verlinkt Start, Spiele, Garten und Fortschritt auf vorhandene
  Routen.
- Einstellungen und Hilfe sind weiterhin Platzhalter ohne eigene Route.
- Alle acht in `app.py` definierten Routen lassen sich rendern.

### Seiten

- Die Landingpage enthält Hero, Ablauf, vier Spielkarten, einen Garten-Teaser,
  Hinweise zur Bedienung, CTA und Footer.
- Die Spieleübersicht verlinkt alle vier Spielseiten.
- Garten ist als interne App-Seite unter `/garden` vorhanden und verwendet
  `static/images/garden_visual.png`.
- Fortschritt ist als interne App-Seite unter `/fortschritt` vorhanden und
  verlinkt zurück zur Spieleübersicht.

### Spiele

- **Kartenpaare:** statisches Raster aus zwölf Karten für ein visuell-räumliches
  Paar-Merkspiel
- **Merk-Mix:** spielbarer Rundenablauf mit vier zufälligen Merkbildern,
  Schwierigkeitswahl, Auswahlphase, Auswertung, Ergebnisfeedback und Neustart
- **Augenblick:** sechs statische Auswahlfelder für das Finden eines
  abweichenden Bildes
- **Alltags-Reihenfolge:** statische Liste alltäglicher Handlungen, die später
  in die richtige logische Reihenfolge gebracht werden sollen

### Styling und Werkzeuge

- `static/css/style.css` enthält Farbvariablen, Grundtypografie,
  Fokusmarkierung und grundlegende Layoutregeln für die vorhandenen Seiten.
- Garten und Fortschritt besitzen eigene grundlegende Layoutabschnitte im
  Stylesheet.
- BrowserSync beobachtet Templates, CSS und JavaScript und verwendet den
  lokalen Flask-Server als Proxy.
- Prettier ist für JavaScript, JSON und Jinja-Templates eingerichtet.

### Merk-Mix-Funktionalität

- Flask liest die verfügbaren PNG-Dateien aus
  `static/images/games/merk_mix/` ein und übergibt ihre Dateinamen an das
  Template.
- Pro Seitenaufruf werden vier zufällige Bilder für die Merkphase gewählt.
- Vor dem Phasenwechsel muss Leicht, Mittel oder Schwer gewählt werden. Die
  Stufen zeigen in der Auswahlphase insgesamt 6, 8 oder 10 Bilder.
- Mit „Ich bin bereit“ werden die Merkbilder ausgeblendet, die
  Schwierigkeitswahl gesperrt und die gemischten Antwortbilder angezeigt.
- Antwortbilder lassen sich aus- und wieder abwählen. Maximal vier Antworten
  sind möglich; „Antwort bestätigen“ wird erst bei genau vier ausgewählten
  Bildern aktiv.
- Nach der Bestätigung werden richtige ausgewählte und übersehene Bilder als
  richtig sowie falsche ausgewählte Bilder als falsch markiert. Eine
  Ergebnisnachricht zeigt die Zahl der richtig erkannten Bilder.
- Die Antworten werden anschließend gesperrt. „Neustarten“ lädt die Seite neu
  und erzeugt dadurch eine neue Runde.

## Frontend-Struktur vorhanden, Funktionalität offen

- Kartenpaare deckt keine Karten auf, mischt nicht und prüft keine Paare.
- Augenblick besitzt keine Bildinhalte, Antwortvalidierung oder
  Schwierigkeitssteigerung.
- Alltags-Reihenfolge erlaubt kein Umordnen und prüft keine Reihenfolge.
- Rundenanzeigen, Vorlesen-, Pause- und Textgröße-Schaltflächen sind statisch.
- Feedbackbereiche der übrigen Spiele werden nicht dynamisch befüllt.
- `static/js/main.js` ist leer und wird von keinem Template geladen.
- Es gibt keine Media Queries; responsive und abschließende barrierearme
  Ausarbeitung stehen aus.
- Merk-Mix speichert weder Schwierigkeit noch Ergebnisse; abgeschlossene
  Runden aktualisieren Garten und Fortschritt noch nicht.

## Garten und Fortschritt

Garten ist eine eigene interne Seite und kein fünftes Spiel. Die Seite zeigt
eine Gartenillustration sowie statische Texte zu Wachstum und neuen Pflanzen.
Runden verändern den Garten noch nicht, Pflanzen werden nicht freigeschaltet
und es gibt keine gespeicherten Gartenstände.

Fortschritt zeigt die statischen Werte `3` Runden diese Woche, `4` entdeckte
Spiele und `6` Runden insgesamt sowie vier Beispielaktivitäten. Diese Angaben
werden weder berechnet noch gespeichert. Eine Statistik-, Tracking- oder
Datenbankfunktion existiert nicht.

## Bekannte offene Stellen

- Die Landingpage verlinkt `/login` und `/register`, obwohl diese Routen nicht
  existieren.
- Mehrere Landingpage-, Footer-, Hilfe- und Einstellungslinks verwenden
  `href="#"`.
- Die ersten drei Spielbilder der Landingpage verweisen auf den nicht
  vorhandenen Ordner `static/images/games/`; passende Dateien liegen unter
  `static/images/landingpage/`.
- Der Garten-Teaser der Landingpage verwendet für sein Bild `src="#"`. Die
  interne Garten-Seite bindet dagegen `static/images/garden_visual.png` ein.
- Das aktuelle Bild für Alltags-Reihenfolge zeigt ein altes Radio und passt
  inhaltlich noch nicht zum neuen Reihenfolge-Konzept.
- Einstellungen hat weder Route noch Template; Hilfe, Datenschutz, Impressum
  und Kontakt ebenfalls nicht.
- Benutzerkonten, Authentifizierung, Datenmodelle, Datenbank und dauerhafte
  Speicherung fehlen.
- Automatisierte Tests sind nicht vorhanden.

## Nächste Entwicklungsphase

Der nächste große Schritt ist die noch offene Frontend-Funktionalität für
Kartenpaare, Augenblick und Alltags-Reihenfolge: echte Spielzustände, Eingaben,
Auswertung, Rundenwechsel und Feedback. Danach können Merk-Mix und die weiteren
Spiele an Garten und Fortschritt angebunden werden. Dauerhafte Speicherung und
Konten setzen eine spätere Backend- und Datenbankschicht voraus.

## Aktuelle Routen

| Route                         | Endpoint              | Template                   |
| ----------------------------- | --------------------- | -------------------------- |
| `/`                           | `home`                | `home.html`                |
| `/spiele`                     | `spiele`              | `spiele.html`              |
| `/spiele/kartenpaare`         | `kartenpaare`         | `kartenpaare.html`         |
| `/spiele/merk_mix`            | `merk_mix`            | `merk_mix.html`            |
| `/spiele/augenblick`          | `augenblick`          | `augenblick.html`          |
| `/spiele/alltags-reihenfolge` | `alltags_reihenfolge` | `alltags_reihenfolge.html` |
| `/garden`                     | `garden`              | `garden.html`              |
| `/fortschritt`                | `fortschritt`         | `fortschritt.html`         |
