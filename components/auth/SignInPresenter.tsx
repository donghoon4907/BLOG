import React, { FC, FormEvent } from "react";
import { FormInput } from "../common/Form";
import Button from "../common/Button";
import Loader from "../common/Loader";
import { UseInputProps } from "../../hooks";

interface Props {
  loading: boolean;
  email: UseInputProps;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

/**
 * * 로그인 프레젠터 컴포넌트
 *
 * @Presenter
 * @author frisk
 * @param props.loading 로그인 요청 진행 여부
 * @param props.email 이메일 입력을 위한 Hooks
 * @param props.onSubmit 로그인 요청 핸들러
 */
const SignInPresenter: FC<Props> = ({ loading, email, onSubmit }) => (
  <>
    {loading && <Loader />}
    <form onSubmit={onSubmit}>
      <FormInput
        type="email"
        placeholder="이메일을 입력하세요."
        name="email"
        autoComplete="off"
        required
        label="이메일"
        {...email}
      />
      <Button type="submit">로그인</Button>
    </form>
  </>
);

export default SignInPresenter;
