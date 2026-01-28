import { useCart } from '../contextApi/CartContext'
import Nav from '../../components/NavBar/Nav'
import Footer from '../../components/Footer/Footer'
import { CartStyle } from './CartStyle'
import { RiDeleteBinLine } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"
import { BsChevronRight } from "react-icons/bs";
import { Icon } from '../../Images';





const CartMain = () => {
    const {
        cart,
        increaseQty,
        decreaseQty,
        removeFromCart,


        totalPrice,
        DeliveryFee,
        discountAmount,
        finalTotal
    } = useCart()

    return (
        <div>
            <Nav />
            <CartStyle className="container">
                <div style={{ margin: "20px 0", fontSize: "14px", display: "flex", alignItems: "center" }}>
                    <Link to="/" style={{ color: "#00000099" }}>Home</Link> <BsChevronRight size={14} style={{ fill: "#00000099" }} />
                    <span>Cart</span>
                </div>
                <h1>Your Cart</h1>
                <div className="cart">
                    <div className="card">
                        {cart.length === 0 && <h2> No Selected Item</h2>}
                        {cart.map(item => (
                            <div key={item.id + item.size} className="cart-item">
                                <div className="row-1">
                                    <img src={item.image} width="80" alt="" />
                                    <div className="row-col-1">
                                        <div className="row-col-1-row-1">
                                            <h3>{item.title}</h3>
                                            <p>Size: <span style={{ color: "#00000099" }}>{item.size}</span></p>
                                            <p>Color : <span style={{ color: "#00000099" }}>{item.color}</span></p>
                                        </div>

                                        <span className='price'>{item.price}</span>
                                    </div>

                                </div>


                                <div className='delete'>
                                    <div onClick={() => removeFromCart(item.id, item.size)} className='del-icon'>
                                        <img src={Icon.DelIcon} alt="" />
                                    </div>
                                    <div className="increase">
                                        <span onClick={() => decreaseQty(item.id, item.size)}><FaMinus size={18} /></span>
                                        <span> {item.quantity} </span>
                                        <span onClick={() => increaseQty(item.id, item.size)}><FaPlus size={18} /></span>
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="summary">
                        <h1>Order Summary</h1>
                        <div className="total">
                            <div className="total-row-1 ">
                                <span style={{ color: "#00000099" }}>Subtotal </span>
                                <span style={{ fontWeight: "700" }}>${totalPrice}</span>
                            </div>
                            <div className="total-row-1 ">
                                <span style={{ color: "#00000099" }}>Discount (20%)  </span>
                                <span style={{ color: "#FF3333", fontWeight: "700" }}>-${discountAmount}</span>
                            </div>
                            <div className="total-row-1 line">
                                <span style={{ color: "#00000099" }}>DeliveryFee </span>
                                <span style={{ fontWeight: "700" }}>${DeliveryFee}</span>
                            </div>

                        </div>
                        <div className="total-row-1">
                            <span>Total </span>
                            <span style={{ fontWeight: "700" }}>${finalTotal}</span>
                        </div>
                        <div className="check-out">
                            <div className="check-row-1">
                                <div className="input">
                                    <GoTag size={21} />
                                    <input type="text" placeholder='Add promo code' />
                                </div>
                                <button className='apply'>Apply</button>
                            </div>
                            <button className='toCheck'>Go to Check out <img src={Icon.ArrowRight} alt="Not Found" /></button>
                        </div>
                    </div>
                </div>
            </CartStyle>
            <Footer />
        </div>
    )
}

export default CartMain


