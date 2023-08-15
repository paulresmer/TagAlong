import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <Header
        cName='header'
        headerImg='src/assets/TagAlong_files/grey-grid.jpg'
        title='hmm'
        text='choose your fav destination'
        buttonText='travel plan'
        url='/'
        btnClass='show'
      />
      <Content />
    </>
  )
}

export default Home;