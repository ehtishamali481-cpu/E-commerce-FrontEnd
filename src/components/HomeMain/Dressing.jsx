import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Dressing = () => {
  const [dress, setDress] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/data.json");
        setDress(res.data[2].dressStyle);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <DressingStyle id='brand'>
      <h1>BROWSE BY DRESS STYLE</h1>
      <div className="dressing-style">
        {dress.map((dressing) => (
          <span
            key={dressing.id}
            className="dress-card"
            style={{ backgroundImage: `url(${dressing.image})` }}
          >
            <Link to={`/mainCategory?postId=${dressing.postId}`}
              onClick={() => window.scrollTo(0, 0)}
            />
            <div className="image-name">{dressing.name}</div>
          </span>
        ))}
      </div>
    </DressingStyle>
  );
};

export default Dressing;



const DressingStyle = styled.div`
    background-color: #F0F0F0;
  border-radius: 40px;
  text-align: center;
  padding: 50px 30px;
   margin-bottom: 80px;
  h1{
    font-size: 48px;
    line-height: 100%;
    margin-bottom: 30px;
     font-family: Integralcf;
  }
.dressing-style {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 20px;
}

.dress-card {
  background-size: cover;
  background-position: center;
}

.dress-card:nth-child(4n + 1),
.dress-card:nth-child(4n + 4) {
  grid-column: span 4;
}

.dress-card:nth-child(4n + 2),
.dress-card:nth-child(4n + 3) {
  grid-column: span 7;
}

.dress-card {
  position: relative;
  height: 289px;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  overflow: hidden;
}

.dress-card a {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.image-name {
  position: absolute;
  top: 10px;
  left:30px;
  z-index: 2;
  font-size: 36px;
  font-weight: 700;
  font-family: Satoshi Regular;
}


// media query
@media only screen and (max-width:1024px){
     padding: 16px;
     border-radius: 20px;
    h1{
        font-size: 28px;
        line-height: 36px;
        letter-spacing: 0%;
    }
}
@media (max-width: 850px) {
  .dressing-style {
    grid-template-columns: 1fr;
  }

  .dress-card {
    grid-column: span 1 !important;
    height: 190px;
  }
  .image-name {
  font-size: 24px;
}
}
`