import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

/** Default styles definition **/
const MODAL_STYLE: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "1.5rem",
  zIndex: 1000,
  borderRadius: "10px",
};
const MODAL_CLOSE_BUTTON_STYLE: React.CSSProperties = {
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  border: "none",
  background: "none",
  fontSize: "1.3rem",
  color: "lightgray",
  cursor: "pointer",
};
const MODAL_CONTENT: React.CSSProperties = {
  maxWidth: "70vw",
  maxHeight: "90vh",
  overflow: "auto",
};
const OVERLAY_STYLES: React.CSSProperties = {
  position: "fixed",
  top: "0%",
  bottom: "0%",
  left: "0%",
  right: "0%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  zIndex: "1000",
  cursor: "default",
};

type ModalProps = {
  open: boolean
  onClose: () => void | null
  style?: {
    background?: React.CSSProperties
    container?: React.CSSProperties
    content?: React.CSSProperties
  }
}

const Modal: React.FC<ModalProps> = ({ children, open, onClose = null, style = {} }) => {
  if (!open) return null;
  const [domNode, setDomNode] = useState<Element | null>(null);

  useEffect(() => {
    const modalDiv = document.createElement('div')
    document.body.appendChild(modalDiv)
    setDomNode(modalDiv)
  }, [])


  if (domNode)
    return ReactDOM.createPortal(
        <>
          <div style={{...OVERLAY_STYLES, ...style?.background}} />
          <div style={{...MODAL_STYLE, ...style?.container }}>
            {onClose && (
                <button style={MODAL_CLOSE_BUTTON_STYLE} onClick={onClose}>
                  X
                </button>
            )}
            <div style={{...MODAL_CONTENT, ...style?.content}}>{children}</div>
          </div>
        </>,
        domNode
    );

  return null
};

export default Modal;
