import AboutHero from "../components/about/AboutHero.jsx";
import AboutIntro from "../components/about/AboutIntro.jsx";
import TherapistSection from "../components/about/TherapistSection.jsx";
import LocationGallery from "../components/about/LocationGallery.jsx";
import ContactCTA from "../components/shared/ContactCTA.jsx";
import "../styles/about.css";

function About() {
    return (
        <main className="about-page">
            <AboutHero />
            <AboutIntro />
            <TherapistSection />
            <LocationGallery />
            <ContactCTA />
        </main>
    );
}

export default About;