import React from 'react';

const modalcomp = () => {
    return (
        <div>

            
                <div className="modal modal-2 fade" id="exampleModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> <i className="pe-7s-close"></i></button>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-xs-12 mb-lm-30px mb-md-30px mb-sm-30px">
                            {/* <!-- Swiper --> */}
                            <div className="swiper-container gallery-top">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/1.webp" alt=""/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/2.webp" alt=""/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/3.webp" alt=""/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/4.webp" alt=""/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/5.webp" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-container gallery-thumbs mt-20px slider-nav-style-1 small-nav">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/small-image/1.webp" alt=""/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/small-image/2.webp" alt=""/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/small-image/3.webp" alt=""/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/small-image/4.webp" alt=""/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="img-responsive m-auto" src="assets/images/product-image/small-image/5.webp" alt=""/>
                                    </div>
                                </div>
                                {/* <!-- Add Arrows --> */}
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
   
     <div className="modal customize-className fade" id="exampleModal-Cart" tabIndex="-1" aria-hidden="true">
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

    <div className="modal customize-className fade" id="exampleModal-Wishlist" tabIndex="-1" aria-hidden="true">
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

    <div className="modal customize-className fade" id="exampleModal-Compare" tabIndex="-1" aria-hidden="true">
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

export default modalcomp;