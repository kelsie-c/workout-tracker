const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
            type: {
                type: String,
                trim: true,
            },
            name: {
                type: String,
                trim: true,
            },
            weight: {
                type: Number,
                default: 0,
            },
            sets: {
                type: Number,
                default: 0,
            },
            reps: {
                type: Number,
                default: 0,
            },
            duration: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ],
    totDuration: {
        type: Number,
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;