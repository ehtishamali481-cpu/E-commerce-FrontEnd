import styled from "styled-components";



export const TShirt = styled.div`
border-top: 1px solid #0000001A;
padding-top: 20px;
font-family: Satoshi Regular;
.homeBack{
    display: flex;
    align-items: center;
    gap: 0px;
    color: #00000099;
}
.tshirt{
display: flex;
align-items: center;
justify-content: space-between;
gap: 30px;
margin-bottom: 40px;
}

.col-1{
    display: flex;
    gap: 20px;
    .image-row{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .image-row img{
        width: 150px;
        border-radius: 20px;
        
    }
   .main-img{
    width: 444px;
        border-radius: 20px;
   }
}
.col-2{
h1{
    font-size: 36px;
   font-family: Integralcf;
   line-height: 100%;
   letter-spacing: 0%;
   margin-bottom: 10px;
}

    .col-2-row-2{
        display: flex;
        align-items: center;
        gap: 10px;
        s{
            color: #0000004D;
            font-size: 32px;
            font-weight: 700;
             margin-bottom: 10px;
        }
        p{
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        .discount{
            background-color: #FF33331A;
            color: #FF3333;
            width: 72px;
            height: 34px;
            border-radius: 62px;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .para{
        border-bottom: 1px solid #0000001A;
    padding-bottom: 30px;
    margin-bottom: 20px;
    font-size: 16px;
    }
    .color{
        border-bottom: 1px solid #0000001A;
    padding-bottom: 30px;
    margin-bottom: 20px;
    }
    .col-2-3{
        border-bottom: 1px solid #0000001A;
    padding-bottom: 30px;
    margin-bottom: 20px;
    }
    p{
        margin-bottom: 10px;
        color: #00000099;
    }
    .buttons{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    button{
        max-width: 105px;
        width: 100%;
        padding: 12px 24px;
        border-radius: 62px;
        border: none;
        cursor: pointer;
        font-size: 16px;
    }
    .cart-Button{
        max-width: 380px;
        width: 100%;
        background-color: black;
        color: white;
        padding: 16px 54px;
    }
    .col-2-row-4{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .counter{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        padding: 16px 20px;
        background-color: #F0F0F0;
        border-radius: 62px;
        font-size: 18px;
        max-width: 150px;
        width: 100%;
        cursor: pointer;
    }
    .counter span{
        padding: 5px;
    }
}

//media querry
@media only screen and (max-width : 1176px){
    .tshirt{
        flex-wrap: wrap;
    }
}
 @media only screen and (max-width :768px){
    padding-top: 10px;
.col-1{
    display: flex;
    flex-direction: column-reverse;
    .image-row{
    flex-direction: row;
}
}
.buttons{
    button{
        padding: 10px;
        font-size: 12px;
    }
}
.col-2-row-4{
.counter{
    padding: 12px 16px;
    font-size: 14px;
        gap: 20px;
}
}

 }
 @media only screen and (max-width : 576px){

    .col-1{
        text-align: center;
        .main-img{
         max-width: 358px;
        }
        .image-row img{
            width: 111px;
        }
    }
    .col-2{
    h1{
        font-size: 24px;
        line-height: 28px;
    }
    .col-2-row-2{
       s{
        font-size: 24px;
       }
    }
 }
.tshirt{
    justify-content: center;
}
 }
 
 @media only screen and (max-width : 380px){
   .col-1{
        .main-img{
         max-width: 300px;
        }
        .image-row img{
            width: 90px;
        }
    }
.col-2-row-4{
.cart-Button{
    padding: 13px 20px;
}
}

 }


`


export const NavStyle = styled.div`
font-family: Satoshi Regular;
.list{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 200px;
        margin-bottom: 30px;
        border-bottom: 1px solid #0000001A;
        padding-bottom: 10px;
        color: rgba(0, 0, 0, 0.6);
        font-size: 20px;
    }
    .list a.active{
        border-bottom: 2px solid black;
        padding-bottom: 10px;
        color: black;
        font-weight: 600;
    }
@media only screen and (max-width : 820px){
    .list{
        padding: 10px 20px;
    }
}
@media only screen and (max-width : 425px){
    .list{
        font-size: 16px;
        padding: 10px 0px;
    }
}

`

export const ReviewStyle = styled.div`
font-family: Satoshi Regular;
.wrapper{
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
}
.card{
    max-width: 570px;
    border: 1px solid #0000001A;
    padding: 28px 32px;
    border-radius: 20px;
    color: #00000099;
    max-height: 242px;
    height: 100%;
    .item-row-1{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }
     .heading{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
    }
}
.icons{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}
.icons-col-1 p{
    font-size: 24px;
    font-weight: 700;
}
.icons-col-2{
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    .icons-button{
        background-color: #F0F0F0;
        padding: 16px 20px;
        border-radius: 62px;
        display: flex;
        align-items: center;
    }
button{
        max-width: 166px;
        width: 100%;
        padding: 16px 20px;
        border: none;
        border-radius: 62px;
        background-color: black;
        color: white;
        cursor: pointer;
        font-size: 16px;
        white-space: nowrap;
    }
   
}
.latest{
    max-width: 120px;
    width: 100%;
    gap: 20px;
}
.buttons{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    button{
        padding: 16px 54px;
        width: 230px;
        border-radius: 62px;
        border: 1px solid #0000001A;
        background-color: transparent;
        cursor: pointer;
    }
}
.favrite{
    text-align: center;
   
    h1{
        font-size: 48px;
         margin-bottom: 20px;
         text-transform: capitalize;
          font-family: Integralcf;
    }
}
.image-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px; 
    img{
        margin-bottom: 20px;
    }
}
.detailed{
    text-align: left;
    p{
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 700;
    }
}
.price{ 
    s{
        color: #00000066;
    }
    p{
        display: flex;
        align-items: center;
    gap: 10px;
    font-size: 24px;
    }
}

.stars{
    display: flex;
    align-items: center;
    gap: 6px;
}
//media querry
@media only screen and (max-width : 880px){
    .wrapper{
grid-template-columns:  1fr;
}
}
@media only screen and (max-width :640px){

    .icons-col-2{
        .latest{
            display: none;
        }
        button{
            width: 113px;
            padding: 12px 16px;
            font-size: 12px;
        }
    }
    .icons-col-1{
        p{
            font-size: 20px;
        }
    }
}
@media only screen and (max-width:640px){
     .icons-col-1{
        p {
            font-size: 16px;
        }
    }
    .icons-col-2{
        gap: 5px;
    }
    .detailed{
    p{
        font-size: 16px;
    }
}
.price{ 
    p{
    font-size: 20px;
    }
}
.card{
    padding: 10px 22px;
}
}
@media only screen and (max-width : 680px){
    .image-wrapper{
    
    img{
        max-width: 198px;
    }
}
.favrite{
   
    h1{
        font-size: 38px;
        line-height: 36px;
    }
}
}
@media only screen and (max-width : 419px){
     .image-wrapper{
    
    img{
        max-width: 150px;
    }
} 
.stars{
    gap: 3px;
}  
}

`



