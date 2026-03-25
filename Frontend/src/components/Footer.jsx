import { Container } from "react-bootstrap"

export default function Footer(){
    return(
        <footer className="bg-dark text-white py-3 mt-5 footer">
            <Container>
                <div className="row align-items-center">
                    <div className="col-6">
                        <h5>Aterrizar Ya</h5>
                        <p className="mb-2">Contacto <b>AterrizarYa@gmail.com</b></p>
                        <p className="mb-2">Telefono: <b>0800-777-9999</b></p>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <a 
                            href="https://www.whatsapp.com"
                            target="_blank"
                            className="me-3 text-white"
                        ><i class="icono-whatsapp bi bi-whatsapp"/></a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            className="me-3 text-white"
                        ><i class="icono-instagram bi bi-instagram"/></a>
                        <a
                            href="https://www.x.com"
                            target="_blank"
                            className="me-3 text-white"
                        ><i class="icono-x bi bi-twitter-x"/></a>
                        <a
                            href="https://www.threads.com"
                            target="_blank"
                            className="me-3 text-white"
                        ><i class="icono-threads bi bi-threads"/></a>
                        <a 
                            href="https://facebook.com"
                            target="_blank"
                            className="me-3 text-white"
                        ><i class="icono-facebook bi bi-facebook"/></a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
