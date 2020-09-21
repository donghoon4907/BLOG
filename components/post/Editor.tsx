import dynamic from "next/dynamic";
import React, { FC, MutableRefObject, useCallback, useRef } from "react";
import styled from "styled-components";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import { EditorWithForwardedProps } from "./EditorWrapper";
import Loader from "../common/Loader";
import { useLazyAxios } from "../../hooks";

const Container = styled.div`
  & .te-mode-switch-section {
    display: none !important;
  }
`;

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<EditorWithForwardedProps>(
  () => import("./EditorWrapper"),
  {
    ssr: false,
    loading: () => <Loader />
  }
);

const EditorWithForwardedRef = React.forwardRef<
  EditorType | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as MutableRefObject<EditorType>} />
));

interface Props extends EditorProps {
  /**
   * 에디터 변경 핸들러
   * @param value
   */
  onChange(value: string): void;
}

/**
 * * 게시물 에디터 컴포넌트
 *
 * @Component
 * @author frisk
 */
const PostEditor: FC<Props> = (props) => {
  const {
    initialValue,
    previewStyle,
    height,
    initialEditType,
    useCommandShortcut
  } = props;
  /**
   * 업로드 요청을 위한 Axios 활성화
   */
  const { loading, call } = useLazyAxios();
  /**
   * editor element
   */
  const $editor = useRef<EditorType>();
  /**
   * 에디터 변경 이벤트
   */
  const handleChange = useCallback(() => {
    const node = $editor.current;

    if (node) {
      const instance = node.getInstance();
      /**
       * 에디터 output
       * 1. instance.getMarkdown(): markdown type
       * 2. instance.getHtml(): html type
       */
      props.onChange(instance.getMarkdown());
    }
  }, [props]);

  return (
    <Container>
      {loading && <Loader />}
      <EditorWithForwardedRef
        {...props}
        initialValue={initialValue || ""}
        previewStyle={previewStyle || "vertical"}
        height={height || "500px"}
        initialEditType={initialEditType || "markdown"}
        useCommandShortcut={useCommandShortcut || true}
        ref={$editor}
        onChange={handleChange}
        hooks={{
          addImageBlobHook: async (blob, callback) => {
            /**
             * 업로드 요청 중인 경우
             */
            if (loading) {
              alert("업로드 요청 중입니다.");
              return;
            }

            const formData = new FormData();
            formData.append("file", blob);

            const { data, error } = await call({
              method: "post",
              url: `${process.env.BACKEND_API_PATH}/api/upload`,
              data: formData,
              headers: { "content-type": "multipart/form-data" }
            });

            if (data) {
              callback(data, "");
            }

            if (error) {
              alert("썸네일 업로드 중 오류가 발생했습니다.");
            }

            return false;
          }
        }}
      />
    </Container>
  );
};

export default PostEditor;
