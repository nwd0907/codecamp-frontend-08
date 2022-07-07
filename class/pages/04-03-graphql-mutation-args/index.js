import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(){
    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
        const result = await createBoard({
            variables: {
                writer: "훈이",
                title: "안녕하세요!!",
                contents: "반갑습니다"
            }
        })
        console.log(result)
        console.log(result.data.createBoard.message)
    }

    return (
        <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
    )
}