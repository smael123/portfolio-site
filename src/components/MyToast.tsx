import { FC } from "react"
import { ToastContainer } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';

export interface MyToastProps {
    title: string
    body: string,
    isToastVisible: boolean,
    closeToast: () => void
}

export const MyToast:FC<MyToastProps> = ({ title, body, isToastVisible, closeToast }) => {
    return (
        <ToastContainer className="p-3" position='top-end'>
            <Toast show={isToastVisible} onClose={closeToast} bg="danger">
                <Toast.Header>
                    <strong className="me-auto">{title}</strong>
                </Toast.Header>
                <Toast.Body>{body}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}