import React from 'react'

const Default = (props) => {
    return (

        <div className='CardWrapper'>
            {
                props.Post.map((item) => (
                    <div className='Card'>
                        <img src={`http://localhost:5000/Uploads/img/${item.photo}`} alt='' />
                        <div className='hoverCard'>
                            <div className='likes'><span><i class="fas fa-heart"></i></span> <span>{item.likes.length}</span> </div>
                            <div className='comment'><span><i class="far fa-comment"></i></span> <span>{item.comments.length}</span></div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Default
