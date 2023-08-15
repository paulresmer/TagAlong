import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

function Contact() {
  return (
    <>
      <NavBar />
      <Header
        cName='header'
        headerImg='src/assets/grey-grid.jpg'
        title='contact'
        btnClass='hide'
      />
    </>
  )
}

export default Contact;