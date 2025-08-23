import styled from "styled-components";
import QuoteIcon from "../../assets/svg/Quotes";
import { FaLinkedinIn } from 'react-icons/fa';
import { SiResearchgate } from "react-icons/si";
import GoogleScholar from "../../assets/svg/GoogleScholar";

export default function TestimonialBox({ text, author, email, scholarLink, linkedin, occupation, gateLink }) {
    return (
        <Wrapper className="darkBg radius8 flexNullCenter flexColumn">
            <QuoteWrapper>
                <QuoteIcon />
            </QuoteWrapper>
            <p className="orangeColor font16" style={{ alignSelf: 'flex-end', paddingBottom: "30px" }}>
                <em>{occupation}</em>
            </p>
            <p className="whiteColor font16" style={{ paddingBottom: "30px" }}>
                {text}
            </p>
            <p className="orangeColor font14" style={{ alignSelf: 'flex-end' }}>
                <em>{author}</em>
            </p>
            <a className="orangeColor font14 read-link" href={`mailto:${email}`} style={{ alignSelf: 'flex-end' }}><em>{email}</em></a>
            <div className="flexSpaceNull" style={{ alignSelf: 'flex-end', paddingTop: "30px" }}>
                <a href={scholarLink} target="_blank" rel="noopener noreferrer" aria-label="Scholar" className="social-icon"><GoogleScholar height={30} width={30} /></a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon"><FaLinkedinIn /></a>
                <a href={gateLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon"><SiResearchgate /></a>
            </div>
        </Wrapper >
    );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  @media (max-width: 768px) {
    align-items: center;
    width: 80%;
    margin: 0 auto;
  }
`;
const QuoteWrapper = styled.div`
  position: relative;
  top: -40px;
`;