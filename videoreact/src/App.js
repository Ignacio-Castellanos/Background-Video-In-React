import './App.css';
import bgImage from './video/background-img.mp4'




function App() {
  
  
  return (
    <div className="App">
      
      

      <video autoPlay loop muted>
<source src={bgImage} type="video/mp4" />

      </video>
      
      
      <div className='text-wrapper'>

<h1>Relaxing Background Video</h1>
<p>One for the Dark Lord, upon the dark throne in the Land of Mordor where the Shadows lie. A ring to govern them all. One Ring to find them, one Ring to draw them all and bind them in darkness in the Land of Mordor where the Shadows lie.</p>

</div>
    </div>
  );
}

export default App;
