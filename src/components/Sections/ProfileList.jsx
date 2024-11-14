import React from 'react';
import ProfileCard from '../Elements/ProfileCard';
import { useProfilesData } from '../../hooks/useProfilesData';

const ProfileList = ({ category }) => {

    const profiles = useProfilesData(category);

    return (
        <div className="row textCenter flexCenter">
            {profiles && Object.values(profiles).map((profile, index) => (
                <div
                    className={`col-xs-12 col-sm-4 col-md-4 col-lg-4 ${index === 3 ? 'center-item' : ''}`}
                    key={index}
                >
                    <ProfileCard key={index} profile={profile} category={category} />
                </div>
            ))}
        </div>


    );
};

export default ProfileList;