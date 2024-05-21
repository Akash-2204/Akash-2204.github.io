"use client";

import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import classes from './scroll.module.scss';

const Scroll: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <div className={classes.scroll_top}>
      <a href="#top">
        <ArrowUpwardIcon fontSize="large" />
      </a>
    </div>
  ) : null;
};

export default Scroll;