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