import chekMan from "./check_man.png"
import checkCircle from "./check_circle_icon.png"
import checkWoman1 from "./check_woman_with_phone.png"
import checkWoman2 from  "./check_woman.png"
import checkSkull from  "./skull_icon.png"
import question from  "./question.png"
import loading from  "./loading.png"


type confirmImg = {
    [key : string]: string
}


export const confirmImg : confirmImg = {
    check_man: chekMan,
    check_circle: checkCircle,
    check_woman1: checkWoman1,
    check_woman2: checkWoman2,
    check_skull: checkSkull,
    question: question,
    loading: loading,
}

export const profileImg = "/images/profile_color_blue.png"


export const nothingImg = '/images/no_connection.gif'