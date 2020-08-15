import Router from "next/router";
import React, { useState, useCallback, FormEvent } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { Cookies } from "react-cookie";
import { useInput } from "../hooks";
import { logInMutation } from "../graphql/auth/mutation/login";
import Layout from "../components/common/Layout";
import {
  FormWrapper,
  InputWrapper,
  Label,
  StateChanger
} from "../components/common/Form";
import Loader from "../components/common/Loader";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

export default () => {
  const [login, { loading }] = useMutation(logInMutation);
  const [action, setAction] = useState("login");
  const email = useInput("");
  const pwd = useInput("");

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (loading) return;
      try {
        await login({
          variables: { email: email.value, pwd: pwd.value },
          update: (_, { data }) => {
            if (!data || !data.logIn) {
              return;
            }
            const cookies = new Cookies();
            cookies.set("token", data.logIn);
            Router.push("/");
          }
        });
      } catch (error) {
        const { message } = JSON.parse(error.message);
        alert(message);
      }
    },
    [email.value, pwd.value, loading]
  );
  return (
    <Layout title="로그인">
      <Container>
        <Wrapper>
          {loading && <Loader />}
          <FormWrapper>
            <form onSubmit={handleSubmit}>
              <InputWrapper>
                <Label htmlFor="email" val={email.value}>
                  이메일
                </Label>
                <Input
                  type="email"
                  placeholder="이메일"
                  name="email"
                  {...email}
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="password" val={pwd.value}>
                  암호
                </Label>
                <Input
                  type="password"
                  placeholder="암호"
                  name="password"
                  {...pwd}
                />
              </InputWrapper>
              <Button text={"로그인"} />
            </form>
          </FormWrapper>
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
