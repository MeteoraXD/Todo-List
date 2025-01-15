import { useNavigate } from '@tanstack/react-router';

import LogoutIcon from '@/components/icons/LogoutIcon';
import { LogoutButton, LogoutButtonWrapper } from '@/components/ui/Auth/LogOut/LogoutButton.css.tsx';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate({ to: '/' });
  };
  return (<div className={LogoutButtonWrapper}>
    <button className={LogoutButton} onClick={handleLogout}><LogoutIcon /> <span>Logout</span></button>
  </div>);
};

export default Logout;