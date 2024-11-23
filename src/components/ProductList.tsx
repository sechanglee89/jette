import axios from "axios"; 
import { useState, useEffect } from "react"; 
import Pagination from "react-js-pagination";
import 'swiper/css';

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
			const URL = "https://empirical-canidae-sechanglee-afaaa098.koyeb.app/api/products";

			console.log("call productListData limit : ", props.limit + ", currentPage : ", props.currentPage)

			try {
				const res = await axios.get(URL, {
					params: {
						query: "프로랑스&mall=7883144",
						display: props.limit,
						start: (currentPage - 1) * props.limit + 1, // 시작 페이지 계산
						sort: "date"
					}
				});
				setData(res.data || null);
			} catch (e) {
				console.error("API 호출 오류: ", e);
			}
		};

		productListData();
	}, [props.limit, props.currentPage, currentPage]); // 필요한 의존성 추가
	
	// 페이지 이동 핸들러
	const changePageHandler = (page: number) => {
			setCurrentPage(page); // 페이지 변경
	};

	// type에 따른 응답 분기 처리
	if (props.type === "FIX") {
		return <>
			{data && data.total > 0 ? ( // null 체크 추가
				data.items.map((product) => (
					<a key={product.productId} rel="noreferrer" href={product.link} target="_blank">
						<img alt={product.title} src={product.image} />
						<p dangerouslySetInnerHTML={{__html: product.title}}></p>
					</a>
				))
			) : (
				""
			)}
		</>;
	} else {
		return <>
			<div className="product-main-wrap">
				<div className="product-list-wrap">
					{data && data.total > 0 ? ( // null 체크 추가
						data.items.map((product) => (
							<div key={product.productId}><a rel="noreferrer" href={product.link} target="_blank"><img alt={product.title} src={product.image} /><p dangerouslySetInnerHTML={{__html: product.title}}></p></a></div>
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