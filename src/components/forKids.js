import React from 'react'
import '../assets/css/styles.scss';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from '../assets/img/puma_brand.svg';
import share_icon from '../assets/img/share_icon.svg';
const ForKids = () => {
    const brands = [
        {
            id: 1,
            img: img1,
            rating: 4.5,
            viewers: 135,
            mrp: 112,
            offer: 20,
            percentate: '20%',
            brnadlogo: ''
        },
        {
            id: 2,
            img: img1,
            rating: 4.5,
            viewers: 135,
            mrp: 112,
            offer: 20,
            percentate: '20%',
            brnadlogo: ''
        },
        {
            id: 3,
            img: img1,
            rating: 4.5,
            viewers: 135,
            mrp: 112,
            offer: 20,
            percentate: '20%',
            brnadlogo: ''
        }
    ];

    return (
        <div className="topbrands_text">
            <div className="col-lg-12">
                <div>
                    <p>FONR KIDS</p>
                    <h5>Top Brands</h5>
                    <h5>Great deals Everyday</h5>
                </div>
                <div className="container cards_position">
                    <div className="row justify-content-center more_deals">
                        {brands.map((item, i) => (
                            <div className="col-lg-3 card_dtl" key={i}>
                                <div className="card">
                                    <div className="images_sec">
                                        <div className='text-left ratings'>
                                            <h5 className="card_head">{item.rating}</h5>
                                            <p className="grey_para">{item.viewers}</p>
                                        </div>
                                        <OwlCarousel
                                            items={1}
                                            className="owl-theme property_car"
                                            margin={20}
                                            loop
                                            dots={true}
                                        >
                                            <div className="item">
                                                <img src={item.img} className="main_img" alt="image" />
                                            </div>
                                            <div className="item">
                                                <img src={item.img} className="main_img" alt="image" />
                                            </div>
                                            <div className="item">
                                                <img src={item.img} className="main_img" alt="image" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                    <div className="card_body text-center">
                                        <div className="d-flex justify-content-center">
                                            <div className='text-center'>
                                                <h5>{item.percentate} OFF</h5>
                                                <p className="body_para text-left">MRP ₹{item.mrp} |  Offer ₹{item.offer} </p>
                                            </div>
                                            
                                        </div>
                                        <div className='hr_line'></div>
                                        <div className='d-flex justify-content-between shop_now'>
                                            <img src={share_icon} alt="share_icon" />
                                            <button>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='deals_btn'>MORE DEALS</button>
                </div>
            </div>
        </div>
    )
}

export default ForKids