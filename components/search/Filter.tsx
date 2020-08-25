import React from "react";
import styled from "styled-components";
import { Accordion, Card, Table } from "react-bootstrap";

const Container = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  height: auto;
  margin-bottom: 30px;

  & .accordion {
    width: 100%;
  }

  & .card {
    border: none;
  }

  & .card-header {
    border: none;
    cursor: pointer;
    background: ${props => props.theme.bgColor};
  }

  & .table thead th {
    border: none;
    border-bottom: ${props => props.theme.boxBorder};
  }

  & td {
    border: none;
  }
`;

const StyledTd = styled.td<{ active?: boolean }>`
  cursor: pointer;
  font-weight: ${props => (props.active ? "bold" : 500)};
`;

const Filter = () => {
  return (
    <Container>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h1>필터</h1>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>정렬기준</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <StyledTd
                    //   onClick={() => onSort("createdAt_DESC")}
                    //   active={orderBy === "createdAt_DESC"}
                    >
                      등록일 순
                    </StyledTd>
                  </tr>
                  <tr>
                    <StyledTd
                    //   onClick={() => onSort("createdAt_ASC")}
                    //   active={orderBy === "createdAt_ASC"}
                    >
                      등록일 역순
                    </StyledTd>
                  </tr>
                  <tr>
                    <StyledTd
                    //   onClick={() => onSort("title_ASC")}
                    //   active={orderBy === "title_ASC"}
                    >
                      가나다 순
                    </StyledTd>
                  </tr>
                  <tr>
                    <StyledTd
                    //   onClick={() => onSort("title_DESC")}
                    //   active={orderBy === "title_DESC"}
                    >
                      가나다 역순
                    </StyledTd>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default Filter;
