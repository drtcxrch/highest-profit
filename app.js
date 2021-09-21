const fs = require('fs');

//Part 1: getting a line count, and the number of valid profits in the file.

const printRowCount = async function() {
  try {
    let fileData = fs.readFileSync('./data.csv', 'utf8');
    let lines = fileData.split('\n');
    console.log(`1) There are ${lines.length} lines of data, including the header.`);
    let validProfit = [];
    let validNumCount = 0;

    for (let i = 1; i < lines.length; i++) {
      let lineData = lines[i].split(',');
      let profit = parseInt(lineData[4]);
      if (!isNaN(profit)) {
        validProfit.push(profit)
      };
    }

    console.log(`2) There are ${validProfit.length} valid profits in the file.`);
  }

  catch (err) {
    console.log(err);
  }
}

printRowCount();