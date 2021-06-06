import React,{useState} from 'react';
import { Layout, Menu } from 'antd';

import styles from './index.less';

const { Sider } = Layout;

function BasicLayout(props) {

  const [collapsed, setCollapsed] = useState(0);

  const collapse = collapsed =>{
    setCollapsed(collapsed)
  }

const trigger = (<div className={`${styles.triggerContent} ${collapsed?styles.openTigger:styles.closeTigger}`}></div>)

  return (
    <Layout className={styles.mainLayout}>
    <Sider
      breakpoint="lg"
      // collapsedWidth="0"
      collapsible
      trigger={trigger}
      onCollapse={collapse}
      theme="light"
    >
      <div className="logo" />
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          antv/x6
        </Menu.Item>
        <Menu.Item key="2">
          nav 2
        </Menu.Item>
        <Menu.Item key="3">
          nav 3
        </Menu.Item>
        <Menu.Item key="4">
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className={styles.mainWrapLayout}>
       {props.children}
    </Layout>
  </Layout>
  );
}

export default BasicLayout;
