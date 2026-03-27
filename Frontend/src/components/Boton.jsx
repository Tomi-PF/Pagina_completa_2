import { Button } from "react-bootstrap"

export default function Boton({variante, contenido, funcion}){
    
    return(
        <Button 
            variant={variante}
            size="lg"
            onClick={funcion}
        >{contenido}</Button>
    )
}
