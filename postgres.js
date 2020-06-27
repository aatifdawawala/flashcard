const { Pool, Client } = require('pg')
const connectionString = 'postgresssql://postgres:root@localhost:5432/engineerCoreData'

const client = new Client({
  connectionString:connectionString
})

client.connect()

client.query('SELECT * from users', (err,res)=>{
  console.log(err,res)
  client.end()
});

