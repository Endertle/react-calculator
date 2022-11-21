import { ACTIONS } from "./App";

function DigitButton({ dispatch, digit, extraClassName }) {
  return (
    <button
      className={`btn ${extraClassName}`}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default DigitButton;
