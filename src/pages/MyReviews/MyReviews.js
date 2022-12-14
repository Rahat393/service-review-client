import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';
import useTitle from '../../hooks/hooks';

const MyReviews = () => {
    useTitle('My Reviews')
    const { user, loading } = useContext(AuthContext)

    const url = `https://service-review-server-six-teal.vercel.app/reviews?email=${user?.email}`

    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews', user?.email],

        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });

            const data = await res.json();
            return data;
        }
    })

    const handleDeleteReview = reviews => {
        fetch(`https://service-review-server-six-teal.vercel.app/reviews/${reviews._id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data);
                    refetch();
                    toast.success(` Review deleted successfully`)
                }
            })
    }
    if (loading) {
        return <Loading></Loading>
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