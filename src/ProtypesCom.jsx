import React from 'react';
import ProTypes from "prop-types";

const ProtypesCom = ({item, price}) => {
    return (
        <div>
            아이템: {item}
            가격: {price}
        </div>
    );
};
ProtypesCom.propTypes={
    item: ProTypes.string,
    price: ProTypes.number.isRequired
}
export default ProTypes;