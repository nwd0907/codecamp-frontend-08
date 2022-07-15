import { useQuery, gql } from '@apollo/client'
import { IQuery, IQueryFetchBoardArgs } from '../../src/commons/types/generated/types'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage(){
    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, { 
        variables: { number: 2 } 
    })
    
    console.log(data)

    return (
        <>
            <div>2번 게시글 이동이 완료되었습니다.</div>
            <div>작성자: {data ? data?.fetchBoard?.writer : "받아오는 중 입니다"}</div>
            <div>제목: {data && data.fetchBoard?.title}</div>
            <div>내용: {data?.fetchBoard?.contents}</div>
        </>
    )
}