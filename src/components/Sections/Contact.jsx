
import React from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com';


// Assets


import ContactCard from "../Elements/ContactCard";

export default function Contact() {
  const socialLinks = {
    facebook: 'https://www.facebook.com/MultiphaseFlowThermalSprayLaboratory',
    linkedin: 'https://www.linkedin.com/company/enlighteneering-inc-',
    twitter: 'https://www.facebook.com/ENLIGHTENEERING/',
    youtube: 'https://www.linkedin.com/company/enlighteneering-inc-',
  };

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;


  const address = {
    line1: '1550 De Maisonneuve West',
    line2: 'Montreal, QC',
    line3: 'H3G 2E9, Canada',
  };
  const handleOnSubmit = (e) => {

    console.log(PUBLIC_KEY);
    console.log(e.target);
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!')
      });
    e.target.reset()
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <ContentWrapper>
            <div className="col-xs-10 col-sm-10 col-md-5 col-lg-5">
              <Form onSubmit={handleOnSubmit}>
                <label className="font13">First name:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Subject:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                <label className="font13">Message:</label>
                <textarea rows="3" cols="50" type="text" id="message" name="message" className="font20 extraBold" />

                <SumbitWrapper className="flex">

                  <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} >
                    Send Message
                  </ButtonInput>
                </SumbitWrapper>
              </Form>
            </div>
            <ContactCard
              address={address}
              phone="08055384406"
              email="info@mld.ng"
              socialLinks={socialLinks}
            />
          </ContentWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;

const ButtonInput = styled.button`
  border: 1px solid black;
  background-color: #800000;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #F2B300;
  :hover {
    background-color: #800000;
    border: 1px solid #800000;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
  align-items: center;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
