import React from "react";
import styled from "styled-components";
// Components
import PublicationTable from "../Elements/PublicationTable";

export default function Publications() {
  return (
    <Wrapper id="publications">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Check Our Publications</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PublicationTable
                  icon="book"
                  title="Professor Christian Moreau "
                  description="List of recent research publications from our university."
                  publications={[
                    {
                      title: "Research Paper 1",
                      authors: "Author 1, Author 2",
                      journal: "Journal Name",
                      year: 2023,
                      link: "https://example.com/paper1"
                    },
                    {
                      title: "Research Paper 2",
                      authors: "Author 3, Author 4",
                      journal: "Another Journal",
                      year: 2022,
                      link: "https://example.com/paper2"
                    },
                    // Add more publication objects as needed
                  ]}
                  action={() => alert("Publication clicked")}
                  />
            </TableBox>
            <TableBox>
              <PublicationTable
                icon="book"
                title="Professor Pantcho P. Stoyanov "
                description="List of recent research publications from our university."
                publications={[
                  {
                    title: "Research Paper 1",
                    authors: "Author 1, Author 2",
                    journal: "Journal Name",
                    year: 2023,
                    link: "https://example.com/paper1"
                  },
                  {
                    title: "Research Paper 2",
                    authors: "Author 3, Author 4",
                    journal: "Another Journal",
                    year: 2022,
                    link: "https://example.com/paper2"
                  },
                  // Add more publication objects as needed
                ]}
                action={() => alert("Publication clicked")}
              />
            </TableBox>
            <TableBox>
              <PublicationTable
                icon="book"
                title="Professor Moussa Tembely "
                description="List of recent research publications from our university."
                publications={[
                  {
                    title: "Research Paper 1",
                    authors: "Author 1, Author 2",
                    journal: "Journal Name",
                    year: 2023,
                    link: "https://example.com/paper1"
                  },
                  {
                    title: "Research Paper 2",
                    authors: "Author 3, Author 4",
                    journal: "Another Journal",
                    year: 2022,
                    link: "https://example.com/paper2"
                  },
                  // Add more publication objects as needed
                ]}
                action={() => alert("Publication clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




