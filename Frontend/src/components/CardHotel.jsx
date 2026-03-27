import { Card, ListGroup } from "react-bootstrap"
import Boton from "./Boton"

export default function CardHotel({hotel}){

    const estaAutenticado = localStorage.getItem("usr") == "true"

    return(
        <div>
            <Card className="card">
                <Card.Img 
                    variant="top"
                    src={hotel.foto_hotel}
                    className="card-imagen"
                />
                <Card.Body>
                    <Card.Title className="card-title"><b>{hotel.nombre}</b></Card.Title>
                    <Card.Text className="card-text">{hotel.calle} {hotel.num_calle}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Precio: <b>${hotel.precio_noche}</b></ListGroup.Item>
                </ListGroup>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cantidad de estrellas: <b>{hotel.cant_estrellas}</b></ListGroup.Item>
                </ListGroup>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cantidad de habitaciones: <b>{hotel.cant_habitaciones}</b></ListGroup.Item>
                </ListGroup>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Teléfono: <b>{hotel.telefono}</b></ListGroup.Item>
                </ListGroup>
                {estaAutenticado && (
                    <ListGroup className="list-group-flush">
                        <Boton
                            variante={"danger"}
                            contenido={"Eliminar hotel"}
                        />
                    </ListGroup>
                )}
            </Card>
        </div>
    )
}