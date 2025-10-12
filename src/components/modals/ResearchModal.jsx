
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  max-width: 700px;
  width: 90%;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  overflow-y: auto;


  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }

 ul {
  list-style: none;       /* Remove default bullets */
  padding: 0;
  margin: 1rem 0;
}

li {
  display: flex;
  align-items: flex-start; /* Align bullet and first line at the top */
  gap: 0.5rem;             /* Space between bullet and text */
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

li::before {
  content: "•";            /* Custom bullet */
  color: orange;          /* Or any color you like */
  font-weight: bold;
  flex-shrink: 0;          /* Prevent shrinking */
  width: 1rem;             /* Fixed width ensures consistent indentation */
  text-align: center;
}

  p {
    line-height: 1.6;
    color: #333;
  }

  button {
    margin-top: 1.5rem;
    border: none;
    border-radius: 8px;
    @media (max-width: 600px) {
        padding: 1rem;
        max-width: 95vw;
        font-size: 0.95rem;

        h2 {
            font-size: 1.1rem;
        }

        h4 {
            font-size: 1rem;
        }

        ul {
            margin: 0.5rem 0;
        }

        li {
            font-size: 0.95rem;
            margin-bottom: 0.4rem;
        }

        button {
            width: 100%;
            padding: 0.8rem 0;
            font-size: 1rem;
        }
    } cursor: pointer;
    font-weight: 500;
    transition: 0.2s;

  }
`;

const ResearchModal = ({ isOpen, onClose, title, description, researchThemes }) => {
    if (!isOpen) return null;

    return (
        <ModalContainer show={isOpen} onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <h2 className="font40  darkColor">{title}</h2>
                <p className="font15  darkColor" >{description}</p>

                {researchThemes && researchThemes.length > 0 && (
                    <>
                        <h4 className="font20 semiBold darkColor">Our Main Strategic Research Themes:</h4>
                        <ul>
                            {researchThemes.map((theme, index) => (
                                <li className="font15" key={index}>
                                    {theme.title} — {theme.details}
                                </li>
                            ))}
                        </ul>
                    </>
                )}


                <button className="tag darkBg radius6 font16 whiteColor" onClick={onClose}>Close</button>
            </ModalContent>
        </ModalContainer>
    );
};

export default ResearchModal;
