import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const ArrowDown = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const StyledSelect = styled.select`
  position: relative;
  padding: 8px 12px;
  padding-right: 32px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border: none;
  width: ${({ width }) => (width ? width + "px" : "auto")};
  appearance: none;
  &:hover {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const selectedElement = React.useState({});
  const [width, setWidth] = React.useState(0);
  const displayedValue = getDisplayedValue(value, children);

  React.useEffect(() => {
    setWidth(selectedElement.current.offsetWidth + 52);
  }, [selectedElement]);

  return (
    <>
      <Wrapper>
        <StyledSelect value={value} width={width} onChange={onChange}>
          {children}
        </StyledSelect>
        <ArrowDown id="chevron-down" size={24} />
      </Wrapper>
      <span style={{ visibility: "hidden" }} ref={selectedElement}>
        {displayedValue}
      </span>
    </>
  );
};

export default Select;
