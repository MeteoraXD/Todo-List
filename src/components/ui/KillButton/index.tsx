import { killButtonCss, KillButtonWrapper } from '@/components/ui/KillButton/KillButton.css.ts';
import ResetIcon from '@/components/icons/ResetIcon';
import useTodos from '@/hooks/TodoHook/useTodos.ts';

const KillButton = () => {

  const { storageType } = useTodos();

  const killSessionHandler = () => {
    console.log('Current storageType:', storageType);

    if (storageType === 'local') {
      localStorage.removeItem('todos_default');
      location.reload();
    } else if (storageType === 'session') {
      sessionStorage.removeItem('todos_default');
      location.reload();
    } else {
      console.error('Unexpected storageType:', storageType);
    }
  };


  return (
    <div className={KillButtonWrapper}>
      <button onClick={killSessionHandler} className={killButtonCss}><ResetIcon /><span>Reset Session</span></button>
    </div>);

};

export default KillButton;