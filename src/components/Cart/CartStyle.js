import styled from "styled-components";





export const CartStyle = styled.div`
font-family: Satoshi Regular;

h1{
       font-family: Integralcf;
       font-size: 40px;
       margin-bottom: 20px;
}


.cart{
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 10px;
    align-items: start;
}
.card{
    max-width: 715px;
    width: 100%;
    border: 1px solid #0000001A;
    border-radius: 20px;
    padding: 20px 24px;
    img{
        width: 124px;
        border-radius: 9px;
    }
}
.cart-item,.row-1{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}
.row-col-1{
    display: flex;
    flex-direction: column;
    gap: 20px;
    .row-col-1-row-1{
        display: flex;
        flex-direction: column;
        gap: 3px;
        h3{
            font-size: 20px;
            font-weight: 700;
        }
    }
    .price{
        font-size: 24px;
        font-weight: 700;
    }
}
.cart-item{
    border-bottom: 1px solid #0000001A;
    padding-bottom: 20px;
    margin-bottom: 20px;
    position: relative;
}

.del-icon{
    position: absolute;
    top: 0px;
    right: 0;
   img{
    width: 24px;
    cursor: pointer;
   }
}
.increase{
    border-radius: 62px;
    padding: 12px 20px;
    background-color: #F0F0F0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-size: 20px;
    position: absolute;
    bottom: 8px;
    right: 6px;
    max-width: 126px;
    width: 100%;
}
svg{
    cursor: pointer;
}
.summary{
    max-width: 505px;
    width: 100%;
    border: 1px solid #0000001A;
    border-radius: 20px;
    padding: 20px 24px;
    h1{
        font-size: 24px;
        font-family: Satoshi Regular;
        font-weight: 700;
    }
    .total-row-1{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        font-size: 20px;
    }
    .line{
        border-bottom: 1px solid #0000001A;
        padding-bottom: 20px;
    }
}
.check-row-1{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 20px;
    .input{
        display: flex;
        align-items: center;
        max-width: 320px;
        width: 100%;
        padding: 12px 16px;
        border-radius: 62px;
        background-color: #F0F0F0;
        gap: 12px;
        svg{
            fill: #00000066;
        }
    }
    input{
        border: none;
        outline: none;
        background-color: transparent;
        font-family: inherit;
    }
    .apply{
        max-width: 119px;
        width: 100%;
        border-radius: 62px;
        padding: 12px 16px;
        background-color: #000000;
        color: white;
        cursor: pointer;
    }

}
.toCheck{
     max-width: 457px;
     width: 100%;
        border-radius: 62px;
        padding: 16px 54px;
        background-color: #000000;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
}

//media querry

@media only screen and (max-width : 850px){
    .cart{
grid-template-columns: 1fr;
    }
    .summary{
    max-width: 715px;
    }
}
@media only screen and (max-width : 520px){
   h1{
       font-size: 32px;
}

.row-col-1{
    .row-col-1-row-1{
        h3{
            font-size: 16px;
        }
    }
    .price{
        font-size: 20px;
    }
}

.summary{
  
    h1{
        font-size: 20px;
    }
    .total-row-1{
        font-size: 13px;
    }
}
.check-row-1{
    
    input{
        border: none;
        outline: none;
        background-color: transparent;
    }
    

}

}


@media only screen and (max-width : 424px){
    .card{
    padding: 14px;
    img{
        width: 99px;
    }
}

 .del-icon{
   img{
    width: 15px;
   }
}


}
@media only screen and (max-width : 374px){
    .summary{
    padding: 14px;
    }
    .increase{
    padding: 12px;
    font-size: 16px;
    max-width: 100px;
}
}
`