const moodTableService = require('./moodTable.js');

const analyzeBeyondVerbal = (analysis) => {
    console.log(analysis);
    console.log('===Doing Magic===');
    
    var responseJSON = {
        moodID: 0,
    }
    
    var arousal = analysis.analysisSegments[0].analysis.Arousal;
    var temper = analysis.analysisSegments[0].analysis.Temper;
    var valence = analysis.analysisSegments[0].analysis.Valence;
    
    var parsedResult = moodTableService.analyzeATV(arousal, temper, valence)
    
    console.log(`Arousal: ${arousal.Group} Temper: ${temper.Group} Valence: ${valence.Group}`);
    console.log(`${parsedResult.code}: ${parsedResult.code}`);
    
    responseJSON.moodID = parsedResult.value;
    
    /*
    test = {
        Group: "medium",
        Summary: {
            Mean: "34.77",
            Mode: "medium",
            ModePct: 100
        },
        Value: "34.77"
    }
    
    */
    
    
    return responseJSON;
}

module.exports = {
    analyzeBeyondVerbal: analyzeBeyondVerbal,
}