import React from 'react';
import Card from './Card';
import SData from './Sdata';

const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {SData.map((val, index) => {
                return <Card key={index} image={val.imgsrc} title={val.title} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service;
