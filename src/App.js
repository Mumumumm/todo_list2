import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/todolist' element={<TodoList />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
