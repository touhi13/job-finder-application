import React from 'react'
import JobsList from '../components/jobsList/JobsList'
import Search from '../components/search/Search'
import Sort from '../components/sort/Sort'

export default function Home() {
    return (

        <>
            <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                <h1 className="lws-section-title">All Available Jobs</h1>
                <div className="flex gap-4">
                    <Search />
                    <Sort />
                </div>
            </div>
            <JobsList />
        </>


    )
}
