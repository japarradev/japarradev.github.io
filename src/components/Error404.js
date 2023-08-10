import React from 'react';


const Error404 = () => {
    var redirect = ()=>{
        window.location.href = '404.html';
    }
    redirect();
    
    return ;
}

export default Error404;