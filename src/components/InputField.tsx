import React from "react";
import "../components/styles.scss";

interface props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void;
}

const InputField: React.FC<props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form className="input"
    onSubmit={(e)=>handleAdd(e)}>
      <input type="text" placeholder="Enter a Task" value={todo} onChange={(e)=>setTodo(e.target.value)} className="input__box" />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
