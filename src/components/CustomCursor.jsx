import "./CustomCursor.css";
import { useEffect } from "react";

function CustomCursor() {

  useEffect(() => {

    const cursor = document.querySelector(".cursor");

    window.addEventListener("mousemove", (e) => {

      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

    });

  }, []);

  return <div className="cursor"></div>;
}

export default CustomCursor;