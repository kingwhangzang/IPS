import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReviewAndInfo from './ReviewAndInfo'; 

const { kakao } = window;

function Map() {
  const [selectedStore, setSelectedStore] = useState(null);

  const handleLogout = () => {
    // Logout logic implementation
  };

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(37.56000302825312, 126.97540593203321);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });

    kakao.maps.event.addListener(marker, 'click', function() {
      setSelectedStore({
        name: '가맹점 이름',
        review: '리뷰 내용',
        info: '가맹점 정보'
      });
    });
    marker.setMap(map);
  }, []);

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

      <div id="map" style={{ width: "1000px", height: "400px" }}></div>

      {selectedStore && (
        <ReviewAndInfo
          name={selectedStore.name}
          review={selectedStore.review}
          info={selectedStore.info}
        />
      )}
    </div>
  );
}

export default Map;
