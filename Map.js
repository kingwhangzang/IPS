import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReviewAndInfo from './ReviewAndInfo';
// import { KakaoMap, Marker } from 'react-kakao-maps-sdk';

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
      { title: "우돈갈비", lat: 37.5479, lng: 126.9716 },
      { title: "갑돌네", lat: 37.5502, lng: 126.9697 },
      { title: "청파 생고기", lat: 37.5498, lng: 126.9692 },
      { title: "두리 분식", lat: 37.5457, lng: 126.9704 },
      { title: "꽃보다 크레페", lat: 37.5445, lng: 126.9708 },
      { title: "노랑통닭 숙대점", lat: 37.5467, lng: 126.9703 },
      { title: "삼일 기사식당", lat: 37.5461, lng: 126.9701 },
      { title: "엘 마레", lat: 37.5469, lng: 126.9699 },
      { title: "이삭토스트 숙대점", lat: 37.5469, lng: 126.9699 },
      { title: "음식미담", lat: 37.5456, lng: 126.9669 },
      { title: "쎄라비", lat: 37.5457, lng: 126.9662 },
      { title: "포라임 숙대점", lat: 37.5458, lng: 126.9658 },
    ];

    const addMarkersToMap = () => {
      markerPosition.forEach(markerData => {
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(markerData.lat, markerData.lng),
        });

        // 마커 클릭 이벤트 처리
        kakao.maps.event.addListener(marker, 'click', () => {
          setSelectedStore({
            name: markerData.title, //음식점 이름
            review: '리뷰 내용',
            info1: '대표메뉴',
            info2: '전화 번호 : ',
            info3: '영업 시간 : '
          });
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

      <div id="map" style={{ width: "2000px", height: "700px" }}></div>

      {selectedStore && (
        <ReviewAndInfo
          name={selectedStore.name}
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
