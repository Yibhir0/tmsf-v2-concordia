
import styled from "styled-components";
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

import ContactCard from "../Elements/ContactCard";

export default function Contact() {
  const { t } = useTranslation();

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
    line1: '1550 Boulevard De Maisonneuve Ouest,',
    line2: 'Montreal, Quebec',
    line3: 'H3G2E9, CANADA',
  };
  const handleOnSubmit = (e) => {
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
      <div >
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold"> {t('contactHeader')}</h1>
            <p className="font20">
              {t('contactDescription')}
              <br />
              {t('contactSubDescription')}
            </p>
          </HeaderInfo>
          <ContentWrapper>
            <div className="col-xs-10 col-sm-10 col-md-5 col-lg-5">
              <Form onSubmit={handleOnSubmit}>
                <label className="font13">{t('fName')}</label>
                <input type="text" id="fname" name="fname" className="font20" />
                <label className="font13">{t('contactEmail')}</label>
                <input type="text" id="email" name="email" className="font20 " />
                <label className="font13">{t('subject')}</label>
                <input type="text" id="subject" name="subject" className="font20 " />
                <label className="font13">{t('message')}</label>
                <textarea rows="3" cols="50" type="text" id="message" name="message" className="font20 " />

                <SumbitWrapper className="flex">

                  <ButtonInput type="submit" value="Send Message" className="pointer animate radius8 font18" style={{ maxWidth: "220px" }} >
                    {t('sendMessage')}
                  </ButtonInput>
                </SumbitWrapper>
              </Form>
            </div>
            <ContactCard
              address={address}
              phone="514-848-2424"
              email="info@concordia.ca"
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
    h1{
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2.5rem;
  }

  h1::after {
  
  content: '';
  width: 60px;
  height: 4px;
  background: #912338;
  display: block;
  margin: 0.5rem auto;
  border-radius: 2px;

}

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
  background-color: #912338;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #912338;
    border: 1px solid #912338;
    color: #F2B300;
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

  align-items: center;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
