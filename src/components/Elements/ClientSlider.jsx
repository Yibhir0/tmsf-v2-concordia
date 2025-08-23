
import Slider from "react-slick";
import styled from "styled-components";

import { collaboratorsImages } from "../../assets/img/collaborators/collaboratorsImages";


export default function ClientSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",



    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (

    <Wrapper>
      <Slider {...settings}>
        {collaboratorsImages.map((URL, index) => (
          <LogoWrapper className="flexCenter" key={index}>
            <ImgStyle src={URL} alt="client logo" />
          </LogoWrapper>
        ))}
      </Slider>



    </Wrapper>

  );
}

const Wrapper = styled.div`
  
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 150px;
  
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
  
  @media (max-width: 860px) {
    height: 80px;
  }

`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;

