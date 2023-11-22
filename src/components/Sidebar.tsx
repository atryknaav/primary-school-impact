import React, { useState } from 'react';
import Option from './Option';
import { menu } from '../icons';
import { OptionName } from '../types/OptionName';

const Sidebar = () => {
    const options: OptionName[] = [
        'Overview',
        'Research'
    ]

    const [isMenu, setIsMenu] = useState<boolean>(false);

    if (typeof window !== 'undefined')
  if (window!.innerWidth >= 1024) return (
    <div className='flex flex-col bg-[#202020] h-full w-[20%] text-white fixed top-2 left-2 select-none '>
        <div className={`font-bold text-[2.5rem] border-r-2 border-b-2 border-slate-600 rounded-br-[2rem] pl-6 pb-3`}>
            Welcome
        </div>

        <div className='-mt-[2px] border-r-2 border-t-2 border-slate-600 rounded-tr-[2rem] pt-3 flex-grow gap-3 flex flex-col pl-3'>

            {options.map((item, index) => (
                <Option key={index} name={item} />
            ))}
        </div>
    </div>
    
  )

  return (
    <div className='fixed left-0 top-0 bg-[#202020] shadow-md h-fit w-full text-[2rem] text-white p-3 flex flex-col'>
        <div className='flex justify-between z-20'>

            <div>Welcome</div>
            <div className='flex flex-col justify-center active:bg-[#2b2a2a] rounded-full p-1 duration-200' onClick={() => setIsMenu(!isMenu)}>{React.cloneElement(menu, { width: '1em', height: '1em' })}</div> 

        </div>
        
        {isMenu ? <div className='menu-drop z-10  h-fit py-6 w-full bg-[#202020] shadow-inner flex flex-col gap-3'>
            {options.map((item, index) => (
                <div key={index} onClick={() => setIsMenu(!isMenu)}><Option name={item} /></div>
            ))}
        </div> : null}
    </div>
  )
}

export default Sidebar