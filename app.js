const fs = require('fs');

//Part 1: getting a line count, and the number of valid profits in the file.

const printProfitData = async function() {
  try {
    let fileData = fs.readFileSync('./data.csv', 'utf8');
    let lines = fileData.split('\n');
    console.log(`1) There are ${lines.length} lines of data, including the header.`);
    let validProfitData = [];
    let validNumCount = 0;

    for (let i = 1; i < lines.length; i++) {
      let lineData = lines[i].split(',');
      let profitEntry = {
        year: lineData[0],
        rank: lineData[1],
        company: lineData[2],
        revenue: lineData[3],
        profit: lineData[4]
      }
      let profit = parseInt(lineData[4]);
      if (!isNaN(profit)) {
        validProfitData.push(profitEntry);
      };
    }

    console.log(`2) There are ${validProfitData.length} valid profits in the file.`);

    //Part 2: write JSON file with converted data in order of profit value and print top 20

    validProfitData.sort((entry1, entry2) => entry2.profit - entry1.profit);
    fs.writeFileSync('./data2.json', JSON.stringify(validProfitData));
    let topTwenty = JSON.stringify(validProfitData.slice(0, 20), null, 2);
    console.log(`3) Top 20 entries ranked from highest profit: ${topTwenty}`);
  }

  catch (err) {
    console.log(err);
  }
}

printProfitData();