import { Modal } from 'antd'

export default function ModalAlertPage(){

    const onClickSuccessButton = () => {
        Modal.success({ content: "게시글 등록에 성공했습니다!!" })
    }

    const onClickFailureButton = () => {
        Modal.error({ content: "비밀번호가 틀렸습니다!!" })
    }

    return (
        <>
            <button onClick={onClickSuccessButton}>성공했을때!!</button>
            <button onClick={onClickFailureButton}>실패했을때!!</button>
        </>
    )
}