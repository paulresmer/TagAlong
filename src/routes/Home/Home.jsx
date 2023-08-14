import Hero from '../../components/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <Hero>
        cName='hero'
        heroImg='src/assets/grey-grid.jpg'
        title='your journey your story'
        text='choose your fav destination'
        buttonText='travel plan'
        url='/'
        btnClass='show'
      </Hero>
    </>
  )
}

export default Home;