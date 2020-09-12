import React, { FC } from "react";
import { InputWrapper, Label } from "../common/Form";
import Input from "../common/Input";
import Button from "../common/Button";
import Loader from "../common/Loader";
import { UseInputProps } from "../../hooks";

interface Props {
  /**
   * 로그인 요청 진행 여부
   */
  loading: boolean;
  /**
   * 이메일 입력을 위한 Hooks
   */
  email: UseInputProps;
  /**
   * 로그인 요청 핸들러
   */
  onSubmit: any;
}

/**
 * * 로그인 프레젠터 컴포넌트
 *
 * @Presenter
 * @author frisk
 */
const SignInPresenter: FC<Props> = ({ loading, email, onSubmit }) => (
  <>
    {loading && <Loader />}
    <form onSubmit={onSubmit}>
      <InputWrapper>
        <Label htmlFor="email" val={email.value}>
          이메일
        </Label>
        <Input
          type="email"
          placeholder="이메일"
          name="email"
          autoComplete="off"
          required
          {...email}
        />
      </InputWrapper>
      <Button type="submit">로그인</Button>
    </form>
  </>
);

export default SignInPresenter;
