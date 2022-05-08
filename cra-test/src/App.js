import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';
import Hello from "./components/Hello"
import Wrapper from "./components/Wrapper"
import MessageBox from "./components/MessageBox"
import Counter from "./components/Counter"
import InputSample from './components/InputSample';
import UseRef from './components/UseRef';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function App() {
  const name = "cocoon";
  const id = "5";
  const style = {
    color: "skyblue",
    fontSize: "25px"
  };
  const [folding, setFolding] = useState(true);
  const foldMessage = () => {
    setFolding((show) => !show);
  };

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "cocoon",
      email: "aaa@gmail.com",
      active: true
    },
    {
      id: 2,
      username: "ultra",
      email: "bbb@gmail.com",
      active: false
    },
    {
      id: 3,
      username: "hozae",
      email: "ccc@gmail.com",
      active: false
    },
  ]);
  const { username, email } = inputs;
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    setUsers([...users, user]); // setUsres(users.concat(user));

    setInputs({
      username: "",
      email: ""
    });

    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  }

  const onChange = (e) => {
    const { name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) => user.id === id ? {...user, active: !user.active} : user)
    );
  };

  return (
    <>
      <Wrapper>
        <Hello name="react" color="skyblue" isSpecial={true}></Hello>
        <div style={style}>{name}</div>
        <div style={{color:"red", fontSize:"15px"}}>{id}</div>
        <div className="test-box"></div>
        { /* 주석은 안보입니다. */ }
        <Hello></Hello>
        <MessageBox folding={folding}></MessageBox>
      </Wrapper>
      <button onClick={foldMessage}>{folding ? "접기" : "펴기"}</button>
      <Counter></Counter>
      <br/>
      <InputSample></InputSample>
      <UseRef></UseRef>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      ></CreateUser>
      <UserList 
        users={users} 
        onRemove={onRemove}
        onToggle={onToggle}
      ></UserList>
    </>
  );
}

export default App;
