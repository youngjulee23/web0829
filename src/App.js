import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieComponent from './MovieComponent';
import TodoTask from './TodoTask';
import PriceComponent from './PriceComponent';
import NameList from './NameList';
import Spread from './Spread';
import ChildComponent from './ChildComponent';
import UserID from './UserID';
import UserPW from './UserPW';


function App() {
  // const movieList = [
  //   {
  //   title: "행복의 나라",
  //   open: "2024.08.14",
  //   img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88454/88454_320.jpg"
  //   },
  //   {
  //   title: "에이리언-로물루스",
  //   open: "2024.08.14",
  //   img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88170/88170_320.jpg"
  //   },
  //   {
  //   title: "트위스터스",
  //   open: "2024.08.14",
  //   img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88442/88442_320.jpg"
  //   }
  //   ];

  // const todoList = [
  //   { taskName : '빨래하기', finished : false },
  //   { taskName : '공부하기', finished : true }
  //   ];

  // const priceList = [1000, 2000, 3000, 4000]

  // const names = ['HTML', 'CSS', 'Javascript', 'React']
  // const nameList = names.map((name,index) => <li key={index}>{name}</li>)

  // const[인사, 인사변경] = useState(['안녕하세요', '재미있는', '리액트'])
  // const [font, setFont] = useState('50px')
  // const fontStyle = {
  //   fontSize: font
  // }

  // const [value, setValue] = useState('안녕하세요')

  // function printConsole(){
  //   setValue ('반가워요')
  //   console.log(value);
  // }

  // const [number, setNumber] = useState(0)
  // function add () {
  //   setNumber (number +1)
  // }
  // function reset () {
  //   setNumber (0)
  // }

  // const[first, second] = useState('안녕하세요') 
  // function login () {
  //   second ('로그인되었습니다')
  // }
  // function logout() {
  //   second ('로그아웃되었습니다')
  // }
  // const[hi, setHi] = useState(['안녕', '하이']);
  // function change() {
  //   const newHi = [...hi];
  //   newHi[1] = "Hello";
  //   setHi (newHi);
  // }
  // const [value, setValue] = useState('')
  // function addDataHandler(data) {
  //   setValue(data)
  // }

  const[idValue, setIdValue] = useState('');
  const[pwValue, setPwValue] = useState('');

  function addIDHandler (id) {
    setIdValue(id);
  }
  function addPWHandler (pw) {
    setPwValue(pw);
  }

  function loginCheck() {
    if(idValue === "juju" && pwValue === "123") {
      alert('로그인 성공')
    }else{
      alert('로그인 실패')
    }
  }

  return (

//  <div>
//   {
//   movieList.map(movie =>
//   <MovieComponent title={movie.title} open={movie.open} img={movie.img}/>)
//   }
//  </div>
// {/* <div>
//   {
//   todoList.map(todo => <TodoTask taskName={todo.taskName}/>)
//   }
// </div> */}
    // <div>
    //   <h1>가격 목록</h1>
    //   {priceList.map((price, index) => <PriceComponent prices={price} key={index}/>)}
    // </div>
    // <div>
    //   <ul>{nameList}</ul>
    // </div>
    // <>
    // {/* <div style={fontStyle}>{인사[0]}</div>
    // <div style={fontStyle}>{인사[1]}</div>
    // <div style={fontStyle}>{인사[2]}</div>
    // <div>{font}</div> */}
    // <h1>{value}</h1>
    // {/* <button onClick={printConsole}>클릭</button> */}
    // <button onClick={printConsole}>클릭</button>
    // </>
    // <>
    //   <h1>{number}</h1>
    //   <button onClick={add} onMouseOut={reset}>클릭</button>
    // </>

    // <>
    // <h1>{first}</h1>
    // <button onClick={login}>로그인</button>
    // <button onClick={logout}>로그아웃</button>
    // </>
    // <>
    // <Spread/>
    // </>

    // <>
    // <h1>{hi[0]}</h1>
    // <h1>{hi[1]}</h1>
    // <button onClick={change}>배열 값 변경</button>
    // </>

    // <>
    // <h3>자식 컴포넌트로부터 받은 데이터: {value}</h3>
    // <ChildComponent onAddData={addDataHandler}/>
    // </>
    
    <>
    <UserID onAddID={addIDHandler}/>
    <UserPW onAddPW={addPWHandler}/>
    <button onClick={loginCheck}>Login</button>
    </>
  );
}

export default App;
