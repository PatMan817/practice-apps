import { useRef } from "react";
import axios from "axios";

function WordList({ filteredWords, getWords }) {
  const enteredWord = useRef();
  const enteredDef = useRef();

  function addWord(e) {
    e.preventDefault();
    axios
      .post("/words", {
        word: enteredWord.current.value,
        definition: enteredDef.current.value,
      })
      .then(() => getWords())
      .catch((error) => console.error(error));
    enteredWord.current.value = "";
    enteredDef.current.value = "";
  }

  function deleteWord(e) {
    let deletedWord = { word: e.target.id };
    console.log("deletedWord:", deletedWord);
    axios
      .delete("/words", { data: deletedWord })
      .then(() => getWords())
      .catch((err) => console.error(err));
  }

  function edit(e) {
    let index = e.target.id;
    let newDef = prompt("Please enter new definition.");
    axios
      .post("/words", {
        word: filteredWords[index].word,
        definition: newDef,
      })
      .then(() => getWords())
      .catch((error) => console.error(error));
  }

  let index = -1;
  return (
    <>
      <form id="inputDiv" onSubmit={addWord}>
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
