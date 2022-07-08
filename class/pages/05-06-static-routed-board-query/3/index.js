import { useQuery, gql } from '@apollo/client'

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
    const { data } = useQuery(FETCH_BOARD, { 
        variables: { number: 3 } 
    })

    console.log(data)

    return (
        <>
            <div>3번 게시글 이동이 완료되었습니다.</div>
            <div>작성자: {data ? data.fetchBoard.writer : "받아오는 중 입니다"}</div>
            <div>제목: {data && data.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
        </>
    )
}