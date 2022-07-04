import { Wrapper, EmailInput } from '../../styles/emotion'

export default function EmotionPage(){

    // 여기는 자바스크립트 쓰는곳

    return (
        <Wrapper>
            안녕하세요~!!
            <EmailInput type="text" />
            <span>그냥 태그도 써도 됨</span>
            <img src="/vercel.svg" />
        </Wrapper>
    )

}