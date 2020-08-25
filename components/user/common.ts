import styled from "styled-components";

export const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
`;

export const Column = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  & > div {
    width: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .info {
    font-size: 12px;
  }
`;
