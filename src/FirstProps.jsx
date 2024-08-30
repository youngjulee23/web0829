import React from 'react';

const FirstProps = (props) => {
    const {name, color} = props;
    return (
        <div>
            안녕하세요. 제 이름은 {name}입니다.<br/>
            제가 좋아하는 색은 {color}입니다.
        </div>
    );
};

export default FirstProps;