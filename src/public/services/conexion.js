import pg from 'pg';
const { Client }= pg;

const config={
    user: 'movies_bd_jr7t_user',
    host: 'dpg-cs66utrtq21c73dp1vkg-a.oregon-postgres.render.com',
    database: 'movies_bd_jr7t',
    password: '3n8WIjf8Z6Xm6i970oYN43w4UPAHigkg',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

export async function Conectar(params) {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de Datos")
    }catch(error){
        console.log(error)
    }
}