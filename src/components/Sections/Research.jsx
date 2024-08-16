import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";


export default function Reasearch() {
  return (
    <Wrapper id="research">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Research</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Multiphase Flow"
                text="Spray and atomization
                      Droplet impact & heat transfer
                      Rivulet & liquid thin film
                      Digital Microfluidics-Electrowetting
                       Instability of elliptic liquid jets."
                tag="learn more"
                author="Department of Mechanical and Industrial Engineering"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Thermal spray"
                text="Thermal spray represents a a group of processes in which ﬁnely divided metallic and non-metallic materials are deposited in a molten or semi-molten state on a prepared."
                tag="learn more"
                author="Department of Mechanical and Industrial Engineering"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Multiphase Flow"
                text="Spray and atomization
                      Droplet impact & heat transfer
                      Rivulet & liquid thin film
                      Digital Microfluidics-Electrowetting
                       Instability of elliptic liquid jets."
                tag="learn more"
                author="Department of Mechanical and Industrial Engineering"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Thermal spray"
                text="Thermal spray represents a a group of processes in which ﬁnely divided metallic and non-metallic materials are deposited in a molten or semi-molten state on a prepared."
                tag="learn more"
                author="Department of Mechanical and Industrial Engineering"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Multiphase Flow"
                text="Spray and atomization
                      Droplet impact & heat transfer
                      Rivulet & liquid thin film
                      Digital Microfluidics-Electrowetting
                       Instability of elliptic liquid jets."
                tag="learn more"
                author="Department of Mechanical and Industrial Engineering"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Thermal spray"
                text="Thermal spray represents a a group of processes in which ﬁnely divided metallic and non-metallic materials are deposited in a molten or semi-molten state on a prepared."
                tag="learn more"
                author="Department of Mechanical and Industrial Engineering"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="See More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;