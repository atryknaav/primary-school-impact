import { useAtomValue, } from 'jotai'

import { CurrOption } from '../contexts/OptionContext'
import Overview from './text-components/Overview';
import Research from './text-components/Research';

const SiteBody = () => {
    const currOpt = useAtomValue(CurrOption);
    // const currOpt = 'Overview';

    const optionList: { [key: string]: () => React.JSX.Element } = {
        'Overview': Overview,
        'Research': Research
    }
    let OptComponent = optionList[currOpt];

    return (
      <div className='flex-grow lg:ml-[20%] mt-[4rem] lg:mt-0 min-h-screen h-full p-2 mb-3 bg-transparent shadow-inner flex flex-col justify-between'>
        {OptComponent && <OptComponent />}

        <div className='flex justify-end align-bottom text-unimportant'>&#169; Arsenii Bilyi</div>
      </div>
    );
  };

export default SiteBody