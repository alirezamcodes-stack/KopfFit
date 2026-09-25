# Testfälle – KopfFit

## Merk-Mix

**Testdatum:** 25.09.2026

Die folgenden Testfälle wurden manuell im Browser durchgeführt.

| Nr. | Test | Aktion | Erwartetes Ergebnis | Status |
| --- | --- | --- | --- | --- |
| 1 | Spielstart | Merk-Mix öffnen | Vier Bilder werden angezeigt. | Bestanden |
| 2 | Keine Schwierigkeit gewählt | Noch keine Schwierigkeit auswählen | „Ich bin bereit“ bleibt deaktiviert. | Bestanden |
| 3 | Schwierigkeit Leicht | „Leicht“ wählen und „Ich bin bereit“ klicken | Es werden 6 Antwortbilder angezeigt. | Bestanden |
| 4 | Schwierigkeit Mittel | „Mittel“ wählen und „Ich bin bereit“ klicken | Es werden 8 Antwortbilder angezeigt. | Bestanden |
| 5 | Schwierigkeit Schwer | „Schwer“ wählen und „Ich bin bereit“ klicken | Es werden 10 Antwortbilder angezeigt. | Bestanden |
| 6 | Schwierigkeit wechseln | Erst „Leicht“, danach „Mittel“ wählen | Nur „Mittel“ bleibt ausgewählt. | Bestanden |
| 7 | Antwort auswählen | Ein Antwortbild anklicken | Das Bild wird als ausgewählt markiert. | Bestanden |
| 8 | Auswahl entfernen | Ein ausgewähltes Bild erneut anklicken | Die Auswahl wird entfernt. | Bestanden |
| 9 | Vier Antworten auswählen | Vier Bilder auswählen | „Antwort bestätigen“ wird aktiviert. | Bestanden |
| 10 | Mehr als vier Antworten | Nach vier ausgewählten Bildern ein fünftes Bild anklicken | Das fünfte Bild wird nicht ausgewählt. | Bestanden |
| 11 | Antworten bestätigen | Vier Bilder auswählen und „Antwort bestätigen“ klicken | Richtige und falsche Antworten werden markiert und das Ergebnis wird angezeigt. | Bestanden |
| 12 | Antworten nach Ergebnis | Nach der Auswertung erneut auf ein Antwortbild klicken | Die Antworten können nicht mehr verändert werden. | Bestanden |
| 13 | Neue Runde | „Nächste Runde“ klicken | Eine neue Runde startet ohne Neuladen der Seite. | Bestanden |
| 14 | Neue Bilder | Eine neue Runde starten | Vier neue zufällige Merkbilder werden angezeigt. | Bestanden |
| 15 | Schwierigkeit nach neuer Runde | Eine neue Runde starten | Die vorherige Schwierigkeit bleibt ausgewählt, kann aber geändert werden. | Bestanden |
| 16 | Mehrere Runden | Mehrere Runden hintereinander spielen | Alte Antworten und Ergebnisse werden vor jeder neuen Runde zurückgesetzt. | Bestanden |

## Ergebnis

Die getesteten Funktionen von Merk-Mix funktionieren wie erwartet.

Merk-Mix kann vollständig im Browser gespielt werden. Mehrere Runden können
ohne Neuladen der Seite durchgeführt werden.

Automatisierte Tests sind derzeit noch nicht implementiert.