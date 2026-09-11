# KopfFit

KopfFit ist eine seniorenfreundliche Quiz-Webanwendung für ältere Menschen
sowie für den Einsatz in Alten- und Pflegeheimen. Kurze und verständliche
Aufgaben sollen das Gedächtnis aktivieren, Erfolgserlebnisse schaffen und
gemeinsame Aktivitäten unterstützen.

## Projektziel

Die Anwendung soll auch ohne technische Vorkenntnisse einfach bedienbar sein.
Große, gut lesbare Texte, klare Schaltflächen, eine ruhige Gestaltung und ein
Spielablauf ohne unnötigen Zeitdruck stehen deshalb im Mittelpunkt.

## Geplantes MVP

Die erste funktionsfähige Version umfasst:

- Eingabe des Spielernamens
- Auswahl einer Quizkategorie
- zufällige Fragen mit jeweils vier Antwortmöglichkeiten
- Zeitbegrenzung pro Frage
- Prüfung der Antworten und Punkteberechnung
- dynamische Ergebnisanzeige
- Speicherung der Ergebnisse in SQLite
- Bestenliste
- Start einer neuen Runde oder Wechsel der Kategorie
- responsives und seniorenfreundliches Design

Weiterführende Konzepte wie der Garten, Benutzerkonten und ein Gruppenquiz
werden in [ideen.md](ideen.md) gesammelt.

## Aktueller Stand

Die Flask-Grundstruktur sowie Seiten für Landingpage, Kategorieauswahl, Quiz
und Ergebnis sind vorhanden. Die Landingpage besitzt bereits die geplante
inhaltliche Struktur, ein Farbsystem und Markenassets. Die übrigen Seiten und
der Spielablauf verwenden derzeit noch statische Beispielinhalte.

Den ausführlichen Stand, das Product Backlog und die Sprintplanung enthält
[PROGRESS.md](PROGRESS.md).

## Technologien

| Bereich | Technologie | Status |
| --- | --- | --- |
| Backend | Python, Flask | eingerichtet |
| Frontend | HTML, CSS, JavaScript | eingerichtet |
| Datenbank | SQLite | geplant |
| Entwicklungswerkzeuge | BrowserSync, Prettier | eingerichtet |

## Projekt lokal starten

Voraussetzungen sind Python 3, Node.js, `pip` und `npm`.

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
npm.cmd install
npm.cmd start
```

`npm.cmd start` startet Flask und BrowserSync gemeinsam. BrowserSync öffnet die
Anwendung automatisch unter `http://localhost:3000`. Falls dieser Port bereits
belegt ist, wird der nächste freie Port verwendet, zum Beispiel `3001`.
Änderungen an Templates, CSS oder JavaScript werden mit kurzer Verzögerung
übernommen; CSS wird dabei ohne vollständiges Neuladen der Seite aktualisiert.
Flask selbst läuft im Hintergrund unter `http://127.0.0.1:5000`.

Unter Windows wird `npm.cmd` verwendet, damit der Start auch funktioniert,
wenn PowerShell die Ausführung von `npm.ps1` blockiert. Beide Prozesse können
gemeinsam mit `Strg+C` beendet werden.

## Vorhandene Routen

| Route | Inhalt |
| --- | --- |
| `/` | Landingpage |
| `/categories` | Kategorieauswahl |
| `/quiz` | Quizseite mit Beispielaufgabe |
| `/result` | statische Ergebnisseite |

## Projektstruktur

```text
KopfFit/
├── app.py
├── templates/
│   ├── base.html
│   ├── home.html
│   ├── categories.html
│   ├── quiz.html
│   └── result.html
├── static/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
├── requirements.txt
├── package.json
├── bs-config.js
├── PROGRESS.md
└── ideen.md
```

## Team und Verantwortlichkeiten

| Teilnehmer | Rolle | Hauptaufgaben |
| --- | --- | --- |
| Ali | Frontend-Entwickler | HTML, CSS, JavaScript, Seitendesign, responsives Design und seniorenfreundliche Bedienung |
| Marco | Backend-Entwickler | Python, Flask, Routen, Spiellogik, Antworten, Timer und Punkteberechnung |
| Valentin | Datenbank- und Integrationsentwickler | ER-Modell, SQLite, Speicherung von Fragen und Ergebnissen, Backend-Anbindung und Datentests |
