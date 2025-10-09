import sql from 'mssql'
import dotenv from 'dotenv'
import assert from 'assert'

dotenv.config()

const {SQL_PORT,SQL_SERVER,SQL_DATABASE,SQL_USER,SQL_PASS}=process.env
assert(SQL_DATABASE,"Provide Database Name")
assert(SQL_PASS,"Provide User Password")
assert(SQL_SERVER,"Provide Server Name")
assert(SQL_USER,"Provide User Name")
assert(SQL_PORT,"Provide Server Port")



export const config = {
    port: SQL_PORT,
    sqlConfig: {
        user: SQL_USER,
        password: SQL_PASS,
        database: SQL_DATABASE,
        server: SQL_SERVER,
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
            encrypt: true,
            trustServerCertificate: true
        }
    }
};

export const getPool=async ()=>{
    try {
    const pool=await sql.connect(config.sqlConfig)
    return pool;
    } catch (error) {
     console.log("Error connecting to the sql server",error)
     throw error
    }
}