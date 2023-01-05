import React from 'react';
import Pedidos from '../Assets/pedidos.png'

const Contact = () => {
    return (
        <section id="contact">
            <div className="container contact__container">
                <div className="row container__row">
                    <figure className="contact__img--wrapper">
                        <img src={Pedidos} alt="" className="contact__img" />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Contact;
