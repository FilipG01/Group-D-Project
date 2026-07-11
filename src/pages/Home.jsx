import "../styles/home.css";
import LocationGallery from "../components/about/LocationGallery.jsx";
import HomeHero from "../components/home/HomeHero.jsx";
import ServicesTree from "../components/home/ServicesTree.jsx";
import LocationSection from "../components/home/LocationSection.jsx";

function Home() {
    return (
        <main className="home-page">
            <HomeHero />
            <ServicesTree />
            <LocationGallery />
            <LocationSection />
        </main>
    );
}

export default Home;