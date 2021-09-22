# highest-profit

## Table of Contents
  1. [Input](#Input)
  2. [Output](#Output)
  3. [Code Details]()
  4. [Testing]()
  5. [Requirements]()
  6. [Usage]()

## Input

There is no input to the ```printProfitData``` function itself, but it does read from the ```data.csv``` file, which is provided with the repo. The ```data.csv``` has rows with headers labeled as follows and in the following order:
  - Year
  - Rank
  - Company
  - Revenue (in millions)
  - Profit (in millions)

## Output

The ```printProfitData``` function doesn't have any return values, but it does have 4 side effects:
   - printing out the total number of rows of data (excluding the header) in ```data.csv```
   - printing out the number of rows containing valid numeric profits
   - printing out the top 20 entries ranked in order of highest profit
   - generating a JSON file (```data2.json```) that contains all of the entries from the csv file that have valid profit numbers, ordered from highest profit to lowest profit

## Code Details

  - the function, ```printProfitData``` is contained within the app.js file
  - it does the following:
    1. Reads the ```data.csv``` file
    2. Prints the number of lines of data within the file (excluding the header)
    3. Iterates over each line from the file and reformats the data into an object
    4. Pushes objects with valid profit data into an array
    5. Prints the number of entries in ```data.csv``` with valid profit data
    6. Writes the valid entries to a JSON file called ```data2.json```, ordered from greatest profit to least profit(loss)
    7. Prints out the top 20 entries with the highest profit

## Testing

  The tests are contained in the ```test.js``` file, and test for the following:
    - a JSON file is created when the printProfitData function is called
    - that the function prints three answers

## Requirements

  Node.js

## Usage

  1. Clone repo from Github
  2. Run ```npm install``` to install dependencies
  3. Run script with ```bash run.sh```
  4. To test, delete ```data2.json``` file (if one exists) and run ```npm run test```



