import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const ReviewSection = () => {
    const { user } = useContext(AuthContext)
    if (!user?.uid) {
        return <p className='my-5 text-xl'>Please <Link className='text-sky-400 text-3xl' to={'/login'}>LogIn</Link> to add review!!</p>
    }

    const handleReviews = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;

        const reviewData = {
            review
        }
        console.log(review);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Added Successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div className='my-5'>

            <form onSubmit={handleReviews}>

                {user?.uid &&
                    <div className='justify-center'>
                        <textarea name='review' className="textarea textarea-accent w-80 h-28" placeholder="Enter your Review"></textarea>
                        <input className='btn block btn-success text-white' type="submit" value="Add Review" />                </div>}
            </form>

        </div>
    );
};

export default ReviewSection;