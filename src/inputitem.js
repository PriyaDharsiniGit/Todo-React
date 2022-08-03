const InputItem = ({item,index,deleteTodoItem}) => {
    return (
        <div>
            <li>{item.name}</li>
            <button onClick={() =>deleteTodoItem(index)}>Delete</button>
            <button onClick={() => editTodos(index)}>Edit</button>
            </div>


    );
};
export default InputItem;