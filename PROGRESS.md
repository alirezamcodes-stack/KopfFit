# Projektfortschritt – KopfFit

**Bestandsaufnahme: 17. September 2026**

Dieses Dokument beschreibt ausschließlich den aktuell im Projekt vorhandenen
Stand. KopfFit ist ein Flask-basierter Frontend-Prototyp. Alle vier definierten
Routen lassen sich rendern; die beiden Spielseiten enthalten noch keine
interaktive Spiellogik.

## Implementiert

### Flask und Routen

- `app.py` erstellt die Flask-Anwendung.
- `/` rendert `templates/home.html`.
- `/spiele` rendert `templates/spiele.html`.
- `/spiele/kartenpaare` rendert `templates/kartenpaare.html`.
- `/spiele/merk_mix` rendert `templates/merk_mix.html`.
- Ein Context Processor stellt `current_year` bereit. Kein aktives Template
  gibt den Wert derzeit aus.
- Der direkte Start von `app.py` aktiviert den Flask-Debug-Modus.

### Templates und sichtbare Begriffe

- `base.html` definiert Dokumentgrundlage, Seitentitel, Meta-Beschreibung,
  Favicon, Apple-Touch-Icon, Stylesheet und Template-Blöcke.
- `app_base.html` stellt für interne Seiten die Navigation „Start“, „Spiele“,
  „Garten“, „Fortschritt“, „Einstellungen“, „Textgröße“ und „Hilfe“ bereit.
- Die Landingpage verwendet die Bereiche „So funktioniert's“, „Spiele“, „Dein
  Garten“ und „Einfach. Klar. In deinem Tempo.“
- Die Spieleübersicht nennt „Merk-Mix“, „Augenblick“, „Kartenpaare“ und
  „Zeitreise“.
- Merk-Mix und Kartenpaare besitzen jeweils eine eigene statische Seite und
  einen funktionierenden Rücklink zur Spieleübersicht.

### Styling und Assets

- `static/css/style.css` enthält Reset, Grundtypografie, CSS-Farbvariablen,
  Fokusmarkierung sowie Layouts für Landingpage, Sidebar, Spieleübersicht,
  Kartenpaare und Merk-Mix.
- `static/images/brand/` enthält Favicon, Icons, Symbol und horizontales Logo.
- `static/images/landingpage/` enthält Hero-, Garten- und Spielbilder als PNG
  und teilweise als WebP.
- `static/images/Ideas/` enthält 17 Referenzbilder von `00-landing.png` bis
  `16-guest.png`; diese Dateien sind Entwürfe, keine implementierten Seiten.

### Entwicklungs- und Setup-Dateien

- `requirements.txt` enthält die beiden von `app.py` importierten
  Drittanbieterpakete Flask 3.1.3 und Requests 2.32.5.
- `package.json` und `package-lock.json` definieren BrowserSync, Concurrently,
  Prettier und das Jinja-Template-Plugin als Entwicklungsabhängigkeiten.
- `npm.cmd start` startet über Concurrently die lokale `.venv` und
  BrowserSync.
- `bs-config.js` nutzt Flask unter `http://127.0.0.1:5000` als Proxy,
  beobachtet Templates, CSS und JavaScript und bevorzugt Port 3000.
- `.prettierrc` verwendet für HTML-Dateien den Parser `jinja-template`.

## Derzeit in Arbeit oder nur statisch vorbereitet

- Merk-Mix enthält vier leere Bildflächen mit den Platzhaltern `sample1` bis
  `sample4`. „Vorlesen“, „Ich bin bereit“ und „Pause“ lösen nichts aus.
- Kartenpaare enthält zwölf gleich beschriftete Karten und einen leeren
  Feedbackbereich. Aufdecken, Mischen, Paarvergleich, Abschlusszustand,
  Vorlesen und Pause sind nicht implementiert.
- Augenblick und Zeitreise sind Karten in der Spieleübersicht, haben aber
  weder eigene Templates noch Flask-Routen.
- „Fortschritt“, „Einstellungen“ und „Hilfe“ in der Sidebar sind
  Platzhalterlinks.
- Die Landingpage verlinkt `/login` und `/register`, obwohl dafür keine Routen
  existieren.
- Die Spielkarten der Landingpage referenzieren den nicht vorhandenen Ordner
  `static/images/games/`. Passende Bilddateien liegen stattdessen unter
  `static/images/landingpage/`.
- Das vorhandene Gartenbild ist nicht eingebunden; das Template verwendet für
  die Gartenillustration `src="#"`.
- Weitere Spiel-, Garten-, Call-to-Action- und Footerlinks verwenden
  `href="#"`.
- Die sichtbaren Textgrößen-, Vorlesen- und Pause-Schaltflächen besitzen keine
  JavaScript-Funktion.
- `static/js/main.js` ist leer und wird in keinem Template über einen
  `<script>`-Eintrag geladen.
- Das Stylesheet enthält keine Media Queries. Die mehrspaltigen Layouts sind
  daher noch nicht für kleine Ansichten angepasst.

## Noch nicht implementiert

- tatsächliche Spielrunden und Zustandsverwaltung
- dynamische Gegenstände, Karteninhalte oder Aufgaben
- Eingabe- und Antwortauswertung, Punkte oder Ergebnisse
- Gartenfortschritt und dauerhafte Speicherung
- Datenbank oder Datenmodelle
- Anmeldung, Registrierung, Gastmodus oder Sitzungsverwaltung
- Seiten für Fortschritt, Einstellungen, Hilfe, Datenschutz, Impressum und
  Kontakt
- funktionierende Textgrößen-, Vorlese- und Pausenoptionen
- automatisierte Tests

Weitere noch relevante Produktideen stehen in [ideen.md](ideen.md).

## Verifiziert

- Die Routen `/`, `/spiele`, `/spiele/kartenpaare` und `/spiele/merk_mix`
  liefern mit dem Flask-Testclient HTTP 200.
- Die im aktuellen Template verlinkten Pfade `/login` und `/register` liefern
  HTTP 404, weil dafür noch keine Flask-Routen definiert sind.
- Die konfigurierte Entwicklungsumgebung verwendet Python 3.13.3.
- Flask 3.1.3 und Requests 2.32.5 sind installiert.
- `pip check` meldet keine defekten Python-Abhängigkeiten.
- Die direkten Node-Entwicklungsabhängigkeiten in `package.json` stimmen mit
  `package-lock.json` überein.

## Aktuelle Projektstruktur

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
