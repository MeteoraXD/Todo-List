import { useNavigate } from '@tanstack/react-router';

import LogoutIcon from '@/components/icons/LogoutIcon';
import { LogoutButton, LogoutButtonWrapper } from '@/components/ui/Core/LogOut/LogoutButton.css.ts';

const AUTH_USER_KEY = 'authUser';
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(AUTH_USER_KEY);
    navigate({ to: '/' });
  };
  return (<div className={LogoutButtonWrapper}>
    <button className={LogoutButton} onClick={handleLogout}><LogoutIcon /> <span>Logout</span></button>
  </div>);
};

export default Logout;