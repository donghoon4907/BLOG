import React, { FC } from "react";
import styled from "styled-components";
import Timestamp from "./Timestamp";

const Contianer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding: 5px;

  & > span {
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    padding: 5px 0px;
    font-weight: 500;
  }
`;

interface Props {
  /**
   * * Notice title
   */
  title: string;
  /**
   * * UpdatedAt
   */
  updatedAt: string;
}

/**
 * Notice component
 *
 * @Component
 * @author frisk
 * @param props.title Notice title
 * @param props.updatedAt UpdatedAt
 */
const Notice: FC<Props> = ({ title, updatedAt }) => (
  <Contianer>
    <span>{title}</span>
    <Timestamp text={updatedAt} />
  </Contianer>
);

export default Notice;
