import React from 'react';
import ProfilePhoto from "../assets/images/profile.jpg";

const Profile = () => {
  return (
    <div class="profile__container">
        <div class="img__container">
            <img src={ProfilePhoto} alt="Daianne Bauer" />
            <span></span>
        </div>

        <h2>Daianne Bauer</h2>
        <p>Seattle, WA</p>

        <ul class="about__insights">
            <li><span>1,206</span>Followers</li>
            <li><span>1000</span>Following</li>
            <li><span>100,324</span>Attraction</li>
        </ul>

        <div class="content__container">
            <p className="about__description">
                Lenscape - Embrace Nature's Canvas.<br/>
                Discover & Share Breathtaking Landscapes.<br/>
                Unleash Your Inner Landscape Photographer.
            </p>

            <ul>
                <li>
                <a href="https://www.instagram.com/daynbauer" className="social__links">
                    <i class="uil uil-instagram"></i>
                </a>
                </li>
                <li>
                <a href="mailto:daiannebauer@gmail.com" className="social__links">
                <i class="uil uil-envelope"></i>
                </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Profile