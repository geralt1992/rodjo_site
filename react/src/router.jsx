import {createBrowserRouter} from 'react-router-dom'
import Product from '../src/pages/Product'
import Home from '../src/pages/Home'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },

    {
        path:'/product/:id',
        element:<Product/>
    }
]);

export default router;