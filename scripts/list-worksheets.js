require('isomorphic-fetch');
const gsheets = require('gsheets');

const sheetID = process.env.SPREADSHEET_ID;
const getSpreadsheet = gsheets.getSpreadsheet.bind(gsheets);

Promise.resolve(sheetID)
  .then(
    (sheetID) =>
      typeof sheetID === 'undefined'
        ? Promise.reject('You have to specify a process.env.SPREADSHEET_ID')
        : Promise.resolve(sheetID)
  )
  .then(getSpreadsheet)
  .then((response) => response.worksheets)
  .then((worksheets) => worksheets.forEach((w) => console.log(`${w.title}: ${w.id}`)))
  .catch(console.error);
