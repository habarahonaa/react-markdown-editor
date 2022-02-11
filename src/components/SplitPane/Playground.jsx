import React from "react";
import { Allotment } from "allotment";
import Editor from "@monaco-editor/react";
import Markdown from "marked-react";
import Lowlight from "react-lowlight";
import javascript from "highlight.js/lib/languages/javascript";
import "allotment/dist/style.css";
import styles from "./Playground.module.css";
import { useEffect } from "react";

Lowlight.registerLanguage("js", javascript);

const renderer = {
  code: (snippet, lang) => {
    return <Lowlight language={lang} value={snippet} />;
  },
};

export const Playground = (props) => {
  useEffect(() => {
    console.log(props.code);
  }, []);

  return (
    <main>
      <Allotment>
        <Editor
          width="100%"
          language="markdown"
          onChange={props.handleChange}
          theme={props.theme}
          defaultValue={props.code}
        />
        <div className={styles.preview}>
          <Markdown value={props.code} renderer={renderer} gfm={true} />
        </div>
      </Allotment>
    </main>
  );
};
