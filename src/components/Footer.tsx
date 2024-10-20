import React from "react";
import logo from '../images/logo.svg';

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
            <div>
              <p className="title">제때 스마트스토어</p>
              <p className="title">농장 오시는 길</p>
              <p className="company-wrap">Copyright © 2023 Corallabs incorporated. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
		</>
	);
};
  
export default Footer;