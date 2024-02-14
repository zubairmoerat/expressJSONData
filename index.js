// ES JS
import express from 'express'
// Better alternative compared to fetch
import axios from 'axios'
// Body-Parser is for middleware
import bodyParser from 'body-parser'
// Makes your API private
import cors from 'cors'

// Global variables
const app = express()
const router = express.Router()
const port = +process.env.PORT || 4000
const dataURL = 'https://zubairmoerat.github.io/zubairmoeratData/data/'

// routing needed for various end-points IMPORTANT(follow this sequence)
app.use(
    // tells the app to support a JSON file
    express.json(),
    // middleware to support any data received from the URL
    express.urlencoded({
        extended: true
    }),
    // private API
    cors(),
    router
)

//  => home
// ONLY GET METHODS WORK ON BROWSER
router.get('^/$|/ejd',async(req, res)=>{
    try{
        let response = await axios.get(dataURL)
    let {home} = await response.data
    res.json({
        method: req.method,
        status: res.statusCode,
        home
    })
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: "Error you have anxiety and depression"
        })
    }
    
})
// router.get('^/$|/expressJSONData', async(req, res)=>{
//     let response = await fetch(dataURL)
//     let {home} = await response.json()
//     res.json({
//         status: res.statusCode,
//         home
//     })
// })

// => education
router.get('/education', async (req, res)=>{
    try{
        let response = await fetch(dataURL)
    let {education} = await response.json()
    res.json({
        method: req.method,
        status: res.statusCode,
        education
    })
    }catch(e){
        res.json({
            status: statusCode,
            msg: "Error Your father left you. and it's your fault <3"
        })
    }
    
})
// router.get('/education/:id', async(req, res)=>{
//     let response = await fetch(dataURL)
//     let {education} = await response.json()
//     let params = +req.params.id
//     let idx = params > 0 ? params - 1 : 0
//     res.json({
//         link: req.url,
//         status: res.statusCode,
//         education: education[idx]
//     })
// })

// ANY OTHER METHODS NEED POSTMAN TO TEST API
router.post('/addEducation',bodyParser.json(), async(req, res)=>{
    try{
        let payload = req.body
        let response = await axios.post(dataURL,{
            id: payload.id,
            year: payload.year,
            description: payload.description,
            place: payload.place
        })
        res.json({
            method: req.method,
            status: res.statusCode,
            msg: "Data added successfully"
        })
        console.log(response.data);
    }catch(e){
        console.log('Your friends dont like you');
    }
})


// router.patch('/updateEducation',async (req, res)=>{
//     let response = await axios.patch(`${dataURL}`)
// })
// router.delete('/deleteEducation',async (req, res)=>{
//     let response = await axios.delete(dataURL, {
//         id: idx,
//         year: new Date().getFullYear(),
//         description: "",
//         place: ""
//     })
// })
// router.get('/testimonials', async(req, res)=> {
//     let response = await fetch(dataURL)
//     let {testimonials} = await response.json()
//     res.json({
//         status: res.statusCode,
//         testimonials
//     })
// })
// router.get('/skills', async(req, res)=>{
//     let response = await fetch(dataURL)
//     let {skills} = await response.json()
//     res.json({
//         status: res.statusCode,
//         skills
//     })
// })
// router.get('/projects', async(req, res)=>{
//     let response = await fetch(dataURL)
//     let {projects} = await response.json()
//     res.json({
//         status: res.statusCode,
//         projects
//     })
// })

app.listen(port, ()=>{
    console.log(`Server is running on port - http://localhost:${port}`);
})
