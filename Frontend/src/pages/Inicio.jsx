import { useState, useEffect } from "react"
import Description from "../components/Description"
import Carrousel from "../components/Carrousel"

export default function Inicio(){
    
    const [imagenes, setImagenes] = useState([])
    const API_URL = "https://picsum.photos/v2/list"

    const cargarImagenes = () => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((imgs) => {
            setImagenes(imgs)
        })
    }

    useEffect(() => {
        cargarImagenes()
    }, [])

    return(
        <span>
            <Description/>
            <Carrousel imagenes={imagenes}/>
        </span>
    )
}
