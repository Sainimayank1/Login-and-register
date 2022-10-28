import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()
const app = express();
app.use(express.json())
app.use(express.urlencoded());
app.use(cors())

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model("User", userSchema);

mongoose.connect(process.env.LINK)
    .then(() => {
        console.log("Connection succesfull")
    })
    .catch((error) => {
        console.log(error);
    });

app.get("/login", (req, res) => {
    console.log("login")
})

app.get("/", (req, res) => {
    res.send("Home")
})

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({email:email}, (err, find) => {
        if (find) {
            res.send({message:"Already exist"})
        }
        else {
            const user = new User({ name, email, password });
            user.save()
                .then(
                    res.status(201).send({ message: "Susccesfull register" })
                )
                .catch((err) => { res.send(err) }
                );
        }
    }
    );
})




app.listen(5000 || process.PORT)
{
    console.log("listen on port " + process.env.PORT);
}


