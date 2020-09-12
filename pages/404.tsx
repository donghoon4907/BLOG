import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import Button from "../components/common/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.03);
  width: 100vw;
  height: 100vh;
  padding: 20px;
`;

const Wrapper = styled.div`
  position: relative;
  border: none;
  margin: 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 540px;
  box-shadow: 0 13px 23px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border-top: 4px solid #358597;
  height: 300px;
  background: white;
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100px;
`;

const ErrorPage: NextPage = () => {
  return (
    <Layout title="페이지를 찾을 수 없습니다">
      <Container>
        <Wrapper>
          <Title>페이지를 찾을 수 없습니다.</Title>
          <SubTitle>404, Not Found</SubTitle>
          <ButtonWrapper>
            <Button onClick={() => history.back()}>돌아가기</Button>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default ErrorPage;
