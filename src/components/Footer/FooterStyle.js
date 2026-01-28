import styled from "styled-components";

export const FooterStyle = styled.div`
  font-family: "Satoshi Regular";
  max-width: 1440px;
  margin: 0 auto;
  .stayUptodate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 36px 64px;
    background-color: #000;
    border-radius: 20px;
    max-width: 1240px;
    margin: 0 auto;
 position: relative;
    top: 70px;
    left: 0px;
    margin: 0px 80px;
  }

  .stayUptodate h1 {
    color: #fff;
    max-width: 551px;
    font-size: 40px;
    line-height: 45px;
    font-family: "Integralcf";
  }

  .input {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 12px 16px;
    border-radius: 62px;
    gap: 10px;
    margin-bottom: 12px;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    font-family: inherit;
  }

  input::placeholder {
    color: #00000066;
  }

  button {
    padding: 12px 16px;
    border-radius: 62px;
    border: none;
    cursor: pointer;
    width: 349px;
    font-size: 16px;
    font-weight: 500;
  }
  .wrapper-footer-row{
    background-color: #f0f0f0;
    padding: 100px 64px;
    border-bottom: 1px solid #0000001A;
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    gap: 20px;

  }

  .row-2-col-1 {
    max-width: 248px;
  }

  .row-2-col-1 h1 {
    font-size: 33px;
    margin-bottom: 30px;
    font-family: "Integralcf";
  }

  .row-2-col-1 p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 30px;
  }

  .icons {
    display: flex;
    gap: 20px;
  }

  .icons svg {
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    padding: 5px;
    border: 1px solid #00000033;
  }

  .row-2-col-2 {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .row-2-col-2 span {
    font-size: 16px;
    font-weight: 600;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .footer-last-row{
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px;
    color : #00000099;
  }

 //media querry

  @media only screen and (max-width : 1024px){
      .stayUptodate {
       padding: 10px 24px;
    }
      .stayUptodate h1 {
      font-size: 32px;
      line-height: 35px;
    }
      .wrapper-footer-row{
    grid-template-columns: 2fr repeat(3, 1fr);

  }
  }
  @media only screen and (max-width:840px){
    
    .stayUptodate {
      flex-direction: column;
      text-align: start;
       margin: 0px 10px;
    }
  }
  @media (max-width: 768px) {
    .stayUptodate h1 {
      font-size: 32px;
      line-height: 35px;
      margin-bottom: 20px;
    }
  .stayUptodate {
       padding: 10px 14px;
       flex-shrink: 0;
    }
    .input {
      width: 100%;
    }

    button {
      width: 100%;
    }

    .wrapper-footer-row {
      align-items: start;
      padding: 60px 20px;
      margin-top: 30px;
      
    }
.row-2-col-1{
    display: flex;
    flex-direction: column;
     text-align: start;
     h1{
        margin-bottom: 10px;
     }
     p{
        margin-bottom: 10px;
     }
}
    .icons {
      justify-content: start;
      gap: 10px;
    }

    ul {
      align-items: start;
    }
    .row-2-col-2{
    gap: 15px;
        ul{
       gap: 16px;
       font-size: 14px;
        }
        
    }
      .footer-last-row{
        flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 20px;
     .cards-icon img{
      width: 50px;
    }
  }
      .wrapper-footer-row{
    grid-template-columns: 1fr 1fr 1fr;

  }
  }
  @media only screen and (max-width : 640px){
         .wrapper-footer-row{
    grid-template-columns: repeat(2, 1fr);

  }
  .row-2-col-1{
    grid-column: 1/-1;
  }
  }
  @media only screen and (max-width : 320px){
      .stayUptodate h1 {
      font-size: 28px;
    }
          .footer-last-row{
    font-size: 14px;
  }
  }
`;
