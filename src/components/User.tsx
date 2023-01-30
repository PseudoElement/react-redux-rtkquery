import React from 'react';
export interface MyUser{
    avatar_url: string;
    login: string;
    html_url: string;
    type: string;
    id?: number;
    children: React.ReactNode;
}


const User = ({avatar_url, login, html_url, type, children}: MyUser) => {
    return (
        <div className='user-container'>
            <img src={avatar_url} alt="AVATAR" />
            <h1>{login}</h1>
            <a href={html_url} target='_blank'>Click here to check GitHub page</a>
            <h2>{type}</h2>
            {children}
        </div>
    );
};

export default User;