import React from 'react';
import './profile.css'

const Profile = (props) => {
    const data = props.data;
    
    const { name, adress, phone, salary,image } = data;
    return (
        <div className='profile' >
            <img src={image} alt="images" />
            <h3>Name: {name}</h3>
            <p>Adress: {adress}</p>
            <p>Phone: {phone}</p>
            <p>Monthly income: {salary}</p>
            <button onClick={()=>props.addprofile(data)}>+</button>
        </div>
    );
};

export default Profile;