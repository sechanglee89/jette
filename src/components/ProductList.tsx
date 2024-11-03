import axios from "axios"; 
import { useState, useEffect } from "react"; 
import Pagination from "react-js-pagination";
import { Swiper, SwiperSlide } from 'swiper/react';

interface SearchResultBody {
    total: number;
    start: number;
    display: number;
    items: Array<SearchProductList>;
}

interface SearchProductList {
    title: string,
    link: string,
    image: string,
    productId: number
}

interface ProductListProps {
    limit: number;
    currentPage: number;
    type: string;
}

const ProductList = (props: ProductListProps) => {
	const [data, setData] = useState<SearchResultBody | null>(null);
	const [currentPage, setCurrentPage] = useState(props.currentPage); // 현재 페이지 상태 관리

	useEffect(() => {
		const productListData = async () => {
			const URL = "/v1/search/shop.json";
			const ClientID = "HAwV_5i2xat1aadc3L3F";
			const ClientSecret = "_Zn3cYp2OX";

			console.log("call productListData limit : ", props.limit + ", currentPage : ", props.currentPage)

			try {
				const res = await axios.get(URL, {
					params: {
						query: "프로랑스&mall=7883144",
						display: props.limit,
						start: (currentPage - 1) * props.limit + 1, // 시작 페이지 계산
						sort: "date"
					},
					headers: {
						"X-Naver-Client-Id": ClientID,
						"X-Naver-Client-Secret": ClientSecret,
					},
				});
				setData(res.data || null);
			} catch (e) {
				console.error("API 호출 오류: ", e);
			}
		};

		productListData();
	}, [props.limit, currentPage]); // 필요한 의존성 추가
	
	// 페이지 이동 핸들러
	const changePageHandler = (page: number) => {
			setCurrentPage(page); // 페이지 변경
	};

	// type에 따른 응답 분기 처리
	if (props.type === "SWIPER") {
		return <>
			{/* 슬라이드 영역 기본 노출 2개 반
			네이버 스토어 API 조회하여 상품 유동적으로 처리 */}
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={40}
				grabCursor={true}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				style={{ width: '100%', height: '404px' }}
			>

			{data && data.total > 0 ? ( // null 체크 추가
				data.items.map((product) => (
					<SwiperSlide key={product.productId}>
						<a href={product.link} target="_blank" rel="noreferrer">
							<img alt={product.title} src={product.image} />
							<p dangerouslySetInnerHTML={{__html: product.title}}></p>
						</a>
					</SwiperSlide>
				))
			) : (
				""
			)}
			</Swiper>
		</>;
	} else {
		return <>
			<div className="product-main-wrap">
				<div className="product-list-wrap">
					{data && data.total > 0 ? ( // null 체크 추가
						data.items.map((product) => (
							<div key={product.productId}><a href={product.link} target="_blank" rel="noreferrer"><img alt={product.title} src={product.image} /><p dangerouslySetInnerHTML={{__html: product.title}}></p></a></div>
						))
					) : (
						""
					)}
				</div>
			</div>
			{/* 페이징 처리 */}
			<Pagination
					activePage={currentPage} // 현재 페이지
					itemsCountPerPage={props.limit} // 한 페이지 당 보여줄 아이템 갯수
					totalItemsCount={data ? data.total : 0} // 총 아이템 갯수
					pageRangeDisplayed={5} // paginator에 나타낼 페이지 범위
					prevPageText={"<"} // "이전"을 나타낼 텍스트
					nextPageText={">"} // "다음"을 나타낼 텍스트
					hideFirstLastPages={true}
					onChange={changePageHandler} // 페이지 변경을 핸들링하는 함수
				/>
		</>;
	}
};
  
export default ProductList;