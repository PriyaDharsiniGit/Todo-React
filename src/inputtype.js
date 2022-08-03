import React from "react";

const InputType = ({ createTodoItem }) => {
    const [value,setValue] = React.useState([]);
    const handleSubmit =(e) => {
        e.preventDefault();
        createTodoItem(value);
        setValue('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Create todo"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handleSubmit}>Create</button>
                </form>
                </div>
                );
                };

       export default InputType;
               
       