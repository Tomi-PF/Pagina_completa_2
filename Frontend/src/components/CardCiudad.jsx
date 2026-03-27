import { Card, ListGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Boton from "./Boton"

export default function CardCiudad({ciudad}){

    const navegar = useNavigate()
    const estaAutenticado = localStorage.getItem("usr") == "true"

    const hoteles = () => {
        navegar("/hoteles")
    }

    return(
        <div>
            <Card className="card">
                <Card.Img 
                    variant="top" 
                    src={ciudad.foto_ciudad}
                    className="card-imagen"
                />
                <Card.Body>
                    <Card.Title className="card-title"><b>{ciudad.nombre}</b></Card.Title>
                    <Card.Text className="card-text">{ciudad.provincia}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Año de fundación: <b>{ciudad.año_fundacion}</b></ListGroup.Item>
                </ListGroup>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Tamaño en km²: <b>{ciudad.tamaño}</b></ListGroup.Item>
                </ListGroup>
                {estaAutenticado && (
                    <ListGroup className="list-group-flush">
                        <Boton 
                            variante={"warning"} 
                            contenido={"Modificar datos de la ciudad"} 
                        />
                    </ListGroup>
                )}
                <ListGroup className="list-group-flush d-flex flex-row gap-2">
                    <Boton 
                        variante={"info"}
                        contenido={"Ver hoteles"}
                        funcion={hoteles}
                    />
                    {estaAutenticado && (
                        <Boton 
                            variante={"info"}
                            contenido={"Crear hoteles"}
                        />
                    )}
                </ListGroup>
                {estaAutenticado && (
                    <ListGroup className="list-group-flush">
                        <Boton 
                            variante={"danger"}
                            contenido={"Eliminar ciudad"}
                        />
                    </ListGroup>
                )}
            </Card>
        </div>
    )
}
