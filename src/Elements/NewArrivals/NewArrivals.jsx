import React from 'react'
import "./NewArrivals.css"

import { AiOutlineRight } from 'react-icons/ai';


const NewArrivals = () => {
    return (
        <div className='newArrivalsContainer' >
            <div className="newArrivalsContainer__inner">
                <div className="heading">
                    <h3>New Arrivals</h3>
                    <span>See All <AiOutlineRight /> </span>
                </div>

                <div className="newArrivalsContainer__inner__cards">
                    
                    <div className="newArrivalsContainer__inner__card">
                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71D9ImsvEtL._UY500_.jpg" alt="" />
                            <span>ID334490</span>
                            <h4>Nike Sports Shoes...</h4>
                            <div className="price">
                                <span className='dashed' >QR 54.67</span>
                                <span className='originnal' >QR 48</span>
                                <span className='discount' >(-100%)</span>
                            </div>
                    </div>
                    
                    <div className="newArrivalsContainer__inner__card">
                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71D9ImsvEtL._UY500_.jpg" alt="" />
                            <span>ID334490</span>
                            <h4>Nike Sports Shoes...</h4>
                            <div className="price">
                                <span className='dashed' >QR 54.67</span>
                                <span className='originnal' >QR 48</span>
                                <span className='discount' >(-100%)</span>
                            </div>
                    </div>
                    
                    <div className="newArrivalsContainer__inner__card">
                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71D9ImsvEtL._UY500_.jpg" alt="" />
                            <span>ID334490</span>
                            <h4>Nike Sports Shoes...</h4>
                            <div className="price">
                                <span className='dashed' >QR 54.67</span>
                                <span className='originnal' >QR 48</span>
                                <span className='discount' >(-100%)</span>
                            </div>
                    </div>
                    
                    <div className="newArrivalsContainer__inner__card">
                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71D9ImsvEtL._UY500_.jpg" alt="" />
                            <span>ID334490</span>
                            <h4>Nike Sports Shoes...</h4>
                            <div className="price">
                                <span className='dashed' >QR 54.67</span>
                                <span className='originnal' >QR 48</span>
                                <span className='discount' >(-100%)</span>
                            </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default NewArrivals