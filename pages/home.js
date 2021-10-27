import React from 'react'
import Head from 'next/head'
import Dashboard from '../components/Dashboard.js'
function home() {
    return (
        <div>
            <Head>
                <title>Voice AI</title>
                <meta name="description" content=" Voice AI" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Dashboard />
        </div>
    )
}

export default home
