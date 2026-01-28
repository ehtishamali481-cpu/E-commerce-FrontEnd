import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import ProductInformations from './components/ProductInformation/ProductInformations'
import ProductDetailsProper from './components/ProductInformation/ProductDetailsProper'
import RatingReview from './components/ProductInformation/RatingReview'
import Faqs from './components/ProductInformation/Faqs'
import TestimonialProvider from './components/contextApi/Context'
import MainCategory from './components/Category/MainCategory'
import { CartProvider } from './components/contextApi/CartContext'
import Cart from './Pages/Cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <CartProvider>
      <TestimonialProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productDetails/*' element={<ProductInformations />}>
              {/* <Route index element={<RatingReview />} /> */}
              <Route index
                element={<RatingReview />}
              />
              <Route path='details' element={<ProductDetailsProper />} />
              <Route path='reviews' element={<RatingReview />} />
              <Route path='faqs' element={<Faqs />} />
            </Route>
            <Route path='/mainCategory' element={<MainCategory />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
          <ToastContainer position="top-center" autoClose={2000} />
        </BrowserRouter>
      </TestimonialProvider>
    </CartProvider>
  )
}

export default App
