import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Main from '../../pages/MainPage/Main'
import BoardPage from '../../pages/BoardPage/BoardPage'
import DetailPage from '../../pages/BoardDetailPage/BoardDetailPage'

const Body = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/detail" element={<DetailPage />} />
        </Routes>
    )
}
export default Body;