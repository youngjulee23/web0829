import React from 'react';

function Wrapper({children}){
    const style = {
        border : '3px solid red',
        padding : '20px'
    }
    return (
    <div style={style}>
        {children}
    </div>
    );
}

export default Wrapper;