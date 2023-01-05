import React from 'react';
import Antipasto from '../Components/Antipasto';
import Ceviche from '../Components/Ceviche';
import Contactanos from '../Components/Contactanos';
import Landing from '../Components/Landing';
import Paella from '../Components/Paella';
import Postres from '../Components/Postres';

const Home = () => {
    return (
        <div>
            <Landing/>
            <Ceviche/>
            <Antipasto/>
            <Paella/>
            <Postres/>
            <Contactanos/>
        </div>
    );
}

export default Home;
