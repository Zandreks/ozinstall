import React from 'react'
let ServiseItem = ({data})=>{
    return(
        <div className='servise-item'>
        <div className='row'>
            {data && data.map((el,key)=>{
                return(
                    <div key={key}  className='col-md-4'>
                        <div className='img-prev'>
                            <img className='img-fluid' src={`/uploads/resized/${el.Prev}`} alt={el.Title}/>
                        </div>
                        <div className='description'>
                            {el.Description}
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}
export default ServiseItem
