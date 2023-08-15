import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

function About() {
  return (
    <>
      <NavBar />
      <Header
        cName='header'
        headerImg='src/assets/grey-grid.jpg'
        title='about'
        btnClass='hide'
      />
    </>
  )
}

export default About;