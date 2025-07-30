import ProductList from './components/ProductList';
import { useNavigate } from 'react-router-dom';
import Meta from './components/Meta';
import { useEffect } from 'react';

const Main = () => {
  const ProductListProps = {
    limit: 3,
    currentPage: 1,
    type: "FIX"
  };

  const ProductListSwiperProps = {
    limit: 10,
    currentPage: 1,
    type: "SWIPER"
  };
  
  const navigate = useNavigate(); // navigate 훅을 사용하여 페이지 이동

  const goBlueberryPage = (_event: any) => {
    navigate("/blueberry");
  };
  
  const goCaringPage = (_event: any) => {
    navigate("/caring");
  };
  
  const goShopPage = (_event: any) => {
    _event.preventDefault();
    navigate("/shop");
  };

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath);  // 실제로 라우터가 처리하게 함
    }
  }, []);

  return (
    <>
      <Meta title="제때 | 자연의 소중함을 느낄 수 있는 순간" description="자연의 축복이 담긴 건강한 먹거리를 제공하는 제때입니다." />
        <main className="home">
        <div className="top-wrap">
          <div className="main-text-wrap">
            <div>
              <p className="title">자연의 소중함을<br className="mw-tag hide" /> 느낄 수 있는 순간, 제때</p>
              <p>제때 따서 제때 먹는,<br className="mw-tag hide" /> 자연의 축복이 담긴 건강한 선택으로<br className="mw-tag hide" /> 일상을 빛나게 해보세요.</p>
              <button onClick={goBlueberryPage}>더 알아보기</button>
            </div>
          </div>
        </div>
        <div className="about-wrap">
          <div className="contents">
            <div>
              <p className="green-color-title">About us</p>
              <p>탐스러운 블루베리와<br className="mw-tag hide" /> 행복한 미소가 만나는 그 순간을<br className="mw-tag hide" /> 아이들에게 선물하세요.</p>
            </div>
            <div className="box-wrap">
              <div onClick={goBlueberryPage} className="blueberry-wrap">
                <p className="title">블루베리 농장</p>
                <p><button>자세히 보기</button></p>
              </div>
              <div onClick={goCaringPage} className="caring-wrap">
                <p className="title">농촌 돌봄 농장</p>
                <p><button>자세히 보기</button></p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-wrap">
          <div>
            <p className="sub-title">제때 쇼핑몰</p>
            <p>기름 없이 열과 압력으로 구워 만들어<br className="mw-tag hide" /> 바삭하고 고소해요</p>
            <button onClick={goShopPage}>자세히 보기</button>
          </div>
          <div className="product-wrap-list pc-tag hide"><ProductList {...ProductListProps}/></div>
          <div className="product-wrap-list mw-tag hide"><ProductList {...ProductListSwiperProps}/></div>
        </div>
      </main>
    </>
  )
}
  
export default Main