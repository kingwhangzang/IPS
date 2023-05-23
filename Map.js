import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReviewAndInfo from './ReviewAndInfo';
import Papa from 'papaparse';

const { kakao } = window;

function Map() {
  const [selectedStore, setSelectedStore] = useState(null);

  const handleLogout = () => {
    // Logout logic implementation
  };

  useEffect(() => {
    const parseCSVFile = async () => {
      const response = await fetch(process.env.PUBLIC_URL + '/서울 아동급식카드 가맹점 정보.csv');
      const csvData = await response.text();
      const markers = [];

      Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          const { data } = results;
          data.forEach(async (row) => {
            const { 도로명주소, 가맹점명칭 } = row;
            const geocoder = new kakao.maps.services.Geocoder();
            await geocoder.addressSearch(도로명주소, (result, status) => {
              if (status === kakao.maps.services.Status.OK) {
                const lat = result[0].y; // 위도
                const lng = result[0].x; // 경도
                markers.push({ lat, lng, 도로명주소, 가맹점명칭 });
              }
            });
          });
      
          markers.forEach((markerData) => {
            const { lat, lng, 가맹점명칭 } = markerData;
            const markerPosition = new kakao.maps.LatLng(lat, lng);
            const marker = new kakao.maps.Marker({
              position: markerPosition,
            });
      
            // 마커 클릭 이벤트 처리
            kakao.maps.event.addListener(marker, 'click', () => {
              setSelectedStore({
                name: 가맹점명칭,
                review: '리뷰 내용',
                info1: '대표메뉴',
                info2: '전화 번호 : ',
                info3: '영업 시간 : ',
              });
            });
      
            marker.setMap(map);
          });
        },
      });
      
    };

    const container = document.getElementById('map'); //지도를 표시할 영역
    const options = { //중심위치와, 확대 수준
      center: new kakao.maps.LatLng(37.5479, 126.9716),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options); //지도를 표시

    const addMarkersToMap = async () => {
      await parseCSVFile();
    }; //마커를 지도에 추가

    addMarkersToMap();
  }, []);

  //상단 구현
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


      <div id="map" style={{ width: '2000px', height: '700px' }}></div>

      {selectedStore && (
        <ReviewAndInfo
          name={selectedStore.name}
          review={selectedStore.review}
          info1={selectedStore.info1}
          info2={selectedStore.info2}
          nfo3={selectedStore.info3}
          />
        )}
      </div>
    );
  }
  
  export default Map;
 