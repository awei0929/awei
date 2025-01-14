import { lazy } from 'react';
import { RouteType } from '../router';

// // 匹配懒加载文件路径
// const matchingPaths = (path: string) => {
//   if (path.match(/\.tsx$/)) {
//     return `../pages/${path}`;
//   }
//   return `../pages/${path}/index.tsx`;
// };

/**
 * 动态加载组件
 * @param routes
 */
export function getFlattenRoutes(routes: RouteType[], father: string) {
  // const mod = import.meta.glob('../pages/**/[a-zA-Z[]*.tsx');
  const res: RouteType[] = [];
  function travel(_routes: RouteType[]) {
    _routes.forEach(route => {
      if (route.componentPath) {
        /* @vite-ignore */
        route.component = lazy(
          () => import(`../pages/${father}/${route.componentPath}/index.tsx`)
        );
        res.push(route);
      }
    });
  }
  travel(routes);
  return res;
}
