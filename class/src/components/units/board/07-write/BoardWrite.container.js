import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite(){
    const [mycolor, setMycolor] = useState(false)

    const [writer, setWriter] = useState("") // a
    const [title, setTitle] = useState("") // a
    const [contents, setContents] = useState("") // a
    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
        const result = await createBoard({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
        console.log(result.data.createBoard.message)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
        if(event.target.value && title && contents){
            setMycolor(true)
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value) 
        if(writer && event.target.value && contents){
            setMycolor(true)
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value) 
        if(writer && title && event.target.value){
            setMycolor(true)
        }
    }

    return (
        <BoardWriteUI 
            onClickGraphqlApi={onClickGraphqlApi}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            mycolor={mycolor}
        />
    )
}