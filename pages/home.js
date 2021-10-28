import React from 'react'
import Head from 'next/head'
import Dashboard from '../components/Dashboard.js'
import dashboardData from '../shared/dashboardData.js'
const data=dashboardData
const home = ({dashboardContent})=> {
    return (
        <div>
            <Head>
            <title>Bobble AI</title>
        <meta name="description" content=" BobbleAI Voice AI " />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Dashboard dashboardContent={dashboardContent} />
        </div>
    )
}

export default home
export const getStaticProps = async() => {
    const dashboardContent = data; 
    return{
        props: {
            dashboardContent,
        },
    }
}
