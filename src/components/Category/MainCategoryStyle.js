import styled from "styled-components";






export const Main = styled.div`
border-top: 1px solid #0000001A;
margin-top: 20px;
padding-top: 20px;
font-family: Satoshi Regular;
.main{
display: flex;
justify-content: space-between;
gap: 10px;
color: #00000099;

}
  .mob-sideBar {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    z-index: 9999;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    transform: translateY(-20px);
    visibility: hidden;
    opacity: 0;
    transition: all 0.8s ease;
  }
  .mob-sideBar.open{
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }
.sideBar{
    width: 295px;
    border-radius: 20px;
    border: 1px solid #0000001A;
    padding: 20px 24px;

    .row-1{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        font-weight: 700;
        border-bottom: 1px solid #0000001A;
        padding-bottom: 20px;
        margin-bottom: 10px;
       
    }
   
    .row-2{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }
}
.image-wrapper{
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 10px;
   img{
    border-radius: 20px;
   }
}
.col-2-row-1{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
}
.productName{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    gap: 10px;
}
.product-card{
    color: black;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    flex-direction: column;
}
.product-card p{
    display: flex;
    align-items: center;
    gap: 5px;
    s{
        color: #00000066;
    }
}

//media querry
@media only screen and (max-width : 1240px){
.image-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
}


}

@media only screen and (max-width : 950px){
    .sideBar-wrap,.desktop{
        display: none;
    }
    .sideBar{
        width: 100%;
    }
    .productName{
    flex-grow: 0;

}
}

@media only screen and (max-width : 614px){
    .main{
justify-content: center;

}
   .image-wrapper{
   img{
    max-width: 200px;
   }
} 
.product-card{
    font-size: 14px;
}
}
@media only screen and (max-width : 424px){
      .image-wrapper{
   img{
    max-width: 172px;
   }
}  
}
@media only screen and (max-width : 374px){
   .image-wrapper{
   img{
    max-width: 140px;
   }
} 
}
`

export const ImageHeading = styled.div`
color: black;
font-size: 32px;
font-weight: 700;

@media only screen and (max-width :640px ){
font-size: 24px;
}

`