import React, { useCallback, FormEvent, FC } from "react";
import { useMutation } from "@apollo/client";
import { useInput } from "../../hooks";
import { SIGN_IN } from "../../graphql/auth/mutation/sign_in";
import SignInPresenter from "./SignInPresenter";
import { setAccessToken } from "../../lib/token";
import { useLocalDispatch } from "../../context";
import { SET_ME, HIDE_LOGIN_MODAL } from "../../context/action";

/**
 * * 로그인 컨테이너 컴포넌트
 *
 * @Container
 * @author frisk
 */
const SignInContainer: FC = () => {
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 로그인 mutation 활성화
   */
  const [login, { loading }] = useMutation(SIGN_IN);
  /**
   * 이메일 입력을 위한 useInput 활성화
   */
  const email = useInput("");
  /**
   * 로그인 요청 핸들러
   */
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      /**
       * 요청 중인 경우
       */
      if (loading) {
        return alert("요청 중입니다. 잠시만 기다려주세요.");
      }

      try {
        const {
          data: { logIn }
        } = await login({
          variables: { email: email.value }
        });
        if (logIn) {
          const { token, id, nickname, email, avatar, isMaster } = logIn;
          /**
           * 토큰 설정
           */
          setAccessToken(token);
          /**
           * 로컬 상태에 내 정보 저장
           */
          dispatch({
            type: SET_ME,
            id,
            nickname,
            email,
            avatar,
            isMaster
          });
          /**
           * 로그인 모달 숨기기
           */
          dispatch({
            type: HIDE_LOGIN_MODAL
          });
        }
      } catch (error) {
        const { message } = JSON.parse(error.message);
        alert(message);
      }
    },
    [email.value, loading]
  );

  return (
    <SignInPresenter loading={loading} email={email} onSubmit={handleSubmit} />
  );
};

export default SignInContainer;
