import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/reviews?email=${user?.email}`

    const { data: reviews = [], isLoading, refetch } = useQuery({
        queryKey: ['reviews', user?.email],

        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            // if (isLoading) {
            //     return <progress className="progress w-56"></progress>
            // }
            return data;
        }
    })

    const handleDeleteReview = reviews => {
        fetch(`http://localhost:5000/reviews/${reviews._id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(` Review deleted successfully`)
                }
            })
    }
    return (
        <div>
            <h3 className="text-3xl mb-5">My Reviews</h3>
            {
                reviews.length < 1 ? <h2 className='text-3xl text-center my-28'>No Reviews Were Added !!</h2>
                    :
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Title</th>

                                    <th>Review</th>
                                    <th>Edit Review</th>
                                    <th>Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.length > 0 &&
                                    reviews?.map((review, i) => <tr key={review._id}>
                                        <th>{i + 1}</th>
                                        <td>{review?.title}</td>

                                        <td>{review?.review}</td>
                                        <td><button className="btn btn-sm">Edit</button></td>
                                        <td><button onClick={() => handleDeleteReview(review)} className="btn btn-sm btn-error ">Delete</button></td>

                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }

        </div>
    );
};


export default MyReviews;