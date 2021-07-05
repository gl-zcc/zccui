import React from 'react';
import './index.css';
function Button() {
    var alert = function () {
        console.log('click');
    };
    return (React.createElement("button", { onClick: alert }, "\u9ED8\u8BA4"));
}
export default Button;
