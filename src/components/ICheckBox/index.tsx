import React from "react";
import { Checkbox } from "antd";
import s from "./index.module.scss";

const CheckboxGroup = Checkbox.Group;

const ICheckBox: React.FC<any> = ({
  plainOptions = [],
  label,
  leftRatio,
  fontSizeVariate,
  style,
  ...rest
}) => {
  const cssVariates = {
    "--font-size": fontSizeVariate + "px",
  };

  return (
    <div className={s.container} style={{ ...style, ...cssVariates }} {...rest}>
      <div className={s.lable} style={{ width: leftRatio + "%" }}>
        {label}
      </div>
      <div style={{ position: "relative", flex: 1 }}>
        <CheckboxGroup options={plainOptions} style={{ fontSize: "30px" }} />
      </div>
    </div>
  );
};

export default ICheckBox;
