import dynamic from "next/dynamic";
import React, { FC, MutableRefObject, useCallback, useRef } from "react";
import styled from "styled-components";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import { EditorWithForwardedProps } from "./EditorWrapper";

const Container = styled.div`
  & .tui-image {
    display: none !important;
  }
`;

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<EditorWithForwardedProps>(
  () => import("./EditorWrapper"),
  { ssr: false }
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
const PostEditor: FC<Props> = props => {
  const {
    initialValue,
    previewStyle,
    height,
    initialEditType,
    useCommandShortcut
  } = props;
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
      props.onChange(instance.getHtml());
    }
  }, [props]);

  return (
    <Container>
      <EditorWithForwardedRef
        {...props}
        initialValue={initialValue || ""}
        previewStyle={previewStyle || "vertical"}
        height={height || "500px"}
        initialEditType={initialEditType || "wysiwyg"}
        useCommandShortcut={useCommandShortcut || true}
        ref={$editor}
        onChange={handleChange}
      />
    </Container>
  );
};

export default PostEditor;
