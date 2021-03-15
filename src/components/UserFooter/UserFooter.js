import React from 'react';
import { Row, Col, Layout, Image } from 'antd';

const { Footer } = Layout;

const UserFooter = () => {
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Footer>
                    <Row className="footer-background">
                        <Col xs={24} sm={24} md={24} lg={24} >
                            <div className="af-center-align">
                                <div className="af-line-18">
                                    <span className="af-font-10 af-link af-pointer af-font-sans">Terms and conditions</span>
                                </div>
                                &nbsp; &nbsp;
                                <div className="af-line-18">
                                    <span className="af-font-10 af-link af-pointer af-font-sans">About Us</span>
                                </div>
                            </div>


                            {/* <span style={{ color: 'white' }}>AIC</span> */}
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} className="af-line-18">
                            <span className="af-center-align af-font-10 af-font-sans">Copyrigh @Acuver Consulting Pvt Ltd, 2021</span>
                        </Col>
                    </Row>
                </Footer>
            </Col>
        </Row>
    );
};

export default UserFooter;