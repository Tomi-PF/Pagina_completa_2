import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../assets/Logo.png"

export default function Header(){

    const navegar = useNavigate()
    const estaAutenticado = localStorage.getItem("usr") === "true"
    
    const cerrarSesion = () => {
        localStorage.removeItem("usr")
        navegar("/")
    }

    return(
        <Navbar collapseOnSelect expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img style={{width: 50}} src={Logo} alt="Logo de Aterrizar Ya"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="text-white d-flex">
                            <i class="icono-header bi bi-house-door-fill"/>
                            <span className="aligns-items-center mt-2">Inicio</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/alojamientos" className="text-white d-flex">
                            <i class="icono-header bi bi-building-fill"/>
                            <span className="aligns-items-center mt-2">Alojamientos</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/reservas" className="text-white d-flex">
                            <i class="icono-header bi bi-ui-checks"/>
                            <span className="aligns-items-center mt-2">Reservas</span>
                        </Nav.Link>
                    </Nav>
                    
                    <Nav>
                        {!estaAutenticado ? (
                            <>
                                <Nav.Link as={Link} to="/iniciar_sesion" className="text-white d-flex">
                                    <i class="icono-header bi bi-person-fill-up"/>
                                    <span className="aligns-items-center mt-2">Iniciar Sesión</span>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/registrarse" className="text-white d-flex">
                                    <i class="icono-header bi bi-person-fill-add"/>
                                    <span className="aligns-items-center mt-2">Registrarse</span>
                                </Nav.Link>
                            </>
                        ) : (
                            <Nav.Link onClick={cerrarSesion} className="text-white d-flex">
                                <i class="icono-header bi bi-person-fill-down"/>
                                <span className="aligns-items-center mt-2">Cerrar sesión</span>
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
