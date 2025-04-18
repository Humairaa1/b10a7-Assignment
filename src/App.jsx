import { useState } from 'react';
import './App.css'
import Footer from './Footer/Footer'
import Banner from './header/Banner'
import Nav from './header/nav'
import AvailablePlayes from './Components/AvailablePlayes';
import ButtonContainer from './Components/ButtonContainer';
import SelectedPlayer from './Components/SelectedPlayer';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [freeCredit, setFreeCredit] = useState(0);
  const [isactive, setIsActive] = useState({
    btn: true,
    status: "available"
  });
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const handleFreeCredit = () => {
    setFreeCredit(freeCredit + 10000);
    toast.success("successfully add free credit")

  };
  // handleIsActive function 
  const handleIsActive = (status) => {

    if (status == "available") {
      setIsActive({
        btn: true,
        status: "available"
      })
    }
    else {
      setIsActive({
        btn: false,
        status: "selected"
      })
    }

  }
  // handleSelectedPlayer function 
  const handleSelectedPlayer = (player, price) => {

    if (selectedPlayer.includes(player)) {
      toast.error('You already select this player');
      return;
    }

    if (selectedPlayer.length <= 6) {
      if (freeCredit > price) {
        const newplayers = [...selectedPlayer, player];
        setSelectedPlayer(newplayers);
        setFreeCredit(freeCredit-price)
        toast.success("Successfully Added player");
      }
      else{
        toast.error("You have No Money")
      }
    }
    else {
      toast.error('You can select only 6 players');
      return;
    }

  }
  // handleDelete fuction 
  const handleDelete = (id) => {
    const remainPlayer = selectedPlayer.filter(p => p.playerId !== id);
    setSelectedPlayer(remainPlayer);
    toast.success("Deleted Successfully")
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
          selectedPlayer={selectedPlayer}
        ></ButtonContainer>
      </div>

      {
        isactive.btn
          ?
          <AvailablePlayes handleSelectedPlayer={handleSelectedPlayer}></AvailablePlayes>
          :
          <SelectedPlayer selectedPlayer={selectedPlayer} handleDelete={handleDelete}></SelectedPlayer>
      }

      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
