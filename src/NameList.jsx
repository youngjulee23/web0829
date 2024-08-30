import React from 'react';

const NameList = (props) => {
    const {name} = props;
    return (
        <div>
            <ul>{name}</ul>
        </div>
    );
};

export default NameList;