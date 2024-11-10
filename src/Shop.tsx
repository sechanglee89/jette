import ProductList from './components/ProductList';

const ProductListProps = {
  limit: 9,
  currentPage: 1,
  type: "LIST"
};

const handleClick = (_event: any) => {
  window.open("https://smartstore.naver.com/cct7007");
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
            <button onClick={handleClick}>스토어 바로가기</button>
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