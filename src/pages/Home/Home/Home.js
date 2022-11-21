import React from 'react';
import ShortSubjects from '../../Subjects/ShortSubjects/ShortSubjects';
import Banner from '../Banner/Banner';
import ExtraPart from '../ExtraPart/ExtraPart';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <ShortSubjects></ShortSubjects>
            <ExtraPart></ExtraPart>
        </div>
    );
};

export default Home;