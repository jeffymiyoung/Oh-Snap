// Import React
import React from 'react';

// Image Import from Lyza
import coverImage from "../../assets/cover/cover-image.jpg";

// About Section Function
function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who Am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    )
}

// Export for External
export default About;