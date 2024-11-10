import React from 'react';
import { useLocation } from "react-router-dom";
const Profile = () => {

    const location = useLocation();
    const { profile } = location.state || {};
    return (
        <div>
            <h1>{profile.name}</h1>
            <p>{profile.email}</p>
            <p>{profile.research_summary}</p>
        </div>
    );
};

export default Profile;