import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../features/jobs/jobsSlice';
import JobItem from './JobItem';
import { useParams } from 'react-router-dom';


export default function JobsList() {
    const dispatch = useDispatch();
    const { filterType } = useParams();
    const { jobs, searchText, sortBy, isLoading, isError } = useSelector(
        (state) => state.jobs
    );

    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);

    let content = null;

    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && jobs?.length > 0) {
        let sortedJobs = jobs.slice(); // create a copy of the jobs array to avoid modifying the original array
        switch (sortBy) {
            case 'Salary (Low to High)':
                sortedJobs.sort((a, b) => a.salary - b.salary);
                break;
            case 'Salary (High to Low)':
                sortedJobs.sort((a, b) => b.salary - a.salary);
                break;
            default:
                // if sortBy is undefined or has an invalid value, sort by id (default sorting)
                sortedJobs.sort((a, b) => b.id - a.id);
        }
        content = sortedJobs
            .filter((job) =>
                (filterType === undefined || job.type.replace(/\s+/g, '').toLowerCase().replace(/\s+/g, '').toLowerCase() === filterType)
                && (searchText === '' || job.title.toLowerCase().includes(searchText.toLowerCase()))
            )
            .map((job) => <JobItem key={job.id} job={job} />);
    }

    if (!isLoading && !isError && jobs?.length === 0) {
        content = <p>No job available!</p>;
    }

    return (
        <div className="jobs-list">
            {content}
        </div>
    )
}
