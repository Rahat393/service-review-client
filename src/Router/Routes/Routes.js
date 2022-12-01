import Main from "../../layout/Main";
import AddServices from "../../pages/Home/AddServices/AddServices";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/LogIn/LogIn";
import MyReviews from "../../pages/MyReviews/MyReviews";
import SignUp from "../../pages/SignUp/SignUp";
import CourseDetails from "../../pages/Subjects/CourseDetails/CourseDetails";
import Courses from "../../pages/Subjects/Courses/Courses";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/myreview',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addservices',
                element: <AddServices></AddServices>
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://service-review-server-six-teal.vercel.app/course/${params.id}`)
            }
        ]
    }
]);

export default router;