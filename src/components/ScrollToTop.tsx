import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0); // 페이지 이동 시 스크롤을 최상단으로
    }, [location]);
  
    return null;
  };
  
export default ScrollToTop;