import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const ReviewSection = () => {
    const { user } = useContext(AuthContext)
    if (!user?.uid) {
        return <p className='my-5 text-xl'>Please <Link className='text-sky-400 text-3xl' to={'/login'}>LogIn</Link> to add review!!</p>
    }
    return (
        <div className='my-5'>

            <form >

                {user?.uid &&
                    <div className='justify-center'>
                        <textarea className="textarea textarea-accent w-80 h-28" placeholder="Enter your Review"></textarea>
                        <input className='btn block btn-success text-white' type="submit" value="Add Review" />                </div>}
            </form>

        </div>
    );
};

export default ReviewSection;