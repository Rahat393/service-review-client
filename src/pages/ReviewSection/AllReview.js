import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const AllReview = ({ title, refetch }) => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/reviewsss?title=${title}`

    const { data: reviews = [], } = useQuery({
        queryKey: ['reviews', title],

        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });

            const data = await res.json();

            // console.log(data);
            return data;
            refetch()
        }
    })
    return (
        <div>


            {reviews.length < 1 && <h2 className='text-3xl text-center my-28'>Please Add A Review On This Subject</h2>}

            {user?.uid &&
                <>
                    {<h3 className="text-3xl mb-5">All Reviews of {title}</h3>}
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Review Provider</th>
                                    <th>Review</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.length > 0 &&
                                    reviews?.map((review, i) => <tr key={review._id}>
                                        <th>{i + 1}</th>
                                        <td>{review?.email}</td>
                                        <td>{review?.review}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div></>
            }


        </div>
    );
};

export default AllReview;