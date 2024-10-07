const exp = require('express')
const dotenv = require('dotenv')

const app = exp()
dotenv.config()

app.use(exp.json())
app.use('auth',require('./routes/authRouter'))
app.use('user',require('./routes/userRouter'))
app.use('green_eye',require('./routes/green_eye'))

const port = process.env.PORT 
app.listen(port ,() => console.log(`server run on port ${port}`))

