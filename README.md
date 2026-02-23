# 제때 (Jette)

자연의 소중함을 느낄 수 있는 순간 제때 농장 공식 웹사이트입니다.  
블루베리 농장 체험, 농촌 돌봄 농장 프로그램, 제때 쇼핑몰 정보를 제공합니다.

## 기술 스택

**Frontend**

- React 18 + TypeScript
- React Router v6
- Swiper (메인 배너 슬라이더)
- react-js-pagination
- Axios

**Backend**

- Node.js + Express + TypeScript
- Naver Shopping Open API 프록시 서버
- ts-node-dev

**배포**

- GitHub Pages (`gh-pages`)

## 프로젝트 구조

```
jette/
 src/
    App.tsx              # 루트 컴포넌트
    MainHome.tsx         # 메인 홈 페이지
    Blueberry.tsx        # 블루베리 농장 페이지
    Caring.tsx           # 농촌 돌봄 농장 페이지
    Shop.tsx             # 쇼핑몰 페이지
    components/
        Layout.tsx       # 라우터 및 레이아웃
        Header.tsx
        Footer.tsx
        ProductList.tsx  # 네이버 쇼핑 상품 목록
        Meta.tsx         # SEO 메타 태그
        ScrollToTop.tsx
 server/
     src/
         App.ts           # Express 프록시 서버 (포트 5000)
```

## 페이지 라우팅

| 경로         | 페이지         |
| ------------ | -------------- |
| `/`          | 메인 홈        |
| `/blueberry` | 블루베리 농장  |
| `/caring`    | 농촌 돌봄 농장 |
| `/shop`      | 제때 쇼핑몰    |

## 시작하기

### 패키지 설치

```bash
# 클라이언트
npm install

# 서버
cd server && npm install
```

### 개발 서버 실행

**클라이언트만 실행** (포트 3000)

```bash
npm start
```

**클라이언트 + 서버 동시 실행** (포트 3000 + 5000)

```bash
npm run start2
```

백엔드 서버만 실행할 경우:

```bash
cd server && npm run dev
```

## 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# GitHub Pages 배포 (빌드 + CNAME 복사 + 배포 자동 수행)
npm run deploy
```

## 저작권

© 2026 제때 (Jette). All Rights Reserved. 무단 복제 및 배포를 금합니다.
