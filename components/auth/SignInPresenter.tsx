import React, { FC } from "react";
import { InputWrapper, Label } from "../common/Form";
import Input from "../common/Input";
import Button from "../common/Button";
import Loader from "../common/Loader";
import { UseInputProps } from "../../hooks";

interface Props {
  /**
   * * Loading during sign in request
   */
  loading: boolean;
  /**
   * * Email with useInput
   */
  email: UseInputProps;
  /**
   * * Password with useInput
   */
  pwd: UseInputProps;
  /**
   * * Handler for submit
   */
  onSubmit: any;
}

/**
 * Component for sign in
 *
 * @Presenter
 * @author frisk
 */
const SignInPresenter: FC<Props> = ({ loading, email, pwd, onSubmit }) => (
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
      <InputWrapper>
        <Label htmlFor="password" val={pwd.value}>
          암호
        </Label>
        <Input
          type="password"
          placeholder="암호"
          name="password"
          autoComplete="off"
          required
          {...pwd}
        />
      </InputWrapper>
      <Button text="로그인" type="submit" />
    </form>
  </>
);

export default SignInPresenter;
