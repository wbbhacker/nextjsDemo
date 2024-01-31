'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import PropTypes from 'prop-types';

import { Switch } from '@nextui-org/react';

import Icons from '@/components/Icons';
/**
 * Is this the principal call to action on the page?
 */
const ThemeSwitch = (props) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme('sun');

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const onValueChange = (val) => {
        setTheme(val ? 'sun' : 'dark');
        props.onChange(val ? 'sun' : 'dark');
    };

    return (
        <Switch
            defaultSelected
            size="lg"
            color="secondary"
            isSelected={theme === 'sun'}
            onValueChange={onValueChange}
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <Icons name="sun" className={className} />
                ) : (
                    <Icons name="moon" className={className} />
                )
            }
        ></Switch>
    );
};
export default ThemeSwitch;
