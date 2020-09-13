import React from "react";
import { Editor, EditorProps } from "@toast-ui/react-editor";

export interface EditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

/**
 * * 게시물 에디터 wrap 컴포넌트
 *
 * @Component
 * @author frisk
 */
const PostEditorWrapper = (props: EditorWithForwardedProps) => (
  <Editor {...props} ref={props.forwardedRef} />
);

export default PostEditorWrapper;
