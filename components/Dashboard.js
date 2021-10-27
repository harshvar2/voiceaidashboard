import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import styles from '../styles/Dashboard.module.css'
import DashboardContents from '../components/DashboardContents'
import { FaBars } from "react-icons/fa"
const data =
    [
        {
            "id": 1,
            "imgUrl": "/images/Home.png",
            "title": "At Home",
            "body": "Record voice with general ambient noise, usual sounds, or silence around you."
        },
        {
            "id": 2,
            "imgUrl": "/images/Construction.png",
            "title": "Construction",
            "body": "There are construction or renovation noises from machines, metal works, cranes nearby."
        },
        {
            "id": 3,
            "imgUrl": "/images/Dog.png",
            "title": "With Pets",
            "body": "There are dogs, cats, parrots or other kinds of pets making sounds around you."
        },
        {
            "id": 4,
            "imgUrl": "/images/Bus.png",
            "title": "In Traffic",
            "body": "It’s street noise. Cars buses, bikes honking, engines roaring, brakes squeaking."
        },
        {
            "id": 5,
            "imgUrl": "/images/Metro.png",
            "title": "Outside",
            "body": "You’re in a metro, market, shopping mall, park, station, or similar places."
        },
        {
            "id": 6,
            "imgUrl": "/images/Bar.png",
            "title": "Having Fun",
            "body": "You’re in a pub or bar, watching a match, in an auditorium or in a Rock Show!"
        },
        {
            "id": 7,
            "imgUrl": "/images/Kids.png",
            "title": "Kids Around",
            "body": "You hear children playing, crying, talking, shouting or just having fun."
        },
        {
            "id": 8,
            "imgUrl": "/images/People.png",
            "title": "People Talking",
            "body": "There are people talking, chatting, coughing, sneezing in your background."
        },
        {
            "id": 9,
            "imgUrl": "/images/Construction.png",
            "title": "In Office",
            "body": "Its either silent or typical office noise like keyboard typing, printers, or AC"
        },

    ]


const Dashboard = () => {
    return (
        <div >
           
            <Navbar  sticky="top" className="pt-0">
                <Navbar.Brand className={`d-block d-md-none ${styles.Fabars}`} size="3x"  ><FaBars /></Navbar.Brand>
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
            <div className="d-flex justify-content-center align-content-center">
                <span className={styles.chooseYourSurrounding}>Chooose your Surrounding </span>
            </div>
            <DashboardContents contents={data} />
        </div>
    )
}

export default Dashboard

export const getStaticProps = async () => {
    const contents = data;
    return {
        props: {
            contents,
        },
    }
}