import React, { useState } from 'react';
import { Print, NoPrint } from 'react-easy-print';
import Text from './Text.js';

const Experience = (props) => {
    const [experienceInfo, setExperienceInfo] = useState({
        company: '',
        title: '',
        from: '',
        to: '',
        tasks: '',
    });

    const [editMode, setEditMode] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperienceInfo((prevInfo) => {
            return { ...prevInfo, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode((prevMode) => !prevMode);
    };

    const { company, title, from, to, tasks } = experienceInfo;

    const { id, handleDelete } = props;

    if (!editMode) {
        return (
            <Text
                company={company}
                title={title}
                from={from}
                to={to}
                tasks={tasks}
                handleEdit={handleSubmit}
            />
        );
    }

    return (
        <NoPrint>
            <Print printOnly>
                <p className='warning'>Please complete the form</p>
            </Print>
            <section>
                <form action='' className='section xp-section' onSubmit={handleSubmit}>
                    <label>
                        <p>Company:</p>
                        <input
                            type='text'
                            placeholder='Company'
                            name='company'
                            onChange={handleChange}
                            value={company}
                            required
                        />
                    </label>
                    <label>
                        <p>Title:</p>
                        <input
                            type='text'
                            placeholder='Title'
                            name='title'
                            onChange={handleChange}
                            value={title}
                            required
                        />
                    </label>
                    <label>
                        <p>From:</p>
                        <input
                            type='date'
                            placeholder='From'
                            name='from'
                            onChange={handleChange}
                            value={from}
                            required
                        />
                    </label>
                    <label>
                        <p>To:</p>
                        <input
                            type='date'
                            placeholder='To'
                            name='to'
                            onChange={handleChange}
                            value={to}
                            required
                        />
                    </label>
                    <textarea
                        name='tasks'
                        className='tasks'
                        placeholder='Tasks, duties, etc.'
                        onChange={handleChange}
                        value={tasks}
                        required
                    />
                    <button className='form-btn'>Save</button>
                    <button
                        className='form-btn'
                        type='button'
                        onClick={() => handleDelete('experienceIds', id)}>
                        Remove
                    </button>
                </form>
            </section>
        </NoPrint>
    );
};

export default Experience;