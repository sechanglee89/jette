import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

// CORS 허용 (필요한 도메인만 허용 가능)
app.use(cors()); // 모든 출처에서의 요청을 허용

// 네이버 API 호출을 위한 엔드포인트 설정
app.get('/api/products', async (req, res) => {
  const URL = 'https://openapi.naver.com/v1/search/shop.json';
  const ClientID = 'HAwV_5i2xat1aadc3L3F';
  const ClientSecret = '_Zn3cYp2OX';

  try {
    const response = await axios.get(URL, {
      params: {
        query: req.query.query || '프로랑스',
        display: req.query.display || 10,
        start: req.query.start || 1,
        sort: req.query.sort || 'date'
      },
      headers: {
        'X-Naver-Client-Id': ClientID,
        'X-Naver-Client-Secret': ClientSecret
      }
    });

    // 클라이언트에 네이버 API 응답 반환
    res.json(response.data);
  } catch (error) {
    console.error('API 호출 오류:', error);
    res.status(500).json({ error: 'API 호출 오류' });
  }
});

// 서버 실행
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});