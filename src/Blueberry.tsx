import farm00Img from './images/farm/farm_00.png';

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
            식물터널, 황톳길, 원두막, 연못 등 잘 꾸며진 정원형 농장에 다양한 품종의 블루베리를 친환경 재배하고 있으며,<br/>
            일교차가 크고 농업용수가 아닌 지하 암반수를 활용하여 싱싱하고 맛 좋은 블루베리를 생산하고 있습니다.<br/>
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
        </div>
        {/* 블루베리 묘목 분양 */}
        <div className="blueberry-seedlings-sale-wrap">
          <p className="sub-title lead-icon">블루베리 농장</p>
        </div>
      </div>
    </main>
  )
}

export default Blueberry