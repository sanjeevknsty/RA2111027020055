const express = require('express')
const app = express()


// app.get('/',(req,res)=>{
//   res.send('home ')
// })

app.use(express.json())


app.use('/app',require('./routes/auth.js'))

app.listen(9000,()=>{
  console.log('connected')
})