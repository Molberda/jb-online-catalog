import React from 'react';

const Antipasto = () => {
    return (
        <section id="antipasto">
            <div className="container antipasto__container">
                <div className="row antipasto__row column">
                    <figure className="antipasto__img--wrapper img__wrapper">
                        <img src="https://tomacol.co/wp-content/uploads/2022/01/Antipasto-champinones-120g.png" alt="" className="antipasto__img" />
                    </figure>
                    <h2 className="title antipasto__title">ANTIPASTO</h2>
                    <h2 className="subtitle antipasto__subtitle">Un acompañante exquisito y unico</h2>
                </div>
            </div>
        </section>
    );
}

export default Antipasto;
