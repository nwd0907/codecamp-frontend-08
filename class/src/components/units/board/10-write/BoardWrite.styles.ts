import styled from '@emotion/styled'
import { IRedButtonProps } from './BoardWrite.types'

export const RedInput = styled.input`
    border-color: red;
`

export const RedButton = styled.button`
    border-color: red;

    background-color: ${(props: IRedButtonProps) => props.qqq ? "yellow" : "default"};
`

// export default function QQQ(){

// }