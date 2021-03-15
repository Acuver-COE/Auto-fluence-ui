import React, { useState } from 'react';
import { Col, Layout, Row, Drawer, Image } from 'antd';
import AppHeader from '../AppHeader/AppHeader';
import SideNav from '../../SideNav/SideNav';
import UserFooter from '../UserFooter/UserFooter';
import OrderFlow from '../OrderFlow/OrderFlow';
import 'antd/dist/antd.css';
import { MenuUnfoldOutlined } from '@ant-design/icons'
import AppFooter from '../AppFooter/AppFooter';

const { Header, Footer, Sider, Content } = Layout;

const DashBoard = () => {
    const mediaMatch = window.matchMedia("(min-width: 1024px)");
    const [visible, setVisible] = useState(false);

    const handleDrawerMenu = () => {
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }
    return (
        <Row style={mediaMatch.matches ? { height: '100%'} : {height: '100%'}}>
            <Col xs={0} sm={0} md={6} lg={6}>
                <SideNav />
            </Col>
            <Col xs={24} sm={24} md={0} lg={0} className="af-padding-20 mobile-header">
                <MenuUnfoldOutlined onClick={handleDrawerMenu} />
            </Col>
            <Drawer
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} className="af-center-align">
                        <Image className="userHeaderLogo" preview={false} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={2442}>
                        <hr />
                    </Col>
                </Row>
                <div style={{ width: '100%' }}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <span className="af-font-sans af-font-12">Order flow dashboard</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <span className="af-font-sans af-font-12">Server health Monitor</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <span className="af-font-sans af-font-12">Open Exceptions</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <span className="af-font-sans af-font-12">Application Snapshot</span>
                        </Col>
                    </Row>

                </div>
                {/* <Row style={{position: 'fixed', bottom: '0'}}>
                    <Col xs={24} sm={24} md={24} lg={24} className="af-line-24 af-pointer">
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-24 af-pointer af-text-center">
                                <span className="af-font-10 af-link af-pointer af-font-sans">Terms and conditions</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-24 af-pointer af-text-center">
                                <span className="af-center-align af-font-10 af-font-sans">Copyrigh @Acuver Consulting Pvt Ltd, 2021</span>
                            </Col>
                        </Row>

                    </Col>
                </Row> */}
            </Drawer>
            <Col xs={24} sm={24} md={16} lg={16} style={mediaMatch.matches ? { marginTop: '5%' } : { marginTop: '5%' }}>
                <OrderFlow />
            </Col>

            <Col xs={24} sm={24} md={0} lg={0} className="footer-block">
                <Footer className="mobile-footer">
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} >
                            <div className="af-center-align">
                                <div className="af-line-18">
                                    <span className="af-font-10 af-link af-pointer af-font-sans">Terms and conditions</span>
                                </div>
                                &nbsp; &nbsp;
                            </div>


                            {/* <span style={{ color: 'white' }}>AIC</span> */}
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} className="af-line-18">
                            <span className="af-center-align af-font-10 af-font-sans">Copyrigh @Acuver Consulting Pvt Ltd, 2021</span>
                        </Col>
                    </Row>
                </Footer>
            </Col>

            {/* {mediaMatch.matches ? '' : <React.Fragment><br/><br/><Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <hr className="af-horizontal" />
                </Col>
            </Row><hr/><AppFooter /></React.Fragment>} */}
        </Row >
    );
};

export default DashBoard;