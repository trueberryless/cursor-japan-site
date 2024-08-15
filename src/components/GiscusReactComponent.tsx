import Giscus from "@giscus/react";

export default function MyApp() {
  return (
    <>
      <h2>ディスカッション2</h2>
      <Giscus
        id="comments"
        repo="cursor-japan/cursor-japan-site"
        repoId="R_kgDOMj3FGQ"
        category="General"
        categoryId="DIC_kwDOMj3FGc4ChrkO"
        mapping="pathname"
        strict="0"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        //theme="preferred_color_scheme"
        lang="ja"
        // loading="lazy"
      />
    </>
  );
}
