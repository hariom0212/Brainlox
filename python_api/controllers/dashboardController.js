const Set = require("../models/set");
const Question = require("../models/question");

module.exports = {
    // to get list of all sets in database
    allSets: ((_req, res) => {
        Set.find({}, (err, allSets) => {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            } else {
                res.status(201).send(allSets);
            }
        });
    }),

    // adding new set
    addSet: (async (req, res) => {
        const { title, type, difficulty, status } = req.body;

        const newSet = new Set({
            title: title,
            type: type,
            difficulty: difficulty,
            status: status
        });

        await Set.create(newSet, (err, result) => {
            if (err)
                res.status(400).send("Error ocurred: ", err);
            else
                res.status(201).send(result._id);
        });
    }),

    // to get list of all questions
    questionGet: ((req, res) => {

        const { setId } = req.query;

        if (setId === "all")
            Question.find({}, (err, questions) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    res.status(201).send(questions);
                }
            });
        else
            Set.findById(setId)
                .populate("allQuestions")
                .then(qset => {
                    res.status(201).send(qset.allQuestions);
                })
                .catch(e => { console.log(e); });
    }),

    // adding new question
    questionPost: (async (req, res) => {
        const { title, description, input, output, sol } = req.body;

        const newQuestion = new Question({
            title: title,
            description: description,
            input: input,
            output: output,
            sol: sol
        });

        await Question.create(newQuestion, (err, result) => {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            } else
                res.status(201).send(result);
        })
    }),

    // to add a question to a set
    addQuestion: (async (req, res) => {
        const { titleId, questionId } = req.body;
        
        const qId = await Question.findById(questionId);
        const oldSet = await Set.findById(titleId);

        if (!oldSet) {
            res.status(400).send("Set with given name does not exist.");
        } else {
            await Set.findByIdAndUpdate(oldSet._id,
                { $push: { allQuestions: qId._id } },
                { new: true, useFindAndModify: false }
            );
            res.status(200).send("New question added to Set.");
        }
    }),

    //to add multiple questions
    addMultiQuestion: (async (req, res) => {
        const question_array = await req.body;
        const options = { ordered: true };

        await Question.insertMany(question_array, options, (err, result) => {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            } else
                res.status(200).send(`${result.length} questions were inserted`);
        })
    })
}