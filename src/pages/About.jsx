import {Link} from "react-router-dom";
import therapistImg from "../assets/images/therapistImg.jpg"; //placehold image for now waiting for pic

function About() {
    return (
        <main className="about-page">
           {/*hero sect*/}
            <section className="about-hero">
                <div className="about-hero-content">
                    <p className="section-label">About Us</p>

                    <h1>Support that meets you where you are.</h1>

                    <p>
                        Learn more about our practice, our approach to psychotherapy,
                        and our therapists. We are a team commited to providing
                        a safe, confidential, and supportive space where you can understand
                        yourself better and move at your own pace.
                    </p>
                </div>
            </section>
            {/*intro sect*/} 
            <section className="about-intro">
                <p className="section-label">Meet Our Team</p>
                <h2>Theraputic support for a range of needs.</h2>
                <p>Our team is dedicated to approaching your needs in a grounded emphatic, confidential
                    and respectful way for each individuals experience.
                </p>
            </section>
            {/*therapist section */}
            <section className="therapist-section">
                <div className="therapist-container">

                    <div className="therapist-image">
                        {/*adding place holder image for now */}
                        <img src={therapistImg} alt="Therapist"/>
                    </div>
                

                <div className="therapist-text-card">
                    <h2>Marlena Gnitecki</h2>

                    <p>
                        Marlena has navigated through her own therapeutic journey, experiencing confusion, 
                        vulnerability, and a lack of solutions.

                        These encounters have been invaluable, 
                        ensuring she never forgot the vulnerability and confusion clients face when
                        seeking help.</p>
                        <p>
                         Marlenas services are backed by a combination of educational
                        qualifications— Master's in Science, - BA (Hons) in Counselling
                        and Psychotherapy, and coupled with practical experience since 2021,
                        -an APCP accreditation.</p>
                        <p>
                        With a background of 16 years in special education, Marlena comprehends the diverse
                        challenges individuals face. Culturally sensitive and bilingual in Polish
                        and English, Marlena embraces cross-cultural backgrounds and specialize in working 
                        with LGBTQ individuals.
                    </p>
                </div>

                </div>
            </section>

            {/*reusing from Filips Services page, Contact section */}
            <section className="services-contact-cta">
                <div>
                    <p className="section-label">Not sure where to begin?</p>
                    <h2>We can help you find the right support.</h2>
                    <p>
                        If you are unsure which service best fits your needs, you can get in
                        touch and ask a question before booking.
                    </p>
                </div>

                <Link to="/contact" className="services-cta-button">
                    Contact Us →
                </Link>
            </section>
        </main>
    );
}

export default About