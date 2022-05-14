import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    const myHandler = (e) => {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", myHandler);

    return () => document.removeEventListener("mousedown", myHandler);
  });

  return domNode;
};

export { useClickOutside };
