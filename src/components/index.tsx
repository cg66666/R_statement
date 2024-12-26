/*
 * @Description: file content
 * @Author: cg
 * @Date: 2024-11-18 14:29:44
 * @LastEditors: cg
 * @LastEditTime: 2024-12-26 11:18:25
 */
import Text from "./Text";
import Input from "./Input";
import ICheckBox from "./ICheckBox";

export const components = {
  Text,
  Input,
  ICheckBox,
};

// 配置框组件类型枚举
enum InquireType {
  INPUT, // 输入框
  SELECT, // 选择器
  INPUTNUMBER, // 数字输入框
  COLORPICKER, // 颜色选择器
  SEGMENTED, // 分段控制器
  SINGLECHECKBOX, // 单选框
  SLIDER, // 滑动输入条
  TEXTAREA, // 文本域
  DYNAMICSELECT, // 动态选择器
}

// 组件类型名称枚举
enum DefaultComponentNameEnum {
  TEXT = "Text",
  INPUT = "Input",
  ICHECKBOX = "ICheckBox",
}

export type defaultComponentConfig = {
  chineseName: string;
  name: DefaultComponentNameEnum;
  renderDom: DefaultComponentNameEnum;
  desc?: string;
  props: Record<
    string,
    {
      label: string;
      type: InquireType; // 输入组件类型
      name: string;
      isStyle: boolean; // 该内容是否写入style
      value: any;
      normalize?: (value: any) => any; // formItem上的功能
      getValueProps?: (value: any) => Record<string, any>; // formItem上的功能
      tooltip?: React.ReactNode;
      prop?: Record<string, any>; // 该属性对应的组件传参
    }
  >;
};
