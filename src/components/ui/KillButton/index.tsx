import { killButtonCss } from '@/components/ui/KillButton/KillButton.css.ts';

const KillButton =  () => {

  const  handleClick = (): void => {
    alert("You clicked the Kill Button ,congrats You  get frooti from Megha");

  }

return (<button onClick={handleClick} className={killButtonCss} >KillButton</button>)
};

export default KillButton;