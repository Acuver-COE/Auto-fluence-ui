import React, { useState } from "react";
import { Row, Col, Form, Input, Button } from 'antd';
import AppHeader from './../AppHeader/AppHeader';
import AppFooter from "../AppFooter/AppFooter";
import { history } from "../../store";

const Login = (props) => {
    const mediaMatch = window.matchMedia("(min-width: 1024px)");
    const [state, setState] = useState({
        userName: null,
        password: null
    });

    const handleUserName = e => {
        let value = e.target.value;
        if (value !== null || value !== "") {
            handleError('userName', value);
        }
        setState((prevState) => ({
            ...prevState,
            userName: value
        }));
    }

    const handlePassword = e => {
        let value = e.target.value;
        if (value !== null || value !== "") {
            handleError('password', value);
        }
        setState((prevState) => ({
            ...prevState,
            password: value
        }));
    }

    const handleLogin = (e) => {
        if (validateFields()) {
            let obj = {
                userName: state.userName,
                password: state.password
            }

            console.log(obj);
            history.push('/dashboard');
        }
    }

    const validateFields = () => {
        if (state.userName == null || state.userName == '') {
            handleError('userName');
            return false;
        }

        if (state.password == null || state.password == '') {
            handleError('password');
            return false;
        }

        return true;
    }

    const handleError = (id, value = null) => {
        let errorDiv = `${id}-error-block`;
        if (value == null || value == '') {
            document.getElementById(id).style.border = "1px solid #af0000";
            document.getElementsByClassName(errorDiv)[0].style.display = "block";
        } else {
            document.getElementById(id).style.border = "1px solid #d9d9d9";
            document.getElementsByClassName(errorDiv)[0].style.display = "none";
        }
    }

    return (
        <React.Fragment>
            <Row>
                <AppHeader />
            </Row>

            <Row className="login-container af-center-align" style={{marginTop: '5%'}}>
                <Col xs={24} sm={24} md={24} lg={24} className="login-section" style={mediaMatch.matches ? {} : {marginTop: '25%'}}>
                    <Row justify="space-between">
                        <Col xs={24} sm={24} md={24} lg={24} className="af-bottom-20">
                            <span className="af-header af-font-sans">Sign In</span>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} className="af-bottom-10">
                            <Form id="login-form">
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <Form.Item>
                                        <Input
                                            type="text"
                                            placeholder="Username"
                                            onChange={(e) => handleUserName(e)}
                                            id="userName"
                                        />
                                        <span
                                            className="af-error userName-error-block af-font-12 af-font-sans af-padding-top-5"
                                            style={{ display: "none" }}
                                        >
                                            <i>!</i> Enter your username
                                    </span>
                                    </Form.Item>

                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <Form.Item>
                                        <Input type="password" placeholder="Password" onChange={(e) => handlePassword(e)} id="password" />
                                        <span
                                            className="af-error password-error-block af-font-12 af-font-sans af-padding-top-5"
                                            style={{ display: "none" }}
                                        >
                                            <i>!</i> Enter your password
                                </span>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} className="af-bottom-20 af-line-20">
                                    <Button className="login-btn af-cursor" onClick={(e) => handleLogin(e)}><span className="af-font-sans af-font-12">Login</span></Button>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} className="af-bottom-30 af-line-20">
                                    <span className="af-center-align af-link af-pointer af-font-sans af-font-12">Forgot password?</span>
                                </Col>
                            </Form>
                        </Col>

                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <hr className="af-horizontal" />
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <AppFooter />
                </Col>
            </Row>



        </React.Fragment>

    )
}

export default Login;