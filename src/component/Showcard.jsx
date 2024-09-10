import React from 'react'

const Showcard = (props) => {
  return (
   <>
     <div className="card bg-base-100 w-[280px] h-96 shadow-xl rounded-xl mx-3 ">
                <figure>
                    <img className='w-74 h-60'
                  
                        src={props.src}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mt-4  font-bold hover:underline">{props.title}</h2>
                    <p className='mt-4 mx-2'>{props.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary border-4 p-2 mt-2 bg-slate-600 hover:bg-slate-900 text-white mx-2 rounded-lg ">Buy Now</button>
                    </div>
                </div>
            </div>
   </>
  )
}
export default Showcard
