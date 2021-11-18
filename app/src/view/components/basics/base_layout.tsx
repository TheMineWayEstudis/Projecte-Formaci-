import { Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React from 'react';
import { GithubOutlined } from '@ant-design/icons';

export default function BaseLayout() {
    return (
        <Layout>
            <Header>
                <Menu theme="light" mode="horizontal">
                    <Menu.Item icon={<GithubOutlined/>}>Veure codi</Menu.Item>
                </Menu>
            </Header>
            <Content>
                
            </Content>
            <Footer></Footer>
        </Layout>
    );
}