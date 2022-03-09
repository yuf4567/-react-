import './App.css';
import './css/index.css'
// import './css/iconfont.css'
// import './css/index.less'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
     <Header/>
     <Content/>
     <Footer/>
    </div>
  );
}

// console.log(App());

export default App;
