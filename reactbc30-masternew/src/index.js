import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Page404 from './pages/Page404/Page404';
import ProductManagement from './pages/ProductManagement/ProductManagement';
import ReactLifeCycle from './ReactLifeCycle/ReactLifeCycle';
//Setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import DemoTangGiamSoLuong from './pages/DemoRedux/DemoTangGiamSoLuong';
import DemoChangeColor from './pages/DemoRedux/DemoChangeColor/DemoChangeColor';
import DemoQLSV from './pages/DemoRedux/DemoQLSV/DemoQLSV';
import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet/BaiTapXemChiTiet';
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore';
import BaiTapGioHang from './BaiTapGioHang/BaiTapGioHang';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<App />} >
                    <Route path="" element={<Home />} > </Route>
                    <Route path="home" element={<Home />} > </Route>
                    <Route path="login" element={<Login />} > </Route>
                    <Route path="register" element={<Register />} > </Route>
                    <Route path="contact" element={<Contact />} > </Route>

                    <Route path="baitapxemchitiet" element={<BaiTapXemChiTiet />} > </Route>
                    <Route path="carstore" element={<ExerciseCarStore />} > </Route>
                    <Route path="btgiohang" element={<BaiTapGioHang />} > </Route>


                    <Route path="about" element={<About />} > </Route>
                    <Route path="reactform" element={<ProductManagement />} > </Route>
                    <Route path="lifecycle" element={<ReactLifeCycle />} > </Route>
                    <Route path="demoredux" element={<DemoTangGiamSoLuong />} > </Route>
                    <Route path="demochangecolor" element={<DemoChangeColor />} > </Route>
                    <Route path="demoqlsv" element={<DemoQLSV />} > </Route>
                    {/* <Route path='*' element={<Page404 />}></Route> */}
                    <Route path='*' element={<Navigate to="" />}></Route>

                </Route>

            </Routes>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
