import {
    createBrowserRouter,
} from "react-router-dom";
import Home from './../pages/Home';
import PublicRout from './../routes/PublicRout';
import Login from './../pages/Login';
import Register from './../pages/Register';
import PrivateRoute from './../routes/PrivateRoute';
import UpdateMovie from '../private pages/UpdateService';
import ErrorPage from './../pages/ErrorPage';
import AddService from './../private pages/AddService';
import Services from "../pages/Services";
import ServiceDetails from "../private pages/ServiceDetails";
import Purchase from "../private pages/Purchase";
import BookedServices from './../private pages/BookedServices';
import ManageServices from './../private pages/ManageServices';
import ServiceToDo from "../private pages/ServiceToDo";



const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRout></PublicRout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: 'services',
                element: <Services></Services>,
                loader: () => fetch('https://learn-plus-server.vercel.app/services')
            },

        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: '/',
        element: <PrivateRoute></PrivateRoute>,
        children: [
            {
                path: 'add_service',
                element: <AddService></AddService>
            },
            {
                path: 'booked_services',
                element: <BookedServices></BookedServices>
            },
            {
                path: 'services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://learn-plus-server.vercel.app/services/${params.id}`)
            },
            {
                path: 'manage_services',
                element: <ManageServices></ManageServices>
            },
            {
                path: 'purchase/:id',
                element: <Purchase></Purchase>,
                loader: ({ params }) => fetch(`https://learn-plus-server.vercel.app/services/${params.id}`)
            },
            {
                path: 'update_service/:id',
                element: <UpdateMovie></UpdateMovie>,
                loader: ({ params }) => fetch(`https://learn-plus-server.vercel.app/services/${params.id}`)
            },
            {
                path: 'service_todo',
                element: <ServiceToDo></ServiceToDo>,

            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;