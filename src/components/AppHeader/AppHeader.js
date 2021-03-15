import React from 'react';
import { Row, Col, Layout, Image } from 'antd';

const { Header } = Layout;

const AppHeader = (props) => {
    return (
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Row style={{ zIndex: 1000, width: "100%", marginBottom: '3%' }}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Header>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <div className="af-center-align header-background">
                                    <Image className="appHeader" preview={false} />
                                </div>

                                {/* <span style={{ color: 'white' }}>AIC</span> */}
                            </Col>
                        </Row>
                    </Header>
                </Col>
            </Row>
        </Col>
    );
};

export default AppHeader;