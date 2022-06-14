import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Main from '../../pages/MainPage/Main'


const Body = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    )
}
export default Body;