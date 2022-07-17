import React from 'react'
import '../css/Sponsors.css'
export default function Sponsors() {
const data=[
  {
    pic: require("../images/photos/sbi.png"),
    name: "Title Sponsor"
  },
  {
    pic: require("../images/photos/sachdev.png"),
    name: "Utility Sponsor"
  },
  {
    pic: require("../images/photos/Alumin.png"),
    name: "Alum Sponsor"
  },
  {
    pic: require("../images/photos/Tihan.png"),
    name: "Technial Sponsor"
  },
  {
    pic: require("../images/photos/sakthi's kitchen.png"),
    name: "Trusted sponsor"
  },
  {
    pic: require("../images/photos/gouravs.png"),
    name: "Trusted Sponser"
  }
]
  return (
    <>
    <div className='text-center mt-06'>
    {
      data.map((elem)=>{
        return(
        <>
        <div className='mt-4 mb-3'>
          <div className=''>
        <img className='cardd' src={elem.pic} alt='logo'style= {{ width: '30%', height: '30%'}} /><br />
        <h2>{elem.name}</h2>
      </div>
      </div>
      </>
        )
      })
    }
    </div>

    {/* <div className='text-center'>
      <div className='row mt-4 mb-4'>
      <div className='col-lg-6'>
        <img className='cardd' src="https://randomuser.me/api/portraits/men/38.jpg" alt='logo' /><br />
        <strong>Finnlay Cowan</strong>
      </div>
      <div className='col-lg-6'>
        <img className='cardd' src="https://randomuser.me/api/portraits/men/39.jpg" alt='logo'/><br />
        <strong>Rayan Mcloughlin</strong>
      </div>
    </div>
    <div className=' row mt-4 mb-4'> 
      <div className='col-lg-6'>
        <img className='cardd' src="https://randomuser.me/api/portraits/men/38.jpg" alt='logo'/><br />
        <strong>Finnlay Cowan</strong>
      </div>
      <div className='col-lg-6'>
        <img className='cardd' src="https://randomuser.me/api/portraits/men/39.jpg" alt='logo'/><br />
        <strong>Rayan Mcloughlin</strong>
      </div>
    </div>
    <div className=' row mt-4 mb-4'>
      <div className='col-lg-6'>
        <img className='cardd' src="https://randomuser.me/api/portraits/men/38.jpg" alt='logo'/><br />
        <strong>Finnlay Cowan</strong>
      </div>
      <div className='col-lg-6'>
        <img className='cardd' src="https://randomuser.me/api/portraits/men/39.jpg" alt='logo'/><br />
        <strong>Rayan Mcloughlin</strong>
      </div>
    </div>
    </div> */}
    </>

  )
}
