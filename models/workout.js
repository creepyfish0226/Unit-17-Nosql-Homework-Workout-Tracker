const mongoose = require("mongoose")
const Schema = mongoose.Schema


const workoutSchema = new Schema({
            day: {
                type: Date,
                default: () => new Date()
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

                },

                sets: {
                    type: Number,

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
            }]
        }, 
        {
            toJSON:{
                virtuals: true
            }
        })
        workoutSchema.virtual("totalDuration").get(function(){
            return this.exercises.reduce((total,exercise)=>{
                return total + exercise.duration;
            }, 0)
        })
const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout