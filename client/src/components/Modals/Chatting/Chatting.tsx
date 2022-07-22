import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect} from 'react';
import { showConfirmModal, showChattingModal } from '../../../reducers/modalSlice';
import { ModalBackground, ModalContainer, ModalText } from './styled';
import TextField from '@material-ui/core/TextField';
import io from 'socket.io-client';
import { REACT_APP_API_URL } from '../../../config';
import { RootState } from '../../..';
// const socket =  io.connect('http://localhost:4000',{secure: true})
const socket =  io.connect(REACT_APP_API_URL)

export interface temp {
    name? : string
    message? : string
    time? : string
    room? : string
}

type talk = {
    [key: string] : string
}

const Chatting = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector((state : RootState) => state.login.isLogin);
    const userInfo = useSelector((state : RootState) => state.userInfo.userInfo);
    const cardInfo = useSelector((state : RootState) => state.board.cardInfo);
    const room = cardInfo._id;
    const userName = userInfo.name;
    const [state, setState] = useState({message:'', name: userName})
    const [chat, setChat] =useState<temp[]>([])

    
    useEffect(()=>{
        socket.emit('type', room); // 채널명 개념 
  
        socket.on('type', (data : any)=>{
            
          const {result, room} = data;
          
        //   console.log(room + '에 입장하셨습니다!!!!!')
        //   console.log(userName)
          // setChat([...chat,{name, message, time}]);
          let temp : temp[] = [];
          result.forEach((el : any) => {
              //console.log(el)
              temp.push({
                // name: userInfo.name,
                name: el.username,
                message: el.message_content,
                time: el.time
              })
              setChat([...temp]);
            });
          })

    }, [])
  
    useEffect(()=>{
        // 이벤트 수신: socket.on("EVENT", function(data) {})
        // data(parameter)는 서버에서 등록한 data 어떤 식으로 data를 보내주는지
        socket.on('message', ({name , message, time, room} : talk) => {
          // console.log(data);
          // console.log(room + '에 입장하셨습니당.')
          setChat([...chat,{name, message, time}]);
        })
    },[chat]);
    

    const onTextChange  = (e : any) =>{
    setState({...state,[e.target.name]: e.target.value})
    }
    
    const onMessageSubmit =(e : any)=>{
    e.preventDefault()
    const {name, message} = state
    // socket.emit('message',{name, message})
    // socket.emit('join_room', 'room1');
    socket.emit('message',{name, message, room})
    setState({name, message : ''})
    }
      
    const renderChat =()=>{
        return (
            chat === undefined ? null
            : chat.map(({name, message, time},index)=>(
                (name === userName) ? 
                <div className="messages-me">
                    <div key={index} className="message-me">
                        {/* <div className="message-name">{name}</div> */}
                        <div>
                            <div className="message-msg">{message}</div>
                            <div className="message-time">{time}</div>
                        </div>
                    </div>
                </div>
                : 
                <div className="messages-you">
                    <div key={index} className="message-you">
                        <div className="message-name">{name}</div>
                        <div>
                            <div className="message-msg">{message}</div>
                            <div className="message-time">{time}</div>
                        </div>
                    </div>
                </div>
                    
            )     
        )
        )
    }

    const onLeave = () => {
        dispatch(showChattingModal(false));
        socket.emit('leave', room);
    }

    return (
        <>
            <ModalBackground onClick={() => dispatch(showChattingModal(false))} />
            <ModalContainer>
                    <div id="chat">
                        <ModalText>
                                {renderChat()}
                        </ModalText> 
                        <ModalText className="send">
                            <form onSubmit={onMessageSubmit}>
                                {/* <TextField name ="name" onChange={onTextChange} value={state.name} label="Name"></TextField> */}
                                <TextField name ="message" placeholder="메시지를 입력해주세요." onChange={onTextChange} value={state.message} variant="outlined"></TextField>

                                <button>확인</button>
                            </form>
                        </ModalText>

                        <ModalText>
                            <span onClick={onLeave}>&times;</span>
                        </ModalText>
                    </div>

                        {/* <ModalButton onClick={() => dispatch(showChattingModal(false))}>확인</ModalButton> */}
            </ModalContainer>
        </>
)
}
export default Chatting