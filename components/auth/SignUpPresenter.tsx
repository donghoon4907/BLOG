import React, { FC } from "react";
import styled from "styled-components";
import { Label, InputWrapper } from "../common/Form";
import Input from "../common/Input";
import Button from "../common/Button";
import Loader from "../common/Loader";
import { Thumbnail } from "../icon";
import { UseInputProps } from "../../hooks";

const UploadWrapper = styled.div`
  ${props => props.theme.whiteBox}
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  /**
   * 업로드 요청 진행 여부
   */
  uploadLoading: boolean;
  /**
   * 회원가입 요청 진행 여부
   */
  signUpLoading: boolean;
  /**
   * 별칭 입력을 위한 Hooks
   */
  nickname: UseInputProps;
  /**
   * 이메일 입력을 위한 Hooks
   */
  email: UseInputProps;
  /**
   * 이미지 미리보기
   */
  preview: string;
  /**
   * file element
   */
  $file: any;
  /**
   * 파일 변경 핸들러
   */
  onChangeFile: any;
  /**
   * 파일 클릭 핸들러
   */
  onClickFile: any;
  /**
   * 회원가입 요청 핸들러
   */
  onSubmit: any;
}

/**
 * * 회원가입 프레젠터 컴포넌트
 *
 * @Presenter
 * @author frisk
 */
const SignUpPresenter: FC<Props> = ({
  uploadLoading,
  signUpLoading,
  nickname,
  email,
  preview,
  $file,
  onChangeFile,
  onClickFile,
  onSubmit
}) => {
  return (
    <>
      {(uploadLoading || signUpLoading) && <Loader />}
      <form onSubmit={onSubmit}>
        <UploadWrapper onClick={onClickFile} role="button">
          {preview ? (
            <img src={preview} alt="avatar" title="변경하려면 클릭하세요." />
          ) : (
            <Thumbnail style={{ width: 100, height: 50 }} />
          )}

          <input
            type="file"
            onChange={onChangeFile}
            ref={$file}
            hidden
            accept="image/jpg, image/jpeg, image/png, .gif"
          />
        </UploadWrapper>
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
          <Label htmlFor="nickname" val={nickname.value}>
            닉네임
          </Label>
          <Input
            placeholder="닉네임"
            required
            name="nickname"
            {...nickname}
            autoComplete="off"
          />
        </InputWrapper>
        <Button text="회원가입" type="submit" />
      </form>
    </>
  );
};

export default SignUpPresenter;
