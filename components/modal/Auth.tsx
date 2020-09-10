import React, { useState, FC, useCallback } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import SignIn from "../auth/SignInContainer";
import SignUp from "../auth/SignUpContainer";
import { StateChanger } from "../common/Form";
import { useLocalDispatch } from "../../context";
import { HIDE_LOGIN_MODAL } from "../../context/action";

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

/**
 * 인증 팝업 컴포넌트
 *
 * @Component
 * @Modal
 * @author frisk
 */
const Auth: FC = () => {
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 화면 전환 상태 모듈 활성화
   */
  const [action, setAction] = useState<string>("login");
  /**
   * 팝업 숨기기 핸들러
   */
  const handleClose = useCallback(() => {
    dispatch({
      type: HIDE_LOGIN_MODAL
    });
  }, []);

  return (
    <Modal onHide={handleClose} show animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{action === "login" ? "로그인" : "회원가입"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
    </Modal>
  );
};

export default Auth;
