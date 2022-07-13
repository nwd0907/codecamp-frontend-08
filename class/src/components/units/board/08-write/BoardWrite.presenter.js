import * as S from './BoardWrite.styles'
// import QQQ, {RedInput} from './BoardWrite.styles'

export default function BoardWriteUI(props){
    return (
        <>
            작성자: <S.RedInput type="text" onChange={props.onChangeWriter} /><br />
            제목: <input type="text" onChange={props.onChangeTitle} /><br />
            내용: <input type="text" onChange={props.onChangeContents} /><br />
            <S.RedButton 
                qqq={props.mycolor} 
                onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}
            >
                {props.isEdit ? "수정하기" : "등록하기"}
            </S.RedButton>
        </>
    )

}