import './App.css'
import Heading from './components/Heading/Heading'
import Header from './components/Header/Header'

function App() {
  return (
    <>
    <Header />
    <main>
      <section id="banner">
        <Heading text="Tobias Tenhunen" />
        <p>Front-End Developer</p>
      </section>
    </main>
    </>
  )
}

export default App
