import React from "react";
declare type ModalProps = {
    open: boolean;
    onClose: () => void | null;
    style?: {
        background?: React.CSSProperties;
        container?: React.CSSProperties;
        content?: React.CSSProperties;
    };
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
