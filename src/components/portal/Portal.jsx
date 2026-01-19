import { createPortal } from "react-dom";

const Portal = ({ children }) => {
    const portalRoot = document.getElementById("portal-root");

    if (!portalRoot) return null;

    return createPortal(children, portalRoot);
};

export default Portal;