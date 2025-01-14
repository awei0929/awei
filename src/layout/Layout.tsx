import { Layout } from '@arco-design/web-react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Style from './Layout.module.less';
import { layoutRouter } from '../router';
import cs from 'classNames';

const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;

function MyLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Layout className={Style['layout']}>
      <Header className={Style['layout-header']}>Header</Header>
      <Layout className={Style['layout-main']}>
        <Sider className={Style['layout-main-sider']}>
          {layoutRouter.map(item => {
            if (item.hidden) return;
            return (
              <div
                key={`/layout/${item.key}`}
                className={cs(Style['layout-main-sider-menu'], {
                  [Style['layout-main-sider-menu-active']]:
                    location.pathname === `/layout/${item.key}`,
                })}
                onClick={() => navigate(`/layout/${item.key}`)}
              >
                {item.name}
              </div>
            );
          })}
        </Sider>
        <Content className={Style['layout-main-content']}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MyLayout;
