import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  svg {
    cursor: pointer;

    &:hover {
      fill: #3897f0;
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
