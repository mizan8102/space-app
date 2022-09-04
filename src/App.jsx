import Hero from "./layouts/Hero";
import Nav from "./layouts/Nav";

const App = () => {
  return ( 
    <section className="bg-hero-bg dark:bg-dark-hero-bg font-Barlow bg-center bg-cover h-screen">
      <Nav />
       <Hero />
    </section>
   );
}
 
export default App;