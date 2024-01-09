import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './Pages/HomePage'
import ContactPage from './pages/ContactPage'
import AccountPage from './Pages/AccountPage'
import BlogPage from './Pages/BlogPage'
import ProductsPage from './Pages/ProductsPage'
import ThankYouPage from './Pages/ThankYouPage'
import FAQPage from './Pages/FAQPage'
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage'
import CartPage from './Pages/CartPage'
import PageNotFound from './Pages/PageNotFound'
import ReviewsPage from './Pages/ReviewsPage'
import SearchPage from './Pages/SearchPage'
import CheckoutPage from './Pages/CheckoutPage'
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/FAQPage" element={<FAQPage/>} />
      <Route path="/thankyou" element={<ThankYouPage/>} />
      <Route path="/reviews" element={<ReviewsPage/>} />
      <Route path="/search_result" element={<SearchPage/>} />
      <Route path="/account" element={<AccountPage/>} />
      <Route path="/blog" element={<BlogPage/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/checkout" element={<CheckoutPage/>} />
      <Route path="/privacy_policy" element={<PrivacyPolicyPage/>} /> 
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  </BrowserRouter> 
  )
}

export default App
