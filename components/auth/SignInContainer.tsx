import React, { useCallback, FormEvent, FC } from "react";
import { useMutation } from "@apollo/client";
import { useInput } from "../../hooks";
import { logInMutation } from "../../graphql/auth/mutation/login";
import SignInPresenter from "./SignInPresenter";
import { setAccessToken } from "../../lib/token";
import { useVssDispatch, SET_LOGIN_MODAL } from "../../context";

const SignInContainer: FC = () => {
  const dispatch = useVssDispatch();
  const [login, { loading }] = useMutation(logInMutation);
  const email = useInput("");
  const pwd = useInput("");

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (loading) {
        return alert("요청 중입니다. 잠시만 기다려주세요.");
      }
      try {
        const {
          data: { logIn }
        } = await login({
          variables: { email: email.value, pwd: pwd.value }
        });
        if (logIn) {
          setAccessToken(logIn);
          dispatch({
            type: SET_LOGIN_MODAL,
            payload: false
          });
        }
      } catch (error) {
        const { message } = JSON.parse(error.message);
        alert(message);
      }
    },
    [email.value, pwd.value, loading]
  );

  return (
    <SignInPresenter
      loading={loading}
      email={email}
      pwd={pwd}
      onSubmit={handleSubmit}
    />
  );
};

export default SignInContainer;
