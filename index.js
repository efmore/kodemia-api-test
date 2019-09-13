// import dotenv
require('dotenv').config()

// local connection to database
const dbConnect = require('./src/lib/db')

// import files & server
const { server, port } = require('./src/server')

const listenServer = function () {
  return new Promise((resolve, reject) => {
    server.listen(port, () => {
      resolve()
      console.log(`Express listening port ${port}`)
    })
  })
}

// connect to cloud db
async function main () {
  await dbConnect()
  console.log('db connected')

  await listenServer()
  console.log(('server connected'))
}

main()
  .then(koder => {
    console.log('main finished ok')
  })
  .catch(error => {
    console.log('main error in: ', error)
  })
