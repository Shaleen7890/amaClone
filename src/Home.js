import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
    <div className='home-container'>
        <img className='home-image' src='https://www.koimoi.com/wp-content/new-galleries/2022/07/tom-cruises-last-5-movies-had-two-major-hits-but-three-flops-001.jpg'/>
    </div>
      <div className='home-row'>
        <Product id='125678' image='https://www.jiomart.com/images/product/original/rvcpsev74t/fast-travel-school-bag-class-5-10-large-4-partition-45-l-laptop-collage-office-travel-backpack-unisex-product-images-rvcpsev74t-0-202205101702.jpg' 
            price={24} rating={3} title='Choose from a wide range of Handbags For Ladies at Amazon.in. Get Free 1 or 2 day delivery with Amazon Prime, EMI offers, ...'/>
        <Product id='125478' image='https://m.media-amazon.com/images/I/61vNo+aPWUL._SY450_.jpg' price={15} rating={5} title='THE BEST WATCHES AND SMARTWATCHES STORE ONLINE. WRIST WATCHES AND SMARTWATCHES FOR MEN, WOMEN, AND KIDS. Watches have evolved'/>
        <Product id='125278' image='https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg' price={10} rating={4} title="The Lean Startup is a new approach to business that's being adopted around the world. It is changing the way companies are built and new products are ..."/>
      </div>
      <div className='home-row'>
        <Product id='124578' image='https://5.imimg.com/data5/SELLER/Default/2022/8/BH/EP/UC/153892388/boys-white-sports-shoes-3--500x500.jpg' price={50} rating={4} title='Browse & Discover Thousands of products. Read Customer Reviews and Find Best Sellers. Explore latest selection of Mobiles, Tablets, Cameras & More. Pay on Delivery. No Cost EMI Available. Easy & Fast Delivery. Best Deals. Huge Selection. Low Prices. Great Offers.'/>
        <Product id='124878' image='https://rukminim1.flixcart.com/image/416/416/kwdv3bk0/bottle/5/3/8/500-stainless-steel-double-wall-vacuum-thermos-water-bottle-with-original-imag92kehgedfrha.jpeg?q=70' 
            price={52} rating={3} title='Exciting Lives Personalised Water Bottle Photo And Name Water Bottle Sipper. Bottle For Kids Friends Solimo Plastic Water Bottle Set (Set of 3, 800 Milliliters, Multicolor) : ,Sports Bottle : Amazon.in: Home & Kitchen.'/>
        <Product id='127578' image='https://pro.sony/s3/2017/09/18134059/hdc5500_3q_190225_01-Large.jpg' price={46} rating={3} title="Camcorders let you click still images as well as record videos of beautiful memories of your life. Whether you wish to create a home video or record a friend's ..."/>
      </div>
      <div className='home-row'>
        <Product id='121478' image='https://i.pcmag.com/imagery/reviews/02N40t9WkQaZGck4fOCHBCo-10..v1569471247.jpg' price={42} rating={5} title='Top brands for Phones and Electronics. Latest trends in Fashion. Free Shipping available* Browse & Discover Thousands of products. Read Customer Reviews and Find Best Sellers. Great Offers. Top Brands. Low Prices. Easy & Fast Delivery. Best Deals.'/>
        <Product id='122578' image='https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc5%2F6a%2Fc56aa4d692665cfcbe679ad17327df32f65ae123.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D' 
            price={48} rating={5} title='Shop from a wide selection of 2 Lakh+ styles, 5500+ brands. Latest trends. 30 days returns. Browse & Discover Thousands of products. Read Customer Reviews and Find Best Sellers.'/>
      </div>
    </div>
  )
}

export default Home