import { Routes, Route } from "react-router";


//components 
import Navigation from "./Routes/Navigation/Navigation.routes";
import Home from "./Routes/pages/Home/Home.pages";

//styles 
import "./styles/app.styles.scss";

const App = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<Navigation />} >
                    <Route index element={<Home />} />

                </Route>

            </Routes>

        </>
    )
}


export default App;