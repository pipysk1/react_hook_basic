import logo from './logo.svg';
import './App.css';
import Nav from "./views/Nav";
import {useState} from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import {CountDown,NewCountDown} from "./views/CountDown";

const courses = [
    {
        id: 1,
        name: 'HTML,CSS',
        type: 'mai'
    },
    {
        id: 2,
        name: 'ReatJS',
        type: 'mai'
    },
    {
        id: 3,
        name: 'Kotlin',
        type: 'admin'
    },
    {
        id: 4,
        name: 'Ruby',
        type: 'admin'
    },
    {
        id: 5,
        name: 'Ruby5',
        type: 'admin'
    },
    {
        id: 6,
        name: 'Ruby6',
        type: 'admin'
    }
];
const App = () => {
    const [text, setText] = useState('');
    const [list, setList] = useState(courses);


    const handleOnChangeInput = (event) => {
        setText(event.target.value);
    }
    const handleAddCourse = () => {

        let id = Math.floor(Math.random() * 10000);
        let todo = {id: id, name: text}
        if (!text) {
            alert("Fail");
            return;
        }
        setList([...list, todo])
        setText('')
    }
    const handleDeleteItem = (data) => {
        let course = list.filter(item => item.id !== data.id)
        setList(course)
    }
    const onTimesup=()=>{
        alert('times up')
    }


    return (

        <div className="App">
            <header className="App-header">
                <Nav/>
                <img src={logo} className="App-logo" alt="logo"/>
                <CountDown
                    onTimesup={onTimesup}
                />
                <span>---------</span>
                <NewCountDown />
                <Covid/>

                {/*<Todo*/}
                {/*    list={list}*/}
                {/*    handleDeleteItem={handleDeleteItem}*/}
                {/*/>*/}
                {/*<Todo*/}
                {/*    list={list.filter(item => item.type === 'admin')}*/}
                {/*    handleDeleteItem={handleDeleteItem}*/}
                {/*/>*/}
                {/*<input value={text} onChange={e => handleOnChangeInput(e)}/>*/}
                {/*<button onClick={() => handleAddCourse()}>Click Me!!!</button>*/}
            </header>
        </div>
    );
}

export default App;
