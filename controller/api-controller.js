const router = require("express").router()

const Workout = require("../Models/workout")

router.get("/api/workouts", (req,res) => {
    Workout.find()
    .then(workouts=> res.json(workouts))
    .catch(err => res.json(err))
})


router.post("/api/wprkouts", (req,res)=> {
    Workout.create()
    .then(workouts=> res.json(workout))
    .catch(err => res.json(err))
})

router.put("/api/wprkouts/:id", (req,res)=> {
    Workout.findByIdAndUpdate(req.params.id,{
        $push: {exercises: req.body}
    })
})


module.exports = router;