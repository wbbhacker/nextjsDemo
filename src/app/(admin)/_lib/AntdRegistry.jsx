'use client';

import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';

/* 如果你在 Next.js 当中使用了 App Router, 并使用 antd 作为页面组件库，为了让 antd 组件库在你的
 Next.js 应用中能够更好的工作，提供更好的用户体验，你可以尝试使用下面的方式将 antd 首屏样式按需抽离并植入到 HTML 中，
 以避免页面闪动的情况。 https://ant.design/docs/react/use-with-next-cn*/
const StyledComponentsRegistry = ({ children }) => {
  const cache = React.useMemo(() => createCache(), []);
  const isServerInserted = React.useRef(false);
  useServerInsertedHTML(() => {
    // 避免 css 重复插入
    if (isServerInserted.current) {
      return;
    }
    isServerInserted.current = true;
    return (
      <style
        id="antd"
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    );
  });
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default StyledComponentsRegistry;
