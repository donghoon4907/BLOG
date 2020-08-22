import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background: rgba(0,0,0,0.03);
  }

  svg {
    cursor: pointer;

    &:hover {
      fill: #4142DD;
    }
  }

  .modal {
    display: flex !important;
  }

  .modal-dialog {
    flex: 1;
    margin: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100% !important;
  }
  
  .modal-content {
    max-width: 500px;
  }
`;
