/*
 * @Description: file content
 * @Author: cg
 * @Date: 2024-12-26 10:42:08
 * @LastEditors: cg
 * @LastEditTime: 2024-12-26 11:15:28
 */
/*
 * @Description: 文本标签
 * @Author: cg
 * @Date: 2024-11-18 14:01:32
 * @LastEditors: cg
 * @LastEditTime: 2024-12-04 15:20:11
 */
import React from "react";
import s from "./index.module.scss";

const Text: React.FC<any> = ({ text = "文本标签", ...rest }) => {
  return (
    <div className={s.container} {...rest}>
      {text}
    </div>
  );
};

export default Text;
