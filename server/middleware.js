//json-server --watch answers.json --middlewares ./middleware.js --port 3001
const questions = require('./questions.json');
var config = require('./config.js');

module.exports = (req, res, next) => {
    //res.header('X-Hello', 'World')
    //console.log(req.body.ans)
    switch (req.body.ans) {
        case 1: req.body.ans = 'A'; break;
        case 2: req.body.ans = 'B'; break;
        case 3: req.body.ans = 'C'; break;
        case 4: req.body.ans = 'D'; break;
    }
    //console.log(req.body.ans)

    req.body.status = 0;
    var ans = questions[req.body.qid].answer
    if (req.body.ans == ans) {
        req.body.status = 1
    }
    
    console.log("qid="+req.body.qid+", ans="+req.body.ans+", correct="+ans+", status="+req.body.status);


    next()
  }