import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import productImg from './images/product01.png';

const Main = () => {
    return (
      <main>
        <div className="top-wrap">
          <div className="main-text-wrap">
            <div>
              <p className="title">자연의 소중함을 느낄 수 있는 순간, 제때</p>
              <p>제때 따서 제때 먹는, 자연의 축복이 담긴 건강한 선택으로 일상을 빛나게 해보세요.</p>
              <button>더 알아보기</button>
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
                <p><button>자세히 보기</button></p>
              </div>
              <div className="caring-wrap">
                <p className="title">농촌 돌봄 농장</p>
                <p><button>자세히 보기</button></p>
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
                <p className="green-color-title">제때 만든 먹거리 더보기</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="240" height="17" viewBox="0 0 295 17" fill="none">
                  <path d="M2 15H238L220.5 1.5" stroke="#DEE9D7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="product-list-wrap">
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={40}
                  grabCursor={true}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  style={{ width: '100%', height: '340px' }}
                >
                  <SwiperSlide><img alt="이미지테슽1" src={productImg} /></SwiperSlide>
                  <SwiperSlide><img alt="이미지테슽2" src={productImg} /></SwiperSlide>
                  <SwiperSlide><img alt="이미지테슽3" src={productImg} /></SwiperSlide>
                  <SwiperSlide><img alt="이미지테슽4" src={productImg} /></SwiperSlide>
                  <SwiperSlide><img alt="이미지테슽5" src={productImg} /></SwiperSlide>
                </Swiper>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
  
export default Main