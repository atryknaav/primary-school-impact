import { useSetAtom } from "jotai";
import { time, overview } from "../icons";
import React from "react";
import { CurrOption } from "../contexts/OptionContext";
import { OptionName } from "../types/OptionName";

const Option = ({name} : {name: OptionName}) => {

    const iconList: { [key: string]: JSX.Element } = {
        Overview: overview,
        Research: time
    }
    const icon = iconList[name];

    let setOpt = useSetAtom(CurrOption);
  return (
    <div className='flex items-center ml-5 text-[1.2rem] rounded-xl hover:bg-[#1d1d1d] w-[80%] py-2 px-2 active:bg-[#1a1a1a] hover:cursor-pointer' onClick={() => {setOpt(name)}}> 
      <div className="text-[1.2rem] mr-2"> 
        {React.cloneElement(icon, { width: '1em', height: '1em' })} 
      </div>
      {name}
    </div>
  )
}

export default Option