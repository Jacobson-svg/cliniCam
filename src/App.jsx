import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"
import NotreEquipe from "./pages/NotreEquipe.jsx"
import Services from "./pages/Services.jsx"
import HorairesContacts from "./pages/HorairesContacts.jsx"

export default function App(){

    return(
        <>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/notre equipe" element={<NotreEquipe />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/horaires et contacts" element={<HorairesContacts />}></Route>
            </Routes>
        </>
    )
}