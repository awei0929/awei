import { ComponentType } from 'react';

export interface RouteType {
  name: string;
  /**
   * 路由key，同时也是路由path
   */
  key: string;
  /**
   * icon 图标。通常使用用icon组件
   */
  icon?: React.ReactNode;
  /**
   * 是否在侧边栏隐藏。默认false
   */
  hidden?: boolean;
  /**
   * 组件在pages中的路径
   */
  componentPath?: string;
  /**
   * 子级
   */
  children?: RouteType[];
  /**
   * 组件实例
   */
  component?: ComponentType;
}

export const defaultRouter = 'welcome';

export const layoutRouter: RouteType[] = [
  {
    name: '欢迎页',
    key: 'welcome',
    componentPath: 'Welcome',
    hidden: true,
  },
  {
    name: '工作流',
    key: 'react-flow',
    componentPath: 'OnePage',
  },
  {
    name: 'Three Fiber',
    key: 'three',
    componentPath: 'Three',
  },
];
