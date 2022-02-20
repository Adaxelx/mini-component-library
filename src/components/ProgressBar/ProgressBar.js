/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--height": 24 + "px",
    "--borderRadius": 8 + "px",
    "--padding": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--borderRadius": 4 + "px",
    "--padding": 0 + "px",
  },
  small: {
    "--height": 8 + "px",
    "--borderRadius": 4 + "px",
    "--padding": 0 + "px",
  },
};

const Wrapper = styled.div`
  border-radius: var(--borderRadius);
  background: ${COLORS.transparentGray15};
  padding: var(--padding);
  height: var(--height);
  width: 100%;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressDimensions = styled.div`
  width: 100%;
  height: 100%;
`;

const OverflowWrapper = styled(ProgressDimensions)`
  overflow: hidden;
  border-radius: 4px;
`;

const Progress = styled(ProgressDimensions)`
  background-color: ${COLORS.primary};
  transform: ${({ value }) => `translateX(calc(-100% + min(${value}%,100%)))`};
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      style={styles}
      role="progressbar"
      aria-valuenow={Math.min(value, 100)}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <OverflowWrapper style={styles}>
        <Progress style={styles} value={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Progress>
      </OverflowWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
