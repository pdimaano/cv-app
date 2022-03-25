import React, { useState } from 'react';
import { Print, NoPrint } from 'react-easy-print';
import Text from './Text';

const Education = (props) => {
    const [educationInfo, setEducationInfo] = useState({
        school: '',
        degree: '',
        from: '',
        to: '',
    });
    const [editMode, setEditMode] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducationInfo((prevInfo) => {
            return {...prevInfo, [name]: value };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode((prevMode) => !prevMode);
    };

    const { school, degree, from, to } = educationInfo;

    const { id, handleDelete } = props;
    if (!editMode) {
        return (
            <Text
                school={school}
                degree={degree}
                from={from}
                to={to}
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
                <form className='section' action='' onSubmit={handleSubmit}>
                    <label htmlFor='school'>
                        <p>School:</p>
                        <input
                            type='text'
                            placeholder='School'
                            name='school'
                            id='school'
                            onChange={handleChange}
                            value={school}
                            required
                        />
                    </label>
                    <label>
                        <p>Degree:</p>
                        <input
                            type='text'
                            placeholder='Degree'
                            name='degree'
                            onChange={handleChange}
                            value={degree}
                            required
                        />
                    </label>
                    <label>
                        <p>From:</p>
                        <input
                            type='date'
                            name='from'
                            placeholder='From'
                            onChange={handleChange}
                            value={from}
                            required
                        />
                    </label>
                    <label>
                        <p>To:</p>
                        <input
                            type='date'
                            name='to'
                            placeholder='To'
                            onChange={handleChange}
                            value={to}
                            required
                        />
                    </label>
                    <button className='form-btn'>Save</button>
                    <button
                        className='form-btn'
                        type='button'
                        onClick={() => handleDelete('educationIds', id)}>
                        Remove
                    </button>
                </form>
            </section>
        </NoPrint>
    );
};

export default Education;