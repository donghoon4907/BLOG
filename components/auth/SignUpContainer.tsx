import React, {
  useState,
  useCallback,
  useRef,
  FC,
  FormEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction
} from "react";
import { useMutation } from "@apollo/client";
import { useInput, useLazyAxios } from "../../hooks";
import SignUpPresenter from "./SignUpPresenter";
import { SIGN_UP } from "../../graphql/user/mutation/sign_up";

interface Props {
  /**
   * 인증 화면 전환 모드 (로그인, 회원가입)
   */
  setAction: Dispatch<SetStateAction<string>>;
}

/**
 * * 회원가입 컨테이너 컴포넌트
 *
 * @Container
 * @author frisk
 */
const SignUpContainer: FC<Props> = ({ setAction }) => {
  /**
   * 업로드 요청을 위한 Axios 활성화
   */
  const { loading: uploadLoading, call } = useLazyAxios();
  /**
   * file element
   */
  const $file = useRef<HTMLInputElement>(null);
  /**
   * 별칭 입력을 위한 useInput 활성화
   */
  const nickname = useInput("");
  /**
   * 이메일 입력을 위한 useInput 활성화
   */
  const email = useInput("");
  /**
   * 미리보기 상태 관리 모듈 활성화
   */
  const [preview, setPreview] = useState<string>("");
  /**
   * 파일 상태 모듈 활성화
   */
  const [file, setFile] = useState<string>("");
  /**
   * 회원가입 mutation 활성화
   */
  const [signUp, { loading: signUpLoading }] = useMutation(SIGN_UP);
  /**
   * 파일 변경 핸들러
   */
  const handleChangeFile = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const { value, files } = e.target as any;
      /**
       * 취소 버튼을 누른 경우
       */
      if (!value) {
        return;
      }
      /**
       * 업로드 요청 중인 경우
       */
      if (uploadLoading) {
        return;
      }

      const [file] = files;

      const formData = new FormData();
      formData.append("file", file);

      const { data, error } = await call({
        method: "post",
        url: `${process.env.BACKEND_API_PATH}/api/upload`,
        data: formData,
        headers: { "content-type": "multipart/form-data" }
      });

      if (data) {
        const reader = new FileReader();

        reader.onloadend = () => {
          /**
           * 인코딩된 미리보기 저장
           */
          setPreview(reader.result as string);
          /**
           * 응답 받은 파일 URL 저장
           */
          setFile(data);
        };
        /**
         * base64로 인코딩
         */
        reader.readAsDataURL(file);
      }

      if (error) {
        alert("썸네일 업로드 중 오류가 발생했습니다.");
      }
    },
    [uploadLoading]
  );
  /**
   * 파일 클릭 핸들러
   */
  const handleClickFile = useCallback(() => {
    const node = $file.current;
    if (node) {
      node.click();
    }
  }, []);
  /**
   * 회원가입 요청 핸들러
   */
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      /**
       * 회원가입 요청 중인 경우
       */
      if (signUpLoading) {
        return alert("요청 중입니다. 잠시만 기다려주세요.");
      }

      const tf = confirm("입력한 내용으로 회원가입 하시겠어요?");

      if (tf) {
        try {
          const {
            data: { createUser }
          } = await signUp({
            variables: {
              email: email.value,
              nickname: nickname.value,
              file: file ? file : process.env.DEFAULT_AVATAR
            }
          });
          if (createUser) {
            /**
             * 로그인 화면 전환
             */
            setAction("login");
            alert("회원가입이 정상처리되었습니다.");
          }
        } catch (error) {
          const { message } = JSON.parse(error.message);
          alert(message);
        }
      }
    },
    [email.value, nickname.value, file, signUpLoading]
  );

  return (
    <SignUpPresenter
      uploadLoading={uploadLoading}
      signUpLoading={signUpLoading}
      nickname={nickname}
      email={email}
      preview={preview}
      $file={$file}
      onChangeFile={handleChangeFile}
      onClickFile={handleClickFile}
      onSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
