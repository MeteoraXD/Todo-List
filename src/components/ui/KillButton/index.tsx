import useTodos from '@/context/TodoContext';
import { killButtonCss } from '@/components/ui/KillButton/KillButton.css.ts';

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


  return (<button onClick={killSessionHandler} className={killButtonCss}>KillButton</button>);
};

export default KillButton;