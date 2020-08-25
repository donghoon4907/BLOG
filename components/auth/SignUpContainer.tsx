import React, {
  useState,
  useCallback,
  useRef,
  FC,
  FormEvent,
  ChangeEvent
} from "react";
import { useMutation } from "@apollo/client";
import { useInput, useLazyAxios } from "../../hooks";
import SignUpPresenter from "./SignUpPresenter";
import { signUpMutation } from "../../graphql/user/mutation/signup";

interface Props {
  setAction: any;
}

const SignUpContainer: FC<Props> = ({ setAction }) => {
  const { loading, call } = useLazyAxios();
  const $file = useRef<HTMLInputElement>(null);
  const $confirmPwd = useRef<HTMLInputElement>(null);

  const nickname = useInput("");
  const email = useInput("");
  const pwd = useInput("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [preview, setPreview] = useState<string>("");
  const [file, setFile] = useState<string>("");

  const [signUp, { loading: signUpLoading }] = useMutation(signUpMutation);

  const handleChangeConfirmPwd = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const node = $confirmPwd.current;
      setConfirmPwd(value);

      if (pwd.value !== value) {
        if (node) {
          node.setCustomValidity("비밀번호가 일치하지 않습니다.");
        }
      } else {
        if (node) {
          node.setCustomValidity("");
        }
      }
    },
    [pwd.value]
  );

  const handleChangePreview = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const { value, files } = e.target as any;
      if (!value) return; // prevent cancel action
      if (loading) return; // prevent same request

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
          setPreview(reader.result as string);
          setFile(data);
        };

        reader.readAsDataURL(file);
      }

      if (error) {
        alert("썸네일 업로드 중 오류가 발생했습니다.");
      }
    },
    [loading]
  );

  const handleClickUpload = useCallback(() => {
    const node = $file.current;
    if (node) {
      node.click();
    }
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (signUpLoading) {
        return alert("요청 중입니다. 잠시만 기다려주세요.");
      }

      const tf = confirm("입력한 내용으로 회원가입 하시겠어요?");

      if (tf) {
        try {
          const {
            data: { addUser }
          } = await signUp({
            variables: {
              email: email.value,
              pwd: pwd.value,
              nickname: nickname.value,
              file: file ? file : process.env.DEFAULT_AVATAR
            }
          });
          if (addUser) {
            setAction("login");
            alert("회원가입이 정상처리되었습니다.");
          }
        } catch (error) {
          const { message } = JSON.parse(error.message);
          alert(message);
        }
      }
    },
    [email.value, pwd.value, nickname.value, file, signUpLoading]
  );

  return (
    <SignUpPresenter
      loading={loading}
      signUpLoading={signUpLoading}
      nickname={nickname}
      email={email}
      pwd={pwd}
      confirmPwd={confirmPwd}
      preview={preview}
      $file={$file}
      $confirmPwd={$confirmPwd}
      onChangePreview={handleChangePreview}
      onChangeConfirmPwd={handleChangeConfirmPwd}
      onClickUpload={handleClickUpload}
      onSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
