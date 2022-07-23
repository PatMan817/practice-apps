import { useRef } from "react";

function WordList({ filteredWords, deleteWord, onAdd }) {
  const enteredWord = useRef();
  const enteredDef = useRef();

  function add(e) {
    e.preventDefault();
    onAdd(enteredWord.current.value, enteredDef.current.value);
    enteredWord.current.value = "";
    enteredDef.current.value = "";
  }

  function edit(e) {
    let index = e.target.id;
    let newDef = prompt("Please enter new definition.");
    onAdd(filteredWords[index].word, newDef, index);
  }

  let index = -1;
  return (
    <>
      <form id="inputDiv" onSubmit={add}>
        <input
          required
          id="wordInput"
          placeholder="Enter word"
          ref={enteredWord}
        ></input>
        <input
          required
          id="definitionInput"
          placeholder="Enter definition"
          ref={enteredDef}
        ></input>
        <button type="submit">Add Word</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
            {filteredWords.map((word) => {
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
                      onClick={deleteWord}
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
