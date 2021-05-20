const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require("path");

// -----SERVER SIDE ROUTES-----
// create a new workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// update a workout
router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totDuration: req.body.duration },
            $push: { exercise: req.body }
        },
        { new: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// get all workouts
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// -----CLIENT SIDE ROUTES-----
// default
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exercises
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// stats
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;