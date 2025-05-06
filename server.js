import express from 'express'
import mongoose from 'mongoose'
import  {shortUrl, getOriginalUrl} from './controllers/url.js'

const app = express();


app.use(express.urlencoded({extended:true}))
mongoose.connect("mongodb+srv://rajeswarimahapatra40:onXaow2NFUJ125M6@cluster0.oliutah.mongodb.net/",{
    dbName:"nodeJSLearn"
}).then(() => console.log("MongoDb Connected ..!")).catch((err) => console.log(err))


app.get('/',(req,res) => {
    res.render("index.ejs", {shortUrl : null})
})


//shorting url logic
app.post('/short', shortUrl)

//redirect to original url using shor code :- dynamic routing
app.get("/:shortCode", getOriginalUrl)


const port = 3000;
app.listen(port,()=>console.log(`server is running on port ${port}`))

