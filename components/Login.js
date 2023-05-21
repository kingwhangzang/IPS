import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [cardNumber1, setCardNumber1] = useState('');
  const [cardNumber2, setCardNumber2] = useState('');
  const [cardNumber3, setCardNumber3] = useState('');
  const [cardNumber4, setCardNumber4] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const cardNumber = cardNumber1 + cardNumber2 + cardNumber3 + cardNumber4;

    if (cardNumber.length !== 16 || cardNumber1 === '' || cardNumber2 === '' || cardNumber3 === '' || cardNumber4 === '') {
      alert('카드번호를 정확하게 입력해주세요.');
    } else {
      navigate('/dashboard');
    }
  }

  return (
    <div className="container">
      <img src={process.env.PUBLIC_URL + '/boy.png'} alt="boy" className="boyimage" />
      <h1 className="heading">쑥쑥카드</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="logincard">
          <label htmlFor="cardNumber1" className="label">카드번호 : </label>
          <input
            type="text"
            id="cardNumber1"
            maxLength={4}
            value={cardNumber1}
            onChange={(event) => setCardNumber1(event.target.value)}
            className="input"
          />
          &nbsp; - &nbsp;
          <input
            type="text"
            id="cardNumber2"
            maxLength={4}
            value={cardNumber2}
            onChange={(event) => setCardNumber2(event.target.value)}
            className="input"
          />
          &nbsp; - &nbsp;
          <input
            type="text"
            id="cardNumber3"
            maxLength={4}
            value={cardNumber3}
            onChange={(event) => setCardNumber3(event.target.value)}
            className="input"
          />
          &nbsp; - &nbsp;
          <input
            type="text"
            id="cardNumber4"
            maxLength={4}
            value={cardNumber4}
            onChange={(event) => setCardNumber4(event.target.value)}
            className="input"
          />
        </div>
        <div className="loginpassword">
          <label htmlFor="password" className="label">비밀번호 : </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input"
          />
        </div>
        <div className="loginperson">
          <label htmlFor="referralCode" className="label">추천코드 : </label>
          <input
            type="text"
            id="referralCode"
            value={referralCode}
            onChange={(event) => setReferralCode(event.target.value)}
            className="input"
          />
        </div>
        <button 
          type="submit" 
          className="button"
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
