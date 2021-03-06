import React from 'react';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait } from '@fortawesome/free-solid-svg-icons'

const Profile = (props) => {
    const data = props.data;

    const { name, adress, phone, salary, image } = data;
    return (
        <div className='profile' >
            <img src={image} alt="images" />
            <h3>Name: {name}</h3>
            <p>Adress: {adress}</p>
            <p>Phone: {phone}</p>
            <p>Monthly income: {salary}</p>
            <button onClick={() => props.addprofile(data)}> <FontAwesomeIcon icon={faPortrait} /> +</button>

        </div>
    );
};

export default Profile;