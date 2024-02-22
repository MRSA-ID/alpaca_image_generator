import React from "react";
import { Helmet } from "react-helmet";
import { ATTRIBUTE_MAP, ATTRIBUTE_KEY_MAP } from "../constants/imageAttributes";

type Paths = string[];

const Meta: React.FC = () => {
  const { [ATTRIBUTE_KEY_MAP.background]: background, ...restAttributeMap } =
    ATTRIBUTE_MAP;

  // console.log("ATTRIBUTE_MAP: ",ATTRIBUTE_MAP)
  // console.log("[ATTRIBUTE_KEY_MAP.background]: ",[ATTRIBUTE_KEY_MAP.background])
  // console.log("restAttributeMap: ",restAttributeMap)
  // console.log("background: ",background)
  const paths = Object.entries(restAttributeMap).reduce(
    (paths: Paths, [key, attribute]) => {
      attribute.values.forEach((value) => {
        if (value) {
          paths.push(`/images/alpaca/${key}/${value}.png`);
        }
      });
      return paths;
    },
    [],
  );
  // console.log("paths Object.entries :",paths)
  return (
    <Helmet>
      {paths.map((path) => (
        <link key={path} rel="preload" as="image" href={path} />
      ))}
    </Helmet>
  );
};

export default React.memo(Meta);
