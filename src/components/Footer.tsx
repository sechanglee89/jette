import logo from '../images/footer_logo.png';

const Footer = () => {
    return (
      <>
        <footer>
          <div>
            <div className="logo-wrap">
              <img alt="제때 로고" src={logo} />
            </div>
            <div className="text-wrap">
              <div>
                <p className="title">제때블루베리농장</p>
                <p>세종특별자치시 금남면 벌말길 90, 제때협동조합</p>
                <p><span className="title">영업시간</span> 오전 9시 - 오후 6시</p>
                <p><span className="title">고객상담전화</span> 010-7769-3192</p>
              </div>
              <span className="line hide"/>
              <div>
                <a rel="noreferrer" href="https://smartstore.naver.com/cct7007" target="_blank"><p className="title store">제때 스마트스토어</p></a>
                <a rel="noreferrer" href="https://naver.me/G0f17t7g" target="_blank"><p className="title location">농장 오시는 길</p></a>
                <p className="company-wrap">Copyright © 2023 Corallabs incorporated. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  };
  
export default Footer;