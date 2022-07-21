import { useRef } from "react";

function WordList(props) {
  const enteredWord = useRef();
  const enteredDef = useRef();

  function add() {
    if (enteredWord.current.value === "" || enteredDef.current.value === "") {
      alert("Please enter word and definition");
    } else {
      props.onAdd(enteredWord.current.value, enteredDef.current.value);
      enteredWord.current.value = "";
      enteredDef.current.value = "";
    }
  }

  function edit(e) {
    let index = e.target.id;
    let newDef = prompt("Please enter new definition.");
    props.onAdd(props.filteredWords[index].word, newDef, index);
  }

  let index = -1;
  return (
    <>
      <div id="inputDiv">
        <input
          id="wordInput"
          placeholder="Enter word"
          ref={enteredWord}
        ></input>
        <input
          id="definitionInput"
          placeholder="Enter definition"
          ref={enteredDef}
        ></input>
        <button onClick={add}>Add Word</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
            {props.filteredWords.map((word) => {
              index++;
              return (
                <tr>
                  <td>
                    <b>{word.word}</b>
                  </td>
                  <td>{word.definition}</td>
                  <td>
                    <button onClick={edit} className="editButton" id={index}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={props.deleteWord}
                      className="deleteButton"
                      id={word.word}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WordList;
