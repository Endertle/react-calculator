import { ACTIONS } from "./App";

function OperationButton({ dispatch, operation, extraClassName }) {
  return (
    <button
      className="btn btn-operator"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}

export default OperationButton;
