import React from 'react';
import ShortSubjects from '../../Subjects/ShortSubjects/ShortSubjects';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <ShortSubjects></ShortSubjects>
        </div>
    );
};

export default Home;