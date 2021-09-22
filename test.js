const { expect } = require('chai');
const fs = require('fs');
const { printProfitData } = require('./app.js');

describe('test for a JSON file and correct number of answers', () => {
  //Part 3: Test confirms the output of a file called data2.json and that the function prints three answers
    let createJSON;
    let fileLength;
    let counter = 0;
    //function below based on this Stack Overflow post: https://stackoverflow.com/questions/29775761/way-to-save-console-count-as-an-integer
    function takeOverConsole() {
      var console = global.console
      if (!console) return
      function intercept(method) {
        var original = console[method]
        console[method] = function () {
          var message = Array.prototype.slice.apply(arguments).join(' ')
          // do sneaky stuff
          if (original.call) {
            // Do this for normal browsers
            original.call(console, message)
          } else {
            // Do this for IE
            original(message)
          }
          counter++;
        }
      }
      var methods = ['log', 'warn', 'error', 'count']
      for (var i = 0; i < methods.length; i++)
        intercept(methods[i])
    }

    before(async () => {
      takeOverConsole();
      createJSON = await printProfitData();
      fileLength = await JSON.parse(fs.readFileSync('./data2.json', 'utf8')).length;
    })

    describe('JSON exists and has the correct number of entries', () => {
      it('should have 25131 profit entries in the file', (done) => {
        expect(fileLength).to.equal(25131);
        done();
      });

      it('should print three answers', (done) => {
        expect(counter).to.equal(3);
        done();
      })
    })


})