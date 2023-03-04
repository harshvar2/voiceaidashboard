
import Image from 'next/image';
import React, { useState } from 'react'
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router'
import { useEffect, useCallback } from 'react';
import { verifyCredentials } from '../utils/apiUtils'

import { Row, Col, Container, Form, FloatingLabel, Button, Spinner } from 'react-bootstrap';
function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const router = useRouter()
    let token
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(!isLoading)
        await verifyCredentials(email, password)
        token = await localStorage.getItem("token")
        if (token == null) {
            setLoggedIn(false)
            setLoginError("Invalid Username or Password")
        }
        else {
            setLoggedIn(true)
        }
    }
    useEffect(() => {
        if (loggedIn == true)
            return (router.push('/home'))
        if (token != null) {
            return (router.push('/home'))
        }
    }, [loggedIn])

    return (
        <div >
            <div className={styles.mask}>
                <img src="/images/bitmap-copy-67.jpg" srcSet="/images/bitmap-copy-67@2x.jpg 2x,
             /images/bitmap-copy-67@3x.jpg 3x" alt="Avatar" className={styles.img.BitmapCopy67} height="70px" width="180px" />

                <Container fluid >
                    <Row className={`mt-2  ${styles.row}`}>
                        <Col className="d-none d-md-block"><img src="/images/group-9.png"
                            srcset="/images/group-9@2x.png 2x,
                            /images/group-9@3x.png 3x" alt="Avatar" className={styles.Group9} /></Col>
                        <Col xs={6} className={`text-center ${styles.mainContainer}`}>
                            <Row className={styles.SignIn}>
                                Sign in
                            </Row>
                            <Row>
                                <div className={styles.subHeading} >
                                    <span> Record Voices across India!</span>
                                </div>
                            </Row>
                            <Row className={styles.form}>
                                <Form onSubmit={handleSubmit}>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Username"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                    </FloatingLabel>

                                    <Button className={styles.signInButton} variant="warning" disabled={!(email.length > 0 && password.length > 0)} type="submit">
                                        <span className={styles.signInButtonText}>SIGN IN</span>
                                    </Button>
                                    <Row className="d-flex align-center justify-content-center">
                                        {isLoading && <Spinner animation="border" />}
                                    </Row>
                                    {loginError && <p >{loginError}</p>}
                                </Form>
                            </Row>
                        </Col>
                        <Col className="text-end d-none d-md-block"><img src="/images/group-8.png"
                            srcset="/images/group-8@2x.png 2x,
                             /images/group-8@3x.png 3x"className={styles.Group8} alt="Avatar" /></Col>
                    </Row>

                    <Row className="d-block d-md-none">
                        <img src="/images/group-3.png"
                            srcset="/images/group-3@2x.png 2x,
                            /images/group-3@3x.png 3x" alt="Avatar" />
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default login
