// import React from 'react'

// const Card = (props) => {
//   return (
//    <>
//      <div className="card bg-base-100 w-16 h-16 shadow-xl rounded-full">
//                 <figure>
//                     <img className='w-16 h-16'
                  
//                         src={props.src}
//                         alt="Shoes" />
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title">{props.title}</h2>
//                     <p>{props.description}</p>
//                     <div className="card-actions justify-end">
//                         <button className="btn btn-primary">Buy Now</button>
//                     </div>
//                 </div>
//             </div>
//    </>
//   )
// }

// export default Card

// import React from 'react'


// const card = (props) => {
//   return (
//    <>
//    <div className='w-16 h-16 rounded-full shadow-xl mx-10 '>
//     <figure>
// <img className='w-16 h-16 rounded-full shadow-xl mx-10 ' src={props.src} alt="" />
// </figure>
//    </div>
//    <div className='card-tittle'>{props.title}</div>
//    </>
//   )
// }

// export default card

import React from 'react'

const card = (props) => {
  return (
    <>
    <div className=' rounded-full w-24 h-24 mx-4 pt-4'>
        <figure>
            <img  src={props.src} alt="" className='w-24 h-24'/>
        </figure>
    </div>
   
    
    
    </>
  )
}

export default card


