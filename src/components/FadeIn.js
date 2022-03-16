import React, { useState, useRef, useEffect } from "react";

// this little nifty component allows us to reuse the float in fade in animation when the bottom piece is scrolled into view
function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current); // when unmount we remove the observer or else it creates a nasty memory leak
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
