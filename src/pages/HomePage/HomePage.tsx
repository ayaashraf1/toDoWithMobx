import React , { useState } from 'react';
import Menu from '../../components/Menu/Menu';
import TextInput from '../../components/TextInput/TextInput';
import ToDoListing from '../../components/ToDoListing/ToDoListing';
import './HomePage.css';
import { observer } from 'mobx-react';
import store from '../../state/store';
import AddNewToDo from '../../components/AddNewToDo/AddNewToDo';

function HomePage() {
    
    const [searchTxt,setSearchTxt] = useState<string>('');

    const handleSearch  = (e:any) =>{
        setSearchTxt(e.target.value);

        if(e.target.value !== ''){
            store.getToDosByText(e.target.value);  
            return;
        }
        store.setAllToDos();
    }
    return (
        <div>
            <Menu />
            <div id="home-body-section">
             <span className="hint"> Click on toDo to make it Done</span>
             <TextInput
                     width="500px" 
                     height="20px" 
                     placeHolder="Search Here" 
                     value={searchTxt}
                     onChangeFun={handleSearch} />
             <ToDoListing />
             <AddNewToDo />
            </div>
        </div>
    )
}

export default observer(HomePage);
