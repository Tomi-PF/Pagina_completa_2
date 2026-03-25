import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Importación de los componentes */
import Header from "./components/Header";
import Footer from "./components/Footer"

/* Importación de las secciones */
import Inicio from "./pages/Inicio"
import Alojamientos from "./pages/Alojamientos"
import Reservas from "./pages/Reservas"
import Iniciar_sesion from "./pages/Iniciar_sesion"
import Registrarse from "./pages/Registrarse"

export default function App() {

    return (
        <Router>
            <Header/>
            <Container>
                <Routes>
                    <Route path="/" to={Inicio}/>
                    <Route path="/alojamientos" to={Alojamientos}/>
                    <Route path="/reservas" to={Reservas}/>
                    <Route path="/iniciar_sesion" to={Iniciar_sesion}/>
                    <Route path="/registrarse" to={Registrarse}/>
                </Routes>
            </Container>
            <Footer/>
        </Router>
    )
}
