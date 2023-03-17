import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeJobs, createJobs } from '../../features/jobs/jobsSlice';

export default function Form() {
    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    const [salary, setSalary] = useState("")
    const [deadline, setDeadline] = useState("")
    const [editMode, setEditMode] = useState(false);

    const { editing } = useSelector((state) => state.jobs) || {};
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const { id, title, type, salary, deadline } = editing || {};
        if (id) {
            setEditMode(true);
            setTitle(title)
            setType(type)
            setSalary(salary)
            setDeadline(deadline)
        } else {
            setEditMode(false);
            reset();
        }
    }, [editing]);

    const reset = () => {
        setTitle('')
        setType('')
        setSalary('')
        setDeadline('')
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(title, type, salary, deadline);
        dispatch(createJobs({ title, type, salary, deadline }))
        reset();
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(
            changeJobs({
                id: editing?.id,
                data: { title, type, salary, deadline }
            })
        );
        setEditMode(false);
        reset();
        navigate('/');
    };
    return (
        <div className="max-w-3xl mx-auto">
            <form className="space-y-6" onSubmit={editMode ? handleUpdate : handelSubmit}>
                <div className="fieldContainer">
                    <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                    <select id="lws-JobTitle" name="lwsJobTitle" required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}>
                        <option value="" hidden selected>Select Job</option>
                        <option>Software Engineer</option>
                        <option>Software Developer</option>
                        <option>Full Stack Developer</option>
                        <option>MERN Stack Developer</option>
                        <option>DevOps Engineer</option>
                        <option>QA Engineer</option>
                        <option>Product Manager</option>
                        <option>Social Media Manager</option>
                        <option>Senior Executive</option>
                        <option>Junior Executive</option>
                        <option>Android App Developer</option>
                        <option>IOS App Developer</option>
                        <option>Frontend Developer</option>
                        <option>Frontend Engineer</option>
                    </select>
                </div>

                <div className="fieldContainer">
                    <label htmlFor="lws-JobType">Job Type</label>
                    <select id="lws-JobType" name="lwsJobType" required value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="" hidden selected>Select Job Type</option>
                        <option>Full Time</option>
                        <option>Internship</option>
                        <option>Remote</option>
                    </select>
                </div>

                <div className="fieldContainer">
                    <label htmlFor="lws-JobSalary">Salary</label>
                    <div className="flex border rounded-md shadow-sm border-slate-600">
                        <span className="input-tag">BDT</span>
                        <input type="number" name="lwsJobSalary" id="lws-JobSalary" required className="!rounded-l-none !border-0" placeholder="20,00,000" value={salary}
                            onChange={(e) => setSalary(e.target.value)} />
                    </div>
                </div>

                <div className="fieldContainer">
                    <label htmlFor="lws-JobDeadline">Deadline</label>
                    <input type="date" name="lwsJobDeadline" id="lws-JobDeadline" required value={deadline}
                        onChange={(e) => setDeadline(e.target.value)} />
                </div>

                <div className="text-right">
                    <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                        {editMode ? "Update" : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    )
}
