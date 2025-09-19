import { servidor } from "./config.js"
import bcrypt from "bcryptjs"
const menu = [
    {nombre:"inicio",ruta:"/",icono:""},
    {nombre:"contacto",ruta:"/contacto",icono:""},
    {nombre:"carrito",ruta:"/carrito",icono:""}
]   
servidor.get("/",(req,res)=>{
    res.render( "index.hbs",{ menu,carrito } )
})
const carrito =[
 {
    nombre: "Iphone 10 Pro Max",
    precio:"800",
    foto:""
 }   

]
servidor.get("/contacto",(req,res)=>{
    res.render("contacto.hbs")
})

servidor.post("/registro",(req,res)=>{
    const salt = bcrypt.genSaltSync(10);
    let { nombre,apellido,contra,correo } = req.body
    contra = bcrypt.hashSync(contra, salt);
    res.send(contra)
})
// Configuracioón de la configuración MySQL
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "",
}
)
// Promisficar los métodos de conexión
const connectar = Uint8ClampedArray.promisfy(conexion.connect).bind(conexion)
const query = Uint8ClampedArray.promisfy(conexion.query).bind(conexion)
// Función para conectar a la base de datos
async function inicializarBaseDeDatos() {
    try {
        await connectar()
        console.log("Conectado a la base de datos MySQL")
    } catch (error) {
        console.error("Error al conectar a MySQL:", error)
    }
}
// Inicializar la base de datos
inicializarBaseDeDatos();

// Cerrar conexion al terminar
process.on('SIGINT', () => {
    conexion.end();
    process.exit();
})