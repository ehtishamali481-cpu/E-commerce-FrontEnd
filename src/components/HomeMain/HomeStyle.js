import styled from "styled-components";






export const MainSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 40px;
 font-family: Satoshi Regular;
 overflow: hidden;
 padding: 0px 40px;
 max-width: 1440px;
 margin: 0 auto;

.section-col-1 h1{
font-size: 64px;
margin-bottom: 20px;
font-family: Integralcf;
max-width: 577px;
letter-spacing: 0%;
line-height: 64px;
}
.section-col-1 p{
font-size: 14px;
margin-bottom: 20px;
max-width: 545px;
color: #00000099;
}
button{
    max-width: 210px;
    width: 100%;
    background-color: #000000;
    padding: 16px 54px;
    border-radius: 62px;
    color: #FFFFFF;
    cursor: pointer;
    margin-bottom: 20px;
}
.section-col-2{
    position: relative;
    top: 14px;
}
 .main-section-img{
    max-width: 610px;
   position: relative;
   top: -8px;
   right: -40px;
}
.details{
    display: flex;
    align-items: center;
    gap: 32px;
}
.details span{
    font-size: 40px;
    font-weight: bold;
}
.detail-col1{
    border-left:1px solid #0000001A ;
    padding-left: 20px;
}
.logo-1{
    position: absolute;
    top: 230px;
    left: 100px;
    width: 56px;
}
.logo-2{
    position: absolute;
    top: 100px;
    right: 34px;
}

  //media Querry
  @media only screen and (max-width :1290px){
   .section-col-1 h1{
    font-size: 58px;
   } 

}
@media only screen and (max-width : 1160px){
       .main-section-img{
    max-width: 480px;
}
.logo-1{
    position: absolute;
    top: 190px;
    left: 60px;
    width: 56px;
}
.logo-2{
    position: absolute;
    top: 70px;
    right: 30px;
    width: 80px;
}
}
@media only screen and (max-width:1050px){
    flex-direction: column;
    align-items: start;
}
  @media only screen and (max-width :768px){
    background-color: #F2F0F1;
 overflow-x: hidden;
 padding: 20px 10px;
   .section-col-1 h1{
    font-size: 36px;
    line-height: 34px;
   } 
   .section-col-1 p{
    font-size: 14px;
   }
    .main-section-img{
    max-width: 510px;
    top: 12px;
}
.details span{
    font-size: 24px;
}

button{
    max-width: 360px;
    width: 100%;
}
.details{
    flex-wrap: wrap;
    justify-content: center;
}
}
@media only screen and (max-width :640px){
   .main-section-img{
    max-width: 390px;
}
.section-col-2{
    top: 25px;
}
.logo-1{
    top: 110px;
    left: 30px;
}
.logo-2{
    position: absolute;
    top: 10px;
    right: 20px;
}
}
@media only screen and (max-width : 494px){
    .detail-col3{
    border: none;
}
}
@media only screen and (max-width : 375px){
       .section-col-1 h1{
    font-size: 32px;
   } 
 .details{
    gap: 7px;
}
    .main-section-img{
    max-width: 330px;
}
}
`
export const ImgSlider = styled.div`
overflow: hidden;
width: 100%;
background-color: black;
margin-bottom: 40px;

.slides{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    height: 122px;
    padding: 0px 50px;
    width: max-content;
    animation: slide 15s linear infinite;
    @keyframes slide {
        0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
    }
}
.slides:hover{
    animation-play-state: paused;
    cursor: pointer;
}
@media only screen and (max-width :768px){
    .slides img{
        width: 90px;
    }
    .slides{
        height: 68px;
    }
}
`


