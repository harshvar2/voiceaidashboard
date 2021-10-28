import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import styles from '../styles/Dashboard.module.css'
import dashboardStyles from '../styles/DashboardContents.module.css'
import DashboardContents from '../components/DashboardContents'
import Sidebar from './Sidebar';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
const Dashboard = ({ dashboardContent }) => {
    const router = useRouter()
    let token
    if (typeof window !== 'undefined')
        token = localStorage.getItem("token")
    useEffect(async () => {
        await localStorage.clear()
        if (token == null) {
            return (router.push('/'))
        }
    }, [])

    return (
        <div >
            <div className={`d-block d-md-none ${styles.Sidebar}`}>
                <Sidebar />
            </div>
            <Navbar sticky="top" className="pt-0">

                <Container fluid className={styles.navbarContainer}>

                    <div href="#home" className={styles.navbar}><img src="/images/bitmap-copy-67.jpg" srcSet="/images/bitmap-copy-67@2x.jpg 2x,
             /images/bitmap-copy-67@3x.jpg 3x" alt="Avatar" className={styles.img.BitmapCopy67} /></div>
                    <Navbar className="d-flex flex-column d-none d-md-flex flex-md-row  ms-md-auto align-items-center collapse-navbar-collapse">
                        <Nav.Link href="#DASHBOARD" className={styles.navText} >DASHBOARD</Nav.Link>
                        <Nav.Link href="#STATS" className={styles.navText}>MY STATS</Nav.Link>
                        <Nav.Link href="#REVIEW" className={styles.navText}>REVIEW</Nav.Link>
                        <Nav.Link href="#GUIDELINES" className={styles.navText}>GUIDELINES</Nav.Link>
                        <Nav.Link href="#" ><a className="py-5">
                            <div className={styles.oval}>
                                <span className={styles.m}>M</span>
                            </div>
                        </a></Nav.Link>
                    </Navbar>
                </Container>
            </Navbar>
            <div className="d-flex justify-content-center align-items-center">
                <span className={styles.subHeading}>Chooose your Surrounding </span>
            </div>
            <div className={dashboardStyles.grid}>
                <DashboardContents dashboardContent={dashboardContent} />
            </div>
        </div>
    )
}

export default Dashboard
