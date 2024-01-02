import React from 'react';

const Home = () => {
    return (
      
   <div>           
    <div className="main-wrapper">
       
        {/* <!-- offcanvas overlay start --> */}
        <div className="offcanvas-overlay"></div>
        {/* <!-- offcanvas overlay end --> */}
        {/* <!-- OffCanvas Wishlist Start --> */}
        <div id="offcanvas-wishlist" className="offcanvas offcanvas-wishlist">
            <div className="inner">
                <div className="head">
                    <span className="title">Wishlist</span>
                    <button className="offcanvas-close">×</button>
                </div>
                <div className="body customScroll">
                    <ul className="minicart-product-list">
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/1.webp" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Modern Smart Phone</a>
                                <span className="quantity-price">1 x <span className="amount">$21.86</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/2.webp" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Bluetooth Headphone</a>
                                <span className="quantity-price">1 x <span className="amount">$13.28</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/3.webp" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Smart Music Box</a>
                                <span className="quantity-price">1 x <span className="amount">$17.34</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="foot">
                    <div className="buttons">
                        <a href="wishlist.html" className="btn btn-dark btn-hover-primary mt-30px">view wishlist</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- OffCanvas Wishlist End --> */}
        {/* <!-- OffCanvas Cart Start --> */}
        <div id="offcanvas-cart" className="offcanvas offcanvas-cart">
            <div className="inner">
                <div className="head">
                    <span className="title">Cart</span>
                    <button className="offcanvas-close">×</button>
                </div>
                <div className="body customScroll">
                    <ul className="minicart-product-list">
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/1.webp" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Modern Smart Phone</a>
                                <span className="quantity-price">1 x <span className="amount">$18.86</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/2.webp" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Bluetooth Headphone</a>
                                <span className="quantity-price">1 x <span className="amount">$43.28</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/3.webp" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Smart Music Box</a>
                                <span className="quantity-price">1 x <span className="amount">$37.34</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="foot">
                    <div className="buttons mt-30px">
                        <a href="cart.html" className="btn btn-dark btn-hover-primary mb-30px">view cart</a>
                        <a href="checkout.html" className="btn btn-outline-dark current-btn">checkout</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- OffCanvas Cart End --> */}
        {/* <!-- OffCanvas Menu Start --> */}
        <div id="offcanvas-mobile-menu" className="offcanvas offcanvas-mobile-menu">
            <button className="offcanvas-close"></button>
            <div className="user-panel">
                <ul>
                    <li><a href="tel:0123456789"><i className="fa fa-phone"></i> +012 3456 789</a></li>
                    <li><a href="mailto:demo@example.com"><i className="fa fa-envelope-o"></i> demo@example.com</a></li>
                    <li><a href="my-account.html"><i className="fa fa-user"></i> Account</a></li>
                </ul>
            </div>
            <div className="inner customScroll">
                <div className="offcanvas-menu mb-4">
                    <ul>
                        <li><a href="#"><span className="menu-text">Home</span></a>
                            <ul className="sub-menu">
                                <li><a href="index.html"><span className="menu-text">Home 1</span></a></li>
                                <li><a href="index-2.html"><span className="menu-text">Home 2</span></a></li>
                            </ul>
                        </li>
                        <li><a href="about.html">About</a></li>
                        <li>
                            <a href="#"><span className="menu-text">Pages</span></a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#"><span className="menu-text">Inner Pages</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="404.html">404 Page</a></li>
                                        <li><a href="order-tracking.html">Order Tracking</a></li>
                                        <li><a href="faq.html">Faq Page</a></li>
                                        <li><a href="coming-soon.html">Coming Soon Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text"> Other Shop Pages</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="cart.html">Cart Page</a></li>
                                        <li><a href="checkout.html">Checkout Page</a></li>
                                        <li><a href="compare.html">Compare Page</a></li>
                                        <li><a href="wishlist.html">Wishlist Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text">Related Shop Page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="my-account.html">Account Page</a></li>
                                        <li><a href="login.html">Login & Register Page</a></li>
                                        <li><a href="empty-cart.html">Empty Cart Page</a></li>
                                        <li><a href="thank-you-page.html">Thank You Page</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#"><span className="menu-text">Shop</span></a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#"><span className="menu-text">Shop Page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="shop-3-column.html">Shop 3 Column</a></li>
                                        <li><a href="shop-4-column.html">Shop 4 Column</a></li>
                                        <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                        <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                        <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a>
                                        </li>
                                        <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a>
                                        </li>
                                        <li><a href="cart.html">Cart Page</a></li>
                                        <li><a href="checkout.html">Checkout Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text">product Details Page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="single-product.html">Product Single</a></li>
                                        <li><a href="single-product-variable.html">Product Variable</a></li>
                                        <li><a href="single-product-affiliate.html">Product Affiliate</a></li>
                                        <li><a href="single-product-group.html">Product Group</a></li>
                                        <li><a href="single-product-tabstyle-2.html">Product Tab 2</a></li>
                                        <li><a href="single-product-tabstyle-3.html">Product Tab 3</a></li>
                                        <li><a href="single-product-slider.html">Product Slider</a></li>
                                        <li><a href="single-product-gallery-left.html">Product Gallery Left</a></li>
                                    </ul>
                                    </li>
                                    <li>
                                        <a href="#"><span className="menu-text">Single Product Page</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="single-product-gallery-right.html">Product Gallery
                                                Right</a> </li>
                                            <li><a href="single-product-sticky-left.html">Product Sticky Left</a>
                                            </li>
                                            <li><a href="single-product-sticky-right.html">Product Sticky Right</a>
                                            </li>
                                            <li><a href="compare.html">Compare Page</a></li>
                                            <li><a href="wishlist.html">Wishlist Page</a></li>
                                            <li><a href="my-account.html">Account Page</a></li>
                                            <li><a href="login.html">Login & Register Page</a></li>
                                            <li><a href="empty-cart.html">Empty Cart Page</a></li>
                                        </ul>
                                    </li>
                            </ul>
                            </li>
                            <li><a href="#"><span className="menu-text">Blog</span></a>
                                <ul className="sub-menu">
                                    <li><a href="blog-grid.html">Blog Grid Page</a></li>
                                    <li><a href="blog-grid-left-sidebar.html">Grid Left Sidebar</a></li>
                                    <li><a href="blog-grid-right-sidebar.html">Grid Right Sidebar</a></li>
                                    <li><a href="blog-list.html">Blog List Page</a></li>
                                    <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a></li>
                                    <li><a href="blog-list-right-sidebar.html">List Right Sidebar</a></li>
                                    <li><a href="blog-single.html">Blog Single Page</a></li>
                                    <li><a href="blog-single-left-sidebar.html">Single Left Sidebar</a></li>
                                    <li><a href="blog-single-right-sidebar.html">Single Right Sidbar</a></li>
                                </ul>
                                </li>
                                <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                {/* <!-- OffCanvas Menu End --> */}
                <div className="offcanvas-social mt-auto">
                    <ul>
                        <li>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-google"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-youtube"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- OffCanvas Menu End --> */}
        {/* <!-- Hero/Intro Slider Start --> */}
        <div className="section ">
            <div className="hero-slider swiper-container slider-nav-style-1 slider-dot-style-1">
                {/* <!-- Hero slider Active --> */}
                <div className="swiper-wrapper">
                    {/* <!-- Single slider item --> */}
                    <div className="hero-slide-item slider-height swiper-slide bg-color1" data-bg-image="assets/images/hero/bg/hero-bg-1.webp">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 align-self-center sm-center-view">
                                    <div className="hero-slide-content slider-animated-1">
                                        <span className="category">Welcome To Hmart</span>
                                        <h2 className="title-1">Your Home  Smart Devices &  Best Solution </h2>
                                        <a href="shop-left-sidebar.html" className="btn btn-primary text-capitalize">Shop All Devices</a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center position-relative align-items-end">
                                    <div className="show-case">
                                        <div className="hero-slide-image">
                                            <img src="assets/images/hero/inner-img/hero-1-1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single slider item --> */}
                    <div className="hero-slide-item slider-height swiper-slide bg-color1" data-bg-image="assets/images/hero/bg/hero-bg-1.webp">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 align-self-center sm-center-view">
                                    <div className="hero-slide-content slider-animated-1">
                                        <span className="category">Welcome To Hmart</span>
                                        <h2 className="title-1">Your Home  Smart Devices & Best Solution </h2>
                                        <a href="shop-left-sidebar.html" className="btn btn-primary text-capitalize">Shop All Devices</a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center position-relative align-items-end">
                                    <div className="show-case">
                                        <div className="hero-slide-image">
                                            <img src="assets/images/hero/inner-img/hero-1-2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Add Pagination --> */}
                <div className="swiper-pagination swiper-pagination-white"></div>
                {/* <!-- Add Arrows --> */}
                <div className="swiper-buttons">
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </div>
        </div>
        {/* <!-- Hero/Intro Slider End --> */}
        {/* <!-- Banner Area Start --> */}
        <div className="banner-area style-one pt-100px pb-100px">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="single-banner nth-child-1">
                            <img src="assets/images/banner/3.webp" alt=""/>
                            <div className="banner-content nth-child-1">
                                <h3 className="title">Smart Watch For  Your Hand</h3>
                                <span className="category">From $29.00</span>
                                <a href="shop-left-sidebar.html" className="shop-link"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-banner nth-child-2 mb-30px mb-lm-30px mt-lm-30px ">
                            <img src="assets/images/banner/4.webp" alt=""/>
                            <div className="banner-content nth-child-2">
                                <h3 className="title">Headphones</h3>
                                <span className="category">From $95.00</span>
                                <a href="shop-left-sidebar.html" className="shop-link"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="single-banner nth-child-2">
                            <img src="assets/images/banner/5.webp" alt=""/>
                            <div className="banner-content nth-child-3">
                                <h3 className="title">Smartphone</h3>
                                <span className="category">From $69.00</span>
                                <a href="shop-left-sidebar.html" className="shop-link"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Banner Area End --> */}
        {/* <!-- Product Area Start --> */}
        <div className="product-area pb-100px">
            <div className="container">
                {/* <!-- Section Title & Tab Start --> */}
                <div className="row">
                    <div className="col-12">
                        {/* <!-- Tab Start --> */}
                        <div className="tab-slider d-md-flex justify-content-md-between align-items-md-center">
                            <ul className="product-tab-nav nav justify-content-start align-items-center">
                                <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#newarrivals">New Arrivals</button>
                                </li>
                                <li className="nav-item"><button className="nav-link active" data-bs-toggle="tab" data-bs-target="#toprated">Top Rated</button>
                                </li>
                                <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#featured">Featured</button>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Tab End --> */}
                    </div>
                </div>
                {/* <!-- Section Title & Tab End --> */}
                <div className="row">
                    <div className="col">
                        <div className="tab-content mt-60px">
                            {/* <!-- 1st tab start --> */}
                            <div className="tab-pane fade show active" id="newarrivals">
                                <div className="row mb-n-30px">
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                                <span className="new">New</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/1.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/1.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Modern Smart Phone
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                                <span className="sale">-10%</span>
                                            <span className="new">New</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/2.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/2.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Bluetooth Headphone
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="old">$48.50</span>
                                                <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                                <span className="new">Sale</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/3.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/3.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Smart Music Box
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                                <span className="new">New</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/4.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/1.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Air Pods 25Hjkl Black
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/5.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/5.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Smart Hand Watch
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                                <span className="sale">-8%</span>
                                            <span className="new">Sale</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/6.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/6.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Smart Table Camera
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="old">$138.50</span>
                                                <span className="new">$112.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                                <span className="new">Sale</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/7.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/1.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Round Pocket Router
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                                <span className="sale">-5%</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/8.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/8.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Power Bank 10000Mhp
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="old">$260.00</span>
                                                <span className="new">$238.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 1st tab end --> */}
                            {/* <!-- 2nd tab start --> */}
                            <div className="tab-pane fade" id="toprated">
                                <div className="row">
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                                <span className="new">New</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/1.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/1.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Modern Smart Phone
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                                <span className="sale">-10%</span>
                                            <span className="new">New</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/2.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/2.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Bluetooth Headphone
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="old">$48.50</span>
                                                <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                                <span className="new">Sale</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/3.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/3.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Smart Music Box
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                                <span className="new">New</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/4.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/1.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Air Pods 25Hjkl Black
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/5.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/5.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Smart Hand Watch
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        {/* <!-- Single Prodect --> */}
                                        <div className="product">
                                            <span className="badges">
                                                <span className="sale">-8%</span>
                                            <span className="new">Sale</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/6.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/6.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Smart Table Camera
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="old">$138.50</span>
                                                <span className="new">$112.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        <!-- Single Prodect -->
                                        <div className="product">
                                            <span className="badges">
                                                <span className="new">Sale</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/7.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/1.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Round Pocket Router
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        <!-- Single Prodect -->
                                        <div className="product">
                                            <span className="badges">
                                                <span className="sale">-5%</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/8.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/8.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Power Bank 10000Mhp
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="old">$260.00</span>
                                                <span className="new">$238.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 2nd tab end -->
                            <!-- 3rd tab start -->
                            <div className="tab-pane fade" id="featured">
                                <div className="row">
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        <!-- Single Prodect -->
                                        <div className="product">
                                            <span className="badges">
                                                <span className="new">New</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/1.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/1.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Modern Smart Phone
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        <!-- Single Prodect -->
                                        <div className="product">
                                            <span className="badges">
                                                <span className="sale">-10%</span>
                                            <span className="new">New</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/2.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/2.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Bluetooth Headphone
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="old">$48.50</span>
                                                <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        <!-- Single Prodect -->
                                        <div className="product">
                                            <span className="badges">
                                                <span className="new">Sale</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/3.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/3.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Smart Music Box
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        <!-- Single Prodect -->
                                        <div className="product">
                                            <span className="badges">
                                                <span className="new">New</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/4.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/1.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Air Pods 25Hjkl Black
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        <!-- Single Prodect -->
                                        <div className="product">
                                            <span className="badges">
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/5.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/5.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Smart Hand Watch
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        <!-- Single Prodect -->
                                        <div className="product">
                                            <span className="badges">
                                                <span className="sale">-8%</span>
                                            <span className="new">Sale</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/6.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/6.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Smart Table Camera
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="old">$138.50</span>
                                                <span className="new">$112.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        <!-- Single Prodect -->
                                        <div className="product">
                                            <span className="badges">
                                                <span className="new">Sale</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/7.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/1.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Round Pocket Router
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">$38.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                        <!-- Single Prodect -->
                                        <div className="product">
                                            <span className="badges">
                                                <span className="sale">-5%</span>
                                            </span>
                                            <div className="thumb">
                                                <a href="single-product.html" className="image">
                                                    <img src="assets/images/product-image/8.webp" alt="Product" />
                                                    <img className="hover-image" src="assets/images/product-image/8.webp" alt="Product" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <span className="category"><a href="#">Accessories</a></span>
                                                <h5 className="title"><a href="single-product.html">Power Bank 10000Mhp
                                                    </a>
                                                </h5>
                                                <span className="price">
                                                    <span className="old">$260.00</span>
                                                <span className="new">$238.50</span>
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                    className="pe-7s-shopbag"></i></button>
                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                        className="pe-7s-like"></i></button>
                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                        className="pe-7s-refresh-2"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 3rd tab end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Product Area End -->
        <!-- Fashion Area Start -->
        <div className="fashion-area" data-bg-image="assets/images/fashion/fashion-bg.webp">
            <div className="container h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 text-center">
                        <h2 className="title"> <span>Smart Fashion</span> With Smart Devices </h2>
                        <a href="shop-left-sidebar.html" className="btn btn-primary text-capitalize m-auto">Shop All Devices</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fashion Area End -->
        <!-- Feature product area start -->
        <div className="feature-product-area pt-100px pb-100px">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2 className="title">Featured Offers</h2>
                            <p>There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 mb-md-35px mb-lm-35px">
                        <div className="single-feature-content">
                            <div className="feature-image">
                                <img src="assets/images/feature-image/1.webp" alt="">
                            </div>
                            <div className="top-content">
                                <h4 className="title"><a href="single-product.html">Bluetooth Headphone </a></h4>
                                <span className="price">
                            <span className="old"><del>$48.50</del></span>
                                <span className="new">$38.50</span>
                                </span>
                            </div>
                            <div className="bottom-content">
                                <div className="deal-timing">
                                    <div data-countdown="2023/09/15"></div>
                                </div>
                                <a href="single-product-variable.html" className="btn btn-primary  m-auto"> Shop
                                    Now </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="feature-right-content">
                            <div className="image-side">
                                <img src="assets/images/feature-image/2.webp" alt="">
                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                    className="pe-7s-shopbag"></i></button>
                            </div>
                            <div className="content-side">
                                <div className="deal-timing">
                                    <span>End In:</span>
                                    <div data-countdown="2024/09/15"></div>
                                </div>
                                <div className="prize-content">
                                    <h5 className="title"><a href="single-product.html">Ladies Smart Watch</a></h5>
                                    <span className="price">
                                        <span className="old">$48.50</span>
                                    <span className="new">$38.50</span>
                                    </span>
                                </div>
                                <div className="product-feature">
                                    <ul>
                                        <li>Predecessor : <span>None.</span></li>
                                        <li>Support Type : <span>Neutral.</span></li>
                                        <li>Cushioning : <span>High Energizing.</span></li>
                                        <li>Total Weight : <span> 300gm</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="feature-right-content mt-30px">
                            <div className="image-side">
                                <img src="assets/images/feature-image/3.webp" alt="">
                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                    className="pe-7s-shopbag"></i></button>
                            </div>
                            <div className="content-side">
                                <div className="deal-timing">
                                    <span>End In:</span>
                                    <div data-countdown="2023/09/15"></div>
                                </div>
                                <div className="prize-content">
                                    <h5 className="title"><a href="single-product.html">Ladies Smart Watch</a></h5>
                                    <span className="price">
                            <span className="old">$48.50</span>
                                    <span className="new">$38.50</span>
                                    </span>
                                </div>
                                <div className="product-feature">
                                    <ul>
                                        <li>Predecessor : <span>None.</span></li>
                                        <li>Support Type : <span>Neutral.</span></li>
                                        <li>Cushioning : <span>High Energizing.</span></li>
                                        <li>Total Weight : <span> 300gm</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Feature product area End -->
        <!-- Testimonial area start -->
        <div className="trstimonial-area pt-100px pb-100px">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center m-0">
                            <h2 className="title">Client Feedback</h2>
                            <p>There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <!-- Swiper -->
                        <div className="swiper-container content-top slider-nav-style-1">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testi-inner">
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-image">
                                                <img className="img-responsive" src="assets/images/testimonial/1.png" alt="">
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Regan Rosen<span>Client</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testi-inner">
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-image">
                                                <img className="img-responsive" src="assets/images/testimonial/1.png" alt="">
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Regan Rosen<span>Client</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testi-inner">
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-image">
                                                <img className="img-responsive" src="assets/images/testimonial/1.png" alt="">
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Regan Rosen<span>Client</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testi-inner">
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-image">
                                                <img className="img-responsive" src="assets/images/testimonial/1.png" alt="">
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Regan Rosen<span>Client</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Add Arrows -->
                            <div className="swiper-buttons">
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonial area end-->
        <!-- Brand area start -->
        <div className="brand-area pt-100px pb-100px">
            <div className="container">
                <div className="brand-slider swiper-container">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide brand-slider-item text-center">
                            <a href="#"><img className=" img-fluid" src="assets/images/partner/1.png" alt="" /></a>
                        </div>
                        <div className="swiper-slide brand-slider-item text-center">
                            <a href="#"><img className=" img-fluid" src="assets/images/partner/2.png" alt="" /></a>
                        </div>
                        <div className="swiper-slide brand-slider-item text-center">
                            <a href="#"><img className=" img-fluid" src="assets/images/partner/3.png" alt="" /></a>
                        </div>
                        <div className="swiper-slide brand-slider-item text-center">
                            <a href="#"><img className=" img-fluid" src="assets/images/partner/4.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Brand area end -->
        <!-- Blog area start from here -->
        <div className="main-blog-area pb-100px">
            <div className="container">
                <!-- section title start -->
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center mb-30px0px">
                            <h2 className="title">Latest Blog</h2>
                            <p> There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                </div>
                <!-- section title start -->
                <div className="row">
                    <div className="col-lg-6 col-sm-6 mb-xs-30px">
                        <div className="single-blog">
                            <div className="blog-image">
                                <a href="blog-single-left-sidebar.html"><img src="assets/images/blog-image/1.webp" className="img-responsive w-100" alt=""></a>
                            </div>
                            <div className="blog-text">
                                <div className="blog-athor-date line-height-1">
                                    <span className="blog-date"><i className="fa fa-calendar" aria-hidden="true"></i> 27,Jun 2030</span>
                                    <span><a className="blog-author" href="blog-grid.html"><i className="fa fa-user" aria-hidden="true"></i> Wild Nick</a></span>
                                </div>
                                <h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">10 Quick Tips About Smart Product</a></h5>
                                <p>Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore</p>
                                <a href="blog-single-left-sidebar.html" className="btn btn-primary blog-btn"> Read More</a>
                            </div>
                        </div>
                    </div>
                    <!-- End single blog -->
                    <div className="col-lg-6 col-sm-6">
                        <div className="single-blog">
                            <div className="blog-image">
                                <a href="blog-single-left-sidebar.html"><img src="assets/images/blog-image/2.webp" className="img-responsive w-100" alt=""></a>
                            </div>
                            <div className="blog-text">
                                <div className="blog-athor-date line-height-1">
                                    <span className="blog-date"><i className="fa fa-calendar" aria-hidden="true"></i> 27,Jun 2030</span>
                                    <span><a className="blog-author" href="blog-grid.html"><i className="fa fa-user" aria-hidden="true"></i> Oaklee Odom</a></span>
                                </div>
                                <h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">5 Real-Life Lessons About Smart Product</a></h5>
                                <p>Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore</p>
                                <a href="blog-single-left-sidebar.html" className="btn btn-primary blog-btn"> Read More</a>
                            </div>
                        </div>
                    </div>
                    <!-- End single blog -->
                </div>
            </div>
        </div>
        <!-- Blog area end here -->
        <!-- Footer Area Start -->
        <div className="footer-area">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <!-- Start single blog -->
                            <div className="col-md-6 col-lg-3 mb-md-30px mb-lm-30px">
                                <div className="single-wedge">
                                    <div className="footer-logo">
                                        <a href="index.html"><img src="assets/images/logo/footer-logo.png" alt=""></a>
                                    </div>
                                    <p className="about-text">Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore
                                    </p>
                                    <ul className="link-follow">
                                        <li>
                                            <a className="m-0" title="Twitter" target="_blank" rel="noopener noreferrer" href="#"><i className="fa fa-facebook"
                                                aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a title="Tumblr" target="_blank" rel="noopener noreferrer" href="#"><i className="fa fa-tumblr" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a title="Facebook" target="_blank" rel="noopener noreferrer" href="#"><i className="fa fa-twitter" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a title="Instagram" target="_blank" rel="noopener noreferrer" href="#"><i className="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- End single blog -->
                            <!-- Start single blog -->
                            <div className="col-md-6 col-lg-3 col-sm-6 mb-lm-30px pl-lg-60px">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">Services</h4>
                                    <div className="footer-links">
                                        <div className="footer-row">
                                            <ul className="align-items-center">
                                                <li className="li"><a className="single-link" href="my-account.html">My Account</a></li>
                                                <li className="li"><a className="single-link" href="contact.html">Contact</a></li>
                                                <li className="li"><a className="single-link" href="cart.html">Shopping cart</a></li>
                                                <li className="li"><a className="single-link" href="shop-left-sidebar.html">Shop</a></li>
                                                <li className="li"><a className="single-link" href="login.html">Services Login</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End single blog -->
                            <!-- Start single blog -->
                            <div className="col-md-6 col-lg-3 col-sm-6 mb-lm-30px pl-lg-40px">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">My Account</h4>
                                    <div className="footer-links">
                                        <div className="footer-row">
                                            <ul className="align-items-center">
                                                <li className="li"><a className="single-link" href="my-account.html">My Account</a></li>
                                                <li className="li"><a className="single-link" href="contact.html">Contact</a></li>
                                                <li className="li"><a className="single-link" href="cart.html">Shopping cart</a></li>
                                                <li className="li"><a className="single-link" href="shop-left-sidebar.html">Shop</a></li>
                                                <li className="li"><a className="single-link" href="login.html">Services Login</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End single blog -->
                            <!-- Start single blog -->
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">Contact Info</h4>
                                    <div className="footer-links">
                                        <!-- News letter area -->
                                        <p className="address">Address: Your Address Goes Here.</p>
                                        <p className="phone">Phone/Fax:<a href="tel:0123456789"> 0123456789</a></p>
                                        <p className="mail">Email:<a href="mailto:demo@example.com"> demo@example.com</a></p>
                                        <p className="mail"><a href="https://demo@example.com"> demo@example.com</a></p>
                                        <!-- News letter area  End -->
                                    </div>
                                </div>
                            </div>
                            <!-- End single blog -->
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="line-shape-top line-height-1">
                            <div className="row flex-md-row-reverse align-items-center">
                                <div className="col-md-6 text-center text-md-end">
                                    <div className="payment-mth"><a href="#"><img className="img img-fluid" src="assets/images/icons/payment.png" alt="payment-image"></a></div>
                                </div>
                                <div className="col-md-6 text-center text-md-start">
                                    <p className="copy-text"> © 2022 <strong>Hmart</strong> Made With <i className="fa fa-heart" aria-hidden="true"></i> By <a className="company-name" href="https://themeforest.net/user/codecarnival/portfolio">
                                            <strong> Codecarnival </strong></a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer Area End -->
    </div>


    <!-- Modal -->
    <div className="modal modal-2 fade" id="exampleModal" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> <i className="pe-7s-close"></i></button>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-xs-12 mb-lm-30px mb-md-30px mb-sm-30px">
                            <!-- Swiper -->
                            <div className="swiper-container gallery-top">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/1.webp" alt="">
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/2.webp" alt="">
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/3.webp" alt="">
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/4.webp" alt="">
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/5.webp" alt="">
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-container gallery-thumbs mt-20px slider-nav-style-1 small-nav">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/small-image/1.webp" alt="">
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/small-image/2.webp" alt="">
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/small-image/3.webp" alt="">
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/small-image/4.webp" alt="">
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/small-image/5.webp" alt="">
                                    </div>
                                </div>
                                <!-- Add Arrows -->
                                <div className="swiper-buttons">
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-xs-12" data-aos="fade-up" data-aos-delay="200">
                            <div className="product-details-content quickview-content">
                                <h2>Modern Smart Phone</h2>
                                <div className="pricing-meta">
                                    <ul className="d-flex">
                                        <li className="new-price">$20.90</li>
                                    </ul>
                                </div>
                                <div className="pro-details-rating-wrap">
                                    <div className="rating-product">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <span className="read-review"><a className="reviews" href="#">( 2 Review )</a></span>
                                </div>
                                <p className="mt-30px">Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mill veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exet commodo consequat.
                                    Duis aute irure dolor</p>
                                <div className="pro-details-categories-info pro-details-same-style d-flex m-0">
                                    <span>SKU:</span>
                                    <ul className="d-flex">
                                        <li>
                                            <a href="#">Ch-256xl</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pro-details-categories-info pro-details-same-style d-flex m-0">
                                    <span>Categories: </span>
                                    <ul className="d-flex">
                                        <li>
                                            <a href="#">Smart Device, </a>
                                        </li>
                                        <li>
                                            <a href="#">ETC</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pro-details-categories-info pro-details-same-style d-flex m-0">
                                    <span>Tags: </span>
                                    <ul className="d-flex">
                                        <li>
                                            <a href="#">Smart Device, </a>
                                        </li>
                                        <li>
                                            <a href="#">Phone</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pro-details-quality">
                                    <div className="cart-plus-minus">
                                        <input className="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                    </div>
                                    <div className="pro-details-cart">
                                        <button className="add-cart"> Add To
                                            Cart</button>
                                    </div>
                                    <div className="pro-details-compare-wishlist pro-details-wishlist ">
                                        <a href="wishlist.html"><i className="pe-7s-like"></i></a>
                                    </div>
                                </div>
                                <div className="payment-img">
                                    <a href="#"><img src="assets/images/icons/payment.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Modal Cart --> */}
    <div className="modal customize-className fade" id="exampleModal-Cart" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body text-center">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="pe-7s-close"></i></button>
                    <div className="tt-modal-messages">
                        <i className="pe-7s-check"></i> Added to cart successfully!
                    </div>
                    <div className="tt-modal-product">
                        <div className="tt-img">
                            <img src="assets/images/product-image/1.webp" alt="Modern Smart Phone"/>
                        </div>
                        <h2 className="tt-title"><a href="#">Modern Smart Phone</a></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal customize-className fade" id="exampleModal-Wishlist" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body text-center">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="pe-7s-close"></i></button>
                    <div className="tt-modal-messages">
                        <i className="pe-7s-check"></i> Added to Wishlist successfully!
                    </div>
                    <div className="tt-modal-product">
                        <div className="tt-img">
                            <img src="assets/images/product-image/1.webp" alt="Modern Smart Phone"/>
                        </div>
                        <h2 className="tt-title"><a href="#">Modern Smart Phone</a></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal customize-className fade" id="exampleModal-Compare" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body text-center">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="pe-7s-close"></i></button>
                    <div className="tt-modal-messages">
                        <i className="pe-7s-check"></i> Added to compare successfully!
                    </div>
                    <div className="tt-modal-product">
                        <div className="tt-img">
                            <img src="assets/images/product-image/1.webp" alt="Modern Smart Phone"/>
                        </div>
                        <h2 className="tt-title"><a href="#">Modern Smart Phone</a></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>


        </div>
    );
};

export default Home;