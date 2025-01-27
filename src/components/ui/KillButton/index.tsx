import { KillButtonWrapper } from '@/components/ui/KillButton/KillButton.css.ts';
import ResetIcon from '@/components/icons/ResetIcon';
import ResetPopOver from '@/features/PopOver/ResetPopOver';

const KillButton = () => {


  return (
    <div className={KillButtonWrapper}><ResetIcon /> <ResetPopOver />
    </div>);

};

export default KillButton;