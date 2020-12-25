import React from 'react'

const  UserCard = function(){
    return (
        <div className="userCard">
            
                <img src={process.env.PUBLIC_URL+'/elements/user.svg'} alt="" className="sm-icon" />
                
            <div>
            <p>kartik</p>
            <p>Message for</p>
            </div>
            
        </div>
    )
}

export default UserCard;