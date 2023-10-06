import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import {CardImg } from 'reactstrap';
import dream from '../../images/SlIdE1.jpg';
import WEbSLID from '../../images/sliderWEB.png';
import Third from '../../images/BE.png';

import './style.css';
function Homedream() {
  return (
    <div className='slidermain'>
    <Carousel>
      <Carousel.Item>
      <CardImg top width="100%" height={500} src={dream} alt="Card image cap" />

        <Carousel.Caption>
      <div className='WebDevelopment' >

          <h1>Web Development</h1>
          <p>Since our establishment, we have been delivering high-quality 
            and sustainable<br/> software solutions for corporate purposes of worldwide businesses.</p>
        </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

      <CardImg top width="100%" height={500} src={Third} alt="Card image cap" />

        <Carousel.Caption >
        <div className='oneslide' >

          <h1>Experienced Team</h1>
          <p>We are a team of qualified software developers, aimed at creating
             unique <br/>and powerful tools for your business & everyday life.</p>
        </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>      
        <div className='oneslide' >
        <CardImg top width="100%" height={500} src={WEbSLID} alt="Card image cap" />

        <Carousel.Caption>
          <h1>E-commerce Store Expert</h1>
          <p>
          Showcase your products in a graceful and charming display, transforming<br/> the shopping experience into an elegant journey.
          </p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Homedream;