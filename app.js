const yargs = require("yargs");
const logs = require("./logs.js");

yargs.command({
  command: "addWord",
  description: "adding a new word",
  builder: {
    word: {
      description: "word name",
      demandOption: true,
      type: "string",
    },
    meaning: {
      description: "word meaning",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => {
    logs.addNewLog(yargs.argv.word, yargs.argv.meaning);
  },
});

yargs.command({
  command: "removeWord",
  description: "removing a word",
  builder: {
    word: {
      description: "word name",
      demandOption: true,
      type: "string",
    },
    meaning: {
      description: "word meaning",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => {
    logs.removeLog(yargs.argv.word, yargs.argv.meaning);
  },
});

yargs.command({
    command: "listAllWords",
    description: "listing all words",
    builder: {
    },
    handler: () => {
      logs.listLogs();
    },
  });


  yargs.command({
    command: "getWordMeaning",
    description: "get the word meaning",
    builder: {
      word: {
        description: "word name",
        demandOption: true,
        type: "string",
      },
    },
    handler: () => {
      logs.retrieveLog(yargs.argv.word);
    },
  });
  

yargs.parse();
