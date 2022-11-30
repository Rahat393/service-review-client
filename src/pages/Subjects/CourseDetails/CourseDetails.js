import React from 'react';

import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/hooks';
import ReviewSection from '../../ReviewSection/ReviewSection';

const CourseDetails = () => {
    useTitle('Review Section')
    const { title, img, description, price } = useLoaderData()
    return (
        <div className='flex'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">

                <figure><img src={img} alt="Shoes" /></figure>

                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <p  > {description} </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className='ml-32 my-12'>
                <h2 className="text-3xl">Review Section</h2>
                <ReviewSection
                    title={title}
                ></ReviewSection>
            </div>
        </div>
    );
};

export default CourseDetails;