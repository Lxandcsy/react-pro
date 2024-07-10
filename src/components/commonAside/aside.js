import React from "react";
import MenuConfig from '../../config'
import * as Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const iconToElement = name => React.createElement(Icon[name])
// 处理菜单的数据，map遍历
const menu = MenuConfig.map(item => {
    // 没有子菜单
    const noChildren = {
        key: item.path,
        icon: iconToElement(item.icon),
        label: item.label
    }
    // 有子菜单
    if (item.children) {
        noChildren.children = item.children.map(item => {
            return {
                key: item.path,
                label: item.label
            }
        })
    }
    return noChildren
})

// 动态获取icon
const CommonAside = ({isCollapse}) => {
    return (
        <Sider trigger={null} collapsible collapsed={isCollapse}>
            <h3 className="app-name">lx</h3>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={menu}
                style={{
                    height: '100%'
                }}
            />
        </Sider>
    )
}

export default CommonAside