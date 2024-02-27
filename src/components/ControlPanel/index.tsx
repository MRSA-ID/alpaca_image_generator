import styled from "styled-components";
import { ATTRIBUTE_MAP, ATTRIBUTES } from "../../constants/imageAttributes";
import { ImageConfig, TSFixMe } from "../../interfaces";
import Button from "./Button";
import ColorButton from "./ColorButton";

interface Props {
  alpacaConfig: ImageConfig;
  activeAttribute: keyof ImageConfig;
  setActiveAttribute: Function;
  setActiveSubAttribute: Function;
}

const ControlPanel = ({
  alpacaConfig,
  activeAttribute,
  setActiveAttribute,
  setActiveSubAttribute,
}: Props) => {
  return <div></div>;
};

const StyledWrapper = styled.div`
  max-width: 364px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StyledFrame = styled.div`
  & + & {
    margin-top: 24px;
  }
  @media (max-width: 768px) {
    & + & {
      margin-top: 10px;
    }
  }
`;

const StyledTitle = styled.h2`
  font-size: 0.875rem;
  line-height: 1.2;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 12px 0;
  color: ${(props) => props.theme.colors.darkblue70};
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const StyledButton = styled(Button)`
  margin-right: 8px;
  margin-bottom: 8px;
  &:first-letter {
    text-transform: uppercase;
  }
  @media (max-width: 768px) {
    margin-right: 4px;
    margin-bottom: 4px;
  }
`;

const StyledColorButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 150px;
`;

const StyledColorButton = styled(ColorButton)`
  margin-right: 8px;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    margin-right: 2px;
    margin-bottom: 2px;
  }
`;

export default ControlPanel;
