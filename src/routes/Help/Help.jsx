import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

function Help() {
  return (
    <>
      <NavBar />
      <Header
        cName='header'
        headerImg='src/assets/grey-grid.jpg'
        title='help'
        btnClass='hide'
      />
    </>
  )
}

export default Help;