import React, { FC } from "react";
import styled from "styled-components";
import moment from "moment";

const Container = styled.time`
  font-weight: 400;
  opacity: 0.5;
  display: inline-block;
  font-size: 12px;
`;

interface Props {
  /**
   * * Date
   */
  text: string;
}

/**
 * Common Timestamp component
 *
 * @Component
 * @author frisk
 * @param text Date
 */
const Timestamp: FC<Props> = ({ text }) => (
  <Container>{moment(text).format("YYYY-MM-DD HH:mm:ss")}</Container>
);

export default Timestamp;
