import React from 'react';
import Giscus from '@giscus/react';

export const Comment = () => {
  return (
    <div style={{ paddingTop: 50 }}>
      <Giscus
        id="comments"
        repo="ZengXiaoPi/Simpfun_Wiki" 
        repoId="R_kgDOKvSUWw" 
        category="交流"
        categoryId="DIC_kwDOKvSUW84CdGrr"
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
