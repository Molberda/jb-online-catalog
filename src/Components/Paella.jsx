import React from 'react';
import paellaImg from '../Assets/paella.jpg'

const Paella = () => {
    return (
        <section id="paella">
            <div className="container paella__container">
                <div className="row paella__row column">
                    <figure className="paella__img--wrapper img__wrapper">
                        <img src={paellaImg} alt="" className="paella__img" />
                    </figure>
                    <h2 className="title paella__title">PAELLA</h2>
                    <h2 className="subtitle paella__subtitle"></h2>
                </div>
            </div>
        </section>
    );
}

export default Paella;
