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

      { title: "우돈갈비", lat: 37.5479, lng: 126.9716 , address : "서울 용산구 청파동3가 80-10", num : "02-797-5342" ,info3: '3.5' , review: '생각보다 비싸서 많이 못 먹었어요' , info1:  '돼지 갈비'},
      { title: "갑돌네", lat: 37.5502, lng: 126.9697 , address : "서울 용산구 청파동1가 141-2번지", num : "0507-1317-5411" ,info3: '4.0' , review: '양을 많이 주시고 맛있어요' , info1:  '제육정식쌈밥'},
      { title: "청파 생고기", lat: 37.5498, lng: 126.9692 , address : "서울 용산구 청파동1가 141-2", num : "02-715-6979" ,info3: '4.0' , review: '사장님이 친절하고 카드도 잘 받아주세요' , info1:  '비빔밥'},
      { title : "두리 분식", lat: 37.5456, lng: 126.9699 , review: '양도 많고 서비스도 주셨어요.' , info1:  '제육덮밥', num: "02-704-9552", info3: "5.0"},
      { title : "꽃보다 크레페", lat: 37.5445, lng: 126.9708, address : "서울 용산구 청파로 269  1층 (청파동3가)", num : "02-717-1029" ,info3: '3.0' , review: '맛있어요 근데 영업시간이 날마다 달라요' , info1:  '누텔라+딸기+생크림'},
      { title : "노랑통닭 숙대점", lat: 37.5467, lng: 126.9703 , address : "서울 용산구 청파동2가 120-50", num : "02-701-6969", info3: '0.5' , review: '급식 카드를 안 받아 줘서 먹을 수가 없었어요요' , info1:  '후라이드 양념 반'},
      { title : "삼일 기사식당", lat: 37.5461, lng: 126.9701, address : "서울 용산구 청파동2가 99-1", num : "02-719-5648" ,info3: '3.0' , review: '주변에 어른들이 많아서 카드가 눈치보였어요' , info1:  "낙지 볶음" },
      { title : "엘 마레", lat: 37.5469, lng: 126.9699, address : "서울 용산구 청파동2가 104-1", num : "02-715-2760" ,info3: "5.0" , review: '여름에 너무 먹기 좋아요' , info1:  "수박주스"},
      { title : "이삭토스트 숙대점", lat: 37.5469, lng: 126.9699 , address : "서울 용산구 청파동2가 66-2", num : "02-706-2248" ,info3: '3.5' , review: '소스 양이 점점 적어지는 거 같아서 아쉬워요' , info1:  '햄 스페셜'},
      { title : "음식미담", lat: 37.5456, lng: 126.9669 , address : "서울 용산구 청파동2가 64-3", num : "02-701-9120" ,info3 : '4.0' , review: '맛있는데 위생이 조금 안 좋은 거 같아요' , info1:"갈릭김치치즈 볶음밥"},
      { title : "쎄라비", lat: 37.5457, lng: 126.9662, address : "서울 용산구 청파동2가 64-9", num : "02-3272-6707"  ,info3: '5.0' , review: '너무 맛있고 싸서 좋아요요' , info1:  '홍차라떼'},
      { title : "포라임 숙대점", lat: 37.5458, lng: 126.9658, address :"서울 용산구 청파동2가 55-1", num:"02-6418-0079" ,info3: '5.0' , review: '양이 많고 가격도 괜찮은 거 같아요. 사람이 항상 많아요' , info1:  "쌀국수"},
      { title : "씨유 숙대원룸점" , lat : 37.5435, lng : 126.965, address :"서울 용산구 백범로87길 25  가동 1층 (원효로1가)", num : "080-80-3663"  ,info3: '2.0' , review: '지난번에 직원분이 카드 결제 방법을 몰라서 카드 사용을 못했어요' , info1:""},
      { title : "정림식당", lat :37.539 , lng : 126.9686, num : "02-716-8560", address: "서울 용산구 원효로1가 121-75" , info3: '5.0' , review: '이거 먹고나면 배가 엄청 부르고 좋아요' , info1:  '오늘의 백반'},
      { title : "(주)코리아세븐 용산아크로타워점" , lat :37.537 , lng : 126.9686, num : "" , address:"서울 용산구 백범로90길 26  101-103 (문배동  용산아크로타워)"  ,info3: '4.5' , review: '항상 직원분이 친절했어요' , info1:""},
      { title : "시저(CAESAR)", lat : 37.5369 , lng :126.9685 , num : "" , address:"서울 용산구 문배동 24-21"    ,info3: "4.0" , review: '비싸긴 하지만 색다른 메뉴들이 많아서 좋았어요.' , info1: "고르곤졸라 피자"},
      { title : "홍콩반점 0410 플러스 문배지점", lat : 37.5369 , lng :126.9696 , num :"" , address:"서울 용산구 문배동 24-8"  ,info3: '5.0' , review: '사장님이 친절하시고 군만두도 서비스로 주셨어요' , info1:  '짜장면' },
      { title : "일미감자탕", lat :37.537 , lng : 126.9695, num : "02-715-8338", address:"서울 용산구 문배동 24-8" ,info3: '5.0' , review: '너무 맛있어요. ' , info1:  '감자탕' },
      { title : "(주)본궁 문배동육칼 본점" , lat :37.5369 , lng :126.9704 , num :"02-713-6204" , address: "서울 용산구 문배동 34-1"  ,info3: "4.0" , review: '맛있는데 사람이 너무 많아서 정신이 없었어요' , info1:  '육개장 칼국수' },
      { title : "GS25용산으뜸점", lat :37.537752 , lng :126.969583 , num : "02-2006-2118", address:"서울 용산구 문배동 11-14" ,info3: '3.0' , review: '   ' , info1:  '  '},
      { title : "피자헤븐(용산점)", lat : 37.5376 , lng : 126.9697 , num :"02-703-1827" , address:"서울 용산구 문배동 11-14" ,info3: "1.0" , review: '사장님이 카드 사용이 안된다고 하셔서 못 먹었어요' , info1:  '페퍼로니 피자'},
      { title : "외계인방앗간원효로점" , lat : 37.5375, lng : 126.9692 , num : "02-2236-2927", address:"서울 용산구 백범로90길"   ,info3: '3.0' , review: '맛있고, 담백해요' , info1:  '무가당쌀바게트'},
      { title : "세븐일레븐 용산웰츠타워점" , lat : 37.538, lng : 126.9638, num :"02-1234-1111" , address:"서울 용산구 문배동 11-10"    ,info3: '3.5' , review: '알바생이 친절합니다 ' , info1:  '  '},
      { title : "열정도쭈꾸미 주식회사" , lat : 37.5361 , lng : 126.9726, num :" 070-8256-6331" , address:"서울 용산구 백범로87길 40  가동 1층 (원효로1가)" ,info3: "4.5", review: "맛있고 가격도 싼 거 같아요" , info1: "철판쭈꾸미"},
      { title : "무바", lat : 37.5395, lng : 12.9693, num :"02-536-9799", address:"서울 용산구 원효로1가 43-18" ,info3: '5.0' , review: '치킨도 맛있고 사장님이 콜라도 서비스로 주셨어요' , info1:  '후라이드 치킨' },
      { title : "참숯집", lat : 37.539319, lng : 126.969346 , num : "", address:"서울 용산구 원효로1가 43-30" ,info3: '4.0' , review: '맛있어요 ' , info1:  '소갈비살'},
      { title : "사계절하루밥상", lat : 37.537918, lng : 126.968739 , num :"02-706-8931" , address: "서울 용산구 문배동 11-10"  ,info3: "4.0" , review: '고기와 김치찌개를 같이 먹을 수 있어서 좋아요' , info1:  '하루정식'},
      { title : "차돌남", lat : 37.5385, lng : 126.9686 , num :"" , address: "서울 용산구 원효로1가 128-23" ,info3: "3.5" , review: '맛있고 가격도 싸요요' , info1:  "차돌박이세트" },
      { title : "붐박스(Boom Box)", lat : 37.538866, lng : 126.968962, num :"" , address:"서울 용산구 원효로1가 121-90"  ,info3: '3.5' , review: '음악과 분위기가 멋있는 술집입니다.' , info1:  '특제 수제육포' },
      { title : "어텀브릿(Autumn brit)" , lat : 37.5357 , lng : 126.9715 , num : "02-797-2212", address: "서울 용산구 한강로2가 426" , info3: '4.0' , review: '퓨전 조합이 생각보다 잘 조화되고 가격도 괜찮은 편이었던같아요' , info1:  '시금치 샐러드 우삼겹 파스타'  },
      { title : "불불이족발 삼각지역점" , lat : 37.5361 , lng : 126.9726, num :"" , address:"서울 용산구 한강로1가 254-1" ,info3: '3.5' , review: '매족 이랑 막국수 들어있는 세트가 가성비 좋았습니다' , info1:  '족발'   },
      { title : "구이마당", lat : 37.5361  , lng : 126.9726, num :"02-798-8880" , address: "서울 용산구 백범로99길 62  1층 2층 지상 (한강로1가)" ,info3: '4.5' , review: '밑반찬이 맛있고 고기도 냉동이랑 생 모두 괜찮았습니다' , info1:  '통삼겹살'   },
  
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
          address={selectedStore.address}
          num = {selectedStore.num} //전화번호
          info1={selectedStore.info1} //메뉴
          review={selectedStore.review}
          info3={selectedStore.info3}
        />
      )}
    </div>
  );
}

export default Map;