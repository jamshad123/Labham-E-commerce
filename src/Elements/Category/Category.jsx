import React from 'react'
import "./Category.css"

import { AiOutlineRight } from 'react-icons/ai';


const Category = () => {
    return (
        <div className='categoryContainer' >

            <div className="heading">
                <h3>Shop by Category</h3>
                <span>See All Products <AiOutlineRight /> </span>
            </div>

            <div className="tags">
                <span>Men</span>
                <span>Women</span>
                <span>Unisex</span>
            </div>


            <div className="category__cards">
                <div className="category__card">
                    <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71D9ImsvEtL._UY500_.jpg" alt="" />
                    <h4>Shoes</h4>
                </div>
                <div className="category__card">
                    <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71D9ImsvEtL._UY500_.jpg" alt="" />
                    <h4>Shoes</h4>
                </div>
                <div className="category__card">
                    <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71D9ImsvEtL._UY500_.jpg" alt="" />
                    <h4>Shoes</h4>
                </div>
                <div className="category__card">
                    <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71D9ImsvEtL._UY500_.jpg" alt="" />
                    <h4>Shoes</h4>
                </div>
            </div>

        </div>
    )
}

export default Category