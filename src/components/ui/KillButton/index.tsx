import { killButtonCss } from '@/components/ui/KillButton/KillButton.css.ts';

const KillButton =  () => {
const killSessionHandler = (): void => {
  localStorage.clear();
  sessionStorage.clear();
  location.reload();
}


return (<button onClick={killSessionHandler} className={killButtonCss} >KillButton</button>)
};

export default KillButton;