import React from 'react';
import { Col, Layout, Row, Image } from 'antd';
import UserFooter from '../components/UserFooter/UserFooter';
const { Header, Footer, Sider, Content } = Layout;

const SideNav = () => {
    return (
        <Sider>
            <Col xs={0} sm={0} md={24} lg={24}>
                <div className="side-nav">
                    <Row style={{ width: '100%', backgroundColor: '#ffffff' }}>
                        <Col xs={0} sm={0} md={24} lg={24} className="af-center-align">
                            <Image className="userHeaderLogo" preview={false} />
                        </Col>
                        {/* <Col xs={0} sm={0} md={6} lg={6} className="af-vertical-center">
                            <span className="af-font-12">Welcome Guest</span>
                        </Col> */}
                    </Row>
                    <div className="scroll-container">


                        <Row className="af-padding-20" className="orderFlowNav side-nav-active">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Order flow dashboard</span>
                            </Col>
                        </Row>

                        <Row className="af-padding-20" className="orderFlowNav">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Server health Monitor</span>
                            </Col>
                        </Row>

                        <Row className="af-padding-20" className="orderFlowNav">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Open Exceptions</span>
                            </Col>
                        </Row>

                        <Row className="af-padding-20" className="orderFlowNav">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Application Snapshot</span>
                            </Col>
                        </Row>
                        {/* <Row className="af-padding-20" className="orderFlowNav side-nav-active">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Order flow dashboard</span>
                            </Col>
                        </Row>

                        <Row className="af-padding-20" className="orderFlowNav">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Server health Monitor</span>
                            </Col>
                        </Row>

                        <Row className="af-padding-20" className="orderFlowNav">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Open Exceptions</span>
                            </Col>
                        </Row>

                        <Row className="af-padding-20" className="orderFlowNav">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Application Snapshot</span>
                            </Col>
                        </Row>
                        <Row className="af-padding-20" className="orderFlowNav side-nav-active">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Order flow dashboard</span>
                            </Col>
                        </Row>

                        <Row className="af-padding-20" className="orderFlowNav">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Server health Monitor</span>
                            </Col>
                        </Row>

                        <Row className="af-padding-20" className="orderFlowNav">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Open Exceptions</span>
                            </Col>
                        </Row>

                        <Row className="af-padding-20" className="orderFlowNav">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Application Snapshot</span>
                            </Col>
                        </Row>
                        <Row className="af-padding-20" className="orderFlowNav side-nav-active">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Order flow dashboard</span>
                            </Col>
                        </Row>

                        <Row className="af-padding-20" className="orderFlowNav">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Server health Monitor</span>
                            </Col>
                        </Row>

                        <Row className="af-padding-20" className="orderFlowNav">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Open Exceptions</span>
                            </Col>
                        </Row>

                        <Row className="af-padding-20" className="orderFlowNav">
                            <Col xs={24} sm={24} md={24} lg={24} className="af-line-20 af-pointer">
                                <span className="af-font-sans af-font-12">Application Snapshot</span>
                            </Col>
                        </Row> */}


                    </div>


                    <Row className="af-padding-20" id="sideNavFooter">
                        <Col xs={24} sm={24} md={24} lg={24} className="af-line-22 af-pointer">
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={24} className="af-line-22 af-pointer af-text-center">
                                    <span className="af-font-10 af-link af-pointer af-font-sans">Terms and conditions</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={24} className="af-line-22 af-pointer af-text-center">
                                    <span className="af-center-align af-font-10 af-font-sans">Copyrigh @Acuver Consulting Pvt Ltd, 2021</span>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>
            </Col>

        </Sider >
    );
};

export default SideNav;