import { Routes, Route } from "react-router-dom";

import Services from "./pages/Services";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Services />} />

            <Route
                path="/services"
                element={<Services />}
            />
        </Routes>
    );
}

export default App;