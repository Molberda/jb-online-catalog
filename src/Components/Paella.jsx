import React from 'react';
import paellaImg from '../Assets/paella.jpg'

const Paella = () => {
    return (
        <section id="paella">
            <div className="container paella__container">
                <div className="row paella__row">
                    <figure className="paella__img--wrapper img__wrapper">
                        <img src={paellaImg} alt="" className="paella__img" />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Paella;
