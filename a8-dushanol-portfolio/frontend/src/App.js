// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media

import Navigation from './components/Navigation.js';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import TopicsPage from './pages/TopicsPage.js';
import HomePage from './pages/HomePage.js';
import MacrosPage from './pages/MacrosPage.js';
import AddMacroPageTable from './pages/AddMacroPageTable.js';
import EditMacroPageTable from './pages/EditMacroPageTable.js';


// If your schema requires SHORT data input, then use the TABLE design.
// import EditMoviePageTable from './pages/EditMoviePageTable';
// import AddMoviePageTable from './pages/AddMoviePageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [macro, setMacro] = useState([]);

  return (
    <>

      <BrowserRouter>
      <header>
            <h1>Portfolio</h1>
            <p>Portfolio website.</p>
          </header>

        <Navigation/>
        <main>
            <section>
                <Routes> 
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/topics" element={<TopicsPage/>} />
                 
                  <Route path="/macros" element={<MacrosPage setMacro={setMacro} /> } />
                  <Route path="/add" element={<AddMacroPageTable />} />
                  <Route path="/edit" element={<EditMacroPageTable macroToEdit={macro}/>} />
                </Routes>
              </section>
          </main>
          <footer>
            <p>&copy; Lora Dushanova {new Date().getFullYear()}</p>
          </footer>
      </BrowserRouter>

    </>
  );
}

export default App;