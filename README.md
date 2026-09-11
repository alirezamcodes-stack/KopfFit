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
| Formatierung | Prettier | eingerichtet |

## Projekt lokal starten

Voraussetzungen sind Python 3 und `pip`.

```powershell
python -m venv venv
venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```

Anschließend ist die Anwendung unter `http://127.0.0.1:5000` erreichbar.

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
├── PROGRESS.md
└── ideen.md
```

## Team und Verantwortlichkeiten

| Teilnehmer | Rolle | Hauptaufgaben |
| --- | --- | --- |
| Ali | Frontend-Entwickler | HTML, CSS, JavaScript, Seitendesign, responsives Design und seniorenfreundliche Bedienung |
| Marco | Backend-Entwickler | Python, Flask, Routen, Spiellogik, Antworten, Timer und Punkteberechnung |
| Valentin | Datenbank- und Integrationsentwickler | ER-Modell, SQLite, Speicherung von Fragen und Ergebnissen, Backend-Anbindung und Datentests |
