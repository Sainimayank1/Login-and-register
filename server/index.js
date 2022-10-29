import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()
const app = express();
app.use(express.json())
app.use(express.urlencoded());
app.use(cors())

const port  = 5000 || process.env.PORT;

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

app.get("/", (req, res) => {
    res.send("Home")
})

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    try {
        User.findOne({ email: email }, (err, user) => {
            if (user) {
                if (password === user.password) {
                    res.status(200).send({ message: "Login succesfull", user })
                }
                else {
                    res.send({ message: "Invaild Detail" })
                }
            }
            else {
                res.send({ message: "User don't registered" })
            }
        })

    } catch (error) {
        res.send(error)
    }
})


app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({ email: email }, (err, find) => {
        if (find) {
            res.send({ message: "Already exist" })
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




app.listen(port)
{
    console.log("listen on port " + port);
}


