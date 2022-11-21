import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { _id, title, img, price, description } = course;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p className='text-xl'> {description.slice(0, 100) + '...'} </p>
                <div className="card-actions justify-end">

                    <Link to={`/course/${_id}`}>
                        <button className="btn btn-success text-white">View Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CourseCard;