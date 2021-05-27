const db = require("../models");
const router = require("express").Router();

// Server side routes
router.get("/api/workouts", (req, res) => {
    // find all workouts
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    // create new workout
    db.Workout.create(body)
    .then((dbWorkout => {
        res.json(dbWorkout);
    })).catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    // update workout (before user selects complete)
    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration }, $push: { exercises: req.body }
        },
        { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    // find all workouts
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;