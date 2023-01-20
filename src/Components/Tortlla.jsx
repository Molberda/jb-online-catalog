import React from 'react';

const Tortlla = () => {
    return (
       <section id="tortilla">
        <div className="container tortilla__container">
            <div className="row tortilla__row column">
                <figure className="img__wrapper tortilla__img--wrapper">
                    <img src="" alt="" className="tortilla__img" />
                </figure>
                <h2 className="title tortilla__title">TORTILLA</h2>
                <h2 className="subtitle tortilla__subtitle">Perfecto para cualquier hora del dia</h2>
                <h2 className="text tortilla text">¡Una tortilla de patatas en su punto! <br /> Acompañala con mayonesa o sirvela sola.</h2>
                <h2 className="price text tortilla__price">$30.000</h2>
            </div>
        </div>
       </section>
    );
}

export default Tortlla;
