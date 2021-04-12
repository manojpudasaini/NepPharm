import React from 'react';
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Img1 from "../../Assets/1.jpg";
import Img2 from "../../Assets/2.jpg";
import Img3 from "../../Assets/3.jpg";

const Home =()=>{
return(
    <div className="carouselContainer">   
    <Carousel showThumbs={false} showStatus={false} >
    <div>
        <img src={Img1}/>
        <p>Legend 1</p>
    </div>
    <div>
        <img src={Img2} />
        <p>Legend 2</p>
    </div>
    <div>
        <img src={Img3} />
        <p>Legend 3</p>
    </div>
</Carousel>
 </div>
)
}

export default Home;