import React from 'react';

function useResponsive (rule){
  const screen = window.matchMedia(`(${rule})`).matches;
  return screen;
}

export default useResponsive;
