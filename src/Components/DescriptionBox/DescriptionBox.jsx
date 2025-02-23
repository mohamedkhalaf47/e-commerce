import React from 'react'
import './descriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
      <div className="descriptionBox-navigator">
      <div className="descriptionBox-nav-box">Description</div>
      <div className="descriptionBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          An E-Commerce Website Is An Online Platform That Facilitates The Buying
          And Selling Of Products Or Services Over The Internet. It Serves As
          A Virtual Marketplace Where Businesses And Individuals Can Showcase
          Their Products, Interact With Customers, And Conduct Transactions
          Without The Need For A Physical Presence. E-Commerce Websites Have
          Gained Immense Popularity Due To Their Convenience, Accessibility,
          And The Global Reach They Offer.
        </p>
        <p>
          E-Commerce Websites Typically Display Products Or Services Along With
          Detailed Descriptions, Images, Prices, And Any Available Variations
          (e.g, Sizes, Colors). Each Product Usually Has Its Own Dedicated
          Page With Relevant Information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
