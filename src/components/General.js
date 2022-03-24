import React, { useState } from 'react';
import { NoPrint, Print } from 'react-easy-print';
import Text from './Text';

const General = () => {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const [editMode, setEditMode] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo((prevInfo) => {
            let newInfo = {...prevInfo, [name]: value };
            return newInfo;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode((prevMode) => !prevMode);
    };

    const { firstName, lastName, email, phone } = personalInfo;

    if (!editMode) {
        return (
            <Text
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
                handleEdit={handleSubmit}
            />
        );
    }

    return (
        <NoPrint>
            <Print printOnly>
                <p className='warning'>Please complete the form</p>
            </Print>
            <section className='general-section'>
                <form className='section' action='' onSubmit={handleSubmit}>
                    <label>
                        <p>First Name:</p>
                        <input
                            type='text'
                            placeholder='First Name'
                            name='firstName'
                            onChange={handleChange}
                            value={firstName}
                            required
                        />
                    </label>
                    <label>
                        <p>Last Name:</p>
                        <input
                            type='text'
                            placeholder='Last Name'
                            name='lastName'
                            onChange={handleChange}
                            value={lastName}
                            required
                        />
                    </label>
                    <label>
                        <p>Email:</p>
                        <input
                            type='email'
                            placeholder='example@mail.com'
                            name='email'
                            onChange={handleChange}
                            value={email}
                            required
                        />
                    </label>
                    <label>
                        <p>Phone Number:</p>
                        <input
                            type='tel'
                            placeholder='123-456-7890'
                            name='phone'
                            onChange={handleChange}
                            value={phone}
                            required
                        />
                    </label>
                    <button className='form-btn general-btn' type='submit'>
                        Save
                    </button>
                </form>
            </section>
        </NoPrint>
    );
};

export default General;