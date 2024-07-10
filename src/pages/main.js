import React from "react";
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd';
import CommonAside from "../components/commonAside/aside";
import CommonHeader from "../components/commonHeader/header";
import { useSelector } from 'react-redux'

const { Content } = Layout;

const Main = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    // 获取展开收起的状态
    const isCollapse = useSelector(state => state.tab.isCollapse)
    return (
        <Layout className="main-container">
            <CommonAside isCollapse={isCollapse}></CommonAside>
            <Layout>
                <CommonHeader></CommonHeader>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {/* 路由出口 */}
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default Main