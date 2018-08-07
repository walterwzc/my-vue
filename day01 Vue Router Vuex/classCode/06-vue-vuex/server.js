const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const app = express()

router.route('/count')
    .get((req, res) => {
        res.set('Access-Control-Allow-Origin', '*')
        setTimeout(function() {
            res.send([0, 4, 5])
        }, 1000)
    })
    
app.use('/api', router)
// app.use(bodyParser.json())


app.listen(8090, () => {
    console.log('http://localhost: 8090');
})