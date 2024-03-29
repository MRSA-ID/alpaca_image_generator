import React, { useState } from "react";
import styled from "styled-components";
import Previewer from "./Previewer";
import { ImageConfig, TSFixMe } from "../interfaces";
import { ATTRIBUTE_MAP } from "../constants/imageAttributes";
import random from "../utils/random";
import ControlPanel from "./ControlPanel";

const DEFAULT_IMAGE_CONFIG = {
  background: "#002966",
  hair: "default",
  accessories: "",
  leg: "default",
  eyes: "default",
  mouth: "default",
  ears: "default",
  neck: "default",
};

const AlpacaGenerator = () => {
  const [alpacaConfig, setAlpacaConfig] =
    useState<ImageConfig>(DEFAULT_IMAGE_CONFIG);
  const [activeAttribute, setActiveAttribute] =
    useState<keyof ImageConfig>("hair");

  const _updateAlpacaConfig = (payload: TSFixMe) => {
    setAlpacaConfig((config) => ({
      ...config,
      ...payload,
    }));
  };

  const _shuffle = () => {
    setAlpacaConfig((config) => {
      Object.keys(DEFAULT_IMAGE_CONFIG).forEach((key) => {
        const imageConfigKey = key as keyof ImageConfig;
        config[imageConfigKey] = random(ATTRIBUTE_MAP[imageConfigKey].values);
      });
      return { ...config };
    });
  };

  return (
    <StyledWrapper>
      <StyledMain>
        <StyledTitle>
          Alpaca Generator
          <StyledCreated>by ramadhan-developer</StyledCreated>
        </StyledTitle>
        <Previewer alpacaConfig={alpacaConfig} shuffle={_shuffle} />
        <ControlPanel
          alpacaConfig={alpacaConfig}
          activeAttribute={activeAttribute}
          setActiveAttribute={setActiveAttribute}
          setActiveSubAttribute={_updateAlpacaConfig}
        />
      </StyledMain>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  background: ${(props) => props.theme.colors.white};
`;

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 720px 1fr;
  justify-items: center;
  grid-row-gap: 32px;
  grid-column-gap: 12px;
  max-width: 1280px;
  padding: 15px 16px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 860px) {
    /* grid-template-columns: 480px 1fr; */
    grid-column-gap: 36px;
  }
  @media (max-width: 768px) {
    justify-items: unset;
    padding-top: 24px;
    grid-row-gap: 16px;
    grid-template-columns: 1fr;
  }
`;

const StyledTitle = styled.h1`
  grid-column: 1/-1;
  text-transform: uppercase;
  margin: 0;
  font-size: 3rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.darkblue70};
  letter-spacing: 0.05em;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledCreated = styled.span`
  margin-left: 1em;
  font-size: 1rem;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.blue70};
`;

export default React.memo(AlpacaGenerator);
