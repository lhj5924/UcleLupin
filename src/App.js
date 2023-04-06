import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import Main from "./component/Main";
import TeamPage from "./page/TeamPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />} /> 
                        <Route path="/teampage" element={<TeamPage />} /> 
                    </Routes>
                    <Footer />
                </div>
            </>
        </BrowserRouter>
    );
}

export default App;
