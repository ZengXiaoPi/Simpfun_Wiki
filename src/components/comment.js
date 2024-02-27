import React from 'react';
import Giscus from '@giscus/react';

export const Comment = () => {
  return (
    <div style={{ paddingTop: 50 }}>
      <Giscus
        id="comments"
        repo="ZengXiaoPi/Simpfun_Wiki" 
        repoId="R_kgDOKEBlsQ" 
        category="General"
        categoryId="DIC_kwDOKEBlsc4CdRpX"
        mapping="pathname"
        strict="0"
        term="e"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="anonymous"
      />
    </div>
  );
};

export default Comment;
