import React from 'react'
import Header from './header'
import Title from '../../Components/Title'

export default function Hero() {
  return (
    <div className='hero'>
        <div className='bg-xtra'>
              <Header />      

              <div className='m-auto col-md-6 col-10 text-center txt'>
                <Title type='title'>Metaverse Reimagined</Title>
                <Title type="title38" className='mt-5'>
                The horizontal layered metaverse that’s ever built
                </Title>
                <h6></h6>
              </div>
        </div>

    </div>
  )
}