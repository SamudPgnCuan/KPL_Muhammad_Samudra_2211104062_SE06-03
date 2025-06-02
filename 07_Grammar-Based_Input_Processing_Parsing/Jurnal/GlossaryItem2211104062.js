const fs = require('fs');

class GlossaryItem {
  constructor(filePath) {
    this.filePath = filePath;
  }

  readJson() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      const jsonData = JSON.parse(data);

      const glossEntry = jsonData.glossary?.GlossDiv?.GlossList?.GlossEntry;

      if (!glossEntry) {
        console.error('GlossEntry not found in JSON');
        return;
      }

      console.log('--- GlossEntry ---');
      console.log(`ID          : ${glossEntry.ID}`);
      console.log(`SortAs      : ${glossEntry.SortAs}`);
      console.log(`GlossTerm   : ${glossEntry.GlossTerm}`);
      console.log(`Acronym     : ${glossEntry.Acronym}`);
      console.log(`Abbrev      : ${glossEntry.Abbrev}`);
      console.log(`Definition  : ${glossEntry.GlossDef.para}`);
      console.log(`See Also    : ${glossEntry.GlossDef.GlossSeeAlso.join(', ')}`);
      console.log(`GlossSee    : ${glossEntry.GlossSee}`);
    } catch (err) {
      console.error('Error reading or parsing the JSON file:', err.message);
    }
  }
}

const reader = new GlossaryItem('./07_Grammar-Based_Input_Processing_Parsing/Jurnal/jurnal7_3_2211104062.json');
reader.readJson();