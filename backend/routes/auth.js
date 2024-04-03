const express = require('express')

const router = express.Router()

const productsData = require('../models/data')

router.post('/test',productsData)


module.export = router