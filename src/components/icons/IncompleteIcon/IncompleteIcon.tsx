import React from 'react';

const InCompletedIcon: React.FunctionComponent = () => {
  return (
    <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 36 36" version="1.1">
      <path d="M6.67,4h22a1,1,0,0,0,0-2h-22a1,1,0,1,0,0,2Z" className="clr-i-solid clr-i-solid-path-1"></path>
      <path d="M28.67,32h-22a1,1,0,0,0,0,2h22a1,1,0,1,0,0-2Z" className="clr-i-solid clr-i-solid-path-2"></path>
      <path
        d="M22.55,15.67A6.07,6.07,0,0,0,25,11.12V6H10.06v5.12a6.07,6.07,0,0,0,2.45,4.55,11.48,11.48,0,0,0,2.91,1.72v1.16a11.48,11.48,0,0,0-2.91,1.72,6.07,6.07,0,0,0-2.45,4.55v5.12H25V24.82a6.07,6.07,0,0,0-2.45-4.55,11.48,11.48,0,0,0-2.91-1.72V17.39A11.48,11.48,0,0,0,22.55,15.67Z"
        className="clr-i-solid clr-i-solid-path-3"></path>

    </svg>
  );
};
export default InCompletedIcon;