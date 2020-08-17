import styled from "styled-components";

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius: 0;
  width: 100%;
  max-width: 350px;
`;

export const FormWrapper = styled(Box)`
  padding: 1rem;
  margin-bottom: 15px;
  width: 500px;
  background: rgba(0, 0, 0, 0.03);

  ${props => props.theme.media.phone} {
    width: 300px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const Label = styled.label<{ val?: string }>`
  position: absolute;
  top: 2px;
  left: 5px;
  font-size: 10px;
  opacity: ${props => (props.val ? 0.5 : 0)};
  animation: opacity 2s slidein;
`;

export const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
  background: rgba(0, 0, 0, 0.03);

  &:link {
    margin-left: 523px;
  }
`;

export const TextArea = styled.textarea`
  ${props => props.theme.whiteBox};
  width: 100%;
  height: 300px;
  resize: none;
  font-size: 12px;
  overflow: auto;
  background: ${props => props.theme.bgColor};
  padding: 15px;
  &:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  ${props => props.theme.whiteBox};
  display: block;
  width: 100%;
  height: 35px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;
