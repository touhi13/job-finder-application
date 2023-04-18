import React from 'react'
import { useDispatch } from 'react-redux'
import { searched } from '../../features/jobs/jobsSlice';

export default function Search() {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        dispatch(searched(e.target.value));
    };

    return (
        <div className="search-field group flex-1">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input type="text" placeholder="Search Job" className="search-input" id="lws-searchJob"
                onChange={handleChange} />
        </div>
    )
}
