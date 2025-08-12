import { servidor } from "./config.js"
// GET POST PUT DELETE
// req  res
// Ruta , funcion ()=>{ }
servidor.get("/",(req,res)=>{
    res.render("index.hbs")
})