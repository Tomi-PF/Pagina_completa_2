import { useState, useEffect } from "react"
import Boton from "../components/Boton"
import CardCiudad from "../components/CardCiudad"

export default function Alojamientos(){
    
    // const [ciudades, setCiudades] = useState([])
    const ciudades = [
        {
            id: 1,
            nombre: "Mar de Ajó",
            provincia: "Buenos Aires",
            año_fundacion: "2003",
            tamaño: "455",
            foto_ciudad: "https://www.welcomeargentina.com/paseos/recorrida-mar-de-ajo/mar-de-ajo-city-tour-1.jpg"
        },
        {
            id: 2,
            nombre: "Pinamar",
            provincia: "Buenos Aires",
            año_fundacion: "1993",
            tamaño: "10",
            foto_ciudad: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrCoolRL7K8cf3Ba4n-H4dgqEUUa5-qMDvg&s"
        },
        {
            id: 3,
            nombre: "Bariloche",
            provincia: "Rio Negro",
            año_fundacion: "1863",
            tamaño: "100",
            foto_ciudad: "https://travelfine.es/wp-content/uploads/2024/03/100.1-bariloche-donde-es.jpg"
        },
        {
            id: 4,
            nombre: "Salta",
            provincia: "Salta",
            año_fundacion: "1983",
            tamaño: "1008",
            foto_ciudad: "https://www.amerian.com/wp-content/uploads/2021/11/66df5e02993e379e40521955_66df5d77b170f58832f5ac00_Quebrada20las20near20Cafayate.jpeg"
        },
        {
            id: 5,
            nombre: "Rosario",
            provincia: "Santa Fé",
            año_fundacion: "1783",
            tamaño: "18",
            foto_ciudad: "https://images.trvl-media.com/place/3026/594454f8-3526-4642-9a20-13c59381f9fd.jpg"
        }
    ]
    const estaAutenticado = localStorage.getItem("usr") == "true"

    // const cargarUsuarios = () => {
    //     fetch("https://randomuser.me/api/?results")
    //     .then((res) => res.json())
    //     .then((usrs) => {
    //         setUsuarios(usrs)
    //     })
    // }

    // useEffect(() => {
    //     cargarUsuarios()
    // }, [])

    return(
        <span className="contenido">
            <h2>Alojamientos</h2>
            <p>Aquí puedes encontrar los mejores alojamientos de Argentina</p>
            {estaAutenticado && (
                <Boton variante={"dark"} contenido={"Crear ciudades"}/>
            )}
            <div className="ciudades-container">
                {
                    ciudades.map((ciudad) => {
                        return <CardCiudad ciudad={ciudad} key={ciudad.id}/>
                    })
                }
            </div>
        </span>
    )
}
