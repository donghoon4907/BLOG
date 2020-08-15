import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;

    &:hover {
      fill: #3897f0;
    }
  }
`;
