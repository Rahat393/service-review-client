import React from 'react';

const CourseCard = ({ course }) => {
    const { title, img, price, description } = course;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p><small>{description}</small></p>
                <div className="card-actions justify-end">

                    <button className="btn btn-success text-white">View Details</button>

                </div>
            </div>
        </div>
    );
};

export default CourseCard;