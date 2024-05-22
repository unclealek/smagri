import React from 'react';
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { BsMoisture } from "react-icons/bs";
import { GiFarmTractor, GiFarmer } from "react-icons/gi";
import { CiTimer } from "react-icons/ci";
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contents/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>SMAgri</p>
              <p className='text-2xl'>smagri project</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button 
              color='white'
              bgColor='blue'
              text='See Farm'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button
                type='button'
                style={{ color: item.iconColor, background: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}{item.unit}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full' >
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Field Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-red-600 hover:drop-shadow-xl'>
                <span>
                <FaTemperatureArrowUp />
                </span>
                <span>Temperature</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span>
                <BsMoisture />
                </span>
                <span>Moisture</span>
              </p>
            </div> 
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
              <div className='border-r-1 border-color m-4 pr-10'>
                <div>
                  <p>
                    <span className='text-xl font-semibold'>Current Size of Field </span>
                    <span className='p-1.5 hover:drop-shadow-xl 
                                      cursor-pointer rounded-full font-bold
                                      text-white bg-green-400  ml-3 text-xs'> field 
                                      </span>
                  </p>
                  <p className=' text-gray-500 mt-1 '> 50,000 Acres 
                  </p>
                </div>
                <div className='mt-8'>
                <p>
                    <span className='text-xl font-semibold'>Temperature </span>
                    
                  </p>
                  <p className=' text-gray-500 mt-1 '> 23°C
                  </p>
                </div>
                <div className='mt-5'>
                  <SparkLine 
                    currentColor='blue'
                    id='line-sparkline'
                    type='Line'
                    height='80px'
                    width='250px'
                    data={SparklineAreaData}
                    color='blue' /></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
