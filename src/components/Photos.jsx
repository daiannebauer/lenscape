import React, { useState } from 'react';
import Maui from "../assets/images/pic1.jpg";
import Venice from "../assets/images/pic2.jpg";
import Haleakala from "../assets/images/pic3.jpg";
import JoshuaTree2 from "../assets/images/pic4.jpg";
import JoshuaTree from "../assets/images/pic5.jpg";
import JoshuaTree3 from "../assets/images/pic6.jpg";

const Photos = () => {
    const [showPhotos, setShowPhotos] = useState(true);

    const toggleTab = (photosVisible) => {
        setShowPhotos(photosVisible);
    }

    return (
        <div className="photos__container">
            <nav className="">
                <ul>
                    <li>
                        <a
                            className={showPhotos ? "photos__active" : "photos__non-active"}
                            onClick={() => toggleTab(true)}
                            href="#photos"
                        >
                            Photos
                        </a>
                    </li>
                    <li>
                        <a
                            className={showPhotos ? "about__non-active" : "about__active"}
                            onClick={() => toggleTab(false)}
                            href="#about"
                        >
                            About
                        </a>
                    </li>
                </ul>
                <button className="button__follow">Follow Me</button>
            </nav>

            {showPhotos ? (
                <div id="photos" className="photos">
                    <img src={Maui} alt="Ironwoods Beach - Maui" />
                    <img src={Venice} alt="Venice Beach - CA" />
                    <img src={Haleakala} alt="Mt. Haleakala - Maui" />
                    <img src={JoshuaTree2} alt="Joshua Tree NP - CA" />
                    <img src={JoshuaTree} alt="Joshua Tree NP 2 - CA" />
                    <img src={JoshuaTree3} alt="Joshua Tree NP 3 - CA" />
                </div>
            ) : (
                <div id="about" className="about__text">
                    <p className="about__paragraph">
                        Welcome to Lenscape – Where Nature and Photography Converge!
                        At Lenscape, we believe in the transformative power of nature and the artistry of photography.
                        Our platform is a celebration of the world's breathtaking landscapes and the photographers who capture their
                        awe-inspiring beauty. Whether you're a seasoned professional or a passionate enthusiast, Lenscape invites you
                        to embark on an unforgettable visual journey.
                    </p>

                    <p className="about__paragraph">
                        But Lenscape is more than just a photo-sharing platform. It's a space for connection, creativity, and learning.
                        Engage in conversations with fellow photographers, exchange valuable insights, and gain inspiration from a community
                        that cherishes the profound beauty of our planet. Together, let's revel in the magic of Lenscape and witness the unparalleled
                        artistry of landscapes through the eyes of our community.
                    </p>
                </div>
            )}
        </div>
    );
}

export default Photos;
