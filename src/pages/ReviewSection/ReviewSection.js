import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const ReviewSection = ({ title, refetch }) => {
    const { user } = useContext(AuthContext)
    if (!user?.uid) {
        return <p className='my-5 text-xl'>Please <Link className='text-sky-400 text-3xl' to={'/login'}>LogIn</Link> to add review!!</p>
    }
    const handleReviews = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const email = user?.email || 'unregistered';


        const reviewData = {
            title,
            email,
            review

        }
        // if (review.length !== 10) {
        //     toast('Review Should be 10 or more long')
        // }
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
                    refetch()
                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div className='my-5'>

            <form onSubmit={handleReviews}>

                {user?.uid &&
                    <div className='justify-center'>
                        <div className='flex my-3'>
                            <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost    input-bordered" readOnly />
                            <input type="text" placeholder="Your email" defaultValue={title} className="input input-ghost ml-3  w-64     input-bordered" readOnly />
                        </div>

                        <textarea name='review' className="textarea textarea-accent w-80 h-28" placeholder="Enter your Review" required></textarea>
                        <input className='btn block btn-success text-white' type="submit" value="Add Review" />                </div>}
            </form>

        </div>
    );
};

export default ReviewSection;