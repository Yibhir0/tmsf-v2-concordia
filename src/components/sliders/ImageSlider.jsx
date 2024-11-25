import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { sliderImages } from "../../assets/img/slider/sliderImages";


function ImageSlider() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true} showArrows={true} autoPlay={true}
        interval={1500}
        infiniteLoop={true}
        showThumbs={false}  >
        {sliderImages.map((URL, index) => (
          <div className="slide" key={index}>
            <Img className="radius8" src={URL} alt="thermal-spray" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default ImageSlider;


const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;