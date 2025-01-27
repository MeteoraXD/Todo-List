import LogoutIcon from '@/components/icons/LogoutIcon';
import { LogoutButtonWrapper } from '@/components/ui/Core/LogOut/LogoutButton.css.ts';
import LogoutPopOver from '@/features/PopOver/LogoutPopOver';

const Logout = () => {


  return (<div className={LogoutButtonWrapper}>
    <LogoutIcon /> <LogoutPopOver />
  </div>);
};

export default Logout;