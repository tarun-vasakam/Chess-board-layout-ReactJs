import React from 'react';

function Box(props){
    const determine = props.name;
    const piece = props.value;
    return(
        <div className='boxpiece' style={{backgroundColor: determine?"#7c9454":"#e4ebdc"}}>
            {piece ? piece : null}
        </div>
    );
}

export default Box;