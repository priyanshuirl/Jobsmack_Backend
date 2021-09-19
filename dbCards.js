import mongoose from "mongoose"

const cardSchema = mongoose.Schema({
    jobname:String,
    company:String,
    require:String,
    salary:String,
})

export default mongoose.model("cards", cardSchema)