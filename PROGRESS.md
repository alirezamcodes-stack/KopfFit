# Projektfortschritt – KopfFit

**Stand: 11. September 2026**

## Projektziel

KopfFit ist eine seniorenfreundliche Quiz-Webanwendung. Die Anwendung soll
einfach bedienbar und gut lesbar sein. Geplant sind verschiedene Kategorien,
zufällig ausgewählte Quizfragen, eine Zeitbegrenzung, ein Punktesystem, eine
Ergebnisanzeige und eine Bestenliste.

## Aktueller Projektstatus

Das technische Grundgerüst und die Struktur der Landingpage sind vorhanden.
Die Flask-Anwendung kann gestartet werden und die Seiten für Start,
Kategorieauswahl, Quiz und Ergebnis können aufgerufen werden.

Die Landingpage enthält bereits die Bereiche Erklärung, Spiele, Garten,
Barrierefreiheit und Handlungsaufforderungen. Ein einheitliches Farbsystem,
Grundstile für gut lesbare Texte, Fokusmarkierungen sowie Logo-, App- und
Favicon-Dateien wurden ergänzt. Referenzbilder für die geplanten Ansichten
liegen ebenfalls im Projekt.

Die Inhalte der Kategorie-, Quiz- und Ergebnisseite sind derzeit noch
statisch. Namenseingabe, zufällige Fragen, Timer, Punkteberechnung,
Datenbankspeicherung und Bestenliste sind noch nicht implementiert. Einige
Links und Bilder der Landingpage sind noch Platzhalter.

## Erledigt

- [x] GitHub-Repository erstellt und in PyCharm eingerichtet
- [x] Python Virtual Environment erstellt
- [x] Flask installiert und `requirements.txt` erstellt
- [x] Grundstruktur mit Templates und statischen Dateien angelegt
- [x] Flask-Routen für `/`, `/categories`, `/quiz` und `/result` erstellt
- [x] Start-, Kategorie-, Quiz- und Ergebnisseite als Basis-Prototyp angelegt
- [x] Grundstruktur der Landingpage umgesetzt
- [x] Gemeinsame CSS-Farbvariablen und Basisstile erstellt
- [x] Erste seniorenfreundliche Typografie und Fokusmarkierungen vorbereitet
- [x] Logo, Favicons und App-Icons hinzugefügt
- [x] Referenzbilder für die geplanten Ansichten hinzugefügt
- [x] Prettier für einheitliche Formatierung eingerichtet

## MVP-Umfang

Zum vereinbarten MVP gehören Namenseingabe, Kategorieauswahl, zufällige
Quizfragen mit vier Antwortmöglichkeiten, Timer, Punkteberechnung,
Ergebnisanzeige, SQLite-Speicherung und Bestenliste. Der Gruppenquiz-Modus, der
persönliche Garten und Benutzerkonten bleiben zunächst Erweiterungen und sind
in [ideen.md](ideen.md) beschrieben.

## Product Backlog und Aufwandsschätzung

| ID | User Story / Anforderung | Priorität | Aufwand |
| --- | --- | --- | ---: |
| US01 | Als Spieler möchte ich meinen Namen eingeben, damit mein Ergebnis zugeordnet werden kann. | Hoch | 2 Std. |
| US02 | Als Spieler möchte ich eine Kategorie auswählen, damit ich ein Quiz zu einem gewünschten Thema spielen kann. | Hoch | 3 Std. |
| US03 | Als Spieler möchte ich zufällig ausgewählte Fragen beantworten, damit jede Spielrunde abwechslungsreich ist. | Hoch | 6 Std. |
| US04 | Als Spieler möchte ich vier Antwortmöglichkeiten sehen, damit ich eine Antwort auswählen kann. | Hoch | 3 Std. |
| US05 | Als Spieler möchte ich eine Zeitbegrenzung pro Frage haben, damit das Quiz eine zusätzliche Herausforderung bietet. | Hoch | 3 Std. |
| US06 | Als Spieler möchte ich Punkte für richtige Antworten erhalten, damit ich meinen Erfolg erkennen kann. | Hoch | 2 Std. |
| US07 | Als Spieler möchte ich nach dem Quiz mein Ergebnis sehen, damit ich meine Leistung beurteilen kann. | Hoch | 3 Std. |
| US08 | Als Spieler möchte ich eine Bestenliste sehen, damit ich meine Ergebnisse mit anderen vergleichen kann. | Mittel | 4 Std. |
| US09 | Als Spieler möchte ich eine gut lesbare und einfach bedienbare Oberfläche haben, damit ich das Quiz auch ohne technische Vorkenntnisse nutzen kann. | Hoch | 6 Std. |
| US10 | Als Spieler möchte ich zwischen verschiedenen Kategorien wechseln und eine neue Runde starten können. | Mittel | 2 Std. |
| US11 | Als Entwickler möchte ich die Ergebnisse in einer Datenbank speichern, damit sie dauerhaft verfügbar sind. | Hoch | 4 Std. |
| US12 | Als Entwickler möchte ich die Anwendung testen, damit Fehler erkannt und behoben werden können. | Hoch | 4 Std. |

**Geschätzter Gesamtaufwand: 42 Stunden**

Die Stunden sind Schätzwerte. Der tatsächliche Aufwand kann während der
Entwicklung abweichen. Nach jedem Sprint werden die Ergebnisse geprüft und die
Planung bei Bedarf angepasst.

## Sprintplanung

| Sprint | Schwerpunkt | Geplantes Ergebnis |
| --- | --- | --- |
| Sprint 1 | Grundstruktur und Benutzeroberfläche | Startseite, Namenseingabe und Kategorieauswahl funktionieren. |
| Sprint 2 | Quizfunktionalität | Fragen, Antwortmöglichkeiten, Timer und Punktesystem funktionieren. |
| Sprint 3 | Ergebnisse und Fertigstellung | Ergebnisanzeige, Datenbank, Bestenliste, Designverbesserungen und Tests sind abgeschlossen. |

## Sprint Backlog – Sprint 1

**Sprintziel:** Eine funktionsfähige Grundversion erstellen, in der ein Spieler
seinen Namen eingeben und eine Kategorie auswählen kann.

| Nr. | Aufgabe | User Story | Aufwand | Status |
| ---: | --- | --- | ---: | --- |
| 1 | Flask-Projektstruktur vorbereiten | US01–US02 | 2 Std. | Erledigt |
| 2 | Startseite erstellen | US09 | 3 Std. | In Arbeit |
| 3 | Namenseingabe implementieren | US01 | 2 Std. | Offen |
| 4 | Kategorieauswahl entwickeln | US02 | 3 Std. | In Arbeit |
| 5 | Grundlegendes responsives Design erstellen | US09 | 3 Std. | In Arbeit |
| 6 | Funktionen testen und Fehler beheben | US12 | 2 Std. | Offen |

**Gesamtaufwand Sprint 1: 15 Stunden**

### Abnahmekriterien für Sprint 1

Der Sprint ist erfolgreich abgeschlossen, wenn:

- die Anwendung gestartet werden kann,
- die Startseite korrekt angezeigt wird,
- ein Spieler seinen Namen eingeben kann,
- die Kategorieauswahl funktioniert,
- die Oberfläche gut lesbar ist und
- die grundlegenden Funktionen ohne Fehler nutzbar sind.

## Nächste Schritte

- [ ] Landingpage gestalten und fehlende Bilder sowie Links ergänzen
- [ ] Templates mit `base.html` verbinden
- [ ] Namenseingabe implementieren
- [ ] Kategorien funktional mit dem Quiz verbinden
- [ ] Quizfragen und jeweils vier Antwortmöglichkeiten definieren
- [ ] Zufällige Fragenauswahl implementieren
- [ ] Antwortprüfung und Punktesystem implementieren
- [ ] Timer pro Frage implementieren
- [ ] Ergebnis dynamisch anzeigen
- [ ] Ergebnisse in einer Datenbank speichern
- [ ] Bestenliste erstellen
- [ ] Responsives und seniorenfreundliches Design fertigstellen
- [ ] Hilfe-, Textgrößen- und Kontrastfunktion umsetzen
- [ ] Anwendung testen und Fehler beheben

## Team und Aufgabenverteilung

| Teilnehmer | Rolle | Hauptaufgaben |
| --- | --- | --- |
| Ali | Frontend-Entwickler | HTML, CSS, JavaScript, Seitendesign, Buttons, responsives Design und Benutzerfreundlichkeit für ältere Menschen |
| Marco | Backend-Entwickler | Python, Flask, Spiellogik, Routen, Verarbeitung der Antworten, Timer und Punkteberechnung |
| Valentin | Datenbank- und Integrationsentwickler | ER-Modell, Datenbankstruktur, SQL, Speicherung von Fragen und Ergebnissen, Anbindung der Datenbank an das Backend und Testen der Daten |

## Aktuelle Projektstruktur

- `app.py`
- `templates/base.html`
- `templates/home.html`
- `templates/categories.html`
- `templates/quiz.html`
- `templates/result.html`
- `static/css/style.css`
- `static/js/main.js`
- `static/images/brand/`
- `static/images/Ideas/`
- `requirements.txt`
- `package.json`
- `README.md`
- `ideen.md`
- `.gitignore`
