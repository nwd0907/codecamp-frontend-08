import { ChangeEvent } from 'react'

export interface IBoardWriteProps {
    isEdit: boolean
    data?: any
}

export interface IMyVariables {
    number: number
    writer?: string
    title?: string
    contents?: string
}

export interface IBoardWriteUIProps {
    onClickCreate: () => void
    onClickUpdate: () => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    mycolor: boolean
    isEdit: boolean
    data: any
}

export interface IRedButtonProps {
    qqq: boolean
}