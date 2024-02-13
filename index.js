import express from 'express'
import axios from 'axios'

const app = express()
const router = express.Router()
const port = +process.env.PORT || 4000
const dataURL = 'https://zubairmoerat.github.io/zubairmoeratData/data/'
app.use(
    router
)
router.get('^/$|/ejd',async(req, res)=>{
    let response = await axios.get(dataURL)
    let {home} = await response.data
    res.json({
        status: res.statusCode,
        home
    })
})
// / => home
// router.get('^/$|/expressJSONData', async(req, res)=>{
//     let response = await fetch(dataURL)
//     let {home} = await response.json()
//     res.json({
//         status: res.statusCode,
//         home
//     })
// })
// = education
router.get('/education', async (req, res)=>{
    let response = await fetch(dataURL)
    let {education} = await response.json()
    res.json({
        status: res.statusCode,
        education
    })
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
router.post('/addEducation', async(req, res)=>{
    try{
        let response = await axios.post(dataURL,{
            id: 5,
            year: 2012,
            description: "testing",
            place: "Cape Town"
        })
        res.json({
            method: req.method,
            status: res.statusCode,
            info: response.data
        })
        console.log(response.data);
    }catch(e){
        console.log('internal server error');
    }
})


// router.patch('/updateEducation',async (req, res)=>{
//     let response = await axios.patch(dataURL.education, {
//         id: idx,
//         year: int,
//         description: "",
//         place: ""
//     })
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
