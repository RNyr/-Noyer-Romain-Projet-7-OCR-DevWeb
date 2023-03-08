import React from 'react';
import LogoFooter from "../assets/logofooter.png"
import "../styles/components/footer.css"

const Footer = () => {
    return (
        <footer>
            <div id="footer">
           <img src={LogoFooter} alt="logo" />
           <p>© 2023 Kasa. All rights reserved</p>
           </div>
        </footer>
    );
};

export default Footer;