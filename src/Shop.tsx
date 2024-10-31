import { SetStateAction, useEffect, useState } from 'react';
import productImg from './images/product_02.png';
import Pagination from 'react-js-pagination';

// 페이지 이동
const changePageHandler = (page: SetStateAction<number>) => {
	//setPage(page);
};

const Shop = () => {
  return (
    <main className="shop">
      <div className="top-wrap">
        <div className="main-text-wrap">
          <div>
            <p className="green-color-title">Product</p>
            <p className="title">제때 먹거리</p>
            <p>신선하고 건강한 먹거리를 제공하여 지역 주민의 건강과</p>
            <p>지역 경제 활성화에 기여합니다.</p>
            <button>스토어 바로가기</button>
          </div>
        </div>
      </div>
      <div className="main-body">
        <div className="product-main-wrap">
          <div className="product-list-wrap">
            {/* 페이징에 따라 유동적으로 변경되어야 하는 이미지 영역 */}
            <div><img alt="이미지테슽1" src={productImg} /><p>현미 쌀치이이입</p></div>
            <div><img alt="이미지테슽1" src={productImg} /><p>현미 쌀치이이입</p></div>
            <div><img alt="이미지테슽1" src={productImg} /><p>현미 쌀치이이입</p></div>
            <div><img alt="이미지테슽1" src={productImg} /><p>현미 쌀치이이입</p></div>
            <div><img alt="이미지테슽1" src={productImg} /><p>현미 쌀치이이입</p></div>
            <div><img alt="이미지테슽1" src={productImg} /><p>현미 쌀치이이입</p></div>
            <div><img alt="이미지테슽1" src={productImg} /><p>현미 쌀치이이입</p></div>
            <div><img alt="이미지테슽1" src={productImg} /><p>현미 쌀치이이입</p></div>
            <div><img alt="이미지테슽1" src={productImg} /><p>현미 쌀치이이입</p></div>
          </div>
        </div>
        {/* 페이징 처리 */}
        <Pagination
            activePage={1} // 현재 페이지
            itemsCountPerPage={9} // 한 페이지 당 보여줄 아이템 갯수
            totalItemsCount={46} // 총 아이템 갯수
            pageRangeDisplayed={5} // paginator에 나타낼 페이지 범위
            prevPageText={"<"} // "이전"을 나타낼 텍스트
            nextPageText={">"} // "다음"을 나타낼 텍스트
            hideFirstLastPages={true}
            onChange={changePageHandler} // 페이지 변경을 핸들링하는 함수
          />
        </div>
    </main>
  )
}

export default Shop