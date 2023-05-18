import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const [name, setName] = useState("")
    const [roomId, setRoomId] = useState("")
    const navigate = useNavigate()
    useEffect(()=>console.log(`${name}......${roomId}`), [name, roomId])

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(`/conference/${name}/${roomId}`)
    }
  return (
    <>
        <div className='outer-div'>
            <div className='inner-div'>
                <h2>Video Conference</h2>
                <div className='name-input'>
                    <input required placeholder='Name...' onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <h4>Enter Room Id to Join Existing <br></br>Room or create new Room</h4>
                </div>
                <div className='name-input'>
                    <input required placeholder='Room Id...' onChange={(e)=>setRoomId(e.target.value)}/>
                </div>
                <div className='button-parent'>
                    <span className={name != "" && roomId.length>=5 != "" ? "button" : 'disabled-btn'} >
                    
                        {/* <Link to={`/conference/${name}/${roomId}`} target='_blank'>Enter Room</Link> */}
                        {name != "" && roomId.length>=5 ? 
                        <button  disabled={name != "" && roomId.length>=5 ? false : true}><Link className='enter_btn' to={`/conference/${name}/${roomId}`} target='_blank'>Enter Room</Link> </button> : <button>Enter Room</button>}
                       
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home