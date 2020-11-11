const rita = require("rita");
const removeAccents = require("remove-accents");

function analyseFunction(req, res, next) {
    // grab post lines
    const linesText = req.body.lines;

    // crash out if nothing
    // TODO

    // split result into lines
    const lines = linesText.split("\n");

    // analyse each line (map)
    const linesAnalysed = lines.map((line) => {
        line = line
            .replace(/[.,\/#!$%\^&\*;:{}=`~()’"'“”‘’]/g, "")
            .replace(/[\-–—_]/g, " ")
            .replace(/\s\s+/g, " ")
            .replace(/(\w)\'(\w)/g, "$1$2");
        line = removeAccents(line);
        const rs = rita.RiString(line);
        return rs.features();
    });

    const filterArray = ["", ",", "!", ".", "?", "-", "-", "&"];

    // format into word, syllable, stress objects (map again)
    const linesFormatted = linesAnalysed.map((line) => {
        // save copies
        line.stressesUnformatted = line.stresses;
        line.syllablesUnformatted = line.syllables;

        // break first level, remove punctuation
        line.stresses = line.stresses
            .split(/[ ]/)
            .filter((item) => !filterArray.includes(item));
        line.syllables = line.syllables
            .split(/[ ]/)
            .filter((item) => !filterArray.includes(item));

        // break second level
        line.stresses = line.stresses.map((stress) => stress.split(/\//));
        line.syllables = line.syllables.map((syllable) => syllable.split(/\//));
        line.noOfSyllables = line.syllables.reduce(
            (total, item) => item.length + total,
            0
        );

        return {
            stresses: line.stresses,
            syllables: line.syllables,
            noOfSyllables: line.noOfSyllables,
        };
    });
    res.json(linesFormatted);
}

exports.analyseFunction = analyseFunction;
