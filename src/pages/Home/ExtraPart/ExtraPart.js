import React from 'react';

const ExtraPart = () => {
    return (
        <div className='w-3/5 mx-auto'>
            <h2 className='text-4xl text-center'>More About My Course</h2>
            <div className="card ax-w-xl bg-base-100 shadow-xl  ">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraPart;