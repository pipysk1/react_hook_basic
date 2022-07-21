const Todo = ({...props}) => {

    let {list, handleDeleteItem} = props;

    return (
        <div>
            {list.map((item, index) => {
                return (
                    <li key={index}>
                        {item.name}
                        <span onClick={() => handleDeleteItem(item)}>&times;</span>
                    </li>
                )
            })}
            <hr/>
        </div>
    )
}
export default Todo;