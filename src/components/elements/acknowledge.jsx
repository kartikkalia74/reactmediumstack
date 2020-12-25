
import React from 'react'


const Acknowledge = () => {
    return (
        <div className="acknowledgement">
<span><img src={process.env.PUBLIC_URL+"/elements/like.svg"} className="sm-icon pointer" alt="" /></span> <span><img src={process.env.PUBLIC_URL+"/elements/comment.svg"} className="sm-icon pointer" alt="" /></span> <span><img src={process.env.PUBLIC_URL+"/elements/share.svg"} className="sm-icon pointer" alt="" /></span>
</div>
    )
};

export default Acknowledge;