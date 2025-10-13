import PostFooter from "../Footer/PostFooter"
import { QrCode } from "lucide-react"
function Footer() {
    return ( 
        <div>
            <PostFooter titre="Produit" Icon={QrCode} soustitres={["Produit", "Produit", "Produit", "Produit", "Produit"]} />
        </div>
    )
}

export default Footer