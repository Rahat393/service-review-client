import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShortSubCard from './ShortSubCard';

const ShortSubjects = () => {
    const [shortSubjects, setShortSubjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/3subjects')
            .then(res => res.json())
            .then(data => setShortSubjects(data))

    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                {/* <p className="text-2xl font-bold text-orange-600">Services</p> */}
                <h2 className="text-5xl font-semibold">My Courses</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    shortSubjects.map(shortSubject => <ShortSubCard
                        key={shortSubject._id}
                        shortSubject={shortSubject}
                    ></ShortSubCard>)
                }
            </div>
            <div className='text-right mb-8 mr-8'>
                <Link to='/courses'>
                    <button className="btn btn-success text-white text-center ">See All Courses</button>
                </Link>
            </div>
        </div>
    );
};

export default ShortSubjects;