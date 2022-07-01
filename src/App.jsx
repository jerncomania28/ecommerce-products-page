import { Routes, Route } from "react-router";


//components 
import Navigation from "./Routes/Navigation";
import Home from "./Routes/pages/Home";
import Collection from "./Routes/pages/collections ";
import PageNotFound from "./Routes/pages/NotFoundPage";
import SignIn from "./Routes/Authentication/SignIn";
import SignUp from "./Routes/Authentication/SignUp";

//styles 
import "./styles/app.styles.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="auth/signIn" element={<SignIn />} />
          <Route path="auth/signUp" element={<SignUp />} />
          <Route path="collections" element={<Collection />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;