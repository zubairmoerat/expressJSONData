import express from 'express'
const app = express()
const router = express.Router()
const port = +process.env.PORT || 4000
const dataURL = 'https://zubairmoerat.github.io/zubairmoeratData/data/'
app.use(
    router
)
// / => home
router.get('^/$|/expressJSONData', (res, req)=>{
    res.json({
        status: res.statusCode,
        msg: "You're Home"
    })
})
// = education
router.get('/education', async (res, req)=>{
    let res = await fetch(dataURL).json()
    let {education} = await res
    res.json({
        status: res.statusCode,
        education
    })
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
