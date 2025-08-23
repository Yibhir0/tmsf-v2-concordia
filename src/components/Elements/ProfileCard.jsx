
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
                    <img className="radius8" src={profileImage} alt="profile"></img>
                ) : (
                    <img className="radius8" src={require('../../assets/img/people_images/default-profile.png')} alt="default profile" />
                )}


            </ImgBtn>

            <InnerWrapper>

                <h3 className="font25 extraBold">{profile.name}</h3>

                <p className="font20">{profile.occupation}</p>
                <p className="font20">{profile.department}</p>
                <a href={`mailto:${profile.email}`} className="read-link semiBold font20" style={{ color: "#800000" }} >{profile.email}</a>

            </InnerWrapper>

        </Wrapper >
    );
}

export default ProfileCard;

const Wrapper = styled.div`
      width: 100%;
      margin-top: 30px;
 
      text-align: center;
      padding: 0 10px 20px 10px;
     display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      img {
        width: 100%;
        height: auto;
        margin: 20px 0;
      }
      h3 {
        padding-bottom: 10px;
      }
    @media (max-width: 768px) {
    flex-direction: column;
      img {
        width: 80%;
    
      }
        
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

const InnerWrapper = styled.div`

    @media (max-width: 768px) {
        h3 {
            font-size: 20px;
        }
        p {
            font-size: 16px;
        }
        a {
            font-size: 16px;
        }
    `;
