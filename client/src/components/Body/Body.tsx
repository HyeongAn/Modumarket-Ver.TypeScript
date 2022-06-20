import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Main from '../../pages/MainPage/Main'
import BoardPage from '../../pages/BoardPage/BoardPage'

const Body = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/board" element={<BoardPage />} />
        </Routes>
    )
}
export default Body;