import React from 'react';

import styled from "styled-components";

import { useNavigate } from "react-router-dom";





const ProfileCard = ({ profile, category }) => {

    const navigate = useNavigate();





    const goToprofile = () => {
        navigate("/profile", { state: { profile, category } });
    }
    let profileImage = null;
    try {
        profileImage = require(`../../assets/img/people_images/${profile.picture}`);

    } catch (error) {
        console.error("Error loading image:", error);

    }
    return (
        <Wrapper>
            <ImgBtn className="aniamte pointer" onClick={goToprofile}>
                {profileImage ? (
                    <img className="radius8" src={profileImage} alt="project"></img>
                ) : (
                    <img className="radius8" src={require('../../assets/img/people_images/default-profile.png')} alt="default profile" />
                )}

            </ImgBtn>
            <h3 className="font20 extraBold">{profile.name}</h3>
            <p className="font15">{profile.occupation}</p>
            <a href={`mailto:${profile.email}`} className="read-link semiBold" style={{ color: "#800000" }} >{profile.email}</a>

        </Wrapper >
    );
}

export default ProfileCard;

const Wrapper = styled.div`
      width: 100%;
      margin-top: 30px;
      img {
        width: 100%;
        height: auto;
        margin: 20px 0;
      }
      h3 {
        padding-bottom: 10px;
      }
    `;
const ImgBtn = styled.button`
      background-color: transparent;
      border: 0px;
      outline: none;
      padding: 0px;
      margin: 0px;
      :hover > img {
        opacity: 0.5;
      }
    `;