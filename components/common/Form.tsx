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

  form {
    width: 100%;
    input {
      width: 100%;
      &:not(last-child) {
        margin-bottom: 10px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
  ${props => props.theme.media.phone} {
    width: 300px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
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
