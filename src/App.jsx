import { Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import ServiceDetail from "./pages/ServiceDetail";

import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";

import ScrollToTop from "./components/shared/ScrollToTop";

import FloatingCallButton from "./components/shared/FloatingCallButton";

function App() {
    return (
        <>
            <ScrollToTop />
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>

            <FloatingCallButton />

            <Footer />
        </>
    )
}

export default App