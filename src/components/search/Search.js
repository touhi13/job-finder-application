import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searched } from '../../features/jobs/jobsSlice';

export default function Search() {
    const dispatch = useDispatch();
    const { searchText } = useSelector((state) => state.jobs);
    const [input, setInput] = useState(searchText);

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
        dispatch(searched(input));
    };

    return (
        <div className="search-field group flex-1">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" value={input}
                onChange={handleChange } />
        </div>
    )
}
