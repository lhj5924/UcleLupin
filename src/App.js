import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Main from "./component/Main";
import TeamPage from "./page/TeamPage";
import Footer from "./component/footer";

function App() {
    return (
        <BrowserRouter basename="/">
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/teampage" element={<TeamPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
