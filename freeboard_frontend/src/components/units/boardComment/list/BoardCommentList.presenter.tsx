import { getDate } from '../../../../commons/libraries/utils';
import * as S from './BoardCommentList.styles'
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {

  const onClickComment = (event) => {
    alert(event.currentTarget.id + "입니다~")
  }

  const aaa = () => {
    alert("asdklaskldas")
  }

  return (
      <div>
        {props.data?.fetchBoardComments.map((el) => (
          <S.ItemWrapper id={el.writer || ""} onClick={onClickComment}>
            <S.FlexWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.MainWrapper>
                <S.WriterWrapper>
                  <S.Writer>{el.writer}</S.Writer>
                </S.WriterWrapper>
                <S.Contents>{el.contents}</S.Contents>
              </S.MainWrapper>
              <S.OptionWrapper>
                <S.UpdateIcon src="/images/boardComment/list/option_update_icon.png/" />
                <S.DeleteIcon
                  id={el._id}
                  src="/images/boardComment/list/option_delete_icon.png/"
                  onClick={props.onClickDelete}
                />
              </S.OptionWrapper>
            </S.FlexWrapper>
            <S.DateString>{getDate(el?.createdAt)}</S.DateString>
          </S.ItemWrapper>
        ))}
      </div>
  );
}
