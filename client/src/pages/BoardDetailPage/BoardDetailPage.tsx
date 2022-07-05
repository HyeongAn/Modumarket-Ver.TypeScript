import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { REACT_APP_API_URL } from '../../config'
import { Wrap, Loading } from './styled'
import { getCardInfo, isAppliedInfo } from '../../reducers/boardSlice'
import { confirmImg } from '../../assets/images';
import DetailSection from '../../components/BoardDetail/DetailSection/DetailSection'
import ContentSection from '../../components/BoardDetail/ContentSection/ContentSection'
import MapSection from '../../components/BoardDetail/MapSection/MapSection'
import {RootState} from '../../index'

export interface ResultInfo {
    data:{
        _id : string
        title : string 
        category : number
        image? : string
        post_content : string
        post_location : string
        isvalid : boolean
        area_name : string
        chatroom : string
        endtime : string
        member_min : number
        member_num : number
        userId : {
            name? : string
            _id : string
            image? : string
        }
    }
    isapplied : boolean
}

function BoardDetail() {
    const location :any = useLocation().state; // useNavigate로 가져오는 카드의 id를 받아옴
    const accessToken = useSelector((state:RootState) => state.login.accessToken);
    const dispatch = useDispatch();
    const [cardInfo, setCardInfo] = useState<ResultInfo>();
    const userInfo = useSelector((state:RootState) => state.userInfo.userInfo.id);

    async function handleCardDetail() {
        // 유저의 정보가 없을 경우
        if (userInfo === '') {
            await axios({
                url: `${REACT_APP_API_URL}/post/${location.cardId}`,
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true
            }).then((result) => {
                
                let detail = {
                    cardInfo: result.data.data
                }

                let isApplied = {
                    isApplied: result.data.isapplied
                }

                dispatch(getCardInfo(detail))
                dispatch(isAppliedInfo(isApplied))
                setCardInfo(result.data)
            })
        } else {
            // 유저의 정보가 있을 경우 요청
            await axios({
                url: `${REACT_APP_API_URL}/post/${location.cardId}`,
                method: 'POST',
                data: {
                    _id: userInfo
                },
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true
            }).then((result) => {
                console.log(result)
                let detail = {
                    cardInfo: result.data.data
                }

                let isApplied = {
                    isApplied: result.data.isapplied
                }

                dispatch(getCardInfo(detail))
                dispatch(isAppliedInfo(isApplied))
                setCardInfo(result.data)
            })

        }

    }

    useEffect(() => {
        handleCardDetail()
    }, [])

    return (
        <Wrap>
            {cardInfo ? <DetailSection info={cardInfo} /> :
                <Loading>
                    <img src={confirmImg.loading} alt='loading' />
                    <h1>Loading</h1>
                </Loading>}
            {cardInfo ? <ContentSection info={cardInfo} /> : <Loading></Loading>
            }
            {cardInfo ? <MapSection info={cardInfo} /> : <Loading></Loading>}
        </Wrap>
    )
}

export default BoardDetail;