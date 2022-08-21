import './App.css';
import { HashRouter, NavLink, Routes, Route, useNavigate, useParams, Outlet } from 'react-router-dom';
import { useState } from 'react';

const Index = () => {
  return <p>這是首頁</p>;
};

const Todo = () => {
  return <>
    <p>這是 Todo 頁面</p><Logout /></>;
};

{/* useNavigate 練習區 @8/18 每日任務 Day14：React Router */ }
const Logout = () => {
  const [isLogin, setIsLogin] = useState(true);
  let navigate = useNavigate();
  return <>
    <button onClick={() => {
      setIsLogin(false);
      navigate('/login')
    }}>Logout</button></>;
}
const Login = () => {
  return <p>這是登入頁面</p>;
};

const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Post = () => {
  return <><p>Post頁面</p>
    <Outlet />
  </>;
};
const PostDetail = () => {
  let params = useParams();
  return <p>Post ID: {params.postid}</p>;
};
function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 @8/17 每日任務 Day13：React Router 建立 */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          
        {/* Routes, Route 練習區 @8/19 每日任務 Day 15 ｜React Router 動態路由 */}
          <Route path="/post" element={<Post/>} >
            <Route path=":postid" element={<PostDetail />}></Route>
          </Route>
          <Route path="*" element={<>無效網址</>} />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
