import './Createtodobutton.css';

function CreateTodoButton({ setopenModal }) {
    return (
        <button
            className="CreateTodoButton"
            onClick={
                () => {
                    setopenModal(state => !state);
                }
            }
        >+</button>
    );
}

export { CreateTodoButton };