
import { useState } from 'react';
import './App.css'
import Footer from './Footer/Footer'
import Banner from './header/Banner'
import Nav from './header/nav'
import AvailablePlayes from './Components/AvailablePlayes';
import ButtonContainer from './Components/ButtonContainer';
import SelectedPlayer from './Components/SelectedPlayer';

function App() {

  const [freeCredit, setFreeCredit] = useState(0);
  const [isactive, setIsActive] = useState({
    btn: true,
    status:"available"
  });

  const handleFreeCredit = () => {

    setFreeCredit(freeCredit + 5000);

  };

  const handleIsActive = (status) => {

    if(status == "available"){
      setIsActive({
        btn: true,
        status:"available"
      })
    }
    else{
      setIsActive({
        btn: false,
        status:"selected"
      })
    }

  }

  return (
    <>
      <Nav freeCredit={freeCredit}></Nav>

      <Banner
        handleFreeCredit={handleFreeCredit}>
      </Banner>

      <div className='flex justify-end mt-10 mr-20'>
      <ButtonContainer
      isactive={isactive} 
      handleIsActive={handleIsActive}
      ></ButtonContainer>
      </div>
      
      {
        isactive.btn ? <AvailablePlayes></AvailablePlayes> : <SelectedPlayer></SelectedPlayer>
      }

      

    

      <Footer></Footer>
    </>
  )
}

export default App
