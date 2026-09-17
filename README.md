# KopfFit

KopfFit ist derzeit ein deutschsprachiger Frontend-Prototyp für kurze
Gedächtnisspiele. Flask rendert eine Landingpage, eine Spieleübersicht und zwei
statische Spielansichten. Die sichtbare Gestaltung setzt auf große Schrift,
ruhige Farben, klare Bereiche und deutlich markierte Tastaturfokusse.

Es gibt noch keine Spiellogik, Benutzerkonten, Datenbank oder dauerhafte
Fortschrittsspeicherung. Schaltflächen und Texte zu Vorlesen, Pause,
Textgröße, Garten und Konten zeigen die beabsichtigte Richtung, sind aber noch
nicht funktional.

## Aktueller Funktionsumfang

### Implementiert

- Flask-Anwendung mit vier erreichbaren Seiten
- gemeinsame Jinja-Basis `templates/base.html`
- internes Seitenlayout mit Sidebar in `templates/app_base.html`
- Landingpage mit den Bereichen „So funktioniert's“, „Spiele“, „Dein Garten“
  und „Einfach. Klar. In deinem Tempo.“
- Spieleübersicht mit Merk-Mix, Augenblick, Kartenpaare und Zeitreise
- statische Ansichten für Merk-Mix und Kartenpaare
- gemeinsames CSS-Farbsystem, Grundtypografie, Grid-Layouts und
  `:focus-visible`-Markierung
- Markenicons, Landingpage-Bilder und Referenzentwürfe
- lokaler Entwicklungsstart mit Flask, BrowserSync und automatischem Neuladen
- Prettier-Konfiguration für JavaScript, JSON und Jinja-Templates

### In Arbeit

- Merk-Mix zeigt vier leere Beispielplätze (`sample1` bis `sample4`); die
  Schaltflächen „Vorlesen“, „Ich bin bereit“ und „Pause“ haben keine Funktion.
- Kartenpaare zeigt ein statisches Raster mit zwölf Schaltflächen; Karteninhalt,
  Aufdecken, Paarprüfung, Feedback, Vorlesen und Pause fehlen.
- Augenblick und Zeitreise erscheinen nur in der Spieleübersicht und besitzen
  keine eigenen Routen.
- Die Landingpage enthält mehrere Platzhalterlinks und noch nicht korrekt
  eingebundene Bilder. Einzelheiten stehen in [PROGRESS.md](PROGRESS.md).
- `static/js/main.js` ist leer und wird von keinem Template geladen.
- Responsive Anpassungen über Media Queries fehlen.

### Geplant

Die im aktuellen UI und in den Referenzbildern erkennbaren Ausbauideen stehen
in [ideen.md](ideen.md). Dort sind ausschließlich noch nicht umgesetzte oder
nur als statische Oberfläche angedeutete Funktionen aufgeführt.

## Routen

| Route                 | Endpoint      | Aktueller Inhalt                |
| --------------------- | ------------- | ------------------------------- |
| `/`                   | `home`        | Landingpage                     |
| `/spiele`             | `spiele`      | Spieleübersicht                 |
| `/spiele/kartenpaare` | `kartenpaare` | statischer Kartenpaare-Prototyp |
| `/spiele/merk_mix`    | `merk_mix`    | statischer Merk-Mix-Prototyp    |

`/login` und `/register` werden auf der Landingpage verlinkt, sind aber noch
nicht als Flask-Routen definiert und liefern aktuell HTTP 404.

## Technologien und Abhängigkeiten

| Bereich               | Aktueller Einsatz                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| Backend               | Python und Flask                                                                                  |
| Templates             | Jinja über Flask                                                                                  |
| Frontend              | HTML und CSS; JavaScript-Datei derzeit leer und nicht eingebunden                                 |
| Python-Pakete         | Flask 3.1.3 und Requests 2.32.5                                                                   |
| Entwicklungswerkzeuge | BrowserSync 3.0.4, Concurrently 10.0.5, Prettier 3.9.6 und `prettier-plugin-jinja-template` 2.2.0 |

`requests` wird in `app.py` importiert, im weiteren Code aber noch nicht
verwendet. Es bleibt in `requirements.txt`, weil die Anwendung ohne das Paket
beim Import von `app.py` nicht startet.

## Lokal starten

Der vorhandene npm-Startbefehl ist auf Windows und die lokale virtuelle
Umgebung `.venv` ausgelegt. Er benötigt Python, Node.js, `pip` und `npm`.

```powershell
py -m venv .venv
.venv\Scripts\python.exe -m pip install -r requirements.txt
npm.cmd install
npm.cmd start
```

`npm.cmd start` startet Flask unter `http://127.0.0.1:5000` und BrowserSync als
Proxy unter `http://localhost:3000`. BrowserSync beobachtet die Templates sowie
CSS- und JavaScript-Dateien und öffnet den Browser automatisch. Beide Prozesse
lassen sich gemeinsam mit `Strg+C` beenden.

Für einen Start ohne BrowserSync und Node-Werkzeuge genügt nach der
Python-Installation:

```powershell
.venv\Scripts\python.exe app.py
```

Flask läuft dabei im Debug-Modus unter `http://127.0.0.1:5000`.

## Projektstruktur

```text
KopfFit/
├── app.py
├── templates/
│   ├── base.html
│   ├── app_base.html
│   ├── home.html
│   ├── spiele.html
│   ├── merk_mix.html
│   └── kartenpaare.html
├── static/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
│       ├── brand/
│       ├── Ideas/
│       └── landingpage/
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

`static/images/Ideas/` enthält Referenzentwürfe und ist keine Sammlung aktiver
Seiten. `node_modules/`, `.venv/`, IDE-Dateien, Caches, lokale Umgebungsdateien
und lokale Datenbanken gehören nicht in die Versionsverwaltung.
