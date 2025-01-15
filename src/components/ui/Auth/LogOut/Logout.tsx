import LogoutIcon from '@/components/icons/LogoutIcon';
import { LogoutButton, LogoutButtonWrapper } from '@/components/ui/Auth/LogOut/LogoutButton.css.tsx';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  return (<div className={LogoutButtonWrapper}>
    <button className={LogoutButton} onClick={handleLogout}><LogoutIcon /> <span>Logout</span></button>
  </div>);
};

export default Logout;