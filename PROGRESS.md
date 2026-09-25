# Projektfortschritt – KopfFit

## Aktueller Stand

KopfFit besitzt eine vollständige Frontend-Grundlage mit Landingpage,
Spieleübersicht, vier Spielseiten sowie eigenen Seiten für Garten und
Fortschritt. Acht Flask-Routen rendern die vorhandenen Jinja-Templates; das
gemeinsame App-Layout verwendet eine Sidebar-Navigation.

Merk-Mix ist derzeit das am weitesten entwickelte Spiel. Flask liest die
vorhandenen PNG-Dateien aus `static/images/games/merk_mix/` ein und übergibt sie
an das Template. Im Browser stehen eine Merkphase, drei Schwierigkeitsstufen,
die Auswahl und Auswertung von Antworten, visuelles Feedback sowie mehrere
Runden ohne Neuladen der Seite zur Verfügung:

- Pro Runde werden vier zufällige Merkbilder ausgewählt.
- Leicht zeigt 6, Mittel 8 und Schwer 10 Antwortbilder. Die vier richtigen
  Bilder werden um zufällige Ablenkungsbilder ergänzt und gemischt.
- Es können höchstens vier Bilder ausgewählt werden. „Antwort bestätigen“ wird
  bei genau vier ausgewählten Bildern aktiv.
- Richtige, falsche und nicht ausgewählte richtige Antworten werden visuell
  markiert; zusätzlich erscheint die Zahl der richtig erkannten Bilder.
- Überschrift und Anleitung wechseln passend zwischen Merk-, Auswahl- und
  Ergebnisphase.
- „Nächste Runde“ entfernt die vorherigen Antworten und Antwortfelder, setzt
  das Ergebnis zurück und wählt vier neue Merkbilder per JavaScript.
- Die ausgewählte Schwierigkeit bleibt zwischen den Runden markiert. Ihre
  Schaltflächen werden in der neuen Merkphase wieder freigegeben, sodass die
  Stufe vor der nächsten Auswahlphase geändert werden kann.

Kartenpaare, Augenblick und Alltags-Reihenfolge besitzen bereits ihre
Frontend-Struktur und Bildressourcen, aber noch keine vollständige
JavaScript-Spiellogik. Garten und Fortschritt sind statische Ansichten:
Spielergebnisse werden nicht gespeichert, Fortschrittswerte werden nicht
berechnet und gespielte Runden verändern den Garten nicht. Eine Datenbank,
Backend-Persistenz, Benutzerkonten und Authentifizierung sind nicht
implementiert.

## Entwicklungsverlauf

Dieser Abschnitt ist die dauerhafte, chronologische Projekthistorie. Neue
Entwicklungstage werden als datierte Einträge oben ergänzt. Ältere Einträge
werden nicht gelöscht oder überschrieben. Der Abschnitt „Aktueller Stand“
beschreibt dagegen ausschließlich den jeweils gegenwärtigen Projektzustand.

### 25.09.2026

- Merk-Mix wurde vervollständigt und technisch aufgeräumt.
- Mehrere Runden können ohne Neuladen der Seite gespielt werden. Die Aktion
  „Nächste Runde“ startet den neuen Durchlauf per JavaScript.
- Beim Rundenwechsel werden die bisherigen Antworten, die Ergebnisnachricht
  und die erzeugten Antwortfelder zurückgesetzt.
- Für jede Runde werden vier neue zufällige Merkbilder ausgewählt.
- Überschrift und Anleitung wechseln abhängig von Merk-, Auswahl- und
  Ergebnisphase.
- Die ausgewählte Schwierigkeit bleibt zwischen den Runden erhalten; die
  Schwierigkeitsbuttons werden für die neue Runde wieder freigegeben.
- JavaScript und CSS wurden bereinigt und nach Aufgabenbereichen neu geordnet.
  Verborgene Elemente werden einheitlich über das HTML-Attribut `hidden` und
  die zugehörige CSS-Regel behandelt.
- Ausgewählte, richtige und falsche Antwortzustände werden visuell dargestellt;
  nicht ausgewählte richtige Bilder erhalten ebenfalls die richtige Markierung.

### 24.09.2026

- Das dynamische Laden der Merk-Mix-Bilder wurde eingeführt. Flask liest die
  verfügbaren Bilddateien ein und übergibt ihre Dateinamen an das Template.
- Vier zufällige Bilder bilden die Merkphase.
- Die Schwierigkeitsstufen Leicht, Mittel und Schwer wurden ergänzt. Sie zeigen
  6, 8 beziehungsweise 10 Antwortbilder.
- Die Antwortauswahl kombiniert die vier richtigen Bilder mit zufälligen
  Ablenkungsbildern und mischt anschließend ihre Reihenfolge.
- Die Auswahl wurde auf maximal vier Bilder begrenzt.
- Das Bestätigen und Auswerten der Antworten einschließlich Ergebnisnachricht
  wurde eingeführt.

### 17.09.2026

- Die Frontend-Spielseiten wurden ausgebaut; Kartenpaare und Merk-Mix wurden
  weiterentwickelt.
- Eigene Seiten für Augenblick, Alltags-Reihenfolge, Garten und Fortschritt
  wurden ergänzt.
- Flask-Routen, Spieleübersicht und interne Navigation wurden entsprechend
  erweitert.
- Die Projektdokumentation wurde mit dem Frontend-Stand synchronisiert.
- Bildressourcen für Kartenpaare, Merk-Mix, Augenblick und
  Alltags-Reihenfolge wurden hinzugefügt.
- Gartenbilder für die Hauptansicht und mehrere Entwicklungsstufen wurden
  ergänzt.

### 11.09.2026

- Navbar, Hero-Bereich, Inhaltsraster und Footer erhielten ihre grundlegenden
  Styles.
- Die Bilder der Landingpage wurden eingebunden.
- Die bisherige Kategorienseite wurde in „Spiele“ umbenannt und Route sowie
  Verweise wurden angepasst.
- Mit `app_base.html` wurde ein gemeinsames internes App-Layout eingeführt.
- Die Sidebar-Navigation wurde ergänzt.
- README und Projektfortschritt wurden aktualisiert.
- BrowserSync und die lokale Entwicklungsumgebung wurden weiter eingerichtet.

### 10.09.2026

- Die aktuelle KopfFit-Version begann als Neustart des Projekts.
- CSS und Markenauftritt wurden überarbeitet; KopfFit-Logo, Symbol, Favicons und
  App-Icons wurden integriert.
- Die Struktur der Landingpage wurde neu aufgebaut und ihre Abschnitte wurden
  vervollständigt.
- Prettier wurde für die einheitliche Formatierung eingerichtet.
- `node_modules` wurde aus der Versionsverwaltung ausgeschlossen.
- UI-Referenzbilder für die geplanten Seiten und Zustände wurden dem Projekt
  hinzugefügt.

## Aktuell offen

- vollständige JavaScript-Spiellogik für Kartenpaare, einschließlich Aufdecken,
  Mischen und Paarprüfung
- vollständige JavaScript-Spiellogik für Augenblick, einschließlich
  Bildauswahl, Antwortprüfung und Schwierigkeitssteigerung
- vollständige JavaScript-Spiellogik für Alltags-Reihenfolge, einschließlich
  Umordnen und Auswertung
- Backend-Persistenz und dauerhafte Speicherung von Spielständen und
  Ergebnissen
- Datenbank und Datenmodelle
- Benutzerkonten und Authentifizierung
- dynamische Fortschrittsdaten statt der aktuellen Platzhalterwerte
- Anbindung der Spiele an Gartenwachstum und Freischaltungen
- funktionierende Vorlesen-, Pause- und Textgrößen-Bedienung
- responsive und weiterführende barrierearme Ausarbeitung
- automatisierte Tests
- fehlende Routen für Einstellungen, Hilfe, Anmeldung, Registrierung,
  Datenschutz, Impressum und Kontakt sowie weitere Platzhalterlinks
- Korrektur der noch unvollständigen Bildverweise auf der Landingpage

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
