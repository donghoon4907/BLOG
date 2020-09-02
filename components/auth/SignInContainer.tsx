import React, { useCallback, FormEvent, FC } from "react";
import { useMutation } from "@apollo/client";
import { useInput } from "../../hooks";
import { logInMutation } from "../../graphql/auth/mutation/login";
import SignInPresenter from "./SignInPresenter";
import { setAccessToken } from "../../lib/token";
import { useVssDispatch, HIDE_LOGIN_MODAL, SET_ME } from "../../context";

/**
 * Component for sign in
 *
 * @Container
 * @author frisk
 */
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
          const { token, id, nickname, email, avatar, isMaster } = logIn;
          setAccessToken(token);
          dispatch({
            type: SET_ME,
            userId: id,
            nickname,
            email,
            avatar,
            isMaster
          });
          dispatch({
            type: HIDE_LOGIN_MODAL
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
