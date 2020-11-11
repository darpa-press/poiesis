const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const Entities = require("html-entities").AllHtmlEntities;

const maxRandom = 6000;
const entities = new Entities();

function streamToPromise(stream) {
    return new Promise(function (resolve, reject) {
        stream.on("end", resolve(stream.dests[0].path));
        stream.on("error", reject);
    });
}

const getRandomLine = async (filename) => {
    const randomToGet = Math.floor(Math.random() * maxRandom);
    let i = 0;
    let line = null;
    const lines = fs.createReadStream(filename).pipe(csv());
    return new Promise(function (resolve, reject) {
        lines
            .on("data", (data) => {
                if (i === randomToGet) {
                    line = data;
                    resolve(line);
                    //lines.destroy();
                }
                i++;
            })
            .on("end", function () {
                //console.log("end", randomToGet, line);
                //resolve(line);
                //some final operation
            })
            .on("close", function () {
                //console.log("close", randomToGet, line);
                //resolve(line);
                //some final operation
            });
    });
};

async function prefillFunction(req, res, next) {
    let poem = await getRandomLine(`${__dirname}/poetry.csv`);

    poem.Content = entities.decode(poem.Content);
    res.json(poem);
}

exports.prefillFunction = prefillFunction;
