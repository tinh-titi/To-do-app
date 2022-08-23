import './Header.css';
import React from 'react';



function Header(props) {
    function clickToAdd() {
    }
    return (
        <div>
            <header>
                <h1>TO DO LIST</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Things to do." aria-label="Things to do." aria-describedby="basic-addon2"/>
                        <button class="input-group-text" id="basic-addon2" onClick={clickToAdd}>Add</button>
                </div>

            </header>
        </div>
    )
}

export default Header