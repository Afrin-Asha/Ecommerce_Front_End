import { useState } from 'react'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AccountPage from './pages/AccountPage'
import BlogPage from './pages/BlogPage'
import ProductsPage from './Pages/ProductsPage'
import ThankYouPage from './pages/ThankYouPage'
import FAQPage from './pages/FAQPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import CartPage from './pages/CartPage'
import PageNotFound from './Pages/PageNotFound'
import ReviewPage from './pages/ReviewPage'
import SearchPage from './pages/SearchPage'
import checkoutPage from './pages/checkoutPage'

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
      <Route path="/checkout" element={<checkoutPage/>} />
      <Route path="/privacy_policy" element={<PrivacyPolicyPage/>} /> 
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  </BrowserRouter> 
  )
}

export default App
