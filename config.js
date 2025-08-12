import express  from "express"
import hbs from "hbs"
import path from "path"
//--------------------------------------------------------
    import { fileURLToPath } from 'url'
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
//---------------------------------------------------------
let pagina = path.join(__dirname, "views")
const servidor = express()
servidor.use(express.static(pagina))
servidor.set("view engine", "hbs")
hbs.registerPartials(path.join(__dirname, '/views/partials'))
servidor.listen(80)

export {
    servidor
}