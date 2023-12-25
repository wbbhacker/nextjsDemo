'use client';
import React, { useState, useEffect, useContext } from 'react';
import { useTheme } from 'next-themes';

import { Switch } from '@nextui-org/react';

import { MoonIcon } from './images/Moonicon';
import { SunIcon } from './images/SunIcon';

const ThemeSwitch = (props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const onValueChange = (val) => {
    setTheme(val ? 'dark' : 'sun');
  };

  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      onValueChange={onValueChange}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
    ></Switch>
  );
};
export default ThemeSwitch;
