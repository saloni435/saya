import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Product from './product';
const ProductList = () => {
    const devices=[
        {
            id:"1",
            name:"Realme 9i",
            price:20000,
            discount:3000,
            star:4,
            brand:"realme",
            image:"https://rukminim1.flixcart.com/image/832/832/ky90scw0/mobile/m/r/u/-original-imagagnffruu7ptd.jpeg",
            quantity:5
        },
        {
            id:"2",
            name:"Vivo Y53s",
            price:22990,
            discount:15940,
            star:4,
            brand:"vivo",
            image:"https://rukminim1.flixcart.com/image/832/832/ks3jjbk0/mobile/p/b/k/y53s-v2058-vivo-original-imag5q35phmm3fjc.jpeg",
            quantity:20


        },
        {
            id:"3",
            name:"APPLE iPhone 12",
            price:70900,
            discount:64949,
            star:4,
            brand:"apple",
            image:"https://rukminim1.flixcart.com/image/832/832/kg8avm80/mobile/q/8/f/apple-iphone-12-dummyapplefsn-original-imafwg8drqaam5vu.jpeg",
            quantity:10


        },
        {
            id:"4",
            name:"Redmi Note 11 ",
            price:14126,
            discount:13498,
            star:4,
            brand:"mi",
            image:"https://rukminim1.flixcart.com/image/832/832/ky90scw0/mobile/m/r/u/-original-imagagnffruu7ptd.jpeg",
            quantity:8
        },
        {
            id:"5",
            name:"vivo T1 5G ",
            price:23990,
            discount:19940,
            star:3,
            brand:"vivo",
            image:"https://rukminim1.flixcart.com/image/832/832/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg",
            quantity:8
        },
        {
            id:"6",
            name:"Redmi Note 11 ",
            price:14126,
            discount:13498,
            star:4,
            brand:"mi",
            image:"https://rukminim1.flixcart.com/image/832/832/ky90scw0/mobile/m/r/u/-original-imagagnffruu7ptd.jpeg",
            quantity:8
        },
        {
            id:"7",
            name:"realme C20 ",
            price:7999,
            discount:7449,
            star:4,
            brand:"realme",
            image:"https://rukminim1.flixcart.com/image/832/832/kn7sdjk0/mobile/w/h/q/c20-rmx3063-realme-original-imagfxfzay72jqvh.jpeg",
            quantity:8
        }
    ]
  return (
    <div>
        <section style={{backgroundColor:"#eee"}}>
  <div className="container py-5">
    <div className="row">
        {devices.map(device=>{
            return <Product device={device} key={device.id}/>
        })}
      
    </div>
  </div>
</section>
    </div>
  )
}

export default ProductList