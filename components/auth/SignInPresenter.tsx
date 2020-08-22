import React, { FC } from "react";
import { InputWrapper, Label } from "../common/Form";
import Input from "../common/Input";
import Button from "../common/Button";
import Loader from "../common/Loader";
import { UseInputProps } from "../../hooks";

interface Props {
  loading: boolean;
  email: UseInputProps;
  pwd: UseInputProps;
  onSubmit: any;
}

const SignInPresenter: FC<Props> = ({ loading, email, pwd, onSubmit }) => {
  return (
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
            required
            {...pwd}
          />
        </InputWrapper>
        <Button text="로그인" />
      </form>
    </>
  );
};

export default SignInPresenter;
