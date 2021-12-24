import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Shop from './Shop';

const RouteSwitch = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                </Route>
            </Routes>
        </HashRouter>
    );

};

export default RouteSwitch;