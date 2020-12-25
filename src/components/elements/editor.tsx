import React, { useEffect } from 'react';
import {Editor, EditorState,RichUtils,convertToRaw,convertFromRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';

type  props ={
changeContent (EditorState:EditorState): void; 

}

function MyEditor(props:props) {
  const [editorState, setEditorState] = React.useState(
     EditorState.createEmpty())
    // (convertFromRaw({"blocks":[{"key":"4qc69","text":"jk","type":"unstyled","depth":0,inlineStyleRanges:[{"offset":0,"length":2,style:'HIGHLIGHT'},{"offset":0,"length":2,"style":"BOLD"},{"offset":0,"length":2,"style":"UNDERLINE"},{"offset":0,"length":2,"style":'ITALIC'}],"entityRanges":[],"data":{}}],"entityMap":{}})));

  useEffect(()=>{
    console.log("loop")
    // fs.writeFileSync('./new.json',convertToRaw(editorState.getCurrentContent()))
    console.log(convertToRaw(editorState.getCurrentContent()))
   const content = localStorage.getItem('content')
   if(content){
     const raw = convertFromRaw(JSON.parse(content))
     console.log(raw)
    setEditorState(EditorState.createWithContent(raw))

   }
  },[0])
  useEffect(()=>{
    console.log("kooooss")
// localStorage.setItem('content',JSON.stringify(convertToRaw(editorState.getCurrentContent())))
        props.changeContent(editorState);
  },[editorState])
  const handleBold = () => {
      setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    
    // handleKeyCommand("Bol");
  }
  const otherStyles = (type:string) => {
    setEditorState(RichUtils.toggleBlockType(editorState,type))
  }

  const handleItalic = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));  
}

  const handleKeyCommand = (command:any) => {
    console.log(editorState)
    const newState = RichUtils.handleKeyCommand(editorState, command);
    console.log(newState,editorState);
    if (newState) {
      console.log(newState)
        setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  const onUnderlineClick = () => {
		setEditorState(
			RichUtils.toggleInlineStyle(editorState, "UNDERLINE")
		);
  };
  
  const onHighlight = () => {
    setEditorState(
      RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT")
    );
  };

  return <>
    <button onClick={handleBold}>
      B
    </button>
    <button onClick={()=>otherStyles('code-block')}>code block</button>
    <button onClick={()=>otherStyles('header-one')}>H1</button>
    <button onClick={onHighlight}>H</button>
    <button onClick={onUnderlineClick}>U</button>
  <button onClick={handleItalic}>I</button>
  <Editor editorState={editorState} handleKeyCommand={handleKeyCommand} onChange={setEditorState} />
  </>
}

export default MyEditor;