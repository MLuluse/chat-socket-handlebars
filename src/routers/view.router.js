import {Router} from 'express'

const router = Router()

router.get('/', (req, res)=>{
    res.render('index',{}) // renderiza la vista index (index.handlebars)
})

export default router