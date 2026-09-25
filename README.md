# KopfFit

KopfFit ist ein deutschsprachiger Frontend-Prototyp für kurze, ruhig
gestaltete Gedächtnisübungen. Das Angebot richtet sich an Menschen, die ohne
Zeitdruck Aufmerksamkeit, Erinnern und logisches Ordnen trainieren möchten.
Flask rendert die Seiten; die aktuelle Umsetzung besteht aus Jinja-Templates,
CSS und JavaScript. Merk-Mix besitzt bereits einen vollständigen lokalen
Rundenablauf. Dauerhafte Datenhaltung fehlt noch.

## Aktueller Stand

### Implementiert

- Flask-Anwendung mit acht erreichbaren Routen
- Landingpage und Spieleübersicht
- gemeinsames internes Layout mit Sidebar-Navigation
- eigene Frontend-Seiten für vier Spiele
- interne Seiten für Garten und Fortschritt
- gemeinsames Stylesheet mit Farbvariablen, Grundtypografie, Seitenlayouts und
  sichtbarer Tastaturfokus-Markierung
- vollständiger Merk-Mix-Rundenablauf mit Schwierigkeitswahl, Merkphase,
  Bildauswahl, Bestätigung, Ergebnisfeedback und mehreren Runden ohne
  Neuladen der Seite
- aufgeräumtes und gegliedertes JavaScript und CSS; ausgeblendete Elemente
  werden einheitlich über das HTML-Attribut `hidden` behandelt
- lokale Entwicklungsumgebung mit Flask, BrowserSync und Prettier

### Spiele

- **Kartenpaare:** visuell-räumliches Gedächtnisspiel zum Finden gleicher
  Paare; derzeit ein statisches Raster ohne Kartenmotive oder Paarprüfung
- **Merk-Mix:** unterstützt mehrere Runden ohne Seitenreload und wählt pro Runde
  vier neue zufällige Merkbilder. Leicht zeigt 6, Mittel 8 und Schwer 10
  Antwortbilder. Maximal vier Bilder können ausgewählt werden; „Antwort
  bestätigen“ wird bei genau vier ausgewählten Bildern aktiv. Richtige,
  falsche und nicht ausgewählte richtige Antworten erhalten visuelles Feedback.
  Überschrift und Anleitung wechseln passend zur Merk-, Auswahl- und
  Ergebnisphase. „Nächste Runde“ setzt den Rundenzustand per JavaScript zurück.
  Die gewählte Schwierigkeit bleibt markiert, kann vor der nächsten
  Auswahlphase aber geändert werden.
- **Augenblick:** ein abweichendes Bild soll unter ähnlichen Bildern gefunden
  werden; derzeit sechs statische Auswahlfelder ohne Bildinhalte oder
  Antwortprüfung
- **Alltags-Reihenfolge:** alltägliche Handlungen sollen logisch angeordnet
  werden; derzeit eine statische Beispielansicht ohne Umordnen oder Auswertung
- **Garten:** interne Belohnungs- und Fortschrittsseite mit vorhandenem
  Gartenbild. Gespielte Runden sollen später Gartenwachstum sowie das
  Freischalten von Pflanzen und Blumen auslösen. Der Garten ist kein fünftes
  Spiel und aktuell nicht dynamisch.
- **Fortschritt:** statische Übersicht mit Runden dieser Woche, entdeckten
  Spielen, Gesamtrunden, letzten Aktivitäten und einem Link zur Spieleauswahl.
  Alle angezeigten Werte und Aktivitäten sind Platzhalter.

### Noch nicht implementiert

- JavaScript-Spiellogik, Rundenabläufe, Auswertung und dynamisches Feedback für
  Kartenpaare, Augenblick und Alltags-Reihenfolge
- Kartenaufdecken und Paarvergleich bei Kartenpaare
- Antwortvalidierung und steigende Schwierigkeit bei Augenblick
- Umordnen und Prüfen bei Alltags-Reihenfolge
- funktionierende Vorlesen-, Pause- und Textgröße-Bedienung
- dynamisches Gartenwachstum, Freischaltungen und echte Fortschrittswerte
- Datenbank, Speicherung, Benutzerkonten und Authentifizierung
- automatisierte Tests
- Einstellungen-, Hilfe-, Datenschutz-, Impressum- und Kontaktseiten
- responsive und abschließend barrierearme Ausarbeitung

Merk-Mix läuft vollständig im Browser. Ergebnisse werden nicht gespeichert und
fließen noch nicht in Garten oder Fortschritt ein. `static/js/main.js` ist leer
und wird von keinem Template geladen.
Einstellungen ist in der Sidebar nur als Platzhalter verlinkt und besitzt weder
Route noch Template.

## Seiten und Routen

| Route                         | Endpoint              | Template                   | Status              |
| ----------------------------- | --------------------- | -------------------------- | ------------------- |
| `/`                           | `home`                | `home.html`                | Landingpage         |
| `/spiele`                     | `spiele`              | `spiele.html`              | Spieleübersicht     |
| `/spiele/kartenpaare`         | `kartenpaare`         | `kartenpaare.html`         | Frontend-Prototyp   |
| `/spiele/merk_mix`            | `merk_mix`            | `merk_mix.html`            | spielbarer Prototyp |
| `/spiele/augenblick`          | `augenblick`          | `augenblick.html`          | Frontend-Prototyp   |
| `/spiele/alltags-reihenfolge` | `alltags_reihenfolge` | `alltags_reihenfolge.html` | Frontend-Prototyp   |
| `/garden`                     | `garden`              | `garden.html`              | statische App-Seite |
| `/fortschritt`                | `fortschritt`         | `fortschritt.html`         | statische App-Seite |

Die sichtbare Bezeichnung „Garten“ verwendet technisch den Endpoint `garden`
und die URL `/garden`. Die Landingpage besitzt zusätzlich weiterhin einen
Werbeabschnitt mit der HTML-ID `garden`.

Die Landingpage enthält noch Platzhalterlinks. `/login` und `/register` sind
verlinkt, aber nicht als Flask-Routen definiert. Die ersten drei Spielbilder
verweisen dort auf den nicht vorhandenen Ordner `static/images/games/`, und die
Gartenillustration des Landingpage-Abschnitts verwendet noch `src="#"`.

## Technologien

| Bereich               | Aktueller Einsatz                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| Backend               | Python 3 und Flask 3.1.3                                                                          |
| Templates             | Jinja über Flask                                                                                  |
| Frontend              | HTML, CSS und JavaScript; aktive Spiellogik derzeit für Merk-Mix                                  |
| Python-Pakete         | Flask 3.1.3 und Requests 2.32.5                                                                   |
| Entwicklungswerkzeuge | BrowserSync 3.0.4, Concurrently 10.0.5, Prettier 3.9.6 und `prettier-plugin-jinja-template` 2.2.0 |

`requests` ist als Abhängigkeit eingetragen, wird in `app.py` derzeit aber nicht
verwendet.

## Lokal starten

Der npm-Startbefehl ist auf Windows und die lokale virtuelle Umgebung `.venv`
ausgelegt:

```powershell
py -m venv .venv
.venv\Scripts\python.exe -m pip install -r requirements.txt
npm.cmd install
npm.cmd start
```

`npm.cmd start` startet Flask unter `http://127.0.0.1:5000` und BrowserSync als
Proxy unter `http://localhost:3000`. Ohne BrowserSync kann die Anwendung mit
`.venv\Scripts\python.exe app.py` gestartet werden.

## Projektstruktur

```text
KopfFit/
├── app.py
├── templates/
│   ├── base.html
│   ├── app_base.html
│   ├── home.html
│   ├── spiele.html
│   ├── kartenpaare.html
│   ├── merk_mix.html
│   ├── augenblick.html
│   ├── alltags_reihenfolge.html
│   ├── garden.html
│   └── fortschritt.html
├── static/
│   ├── css/style.css
│   ├── js/
│   │   ├── main.js
│   │   └── merk_mix.js
│   └── images/
│       ├── brand/
│       ├── Ideas/
│       ├── games/merk_mix/
│       ├── landingpage/
│       └── garden_visual.png
├── .prettierrc
├── bs-config.js
├── package.json
├── package-lock.json
├── requirements.txt
├── README.md
├── PROGRESS.md
├── ideen.md
└── .gitignore
```

`static/images/Ideas/` enthält Referenzentwürfe und keine aktiven Seiten.
