import { StrictMode, Suspense, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'mobx-react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useStores } from './store';
import Layout from './layout';
import './index.css';
import { getFlattenRoutes } from './helpers/ formatRouter';
import { defaultRouter, layoutRouter } from './router';

function Main() {
  const flattenRoutes = useMemo(
    () => getFlattenRoutes(layoutRouter, 'layout') || [],
    []
  );

  return (
    <StrictMode>
      <Provider store={useStores}>
        <HashRouter>
          {/* </BrowserRouter> */}
          {/* <BrowserRouter> */}
          <Routes>
            <Route path="/layout" element={<Layout />}>
              {flattenRoutes.map(route => {
                return (
                  <Route
                    key={`/layout/${route.key}`}
                    path={`/layout/${route.key}`}
                    element={
                      <Suspense fallback={<div>加载中...</div>}>
                        {route.component && <route.component />}
                      </Suspense>
                    }
                  />
                );
              })}
              <Route
                path="/layout"
                element={<Navigate to={`/layout/${defaultRouter}`} />}
              />

              <Route
                path="*"
                element={<Navigate to={`/layout/${defaultRouter}`} />}
              />
            </Route>

            {/* <Route path="/cc" element={<div>222</div>}>
              
              </Route>
              <Route path="/bb" element={<div>222</div>}>
              
              </Route>
            <Route path="*" element={<Layout />}>
              
            </Route> */}
          </Routes>
        </HashRouter>
      </Provider>
    </StrictMode>
  );
}

export default Main;

createRoot(document.getElementById('root')!).render(<Main />);
