import React, { useState, FC } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import SignIn from "../components/auth/SignInContainer";
import SignUp from "../components/auth/SignUpContainer";
import { StateChanger } from "../components/common/Form";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const Login: FC = () => {
  const [action, setAction] = useState<string>("login");

  return (
    <Layout title="로그인">
      <Container>
        <Wrapper>
          {action === "signup" ? <SignUp setAction={setAction} /> : <SignIn />}
          <StateChanger>
            {action === "login" && (
              <div>
                계정이 없다면&nbsp;
                <Link onClick={() => setAction("signup")}>회원가입</Link>
              </div>
            )}
            {action === "signup" && (
              <div>
                계정이 있다면&nbsp;
                <Link onClick={() => setAction("login")}>로그인</Link>
              </div>
            )}
          </StateChanger>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default Login;
