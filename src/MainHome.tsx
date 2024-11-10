import 'swiper/css';
import longArrowRight from './images/long_arrow_right.png';
import ProductList from './components/ProductList';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const ProductListProps = {
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

  return (
    <main className="home">
      <div className="top-wrap">
        <div className="main-text-wrap">
          <div>
            <p className="title">자연의 소중함을 느낄 수 있는 순간, 제때</p>
            <p>제때 따서 제때 먹는, 자연의 축복이 담긴 건강한 선택으로 일상을 빛나게 해보세요.</p>
            <button onClick={goBlueberryPage}>더 알아보기</button>
          </div>
        </div>
      </div>
      <div className="about-wrap">
        <div className="contents">
          <div>
            <p className="green-color-title">About us</p>
            <p>탐스러운 블루베리와 행복한 미소가 만나는 그 순간을 아이들에게 선물하세요.</p>
          </div>
          <div className="box-wrap">
            <div className="blueberry-wrap">
              <p className="title">블루베리 농장</p>
              <p><button onClick={goBlueberryPage}>자세히 보기</button></p>
            </div>
            <div className="caring-wrap">
              <p className="title">농촌 돌봄 농장</p>
              <p><button onClick={goCaringPage}>자세히 보기</button></p>
            </div>
          </div>
        </div>
      </div>
      <div className="product-wrap">
        <div className="left-wrap">
          <div className="text-wrap">
            <div>
              <p className="green-color-title">Product</p>
              <p className="title">신선함이 살아있는 선택</p>
              <p>기름 없이 열과 압력으로</p>
              <p>구워 만들어 바삭하고 고소해요</p>
            </div>
          </div>
        </div>
        <div className="right-wrap">
          <div>
            <div className="title-wrap">
              <a href="/" onClick={goShopPage}>
                <p className="green-color-title">제때 만든 먹거리 더보기</p>
                <img alt="오른쪽 긴 화살표" src={longArrowRight} />
              </a>
            </div>
            <div className="product-list-wrap">
              <ProductList {...ProductListProps}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
  
export default Main