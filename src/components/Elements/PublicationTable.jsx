import React from "react";
import styled from "styled-components";

import { useTranslation } from "react-i18next";

import GoogleScholar from "../../assets/svg/GoogleScholar"; // Assuming you have an icon for publications

export default function PublicationTable({ icon, title, description, publications, scholarLink, action }) {

  const { t } = useTranslation();
  let getIcon;

  switch (icon) {
    case "book":
      getIcon = <GoogleScholar />;
      break;
    default:
      getIcon = <GoogleScholar />;
      break;
  }

  return (

    <Wrapper className="grayBg radius8 shadow" >
      <a className="flexStart" href={scholarLink} target="_blank" rel="noreferrer" title={title}>
        {getIcon}
        <p className="font20 read-link" style={{ marginLeft: 10 }}>{title}</p>
      </a>
      {/* <div style={{ margin: "30px 0" }}>
        <p className="font13">{description}</p>
      </div> */}
      <div>
        {publications
          ? publications.map((publication, index) => (
            <PublicationItem key={index}>
              <h4 className="font20 extraBold">{publication.title}</h4>

              <p className="font15">{t('year')}: {publication.year}</p>
              <a className=" font15 read-link" href={publication.link} target="_blank" rel="noopener noreferrer" title="Read" >
                {t('readMore')}
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



  @media (max-width: 480px) {
    padding: 10px 15px;
  }
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
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    h4 {
      font-size: 1.2;
    }
  }
`;
