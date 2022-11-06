import React, { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import "./AddNewToDo.css";
import store from "../../state/store";
import { observer } from "mobx-react";
import Button from "../Button/Button";

function AddNewToDo() {
  const [textValue, setTextValue] = useState<string>("");

  const handleNewToDoText = (e:any) => {
    setTextValue(e.target.value);
  };

  return (
    <>
      <div id="add-new-toDo-container">
        <TextInput
          width="390px"
          height="20px"
          placeHolder="add new to do"
          value={textValue}
          onChangeFun={handleNewToDoText}
        />
        <Button
             text="Add"
             width="100px"
             height="33px"
             backgroundColor="darkblue"
             color="lightgray"
             borderRadius="5px"
             clickFun={() => {
              store.addNewToDo(textValue);
            }}
        />
      </div>
    </>
  );
}

export default observer(AddNewToDo);
