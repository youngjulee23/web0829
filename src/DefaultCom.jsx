import React from 'react';

const DefaultCom = (props) => {
    const {age, address, nameColor, ageColor, addressColor} = props;
    return (
        <div>
            안녕하세요 이름은 <span style={{color: nameColor}}>{name}</span>입니다.<br/>
            저는 <span style={{color: ageColor}}>{age}</span>살이고, {" "} <span style={{color: addressColor}}>{address}</span>에서 살고있습니다.
        </div>
    )
};
DefaultCom.defaultProps = {
    name: "이영주"
}

export default DefaultCom;