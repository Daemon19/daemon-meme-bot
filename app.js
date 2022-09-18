const twilio = require('twilio')
const express = require('express')

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const { ACCOUNT_SID, AUTH_TOKEN, PORT = 3000 } = process.env

const client = new twilio(ACCOUNT_SID, AUTH_TOKEN)
const app = express()

app.use(express.urlencoded({ extended: true }))

app.post('/webhook', (req, res) => {
  console.log(req.json)
  res.json({ status: 'success' })
  // client.messages
  //   .create({
  //     body: 'Hello from Node',
  //     to: 'whatsapp:+6281239375617', // Text this number
  //     from: 'whatsapp:+14155238886', // From a valid Twilio number
  //   })
  //   .then((message) => console.log(message.sid))
})

app.listen(PORT, () => console.log(`Listening at port ${PORT}`))