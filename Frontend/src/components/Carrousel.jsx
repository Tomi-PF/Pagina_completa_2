import { useState, useEffect } from "react"

export default function Carrousel({imagenes}){

    const cantidadImagenes = imagenes.length
    const [indiceActual, setIndiceActual] = useState(0)

    const cambiarImagen = (direccion) => {
        
        let indiceNuevo = indiceActual + direccion

        if(indiceNuevo < 0){
            indiceNuevo = cantidadImagenes - 1
        }else if(indiceNuevo >= cantidadImagenes){
            indiceNuevo = 0
        }

        setIndiceActual(indiceNuevo)
    }

    useEffect(() => {

        const intervalo = setInterval(() => {
            cambiarImagen(1)
        }, 3000)

        return () => clearInterval(intervalo)
    }, [indiceActual])

    if(imagenes.length != 0){
        return(
            <div className="carrousel">
                <div className="carrousel-imagenes" style={{transform: `translateX(${-indiceActual * 100}%)`}}>
                    {
                        imagenes.map((img) => (
                            <img key={img.id} src={img.download_url} alt={`Imagen de ${img.author}`}/>
                        ))
                    }
                </div>
                <button className="prev" onClick={() => cambiarImagen(-1)}>&#10094;</button>
                <button className="next" onClick={() => cambiarImagen(1)}>&#10095;</button>
            </div>
        )
    }
}
