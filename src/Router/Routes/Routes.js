import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
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
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            }
        ]
    }
]);

export default router;