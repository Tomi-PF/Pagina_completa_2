import { useNavigate } from "react-router-dom"
import Boton from "../components/Boton"
import CardHotel from "../components/CardHotel"

export default function(){

    const navegar = useNavigate()
    const hoteles =[
        {
            id: 1,
            nombre: "San Remo",
            cant_estrellas: 3,
            cant_habitaciones: 25,
            precio_noche: 15000,
            calle: "Avellaneda",
            num_calle: 170,
            telefono: 1563687745,
            foto_hotel: "https://images.trvl-media.com/lodging/9000000/8770000/8769000/8768920/1eddc2b5.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
        },
        {
            id: 2,
            nombre: "Atlantic",
            cant_estrellas: 2,
            cant_habitaciones: 60,
            precio_noche: 26000,
            calle: "Montevideo",
            num_calle: 41,
            telefono: 1563689745,
            foto_hotel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWJmNYxEmPN4uAaras4uxT17efv4AwptvQA&s"
        }
    ]
    
    const volver = () => {
        navegar("/alojamientos")
    }

    return(
        <span className="contenido">
            <h2>Hoteles</h2>
            <p>Aquí puedes encontrar los mejores hoteles de Argentina</p>
            <Boton 
                variante={"dark"}
                contenido={"Volver al inicio"}
                funcion={volver}
            />
            <div className="hoteles-container">
                {
                    hoteles.map((hotel) => {
                        return <CardHotel hotel={hotel}/>
                    })
                }
            </div>
        </span>
    )
}
