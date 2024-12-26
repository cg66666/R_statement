/*
 * @Description: file content
 * @Author: cg
 * @Date: 2024-12-18 14:31:12
 * @LastEditors: cg
 * @LastEditTime: 2024-12-26 16:43:52
 */
// src/MyComponent.tsx
import React from "react";
import { components } from "./components";
import s from "./index.module.scss";

// 组件类型名称枚举
enum DefaultComponentNameEnum {
  TEXT = "Text",
  INPUT = "Input",
  ICHECKBOX = "ICheckBox",
}

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

type defaultComponentConfig = {
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

enum FlexDirectionEnum {
  PARALLEL = "initial",
  VERTICAL = "column",
}

enum FlexAlignEnum {
  TOP = "top",
  RIGHT = "end",
  BOTTOM = "bottom",
  LEFT = "start",
  MID = "center",
}

interface templateConfig {
  baseSize: number;
  column: number;
  row: number;
}

type childItem = {
  id: string;
  pid: string;
  // isSelected: boolean;
} & defaultComponentConfig;

enum LayoutEnum {
  // 自适应布局
  FLEX = "flex",
  // 自定义布局
  CUSTOM = "initial",
}

type tableItemType = {
  name: string;
  id: string;
  column: number[];
  columnString: string;
  row: number[];
  rowString: string;
  style: React.CSSProperties;
  cssVariates: React.CSSProperties; // 定义css中的变量，用于修改伪元素样式
  rect: {
    right: number;
    left: number;
    bottom: number;
    top: number;
  };
  layout: LayoutEnum;
  flexConfig: {
    direction: FlexDirectionEnum;
    flexVerticalAlign: FlexAlignEnum;
    flexParalleEqual: boolean;
    flexParallelAlign: FlexAlignEnum;
    flexVerticalEqual: boolean;
    isWrap: boolean;
  };
  isFreezed: boolean; // 当前是否为冻结
  children: Record<string, childItem>;
};

type tableItemConfigType = Record<string, tableItemType>;

export interface configType {
  tableConfig: tableItemConfigType;
  templateConfig: templateConfig;
}

interface IProps {
  config: configType;
  style?: React.CSSProperties;
}

const Demo: React.FC<IProps> = ({ config, style = {} }) => {
  const { tableConfig, templateConfig } = config;

  const { row, column, baseSize } = templateConfig;

  return (
    <div className={s.outine} style={style}>
      <div className={s.drawingBoard}>
        <div
          className={s.gridContainer}
          style={{
            gridTemplateColumns: `repeat( ${column},${baseSize}px)`,
            gridTemplateRows: `repeat( ${row},${baseSize}px)`,
            width: baseSize * column + "px",
            height: baseSize * row + "px",
            transform: `scale(1)`,
          }}
        >
          {Object.keys(tableConfig).map((name) => {
            const target = tableConfig[name];
            // 自适应布局配置
            let flexConfig: React.CSSProperties = {};
            if (target.flexConfig.direction === FlexDirectionEnum.PARALLEL) {
              flexConfig = {
                justifyContent: target.flexConfig.flexParalleEqual
                  ? "space-evenly"
                  : target.flexConfig.flexParallelAlign,
                alignContent: target.flexConfig.flexVerticalEqual
                  ? "space-evenly"
                  : target.flexConfig.flexVerticalAlign === FlexAlignEnum.TOP
                  ? "flex-start"
                  : target.flexConfig.flexVerticalAlign === FlexAlignEnum.BOTTOM
                  ? "flex-end"
                  : "center",
                alignItems:
                  target.flexConfig.flexVerticalAlign === FlexAlignEnum.TOP
                    ? "flex-start"
                    : target.flexConfig.flexVerticalAlign ===
                      FlexAlignEnum.BOTTOM
                    ? "flex-end"
                    : "center",
              };
            } else {
              flexConfig = {
                justifyContent: target.flexConfig.flexVerticalEqual
                  ? "space-evenly"
                  : target.flexConfig.flexVerticalAlign === FlexAlignEnum.TOP
                  ? "flex-start"
                  : target.flexConfig.flexVerticalAlign === FlexAlignEnum.BOTTOM
                  ? "flex-end"
                  : "center",
                alignItems:
                  target.flexConfig.flexParallelAlign === FlexAlignEnum.LEFT
                    ? "flex-start"
                    : target.flexConfig.flexParallelAlign ===
                      FlexAlignEnum.RIGHT
                    ? "flex-end"
                    : "center",
                alignContent: target.flexConfig.flexParalleEqual
                  ? "space-evenly"
                  : target.flexConfig.flexParallelAlign === FlexAlignEnum.LEFT
                  ? "flex-start"
                  : target.flexConfig.flexParallelAlign === FlexAlignEnum.RIGHT
                  ? "flex-end"
                  : "center",
              };
            }

            // css中使用的变量
            const cssVariates = {
              "--border-left-style": target.cssVariates.borderLeftStyle,
              "--border-left-color": target.cssVariates.borderLeftColor,
              "--border-left-width": target.cssVariates.borderLeftWidth + "px",
              // '--padding-left': target.style.paddingLeft + 'px',
              "--border-right-style": target.cssVariates.borderRightStyle,
              "--border-right-color": target.cssVariates.borderRightColor,
              "--border-right-width":
                target.cssVariates.borderRightWidth + "px",
              // '--padding-right': target.style.paddingRight + 'px',
              "--border-bottom-style": target.cssVariates.borderBottomStyle,
              "--border-bottom-color": target.cssVariates.borderBottomColor,
              "--border-bottom-width":
                target.cssVariates.borderBottomWidth + "px",
              // '--padding-bottom': target.style.paddingBottom + 'px',
              "--border-top-style": target.cssVariates.borderTopStyle,
              "--border-top-color": target.cssVariates.borderTopColor,
              "--border-top-width": target.cssVariates.borderTopWidth + "px",
              // '--padding-top': target.style.paddingTop + 'px',
              // '--background-color': target.style.backgroundColor || 'initial'
            };

            return (
              !!target && (
                <div
                  className={`${s.gridItem} ${s.renderDom}  `}
                  style={{
                    gridColumn: target.columnString,
                    gridRow: target.rowString,
                    display: target.layout,
                    flexDirection: target.flexConfig.direction,
                    alignItems: "left",
                    flexWrap: target.flexConfig.isWrap ? "wrap" : "nowrap",
                    ...flexConfig,
                    ...cssVariates,
                    ...target.style,
                  }}
                >
                  {!!Object.keys(target.children).length &&
                    Object.keys(target.children).map((name2) => {
                      const item2 = target.children[name2];
                      const propsConfig: any = {};
                      const styleConfig: any = {};
                      Object.keys(item2.props).forEach((name3) => {
                        if (item2.props[name3].isStyle) {
                          styleConfig[item2.props[name3].name] =
                            item2.props[name3].value;
                        } else {
                          propsConfig[item2.props[name3].name] =
                            item2.props[name3].value;
                        }
                      });
                      const targetDom = React.createElement(
                        components[item2.renderDom],
                        {
                          ...propsConfig,
                          style: styleConfig,
                        }
                      );
                      return (
                        <div className={`${s.renderItem}`}>{targetDom}</div>
                      );
                    })}
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Demo;
