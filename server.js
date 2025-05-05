import express from 'express'
import mongoose from 'mongoose'

const app = express();

mongoose.connect("mongodb+srv://rajeswarimahapatra40:onXaow2NFUJ125M6@cluster0.oliutah.mongodb.net/",{
    dbName:"nodeJS Learn"
}).then(() => console.log("MongoDb Connected ..!")).catch((err) => console.log(err))


app.get('/',(req,res) => {
    res.render("index.ejs", {shortUrl : null})
})

const port = 3000;
app.listen(port,()=>console.log(`server is running on port ${port}`))

