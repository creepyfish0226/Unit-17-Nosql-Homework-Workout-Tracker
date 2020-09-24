const {
    Schema
} = require("mongoose")

const workoutSchema = new Schema({
            day: {
                type: Date,
                default: () + > new Date()
            },

            exercises: [{
                        name: {
                            type: String,
                            trim: true,
                            required: "Name is required"
                        },


                        type: {
                            type: String,
                            trim: true,
                            required: "type of workout is required"

                        },

                        weight: {
                            tupe: Number,
                            required:
                        },

                        sets: {
                            type: Number,
                            required: "Number of sets required"
                        },

                        reps: {
                            type: Number,

                        },

                        duration: {
                            type: Number,
                            required: "Duration of workout required"
                        },

                        distance: {
                            type: Number,
                        }