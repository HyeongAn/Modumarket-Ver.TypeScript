import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Main from '../../pages/MainPage/Main'
import BoardPage from '../../pages/BoardPage/BoardPage'
import MyPage from '../../pages/Mypage/Mypage'
import DetailPage from '../../pages/BoardDetailPage/BoardDetailPage'
import { RootState } from "../..";

const Body = () => {
    const isLogin = useSelector((state : RootState) => state.login.isLogin);
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/mypage" element={isLogin ? <MyPage /> : <Navigate to="/" />} />
            <Route path="/detail" element={<DetailPage />} />
        </Routes>
    )
}
export default Body;