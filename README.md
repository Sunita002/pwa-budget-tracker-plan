# PWA-Budget-Tracker-Plan
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description:  
A Progressive Web Application (PWA) demonstrating the use of the Chrome Browser and IndexedDB API to store transactions entered by the user when the browser is offline and "synced" when the browser comes back online. 

### User Story

```text
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 
```

### Acceptance Criteria

```text
GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
```

    
## Table of Contents:
* [Installation](#installation-instructions)
* [Usage](#usage)
* [Routes](/routes.md)
* [Tests](#tests)
* [Questions](#questions)


## Installation Instructions
This application is designed to run locally using [Robo 3t](https://www.robomongo.org) or another MongoDB management tool. 


Run `npm i` to install [npm](https://www.npmjs.com/) dependencies. 

## Usage
![Demonstration](https://user-images.githubusercontent.com/87583026/149687511-00fd3518-3007-4549-98ec-23374c50f92f.gif)

## Tests
* Transactions can be entered while the browser is online or offline. 
* Both the table and the graph are updated accordingly when the user clicks "Add Funds" or "Subtract Funds"
* When the user clicks "Clear Table", all data in the collection is deleted and the application accepts new data. 

## Questions
You can reach the author, Sunita Persad,  via [github](http://github.com/Sunita002)

