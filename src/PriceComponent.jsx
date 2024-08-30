import React from 'react';

const PriceComponent = (props) => {
    const {prices} = props
    return (
        <div>
            {prices}원
        </div>
    );
};

export default PriceComponent;