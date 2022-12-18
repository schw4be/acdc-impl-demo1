Das Kommando `acdc intstall modules` legt ein Ordner `acdc` im Order `src` an. Dort wird ein File `index.ts` angelegt, welches alle Importe aus `.acdcrc.json ` beinhaltet.



- Die `acdc.config.json` Datei wird im Build Prozess erstellt, entsprechend den konfigurierten Werten
- Es muss ein acdc Package geben, welches in jedes Projekt eingebunden wird (via npm). Dieses behandelt die `acdc.config.json` Einstellungen
- `acdc.modules.js` beinhaltet alles was in adapter.config drin ist.
