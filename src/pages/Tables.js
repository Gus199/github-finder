import React from 'react';
import FadeUp from '../components/animations/FadeUp';
import { Fade } from 'react-awesome-reveal';
const Tables = () => {
  return (
    <>
      <div className='p-5 h-80vh bg-gray-100'>
        <h1 className='text-xl mb-2 text-center text-blue-500 hover:underline'>
          Your Order
        </h1>
        <FadeUp
          duration={1000}
          triggerOnce={true}
          fraction={0}
          cascade={true}
          damping={0.1}
        >
          <div className='overflow-auto rounded-lg shadow'>
            <Fade
              delay={1000}
              cascade={true}
              damping={0.25}
              triggerOnce
              direction='up'
              duration={500}
              fraction={0}
            >
              <table className='w-full'>
                <thead className='bg-gray-50 border-b-2 border-gray-200'>
                  <tr>
                    <th className='w-20 p-3 text-sm font-semibold tracking--wide text-left'>
                      No.
                    </th>
                    <th className=' p-3 text-sm font-semibold tracking--wide text-left'>
                      Details
                    </th>
                    <th className=' w-24 p-3 text-sm font-semibold tracking--wide text-left'>
                      status
                    </th>
                    <th className='w-24 p-3 text-sm font-semibold tracking--wide text-left'>
                      Date
                    </th>
                    <th className='wi-32 p-3 text-sm font-semibold tracking--wide text-left'>
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody className='divide-y devide-gray-100'>
                  <tr className='bg-white  hover:bg-gray-200'>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap '>
                      <a
                        href='#'
                        className='font-bold text-blue-500 hover:underline'
                      >
                        10001
                      </a>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      King New Fit office chair, mesh + PU, black 1
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='p-1.5 font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-40'>
                        {' '}
                        Delivered
                      </span>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      16/10/2021
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      $200.00
                    </td>
                  </tr>

                  {/* <tr className='bg-gray-70 hover:bg-white'>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <a
                        href='#'
                        className='font-bold text-blue-500 hover:underline'
                      >
                        10002
                      </a>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      King New Fit office chair, mesh + PU, black 2
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='p-1.5 font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-40'>
                        Shipped
                      </span>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      16/10/2021
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      $200.00
                    </td>
                  </tr>
                  <tr className='bg-white hover:bg-gray-200'>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <a
                        href='#'
                        className='font-bold text-blue-500 hover:underline'
                      >
                        10003
                      </a>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      King New Fit office chair, mesh + PU, black
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='p-1.5 font-medium uppercase tracking-wider text-yellow-800 bg-gray-200 rounded-lg bg-opacity-40'>
                        {' '}
                        Cancelled
                      </span>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      16/10/2021
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      $200.00
                    </td>
                  </tr>
                  <tr className='bg-gray-70 hover:bg-white'>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <a
                        href='#'
                        className='font-bold text-blue-500 hover:underline'
                      >
                        10004
                      </a>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      King New Fit office chair, mesh + PU, black
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='p-1.5 font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-40'>
                        {' '}
                        Delivered
                      </span>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      16/10/2021
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      $200.00
                    </td>
                  </tr>
                  <tr className='bg-white hover:bg-gray-200'>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <a
                        href='#'
                        className='font-bold text-blue-500 hover:underline'
                      >
                        10005
                      </a>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      King New Fit office chair, mesh + PU, black
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='p-1.5 font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-40'>
                        {' '}
                        Delivered
                      </span>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      16/10/2021
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      $200.00
                    </td>
                  </tr>
                  <tr className='bg-gray-70 hover:bg-white'>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <a
                        href='#'
                        className='font-bold text-blue-500 hover:underline'
                      >
                        10005
                      </a>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      King New Fit office chair, mesh + PU, black
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='p-1.5 font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-40'>
                        {' '}
                        Delivered
                      </span>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      16/10/2021
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      $200.00
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </Fade>
          </div>
        </FadeUp>
      </div>

      {/* another table */}
    </>
  );
};

export default Tables;
