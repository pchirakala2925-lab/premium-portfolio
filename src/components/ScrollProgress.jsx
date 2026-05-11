import "./ScrollProgress.css";
import { useEffect } from "react";

function ScrollProgress() {

  useEffect(() => {

    const progress = document.querySelector(".progress-bar");

    window.addEventListener("scroll", () => {

      const totalHeight =
        document.body.scrollHeight - window.innerHeight;

      const progressHeight =
        (window.pageYOffset / totalHeight) * 100;

      progress.style.height =
        progressHeight + "%";

    });

  }, []);

  return (
    <div className="progress">
      <div className="progress-bar"></div>
    </div>
  );
}

export default ScrollProgress;