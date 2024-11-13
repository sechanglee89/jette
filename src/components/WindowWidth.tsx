import {useEffect, useState} from 'react'

const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 해제
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{width}</>; // 화면 너비를 반환
}

export default WindowWidth