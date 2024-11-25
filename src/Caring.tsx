import caringMainImg from './images/caring/caringMain.png';
import caring01Img from './images/caring/caring_01.jpg';
import caring02Img from './images/caring/caring_02.jpg';
import caring03Img from './images/caring/caring_03.jpg';
import caring04Img from './images/caring/caring_04.jpg';
import caring05Img from './images/caring/caring_05.jpg';
import caring06Img from './images/caring/caring_06.jpg';
import caring07Img from './images/caring/caring_07.jpg';
import caring08Img from './images/caring/caring_08.jpg';
import caring09Img from './images/caring/caring_09.jpg';
import caring10Img from './images/caring/caring_10.jpg';
import caring11Img from './images/caring/caring_11.jpg';
import caring12Img from './images/caring/caring_12.jpg';

const Caring = () => {
  return (
    <main className="caring">
      <div className="top-wrap">
        <div className="main-text-wrap">
          <div>
            <p className="green-color-title">Jette story</p>
            <p className="title">농촌 돌봄 농장</p>
            <p>계절에 따라 형형색색의 옷으로 갈아입는 농장의<br/>아름다움을 즐겨보세요</p>
          </div>
        </div>
      </div>
      <div className="main-body">
        {/* 농촌 돌봄 농장 */}
        <div className="caring-farm-top-wrap padding-wrap">
          <p className="sub-title lead-icon"><span />농촌 돌봄 농장</p>
          <p className="sub-sub-title">발달 장애인 가족과 함께 하는 행복 농장 · 기쁨 농장 프로그램</p>
          <p className="sub-contents">
            따뜻한 사랑과 배려가 필요한 발달장애인 가족을 위한 행복농장과 기쁨농장 프로그램입니다.<br className="mw-tag hide" /><br className="mw-tag hide" />
            행복농장과 기쁨농장 프로그램은 <span className="highlight">계절 · 절기에 맞는 농장 활동을 통해 스트레스 해소 및 재충전의 기회 제공, 신체적 · 정식적 건강증진, 상호교류를 통한 유대관계 구축과 사회성 향상을 목표로 합니다.</span><br className="mw-tag hide" /><br className="mw-tag hide" />
            자연과 함께 힐링과 치유, 행복과 기쁨으로 가득 채워지는 순간 들을 선사합니다.
          </p>
          <div className="notice-wrap"><p className="notice-title">※ 재료비, 식비 등 모든 비용 무료 제공</p></div>
          <img alt="돌봄 농장 메인" src={caringMainImg}></img>
          <div className="table-wrap">
            <div className="table-header">행복 농장 프로그램</div>
            <div className="table-box">
              <div className="pc-tag hide">
                <div className="table-sub-title">
                  <p>참여자</p>
                  <p>시기</p>
                  <p>횟수</p>
                  <p>주요 활동 내용</p>
                </div>
                <div>
                    <p>발달 장애인 및 가족</p>
                    <p>4월 ~ 11월</p>
                    <p>월 2회</p>
                    <p>
                      <ul className="custom-circle-list">
                        <li>건강체조, 황톳길 산책</li>
                        <li>블루베리 재배 및 수확 · 가공 체험</li>
                        <li>텃밭 채소 재배, 아로니아/다래 수확 체험</li>
                      </ul>
                    </p>
                </div>
              </div>
              <div className="mw-tag hide">
                <div className="table-sub-title">
                  <p>참여자</p>
                  <p className="table-sub-contents">발달 장애인 및 가족</p>
                  <p>시기</p>
                  <p className="table-sub-contents">4월 ~ 11월</p>
                  <p>횟수</p>
                  <p className="table-sub-contents">월 2회</p>
                  <p>주요 활동 내용</p>
                  <p className="table-sub-contents">
                    <ul className="custom-circle-list">
                      <li>건강체조, 황톳길 산책</li>
                      <li>블루베리 재배 및 수확 · 가공 체험</li>
                      <li>텃밭 채소 재배, 아로니아/다래 수확 체험</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="masonry-wrap">
              <div><img alt="황톳길 산책" src={caring01Img}></img><p>황톳길 산책</p></div>
              <div><img alt="상추 모종 식재" src={caring02Img}></img><p>상추 모종 식재</p></div>
              <div><img alt="블루베리 묘목 분갈이" src={caring03Img}></img><p>블루베리 묘목 분갈이</p></div>
              <div><img alt="토종다래 수확" src={caring04Img}></img><p>토종다래 수확</p></div>
            </div>
          </div>
          <div className="table-wrap">
            <div className="table-header">기쁨 농장 프로그램</div>
            <div className="table-box">
              <div className="pc-tag hide">
                <div className="table-sub-title">
                  <p>참여자</p>
                  <p>시기</p>
                  <p>횟수</p>
                  <p>주요 활동 내용</p>
                </div>
                <div>
                    <p>발달 장애인 및 가족</p>
                    <p>4월 ~ 11월</p>
                    <p>월 2회</p>
                    <p>
                      <ul className="custom-circle-list">
                        <li>건강체조, 황톳길 산책</li>
                        <li>블루베리 재배 및 수확 · 가공 체험</li>
                        <li>텃밭 채소 재배, 아로니아/다래 수확 체험</li>
                      </ul>
                    </p>
                </div>
              </div>
              <div className="mw-tag hide">
                <div className="table-sub-title">
                  <p>참여자</p>
                  <p className="table-sub-contents">발달 장애인 및 가족</p>
                  <p>시기</p>
                  <p className="table-sub-contents">4월 ~ 11월</p>
                  <p>횟수</p>
                  <p className="table-sub-contents">월 2회</p>
                  <p>주요 활동 내용</p>
                  <p className="table-sub-contents">
                    <ul className="custom-circle-list">
                      <li>건강체조, 황톳길 산책</li>
                      <li>블루베리 재배 및 수확 · 가공 체험</li>
                      <li>텃밭 채소 재배, 아로니아/다래 수확 체험</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="masonry-wrap">
              <div><img alt="블루베리 물주기" src={caring05Img}></img><p>블루베리 물주기</p></div>
              <div><img alt="방울토마토 수확" src={caring06Img}></img><p>방울토마토 수확</p></div>
              <div><img alt="블루베리 수확" src={caring07Img}></img><p>블루베리 수확</p></div>
              <div><img alt="레크리에이션" src={caring08Img}></img><p>레크리에이션</p></div>
            </div>
          </div>
        </div>
        {/* 농촌 돌봄 농장 */}
        <div className="caring-farm-middle-wrap green-wrap">
          <div className="padding-wrap">
            <p className="sub-sub-title">도시와 농촌의 독거 어르신들이 함께하는 건강 농장 프로그램</p>
            <p className="sub-contents">
              도시와 농촌의 독거노인들이 농장에서 만나 활동을 함께하면서 건강을 챙길 수 있는 프로그램입니다.<br className="mw-tag hide" /><br className="mw-tag hide" />
              활동지원사가 도시와 농촌의 독거 어르신들을 농장으로 직접 모셔 와 <span className="highlight">황톳길 산책, 계절 · 절기에 맞는 농장 활동</span> 등을 함께 하고,
              이를 통해 <span className="highlight">고독감과 스트레스 해소, 휴식과 힐링, 사회성 회복 등 건강한 삶 유지를 목표</span>로 합니다.<br className="mw-tag hide" /><br className="mw-tag hide" /> 자연과 함께 힐링과 치유,
              대화와 소통, 즐거움으로 가득 채워지는 순간 들을 선사합니다.텃밭채소 재배 등의 소일거리를 통해 건강하고 활기찬 삶을 즐겨보세요.
            </p>
            <div className="table-wrap">
              <div className="table-header">건강 농장 프로그램</div>
              <div className="table-box">
                <div className="pc-tag hide">
                  <div className="table-sub-title">
                    <p>참여자</p>
                    <p>시기</p>
                    <p>횟수</p>
                    <p>주요 활동 내용</p>
                  </div>
                  <div>
                      <p>독거노인 5명</p>
                      <p>4월 ~ 11월</p>
                      <p>월 2회</p>
                      <p>
                        <ul className="custom-circle-list">
                          <li>건강체조, 황톳길 산책</li>
                          <li>블루베리 재배 및 수확 · 가공 체험</li>
                          <li>텃밭 채소 재배, 아로니아/다래 수확 체험</li>
                        </ul>
                      </p>
                  </div>
                </div>
                <div className="mw-tag hide">
                  <div className="table-sub-title">
                    <p>참여자</p>
                    <p className="table-sub-contents">독거노인 5명</p>
                    <p>시기</p>
                    <p className="table-sub-contents">4월 ~ 11월</p>
                    <p>횟수</p>
                    <p className="table-sub-contents">월 2회</p>
                    <p>주요 활동 내용</p>
                    <p className="table-sub-contents">
                      <ul className="custom-circle-list">
                        <li>건강체조, 황톳길 산책</li>
                        <li>블루베리 재배 및 수확 · 가공 체험</li>
                        <li>텃밭 채소 재배, 아로니아/다래 수확 체험</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="masonry-wrap">
                <div><img alt="황톳길 산책" src={caring09Img}></img><p>황톳길 산책</p></div>
                <div><img alt="토종다래 수확" src={caring10Img}></img><p>토종다래 수확</p></div>
                <div><img alt="블루베리 수확" src={caring11Img}></img><p>블루베리 수확</p></div>
                <div><img alt="풀 뽑기" src={caring12Img}></img><p>풀 뽑기</p></div>
              </div>
            </div>
          </div>
        </div>
        {/* 사랑드림 농장 */}
        <div className="caring-farm-bottom-wrap padding-wrap">
          <div className="table-wrap">
            <div className="table-header">사랑드림 농장  프로그램</div>
              <div className="table-box align-center">
                <div>
                  <div className="table-sub-title">
                    <p>체험 내용</p>
                  </div>
                  <div>
                      <p className="custom-import-text">주간보호센터 소속 발달장애인들과 함께 하는 농업활동 프로그램으로<br/>
                      2025년부터 운영 예정 (월 2회)</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="farming-introduction-wrap">
            <div className="mix-contents">
              <p className="sub-title lead-icon"><span />사회적 농업 소개</p>
              <div className="left-title-wrap">
                <div>
                  <div>
                    <span>사회적 농업</span>
                    <span>
                      농업을 통하여 취약계층 등에 돌봄, 치유,<br className="mw-tag hide" /> 교육 및 고용등의 서비스를 제공합니다.<br/>
                      <span className="add-text-wrap">(취약계층 : 장애인, 고령자, 아동, 약물중독자,<br className="mw-tag hide" /> 다문화가족, 저소득층 등)</span>
                    </span>
                  </div>
                  <div>
                    <span>사회적 농장</span>
                    <span>사회적 농업을 실천하는 법인 또는 단체로서<br className="mw-tag hide" /> 지정받은 농장을 말합니다.</span>
                  </div>
                  <div>
                    <span>농촌돌봄농장</span>
                    <span>사회적 농업을 실천하고 있는 농촌지역<br className="mw-tag hide" /> 소재 법인 또는 단체를 말합니다.</span>
                  </div>
                </div>
              </div>
              <div className="mountain-wrap">
              </div>
            </div>
            <div className="notice-wrap"><p className="notice-title">※ 농촌 돌봄 농장 참여 문의처 : <br className="mw-tag hide"/>제때협동조합 010-7769-3192</p></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Caring