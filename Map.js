//eslint-disable-next-line
/* global kakao */
import React, { useEffect, useState } from 'react';
import ReviewAndInfo from './ReviewAndInfo'; 

const {kakao} = window;

function Map(){
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(()=>{
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    //eslint-disable-next-line
    const map = new kakao.maps.Map(container, options); 

    const markerPosition = new kakao.maps.LatLng(37.56000302825312, 126.97540593203321); 
        const marker = new kakao.maps.Marker({ 
          position: markerPosition
        }); 

        kakao.maps.event.addListener(marker, 'click', function() {
          setSelectedStore({
            name: '가맹점 이름',  // 가맹점의 실제 이름으로 대체하세요.
            review: '리뷰 내용', // 실제 리뷰 내용으로 대체하세요.
            info: '가맹점 정보'   // 실제 가맹점 정보로 대체하세요.
          });
        });
        marker.setMap(map); 
    }, [])


    return (
      <div>
      <div id="map" style={{width:"2000px", height:"800px"}}></div>
      {selectedStore && <ReviewAndInfo name={selectedStore.name} review={selectedStore.review} info={selectedStore.info} />}
    </div>
  );
}

export default Map;
