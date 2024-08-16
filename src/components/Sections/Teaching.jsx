import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";


import { courses } from "../../constants/courses";

export default function Teaching() {
  return (
    <Wrapper id="teaching">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Teaching</h1>
            <p className="font13">
              Thermal Spray and Multiphase Flow Laboratories
              Department of Mechanical and Industrial Engineering
              <br />
              Concordia University
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            {courses.map((course) => (
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" key={course.id}>
                <BlogBox
                  title={course.title}
                  text={course.text}
                  tag={course.tag}
                  author={course.author}
                  action={() => alert("clicked")}
                />
              </div>
            ))}

          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>


    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`

  @media (max-width: 860px) {
    text-align: center;
  }
`;
