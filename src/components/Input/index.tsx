/*
 * @Description: 输入框
 * @Author: cg
 * @Date: 2024-11-18 14:01:32
 * @LastEditors: cg
 * @LastEditTime: 2024-12-26 11:18:12
 */
import React from "react";
import s from "./index.module.scss";

const Input: React.FC<any> = ({
  label = "标签",
  defaultValue = "",
  showUndeLine,
  leftRatio = 30,
  placeholder = "提示语",
  style,
  ...rest
}) => {
  return (
    <div className={s.container} style={{ ...style }} {...rest}>
      <div className={s.lable} style={{ width: leftRatio + "%" }}>
        {label}
      </div>
      <div style={{ position: "relative", flex: 1 }}>
        <input
          className={s.inputInstance}
          defaultValue={defaultValue}
          style={{ width: "100%", fontSize: style.fontSize }}
          placeholder={placeholder}
        ></input>
        {!!showUndeLine && <div className={s.underLine} />}
      </div>
    </div>
  );
};

export default Input;
