import "./LoadingScreen.css";
import { useEffect, useState } from "react";

function LoadingScreen() {

  const [hide, setHide] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setHide(true);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <div className={`loader ${hide ? "hide" : ""}`}>

      <div className="loader-content">

        <h1>
          Chirakala Pallavi
        </h1>

        <div className="loading-bar">
          <div className="loading-fill"></div>
        </div>

        <p>
          Loading Portfolio...
        </p>

      </div>

    </div>
  );
}

export default LoadingScreen;