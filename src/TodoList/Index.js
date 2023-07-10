import './Todolist.css';

function TodoList({children}){
    return (
        <div className="Todolist-container">
            <ul>
                {children}
            </ul>
        </div>
    );
}

export {TodoList}