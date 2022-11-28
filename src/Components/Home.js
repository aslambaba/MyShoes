import React from 'react';
import Menu from './Menu';
import Footer from './Footer';

function Home(){
    return(
        <div>
            <Menu />
            <div>
                <h1>Welcome to MyShoes 24</h1>
                <image />
                <button>Find Your Fashion</button>
            </div>
            <Footer />
        </div>
        
    )
}

export default Home;
