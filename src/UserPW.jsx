import React from 'react';

const UserPW = (props) => {
    function updateValue(e){
        props.onAddPW(e.target.value)
}
    return (
        <div>
            <h1>
                PW: <input type='text' onChange={updateValue}></input>
            </h1>
        </div>
    );
};

export default UserPW;