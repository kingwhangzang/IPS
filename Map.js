import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReviewAndInfo from './ReviewAndInfo';
// eslint-disable-next-line no-unused-vars
import StarRating from './StarRating';

const { kakao } = window;

function Map() {
  const [selectedStore, setSelectedStore] = useState(null);

  const handleLogout = () => {
    // Logout logic implementation
  };

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5479, 126.9716),
      level: 5
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = [
      { title: "우돈갈비", lat: 37.5479, lng: 126.9716, review: "맛있어요!", info1: "갈비", info2: "010-1234-5678", info3: "3.5" },
      { title: "갑돌네", lat: 37.5502, lng: 126.9697, review: "분위기 좋아요!", info1: "돌솥비빔밥", info2: "010-9876-5432", info3: "4.2" },
      { title: "청파 생고기", lat: 37.5498, lng: 126.9692, review: "서비스도 좋고 맛도 좋아요!", info1: "생고기", info2: "010-5555-5555", info3: "4.8" },
      // 다른 가맹점 리뷰 정보들...
    ];

    const addMarkersToMap = () => {
      markerPosition.forEach(markerData => {
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(markerData.lat, markerData.lng),
        });

        kakao.maps.event.addListener(marker, 'click', () => {
          setSelectedStore(markerData);
        });

        marker.setMap(map);
      });
    };

    addMarkersToMap();
  }, []);

  return (
    <div>
      <nav className="dashboard-nav">
        <ul>
          <li>
            <img src={process.env.PUBLIC_URL + '/friend.png'} alt="friend" />
          </li>
          <li className="sook">쑥쑥카드</li>
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              홈
            </NavLink>
          </li>
          <li>
            <NavLink to="/map" activeClassName="active">
              가맹점 지도 조회
            </NavLink>
          </li>
          <li>
            <NavLink to="/health" activeClassName="active">
              나의 건강
            </NavLink>
          </li>
          <li>
            <NavLink to="/mypage" activeClassName="active">
              마이페이지
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>

      <div id="map" style={{ width: "2000px", height: "500px" }}></div>

      {selectedStore && (
        <ReviewAndInfo
          title={selectedStore.title}
          review={selectedStore.review}
          info1={selectedStore.info1}
          info2={selectedStore.info2}
          info3={selectedStore.info3}
        />
      )}
    </div>
  );
}

export default Map;