import React from 'react'
import Title from '../../Components/Title'

export default function Footer() {
  return (
  <div className='footer'>
    <div className='d-md-flex d-block col-md-10 m-auto'>
    <div className='col-lg-9 col-md-6 col-12'></div>
        <div className='col-lg-4 col-md-6 col-12'>
            <div className='d-flex'>
                  <img src='img/footer.png' style={{marginRight:"26px"}} />
                  <Title type='foot'>digimi <br /> 2022</Title>
            </div>
          
            

            <Title type='title15' className='col-md-7 mt-5'>digimi is a state-of-the-art blockchain gaming
framework that powered by the digination and 
its rapidly expanding orbit of sovereign continents.</Title>

        </div>
     
    </div>
    

  </div>

  )
}