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
import Hoteles from "./pages/Hoteles"

export default function App() {

    return (
        <Router>
            <Header/>
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/alojamientos" element={<Alojamientos/>}/>
                    <Route path="/reservas" element={<Reservas/>}/>
                    <Route path="/iniciar_sesion" element={<Iniciar_sesion/>}/>
                    <Route path="/registrarse" element={<Registrarse/>}/>
                    <Route path="/hoteles" element={<Hoteles/>}/>
                </Routes>
            </Container>
            <Footer/>
        </Router>
    )
}
