import * as S from './BoardWrite.styles'
import { IBoardWriteUIProps } from './BoardWrite.types'
// import QQQ, {RedInput} from './BoardWrite.styles'

export default function BoardWriteUI(props: IBoardWriteUIProps){
    return (
        <>
            작성자: <S.RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard?.writer || ""} /><br />
            제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard?.title || ""} /><br />
            내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard?.contents || ""} /><br />
            <S.RedButton 
                qqq={props.mycolor} 
                onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}
            >
                {props.isEdit ? "수정하기" : "등록하기"}
            </S.RedButton>
        </>
    )

}