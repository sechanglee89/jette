import farm00Img from './images/farm/farm_00.jpg';
import farm01Img from './images/farm/farm_01.jpg';
import farm02Img from './images/farm/farm_02.jpg';
import farm03Img from './images/farm/farm_03.jpg';
import farm04Img from './images/farm/farm_04.jpg';
import farm05Img from './images/farm/farm_05.jpg';
import farm06Img from './images/farm/farm_06.jpg';
import farm07Img from './images/farm/farm_07.jpg';
import farm08Img from './images/farm/farm_08.jpg';
import farm09Img from './images/farm/farm_09.jpg';
import farm10Img from './images/farm/farm_10.jpg';
import farm11Img from './images/farm/farm_11.jpg';
import farm12Img from './images/farm/farm_12.jpg';

import seedlings2yearImg from './images/farm/seedlings_2year.jpg';
import seedlings3year01Img from './images/farm/seedlings_3year_01.jpg';
import seedlings3year02Img from './images/farm/seedlings_3year_02.jpg';
import seedlings4yearImg from './images/farm/seedlings_4year.jpg';

const Blueberry = () => {
  return (
    <main className="blueberry">
      <div className="top-wrap">
        <div className="main-text-wrap">
          <div>
            <p className="green-color-title">Jette story</p>
            <p className="title">블루베리 농장</p>
            <p>농장에서 직접 딴 싱싱하고 맛있는<br/>블루베리를 경험하세요</p>
          </div>
        </div>
      </div>
      <div className="main-body">
        {/* 블루베리 농장 */}
        <div className="blueberry-farm-wrap padding-wrap">
          <div className="sub-padding-wrap">
            <p className="sub-title lead-icon"><span />블루베리 농장</p>
            <p className="sub-contents">
              <span className="highlight">식물터널, 황톳길, 원두막, 연못 등 잘 꾸며진 정원형 농장</span>에 다양한 품종의 블루베리를 친환경 재배하고 있으며,
              일교차가 크고 농업용수가 아닌 <span className="highlight">지하 암반수를 활용하여 싱싱하고 맛 좋은 블루베리를 생산</span>하고 있습니다.<br/><br className="mw-tag hide" />
              특히 세종, 대전, 공주에서 자동차로 15분 거리에 위치하여 접근성이 매우 좋은 곳입니다.
            </p>
          </div>
          <img alt="블루베리 농장 전경" src={farm00Img}></img>
          <div className="sub-padding-wrap">
            <p className="sub-title">블루베리 수확 체험</p>
            <p className="sub-contents">
              블루베리 수확 체험을 통해 아이들에게 수확의 기쁨과 함께 농장에서 직접 따먹는 싱싱하고 맛있는 블루베리를 경험하도록 해주세요.
              탐스러운 블루베리는 아이들에게 행복한 미소와 잊지 못할 추억을 선물할 겁니다.
            </p>
          </div>
          <div className="table-wrap">
            <div className="table-header">단체</div>
            <div className="table-box">
              <div className="pc-tag hide">
                <div className="table-sub-title">
                  <p>대상</p>
                  <p>인원</p>
                  <p>시기</p>
                  <p>비용</p>
                </div>
                <div>
                  <p>어린이집, 유치원, 초등학교 1-2학년, 기업체 등</p>
                  <p>10~50명 단위</p>
                  <p>6월 초순 ~ 7월 하순(평일)</p>
                  <p>수확체험 15,000원, 수확 + 가공 체험 30,000원</p>
                </div>
              </div>
              <div className="mw-tag hide">
                <div className="table-sub-title">
                  <p>대상</p>
                  <p className="table-sub-contents">어린이집, 유치원, 초등학교 1-2학년, 기업체 등</p>
                  <p>인원</p>
                  <p className="table-sub-contents">10~50명 단위</p>
                  <p>시기</p>
                  <p className="table-sub-contents">6월 초순 ~ 7월 하순(평일)</p>
                  <p>비용</p>
                  <p className="table-sub-contents">수확체험 15,000원, 수확<br/> + 가공 체험 30,000원</p>
                </div>
              </div>
            </div>
            <div className="table-header">가족 단위</div>
            <div className="table-box">
              <div>
                <span>6월 초순 ~ 7월 하순(주말), 500g~1kg 수확<br className="mw-tag hide"/>(20,000~35,000원)</span>
              </div>
            </div>
          </div>
        </div>
        {/* 블루베리 농장 체험 사진 */}
        <div className="blueberry-experience-wrap green-wrap">
          <div className="padding-wrap">
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
              <div><img alt="블루베리 농장 전경_11" src={farm11Img}></img><p>가족단위 체험</p></div>
              <div><img alt="블루베리 농장 전경_12" src={farm12Img}></img><p>가족단위 체험</p></div>
            </div>
          </div>
        </div>
        {/* 블루베리 묘목 분양 */}
        <div className="blueberry-seedlings-sale-wrap padding-wrap">
          <div className="sub-padding-wrap">
            <p className="sub-title lead-icon"><span />블루베리 묘목 분양</p>
            <ul className="sub-contents">
              <li><p><strong>농장에서 직접 생산한 블루베리 묘목</strong>을<br className="mw-tag hide"/> 분양합니다. (4월 초순 ~ 6월 초순)</p></li>
              <li><p><strong>분양하는 묘목은 2~4년생</strong>이며, 3년생부터 꽃과 열매를 즐길 수 있으며, 가을철의 단풍은 무척 아름답습니다.</p></li>
              <li><p>묘목은 택배도 가능하지만 세종 · 대전 · 공주지역은 농장에 오셔서 직접 선택하는 것이 좋습니다.</p></li>
            </ul>
          </div>
          <div className="normal-wrap">
            <div><img alt="2년생 묘목" src={seedlings2yearImg}></img><p>2년생 묘목</p></div>
            <div><img alt="3년생 묘목_01" src={seedlings3year01Img}></img><p>3년생 묘목</p></div>
            <div><img alt="3년생 묘목_01" src={seedlings3year02Img}></img><p>3년생 묘목</p></div>
            <div><img alt="4년생 묘목" src={seedlings4yearImg}></img><p>4년생 묘목</p></div>
          </div>
          <div className="notice-wrap"><p className="notice-title">※ 블루베리 체험 및 묘목 분양 문의처 : <br className="mw-tag hide"/>제때협동조합 010-7769-3192</p></div>
        </div>
      </div>
    </main>
  )
}

export default Blueberry