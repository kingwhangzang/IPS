import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/');
  }

  return (
    <div>
      <nav className="dashboard-nav">
        <ul>
          <li><img src={process.env.PUBLIC_URL + '/friend.png'} alt="friend" /></li>
          <li className='sook'>쑥쑥카드</li>
          <li>
            <NavLink to="/dashboard" activeClassName="active">홈</NavLink>
          </li>
          <li>
            <NavLink to="/map" activeClassName="active">가맹점 지도 조회</NavLink>
          </li>
          <li>
            <NavLink to="/health" activeClassName="active">나의 건강</NavLink>
          </li>
          <li>
            <NavLink to="/mypage" activeClassName="active">마이페이지</NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      <h1>홈 페이지</h1>
      <div className="dashboard-container">
        <div className="news-container">
          <h1>서울특별시 - 아동급식카드 관련 최신 정보</h1>
          <ul>
            <a href="https://news.seoul.go.kr/welfare/archives/101447" style ={{fontSize: '20px'}}>아동급식지원 관련 설명</a>
            <br></br>
            <br></br>
          </ul>
            <ul>
            <h1>뉴스</h1>
            <li>
              <a href="https://news.seoul.go.kr/welfare/archives/546671">아동급식카드 사용처 확대</a>
            </li>
            <br></br>
            <li>
              <a href='https://www.yna.co.kr/view/AKR20221128020000003'>GS25, 아동 급식카드 온라인 결제 내년까지 전국 확대 추진</a>
            </li>
            <br></br>
            <li>
              <a href='https://www.onews.tv/news/articleView.html?idxno=164605'>김영옥 서울시의원 "아동급식카드로 편의점 간식류 구매할 수 있도록 해야</a>
            </li>
            <br></br>
            <li>
              <a href='https://www.fnnews.com/news/202304121753502957'>폭넓은 오세훈표 돌봄… 결식아동·문화 소외층으로 확대</a>
            </li>
            <br></br>
            <li>
              <a href='https://www.straightnews.co.kr/news/articleView.html?idxno=223890'>신한카드, 아동급식카드 온라인 사전 예약 시스템 확대</a>
            </li>
            <br></br>
            <li>
              <a href='https://thepublic.kr/news/view/1065597080438842'> 서울시, 결식우려아동 지원 대상 확대…‘가족돌봄아동’ 선제 발굴</a>
            </li>
            <br></br>
            <li>
              <a href='https://view.asiae.co.kr/article/2022080506341750625'>  광진구, 결식 아동 급식 지원 단가 7000원 → 8000원 인상</a>
            </li>
            <br></br>
            <li>
              <a href='https://www.news1.kr/articles/5013583'> '결식아동' 낙인 인천 급식카드 개선되나…1만3천명 편의점서 끼니 해결</a>
            </li>
            <br></br>
            <li>
              <a href='https://www.asiatoday.co.kr/view.php?key=20230412010006359'> 서울시, 결식우려아동 급식카드 지원 차차상위계층까지 확대</a>
            </li>
            <br></br>
            <li>
              <a href='http://www.fsnews.co.kr/news/articleView.html?idxno=47838'> 송파구, 아동급식카드 사용처 확대</a>
            </li>
            <img src={process.env.PUBLIC_URL + '/news.png'} alt="newsimage" className="newsimage"/>
          </ul>
        </div>
        <div className="cost-container">
          <h2>아동급식카드 잔액조회</h2>
          <a href="https://www.shinhancard.com/pconts/html/benefit/fund2/MOBFM600/MOBFM600R01.html?crustMenuId=ms97"><h3>아동급식카드 잔액조회•이용내역</h3></a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;