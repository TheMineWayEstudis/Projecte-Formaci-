import { Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React from 'react';
import { GithubOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import './base_layout.css';

export default function BaseLayout(props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    return (
        <Layout>
            <Header>
                <Menu theme="light" mode="horizontal">
                    <Menu.Item icon={<GithubOutlined/>}><a href="https://github.com/TheMineWayEstudis/Projecte-Formaci-" target="_blank">Veure codi</a></Menu.Item>
                    <Menu.Item icon={<UserOutlined/>}><a href="https://joelcampos.online" target="_blank">Autor</a></Menu.Item>
                    <Menu.Item icon={<HomeOutlined/>}><a href="https://www.culturalbadalona.com/" target="_blank">Escola</a></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '50px 50px' }}>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <Footer></Footer>
        </Layout>
    );
}