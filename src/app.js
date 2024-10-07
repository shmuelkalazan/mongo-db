const exp = require('express')
const dotenv = require('dotenv')
const { connectToMongo } = require('./config/dbConfig')
const cookieParser = require('cookie-parser')

const app = exp()
dotenv.config()
connectToMongo()

app.use(exp.json())
app.use(cookieParser())
app.use('/auth',require('./routes/authRouter'))
app.use('/user',require('./routes/userRouter'))
app.use('/green_eye',require('./routes/greenEyeRouter'))

const port = process.env.PORT 
app.listen(port ,() => console.log(`server run on port ${port}`))

