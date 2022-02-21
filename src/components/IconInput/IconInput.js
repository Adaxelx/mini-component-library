import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--borderSize": 1 + "px",
    "--fontSize": 0.875 + "rem",
    "--iconSize": 1 + "rem",
  },
  large: {
    "--borderSize": 2 + "px",
    "--fontSize": 1.125 + "rem",
    "--iconSize": 1.5 + "rem",
  },
};

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  border: none;
  border-bottom: var(--borderSize) solid black;
  padding: 4px 0;
  padding-left: calc(var(--iconSize) + var(--iconSize) * 0.5);
  font-size: var(--fontSize);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  width: ${({ width }) => width + "px"};
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  height: var(--iconSize);
  width: var(--iconSize);
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
`;

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error("Unsupported size. Pick one of: small, large");
  }
  return (
    <Wrapper style={styles}>
      <VisuallyHidden>
        <label htmlFor={label}>{label}</label>
      </VisuallyHidden>
      <IconWrapper size={styles["--iconSize"]} id={icon} />
      <NativeInput id={label} width={width} {...delegated} />
    </Wrapper>
  );
};

export default IconInput;
