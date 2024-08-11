import React from "react";
import styled from "styled-components";

import GoogleScholar from "../../assets/svg/GoogleScholar"; // Assuming you have an icon for publications

export default function PublicationTable({ icon, title, description, publications,scholarLink, action }) {
  let getIcon;

  switch (icon) {
    case "book":
      getIcon = <GoogleScholar  />;
      break;
    default:
      getIcon = <GoogleScholar  />;
      break;
  }

  return (
    
    <Wrapper className="grayBg radius8 shadow" >
      <div className="flexSpaceCenter">
        <a href={scholarLink} target="_blank" rel="noreferrer" title={title}>{getIcon}</a>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 className="font30 extraBold">{title}</h4>
        <p className="font13">{description}</p>
      </div>
      <div>
        {publications
          ? publications.map((publication, index) => (
              <PublicationItem key={index}>
                <h4 className="font20 extraBold">{publication.title}</h4>
                <p className="font13">Authors: {publication.authors}</p>
                <p className="font13">Journal: {publication.journal}</p>
                <p className="font13">Year: {publication.year}</p>
                <a className="read-link font13 semiBold" style={{color:"#800000"}} href={publication.link} target="_blank" rel="noopener noreferrer" >
                  Read More
                </a>
              </PublicationItem>
            ))
          : null}
      </div>
    
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
    border: 1px solid #e0e0e0;
`;


const PublicationItem = styled.div`
  margin: 15px 0;
  padding: 15px;
  border-bottom: 1px solid #ddd;

  h4 {
    margin-bottom: 5px;
  }

  p {
    margin: 5px 0;
  }

  a {
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
