// import useTodos from '@/context/TodoContext';
import { killButtonCss } from '@/components/ui/KillButton/KillButton.css.ts';

const KillButton =  () => {

  // const {storageType} = useTodos()

const killSessionHandler = () => {
sessionStorage.clear();
localStorage.clear();
location.reload();
}


return (<button onClick={killSessionHandler} className={killButtonCss} >KillButton</button>)
};

export default KillButton;