import React from 'react';
import fullLogo from '../Assets/logo-full.png'

const Landing = () => {
    return (
        <section id='landing'>
            <div className="container landing__container">
                <div className="row landing__row column">
                    <figure className="landing__img--wrapper">
                        <img src={fullLogo} alt="" className="landing__img" />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Landing;
