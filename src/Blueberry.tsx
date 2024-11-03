import farm00Img from './images/farm/farm_00.png';
import farm01Img from './images/farm/farm_01.png';
import farm02Img from './images/farm/farm_02.png';
import farm03Img from './images/farm/farm_03.png';
import farm04Img from './images/farm/farm_04.png';
import farm05Img from './images/farm/farm_05.png';
import farm06Img from './images/farm/farm_06.png';
import farm07Img from './images/farm/farm_07.png';
import farm08Img from './images/farm/farm_08.png';
import farm09Img from './images/farm/farm_09.png';
import farm10Img from './images/farm/farm_10.png';
import farm11Img from './images/farm/farm_11.png';
import farm12Img from './images/farm/farm_12.png';

const Blueberry = () => {
  return (
    <main className="blueberry">
      <div className="top-wrap">
        <div className="main-text-wrap">
          <div>
            <p className="green-color-title">Jette story</p>
            <p className="title">블루베리 농장</p>
            <p>농장에서 직접 딴 싱싱하고 맛있는</p>
            <p>블루베리를 경험하세요</p>
          </div>
        </div>
      </div>
      <div className="main-body">
        {/* 블루베리 농장 */}
        <div className="blueberry-farm-wrap">
          <p className="sub-title lead-icon"><span />블루베리 농장</p>
          <p className="sub-contents">
            <span className="highlight">식물터널, 황톳길, 원두막, 연못 등 잘 꾸며진 정원형 농장</span>에 다양한 품종의 블루베리를 친환경 재배하고 있으며,<br/>
            일교차가 크고 농업용수가 아닌 <span className="highlight">지하 암반수를 활용하여 싱싱하고 맛 좋은 블루베리를 생산</span>하고 있습니다.<br/>
            특히 세종, 대전, 공주에서 자동차로 15분 거리에 위치하여 접근성이 매우 좋은 곳입니다.<br/>
          </p>
          <img alt="블루베리 농장 전경" src={farm00Img}></img>
          <p className="sub-title">블루베리 수확 체험</p>
          <p className="sub-contents">
            블루베리 수확 체험을 통해 아이들에게 수확의 기쁨과 함께 농장에서 직접 따먹는 싱싱하고 맛있는 블루베리를 경험하도록 해주세요.<br/>
            탐스러운 블루베리는 아이들에게 행복한 미소와 잊지 못할 추억을 선물할 겁니다.<br/>
          </p>
          <div className="table-wrap">
            <div className="table-header">블루베리 수확 체험<span className="table-icon">단체</span></div>
            <div className="table-box four-box">
              <div>
                <p className="table-sub-title">체험 대상</p>
                <p className="table-sub-contents">
                  어린이집, 유치원,<br/>
                  초등학교 1-2학년, 기업체 등
                </p>
              </div>
              <div>
                <p className="table-sub-title">체험 대상</p>
                <p className="table-sub-contents">10-50명</p>
              </div>
              <div>
                <p className="table-sub-title">체험 시기</p>
                <p className="table-sub-contents">6월 초순 ~ 7월 하순(평일)</p>
              </div>
              <div>
                <p className="table-sub-title">체험 대상</p>
                <p className="table-sub-contents">
                  수확체험 : 15,000원<br/>
                  수확체험 + 가공 : 30,000원
                </p>
              </div>
            </div>
            <div className="table-header">블루베리 수확 체험<span className="table-icon">가족 단위</span></div>
            <div className="table-box">
              <div>
                <p className="table-sub-title">체험 내용</p>
                <p className="table-sub-contents">
                  주말 위주 운영<br/>
                  (500g ~ 1kg 단위 체험)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 블루베리 농장 체험 사진 */}
        <div className="blueberry-experience-wrap">
          <div>
            <div className="normal-wrap">
              <div><img alt="블루베리 농장 전경_01" src={farm01Img}></img><p>농장 전경</p></div>
              <div><img alt="블루베리 농장 전경_02" src={farm02Img}></img><p>주차장</p></div>
            </div>
            <div className="masonry-wrap">
              <div><img alt="블루베리 농장 전경_03" src={farm03Img}></img><p>식물 터널</p></div>
              <div><img alt="블루베리 농장 전경_05" src={farm05Img}></img><p>수확 체험</p></div>
              <div><img alt="블루베리 농장 전경_07" src={farm07Img}></img><p>휴식</p></div>
              <div><img alt="블루베리 농장 전경_09" src={farm09Img}></img><p>올챙이 구경</p></div>
              <div><img alt="블루베리 농장 전경_04" src={farm04Img}></img><p>황톳길</p></div>
              <div><img alt="블루베리 농장 전경_06" src={farm06Img}></img><p>수확 체험</p></div>
              <div><img alt="블루베리 농장 전경_08" src={farm08Img}></img><p>간식</p></div>
              <div><img alt="블루베리 농장 전경_10" src={farm10Img}></img><p>사진 촬영</p></div>
            </div>
            <div className="normal-wrap half-and-half">
              <div><img alt="블루베리 농장 전경_11" src={farm11Img}></img></div>
              <div><img alt="블루베리 농장 전경_12" src={farm12Img}></img></div>
            </div>
            <p>가족단위 체험</p>
          </div>
        </div>
        {/* 블루베리 묘목 분양 */}
        <div className="blueberry-seedlings-sale-wrap">
          <p className="sub-title lead-icon"><span />블루베리 묘목 분양</p>
          <ul className="sub-contents">
            <li>- 농장에서 직접 생산한 블루베리 묘목을 분양합니다. (4월 초순 ~ 6월 초순)</li>
            <li>- 분양하는 묘목은 2~4년생이며, 3년생부터 꽃과 열매를 즐길 수 있으며, 가을철의 단풍은 무척 아름답습니다.</li>
            <li>- 묘목은 택배도 가능하지만 세종 · 대전 · 공주지역은 농장에 오셔서 직접 선택하는 것이 좋습니다.</li>
          </ul>
          <div className="normal-wrap">
            <div><img alt="블루베리 농장 전경_11" src={farm11Img}></img><p>농장 전경</p></div>
            <div><img alt="블루베리 농장 전경_12" src={farm12Img}></img><p>농장 전경</p></div>
            <div><img alt="블루베리 농장 전경_12" src={farm12Img}></img><p>농장 전경</p></div>
            <div><img alt="블루베리 농장 전경_12" src={farm12Img}></img><p>농장 전경</p></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Blueberry