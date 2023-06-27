import { useEffect, useState } from 'react';
import './BacktoTop.css';
const AppBacktotop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };
  return (
    <>
      <div className="container">
        <div className="box box--1"></div>
        <div className="box box--2"></div>
        <div className="box box--3"></div>
        <div className="box box--4"></div>
        <div className="box box--5"></div>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          // className="back-to-top"
          className="back-to-top-new"
        >
          {/* &#8679; */}
          <div>
            <i className="fa-solid fa-up"></i>
          </div>
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
      <i className="fa-solid fa-up"></i>
    </>
  );
};

export default AppBacktotop;
