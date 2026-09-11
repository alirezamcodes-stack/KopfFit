# Projektfortschritt – KopfFit

**Stand: 11. September 2026**

## Aktueller Stand

KopfFit ist aktuell ein Frontend-Prototyp mit Flask. Die Landingpage ist
strukturell aufgebaut und gestaltet. Kategorie-, Quiz- und Ergebnisseite sind
vorhanden, verwenden aber noch statische Beispielinhalte. Eine vollständige
Quizlogik oder Datenspeicherung ist noch nicht implementiert.

## Nachweislich vorhanden

### Flask-Anwendung

- Flask-Anwendung in `app.py`
- Route `/` für die Landingpage
- Route `/spiele` für die Spiel- und Kategorieauswahl
- Route `/quiz` für eine statische Beispielfrage
- Route `/result` für ein statisches Beispielergebnis
- Context Processor für das aktuelle Jahr

### Templates

- `templates/home.html`
- `templates/spiele.html`
- `templates/quiz.html`
- `templates/result.html`
- vorbereitetes, derzeit noch nicht verwendetes `templates/base.html`

### Landingpage

- Navigation mit Logo, Sprunglinks, Anmelde-Link und Textgrößen-Button
- Hero-Bereich mit zweispaltigem Grid und eingebundenem Hero-Bild
- Bereiche „So einfach geht’s“, Spiele, Garten und Barrierefreiheit
- abschließender Call-to-Action und Footer
- Grid-Strukturen für Erklärung, Spiele und Barrierefreiheit
- gemeinsame maximale Inhaltsbreite und wiederkehrende Abstände
- CSS-Variablen für Marken-, Text-, Hintergrund- und Statusfarben
- Grundtypografie mit flexiblen Überschriftengrößen über `clamp()`
- sichtbare Fokusmarkierung über `:focus-visible`

### Bilder und Markenassets

- Logo, Favicon, App-Icons und Apple-Touch-Icon unter
  `static/images/brand/`
- Referenzentwürfe unter `static/images/Ideas/`
- PNG- und WebP-Bilder für Hero, Garten und vier Spiele unter
  `static/images/landingpage/`
- das Hero-WebP ist korrekt in `home.html` eingebunden

### Entwicklungsumgebung

- Python Virtual Environment unter `.venv/`
- Python-Abhängigkeiten in `requirements.txt`
- Prettier als Entwicklungsabhängigkeit
- BrowserSync und Concurrently als Entwicklungsabhängigkeiten
- gemeinsamer Start von Flask und BrowserSync über `npm.cmd start`
- BrowserSync-Proxy auf Flask unter `http://127.0.0.1:5000`
- automatische Aktualisierung für Templates, CSS und JavaScript
- BrowserSync startet bevorzugt auf Port `3000` und öffnet den Browser

## Heute umgesetzt – 11. September 2026

- [x] Grundstruktur der Landingpage weiter aufgebaut
- [x] Navigation und Footer gestaltet
- [x] Hero-Bereich als zweispaltiges Grid umgesetzt
- [x] Hero-Bild eingebunden und ausgerichtet
- [x] „So einfach geht’s“-Bereich mit Grid und Karten strukturiert
- [x] Spiele-, Garten- und Barrierefreiheitsbereiche vorbereitet
- [x] Wiederkehrende Container-Breiten und Abstände eingesetzt
- [x] Farben über gemeinsame CSS-Variablen verwendet
- [x] Klassen und IDs für die neuen Bereiche ergänzt
- [x] BrowserSync für schnelle Aktualisierungen eingerichtet
- [x] Gemeinsames `app_base.html` für interne Seiten erstellt
- [x] Wiederverwendbare Sidebar mit Navigation hinzugefügt
- [x] `app_content`-Block für Seiteninhalte ergänzt
- [x] Grundlayout mit Flexbox aufgebaut
- [x] `spiele.html` an `app_base.html` angebunden
- [x] Garden/Garten-Namenskonvention vereinheitlicht

## Verifizierte Prüfungen

- `/`, `/spiele`, `/quiz` und `/result` liefern HTTP-Status `200`
- `app.py` kann mit dem PyCharm-Interpreter importiert werden
- Flask `3.1.3` und Requests `2.32.5` entsprechen `requirements.txt`
- `pip check` meldet keine defekten Python-Abhängigkeiten
- BrowserSync `3.0.4`, Concurrently `10.0.5` und Prettier `3.9.6` sind installiert
- BrowserSync erreicht den Flask-Proxy und bindet seinen Live-Reload-Client ein
- `git diff --check` meldet keine Whitespace-Fehler

## Noch nicht umgesetzt oder fehlerhaft

- Die vier Spielbilder in `home.html` verweisen noch auf den nicht vorhandenen
  Ordner `static/images/games/`. Die vorhandenen Dateien liegen unter
  `static/images/landingpage/`.
- Das Gartenbild ist vorhanden, wird in `home.html` aber noch mit `src="#"`
  referenziert.
- Die Links `/login` und `/register` besitzen noch keine Flask-Routen und liefern
  deshalb HTTP-Status `404`.
- Spiel-, Garten-, Call-to-Action- und Footer-Links mit `href="#"` sind noch
  Platzhalter.
- Der Textgrößen-Button hat noch keine JavaScript-Funktion.
- `static/js/main.js` ist leer und wird von `home.html` nicht geladen.
- Die Templates verwenden `base.html` noch nicht.
- Es gibt noch keine Media Queries für mobile Layouts.
- Namenseingabe, zufällige Fragen, Antwortprüfung, Timer und Punkteberechnung
  sind nicht implementiert.
- Ergebnisse werden noch nicht dynamisch erzeugt oder in einer Datenbank
  gespeichert.
- Eine Bestenliste ist nicht implementiert.
- Automatisierte Tests sind noch nicht vorhanden.
- Prettier meldet noch Formatabweichungen in `bs-config.js`, `home.html`,
  `style.css` und `README.md`.

## Aktuelle Projektstruktur

```text
KopfFit/
├── app.py
├── templates/
│   ├── base.html
│   ├── spiele.html
│   ├── home.html
│   ├── quiz.html
│   └── result.html
├── static/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
│       ├── brand/
│       ├── Ideas/
│       └── landingpage/
├── bs-config.js
├── package.json
├── package-lock.json
├── requirements.txt
├── README.md
├── PROGRESS.md
├── ideen.md
└── .gitignore
```
