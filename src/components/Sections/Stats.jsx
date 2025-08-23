import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';
import { useStats } from '../../hooks/useStats';

import { useTranslation } from 'react-i18next';

const Stats = () => {
  const [inView, setInView] = useState(false);
  const statsRef = useRef(null);
  const { t } = useTranslation();
  const stats = useStats();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = statsRef.current; // Store the ref value in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Wrapper ref={statsRef}>
      <div>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t('statsHeader')}</h1>
            <p className="font20">
              {t('statsDescription')} <br />
              {t('statsSubDescription')}
            </p>
          </HeaderInfo>
          <StatsWrapper>
            <StatsSection>
              {stats.map((stat) => (
                <StatCard key={stat.id}>
                  {inView ? (
                    <h4>
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        prefix={stat.prefix || ''}
                        suffix={stat.suffix ? stat.suffix + '+' : '+'}
                      />
                    </h4>
                  ) : (
                    <h4>0</h4>
                  )}
                  <p>{stat.title}</p>
                </StatCard>
              ))}
            </StatsSection>
          </StatsWrapper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Stats;

const Wrapper = styled.section`
  width: 100%;
  

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const StatsWrapper = styled.section`
  padding: 40px 20px;
  width: 100%;
  
  text-align: center;
 
`;

const HeaderInfo = styled.div`

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

    

    @media (max-width: 768px) {
      font-size: 28px;
       h1{
      font-size: 2rem;
    }
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  @media (max-width: 860px) {
    text-align: center;
  }
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StatCard = styled.div`
  margin: 10px 20px;
  text-align: center;
  border: 1px solid #eee;
  padding: 40px;
  border-radius: 50%;
  background: #f9f9f9;

  h4 {
    font-size: 48px;
    font-weight: 700;
    color: #000;
    background: -webkit-linear-gradient(45deg, #ff7e00, #ffbf00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 36px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
    margin: 10px 0 0;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;
