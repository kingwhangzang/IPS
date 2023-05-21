import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import './Mypage.css';

function Mypage() {
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    email: '',
    cardnumber: '',
    birth: '',
    phone: '',
    profilePic: '',
  });
  

  function handleUserInfoUpdate(event) {
    event.preventDefault();

    const updatedInfo = {
      nickname: event.target.name.value,
      email: event.target.email.value,
      profilePic: event.target.profilePic.files[0],
      cardnumber: event.target.cardnumber.value,
      birth: event.target.birth.value,
      phone: event.target.phone.value,
    };

    setUserInfo(updatedInfo);
  }

  function handleLogout() {
    window.location.href = '/';
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

      <div className='userinfo'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={userInfo.profilePic ? URL.createObjectURL(userInfo.profilePic) : 'noonsong.png'} alt="프로필 사진" style={{ marginRight: '3em' }} />
        <div>
            <h2>내 정보</h2>
          <p>닉네임: {userInfo.nickname}</p>
          <p>이메일: {userInfo.email}</p>
          <p>카드번호: {userInfo.cardnumber}</p>
          <p>생년월일: {userInfo.birth}</p>
          <p>핸드폰번호: {userInfo.phone}</p>
        </div>
      </div>
      </div>
      <img src={process.env.PUBLIC_URL + '/zandi.png'} alt="잔디 사진" className="zandiimage"/>
      <div className='userinfochange'>
        <h2>사용자 정보 수정</h2>
        <form onSubmit={handleUserInfoUpdate}>
          <label>
            닉네임 : 
            &nbsp;
            <input type="text" name="name" defaultValue={userInfo.nickname} />
          </label>
          <br></br>
          <br></br>
          <label>
            이메일 :
            &nbsp;
            <input type="email" name="email" defaultValue={userInfo.email} />
          </label>
          <br></br>
          <br></br>
          <label>
            카드번호 :
            &nbsp;
            <input type="text" name="cardnumber" defaultValue={userInfo.cardnumber} />
          </label>
          <br></br>
          <br></br>
          <label>
            생년월일 :
            &nbsp;
            <input type="date" name="birth" defaultValue={userInfo.birth} />
          </label>
          <br></br>
          <br></br>
           <label>
            핸드폰번호 :
            &nbsp;
            <input type="tel" name="phone" defaultValue={userInfo.phone} />
          </label>
          <br></br>
          <br></br>
          <label>
            프로필 사진 :
            &nbsp;
            <input type="file" name="profilePic" accept="image/*" onChange={(event) => setUserInfo({userInfo, profilePic: event.target.files[0] })} />
          </label>
          <br></br>
          <br></br>
          <button type="submit">수정</button>
        </form>
      </div>
    </div>
  );
}

export default Mypage;