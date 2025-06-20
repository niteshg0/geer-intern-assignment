import mongoose, {Schema} from "mongoose";

const userSchema= new Schema({
    FullName: {
        type: String,
        required: [true, "FullName is required"],
        trim:true,
        unique:true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique:true,
        match: [/.+\@.+\..+/, "Please use your Email"]
    },
    password: {
        type: String,
        required:[true, "Password is required"],
    }
})

const userModel = mongoose.model("User", userSchema)

export default userModel;



