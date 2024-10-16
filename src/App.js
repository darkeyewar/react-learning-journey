import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Card from './Card';
// import Nav from './components/Nav';
// import Promo from './components/Promo';
// import Intro1 from './components/Intro1';
// import Intro2 from './components/Intro2';
// import Intro3 from './components/Intro3';
// import Footer from './components/Footer';



//    function Header(){
//     return <h1>This is an H1 heading</h1>
//   }

function App() {
  return(
  <div className='App'>
    <h1>Add three cards elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3"/>
      <Card h2="Third card's h2" h3="Third card's h3"/>
   



 {/* <Header firstname="Mani"/> */}
  {/* <Nav/>
  <Promo/>
  <Intro1/>
  <Intro2/>
  <Intro3/>
  <Footer/> */}

 </div>
  )
}



export default App;
