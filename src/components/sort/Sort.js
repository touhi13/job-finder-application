import React from 'react'
import { useDispatch } from 'react-redux'
import { sorted } from '../../features/jobs/jobsSlice';

export default function Sort() {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        dispatch(sorted(e.target.value));
    };
    return (
        <select id="lws-sort" name="sort" autoComplete="sort" className="flex-1" onChange={handleChange}>
            <option>Default</option>
            <option>Salary (Low to High)</option>
            <option>Salary (High to Low)</option>
        </select>
    )
}
