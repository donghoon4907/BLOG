import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.section`
  flex: 1
  height: calc(100vh - 3rem);
  padding: 3rem;
`;

interface Props {
  /**
   * * Flex direction
   */
  flexDirection?: string;
}

/**
 * 공통 section 컴포넌트
 *
 * @Component
 * @author frisk
 * @param flexDirection Flex direction
 */
const Section: FC<Props> = ({ children }) => <Container>{children}</Container>;

export default Section;
