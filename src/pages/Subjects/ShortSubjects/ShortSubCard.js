import React from 'react';

const ShortSubCard = ({ shortSubject }) => {
    const { title, img } = shortSubject
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl my-8 mb-10">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>

        </div>
    );
};

export default ShortSubCard;