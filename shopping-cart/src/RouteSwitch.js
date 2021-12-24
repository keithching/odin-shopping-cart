import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Shop from './Shop';

const RouteSwitch = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );

};

export default RouteSwitch;