import React from 'react';

const RepositoryItem = ({url, language, name, visibility, index}: any) => {

    return (
        <div className='repo-container'>
            <h1>{index + 1}. {name}</h1>
            <a target={'_blank'} href={url}>{url}</a>
            <h2>Language: {language}</h2>
            <h3>Privacy: {visibility}</h3>
        </div>
    );
};

export default RepositoryItem;