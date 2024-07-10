import React from "react";
import './header.css'
import { Button, Layout, theme, Avatar, Dropdown } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons'
import { useDispatch } from "react-redux";
import { collapseChange } from "../../store/reducers/tab";

const { Header } = Layout;
const CommonHeader = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    个人中心
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={() => logout()} target="_blank" rel="noopener noreferrer">
                    退出
                </a>
            ),
        }
    ];

    // 退出
    const logout = () => {
        console.log("已退出");
    }


    // 创建dispatch
    const dispatch = useDispatch();
    const setCollapse = () => {
        dispatch(collapseChange())
    }

    return (
        <Header className="header-container"
            style={{
                padding: 0,
                background: colorBgContainer,
            }}
        >
            <Button
                type="text"
                icon={<MenuFoldOutlined></MenuFoldOutlined>}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff'
                }}
                onClick={() => setCollapse()}
            />
            <Dropdown
                menu={{items}}
            >
                <Avatar className="header-avatar" size={36} src={<img src={require("../../assets/images/lx.jpg")}></img>}></Avatar>
            </Dropdown>
        </Header>
    )
}

export default CommonHeader