import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sorted } from '../../features/jobs/jobsSlice';

export default function Sort() {
    const dispatch = useDispatch();
    const { sortBy } = useSelector((state) => state.jobs);
    const [sort, setSort] = useState(sortBy);

    const handleChange = (e) => {
        e.preventDefault();
        setSort(e.target.value)
        dispatch(sorted(sort));
        console.log(sort)
    };
    return (
        <select id="lws-sort" name="sort" autoComplete="sort" className="flex-1" value={sort} onChange={handleChange}>
            <option>Default</option>
            <option>Salary (Low to High)</option>
            <option>Salary (High to Low)</option>
        </select>
    )
}
