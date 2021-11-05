const fs = require("fs");
const chalk = require("chalk");

const addNewLog =  (word, meaning) => {
  const logs = loadLogs();
  const exitingLog = logs.filter( (log)  => {
    return log.word === word;
  });
  if (exitingLog.length === 0) {
    logs.push({
      word,
      meaning
    });
    saveNewLog(logs);
    console.log(chalk.bold.greenBright("new word added to the dictionary!"));
  } else {
    console.log(chalk.bold.redBright("word already present in the dictionary!"));
  }
};

const removeLog =  (word) => {
  const logs = loadLogs();
  const modifiedLogs = logs.filter(function (log) {
    return log.word !== word;
  });
  if (logs.length === modifiedLogs.length) {
    console.log(chalk.bold.blueBright("no words were found in dictionary!"));
  } else {
    saveNewLog(modifiedLogs);
    console.log(chalk.bold.blueBright("word removed from dictionary!"));
  }
};

const saveNewLog =  (logs) => {
  const dataJSON = JSON.stringify(logs);
  fs.writeFileSync("logs.json", dataJSON);
};

const loadLogs =  () => {
  try {
    const dataBuffer = fs.readFileSync("logs.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const listLogs =  () => {
    const logs = loadLogs();
    logs.forEach((log) => {
        console.log(chalk.bold.yellow(log.word, log.meaning));
    })
};

const retrieveLog =  (word) => {
  const logs = loadLogs();
  const wordVal = logs.filter(function (log) {
    return log.word === word;
  })[0];
  console.log(chalk.bold.bgCyanBright(`${wordVal.word} has ${wordVal.meaning}`));
};

module.exports = {
  addNewLog,
  removeLog,
  listLogs,
  retrieveLog
};
