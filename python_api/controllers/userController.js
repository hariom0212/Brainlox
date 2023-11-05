const Set = require("../models/set");

module.exports = {

    // to get list of problems
    problems: ((_req, res) => {
        Set.find({type: "problem"}, (err, problems) => {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            } else {
                res.status(201).send(problems);
            }
        });
    }),

    // to get list of workshops
    workshops: ((_req, res) => {
        Set.find({type: "workshop"}, (err, workshops) => {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            } else {
                res.status(201).send(workshops);
            }
        });
    }),

    // list of questions for idepage
    idepage: (async (req, res) => {

        const { ideType, title } = req.query;
        
        if (ideType === "problem" || ideType === "workshop")
            await Set.findOne({ title: title, type: ideType })
                .populate("allQuestions")
                .then(foundSet => {
                        res.status(201).json(foundSet.allQuestions);
                })
                .catch(e => { console.log(e); });
        else
            res.status(403).send("No content found...!!");
    })
}