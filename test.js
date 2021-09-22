const { expect } = require('chai');
const fs = require('fs');
const { printProfitData } = require('./app.js');

describe('test for a JSON file', () => {
  //Part 3: Test confirms the output of a file called data2.json
    //I was trying to figure out if there was a way of counting console.log calls
    //from within the test and without returning a counter from printProfitData
    //but I wasn't able to find anything indicating that there's a way of doing that
    //and it didn't seem like a legitimate test if the counter wasn't within the test itself.
    let createJSON;
    let fileLength;

    before(async () => {
      createJSON = await printProfitData();
      fileLength = await JSON.parse(fs.readFileSync('./data2.json', 'utf8')).length;
    })

    describe('JSON exists and has the correct number of entries', () => {
      it('it should have 25131 profit entries in the file', (done) => {
        expect(fileLength).to.equal(25131);
        done();
      });
    })


})