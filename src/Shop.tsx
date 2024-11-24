import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';

const handleClick = (_event: any) => {
  window.open("https://smartstore.naver.com/cct7007");
};

const Shop = () => {

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // useEffect를 사용하여 WindowWidth 값을 받아오기
  useEffect(() => {
    const width = window.innerWidth;
    setWindowWidth(width); // 초기 상태 설정
  }, []);
  
  let limit = 9;
  if (windowWidth <= 800) {
    limit = 8;
  }
  
  const ProductListProps = {
    limit: limit,
    currentPage: 1,
    type: "LIST"
  };

  return (
    <main className="shop">
      <div className="top-wrap">
        <div className="main-text-wrap">
          <div>
            <p className="green-color-title">Product</p>
            <p className="title">제때 먹거리</p>
            <p>
              신선하고 건강한 먹거리를 제공하여<br className="mw-tag hide" /> 지역 주민의 건강과<br />
              지역 경제 활성화에 기여합니다.
            </p>
            <button onClick={handleClick}>쇼핑몰 바로가기</button>
          </div>
        </div>
      </div>
      <div className="main-body">
        <ProductList {...ProductListProps}/>
      </div>
    </main>
  )
}

export default Shop