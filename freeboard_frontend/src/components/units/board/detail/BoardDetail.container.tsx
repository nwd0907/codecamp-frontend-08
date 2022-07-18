import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IMutation, IMutationDislikeBoardArgs, IMutationLikeBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";
import { DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from './BoardDetail.queries'

export default function BoardDetail(){
    const router = useRouter()
    const [likeBoard] = useMutation<
      Pick<IMutation, "likeBoard">, 
      IMutationLikeBoardArgs
    >(LIKE_BOARD);
    const [dislikeBoard] = useMutation<
      Pick<IMutation, "dislikeBoard">,
      IMutationDislikeBoardArgs
    >(DISLIKE_BOARD);

    const { data } = useQuery<
      Pick<IQuery, "fetchBoard">,
      IQueryFetchBoardArgs
    >(FETCH_BOARD, { variables: { boardId: String(router.query.boardId) }});

    const onClickMoveToBoardList = () => {
      router.push("/boards");
    };
  
    const onClickMoveToBoardEdit = () => {
      router.push(`/boards/${router.query.boardId}/edit`);
    };

    const onClickLike = () => {
      if(typeof router.query.boardId !== "string") return
      likeBoard({
        variables: { boardId: router.query.boardId },
        refetchQueries: [
          { 
            query: FETCH_BOARD, 
            variables: { boardId: router.query.boardId } 
          },
        ],
      });
    };
  
    const onClickDislike = () => {
      if(typeof router.query.boardId !== "string") return
      dislikeBoard({
        variables: { boardId: router.query.boardId },
        refetchQueries: [
          { 
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardId } 
          },
        ],
      });
    };
    
    return (
      <BoardDetailUI 
        data={data}
        onClickMoveToBoardList={onClickMoveToBoardList}
        onClickMoveToBoardEdit={onClickMoveToBoardEdit}
        onClickLike={onClickLike}
        onClickDislike={onClickDislike}
      />
    )
}