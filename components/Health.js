import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Health.css';

function Health() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/');
  }

  const [calories, setCalories] = useState(0);
  const [foodItems, setFoodItems] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [foodCalorie, setFoodCalorie] = useState('');

  const addFoodItem = () => {
    const newFoodItem = {
      name: foodName,
      calorie: Number(foodCalorie)
    };
    setFoodItems([...foodItems, newFoodItem]);
    setCalories(calories + Number(foodCalorie));
    setFoodName('');
    setFoodCalorie('');
  };

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBMI(bmiValue.toFixed(2));
  };

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

    <div className='calorie'>
        <img src={process.env.PUBLIC_URL + '/food.png'} alt="food" className='foodimage' />
        <h1>&nbsp;&nbsp;오늘 총 칼로리</h1>
        <br></br>
        <div>
            <label htmlFor="foodName">음식 이름 : </label>
            <input
            type="text"
            id="foodName"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            />
        </div>
        <br></br>
        <div>
            <label htmlFor="foodCalorie">칼로리 : </label>
            <input
            type="number"
            id="foodCalorie"
            value={foodCalorie}
            onChange={(e) => setFoodCalorie(e.target.value)}
            />
        </div>
        <br></br>
        <button onClick={addFoodItem}>음식 추가</button>
        <h3>음식 목록</h3>
        <ul>
            {foodItems.map((food, index) => (
            <li key={index}>
                {food.name} : {food.calorie}kcal
            </li>
            ))}
        </ul>
        <h2>총 칼로리 : {calories}kcal</h2>
        </div>

        <div className='BMI'>
        <img src={process.env.PUBLIC_URL + '/health.png'} alt="health" className='healthimage' />
        <h1>&nbsp;&nbsp;BMI 계산기</h1>
        <br></br>
            <div>
                <label htmlFor="weight">체중(kg) : </label>
                <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <br></br>
            <div>
                <label htmlFor="height">키(cm) : </label>
                <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <br></br>
            <button onClick={calculateBMI}>BMI 계산</button>
            {bmi && <h3>BMI: {bmi}</h3>}
                </div>

                <img src={process.env.PUBLIC_URL + '/BMI.png'} alt="BMI" className='bmiimage' />
    </div>


    
  );
}

export default Health;
