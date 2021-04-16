import React, { Component } from 'react'
import { Router } from '@reach/router'

// Components
import NavBar from './components/Navbar'

// Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'

class App extends Component {
    state = {
        beer: '',
        fallbackImage: 'https://i0.wp.com/i.ya-webdesign.com/images/beer-bottle-png-6.png',
    }
    componentDidMount = () => {
        this.fetchRandomBeer()
    }

    fetchRandomBeer = () => {
        fetch('https://api.punkapi.com/v2/beers/random')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ beer: data[0] })
            })
            .catch((error) => console.error(error))
    }
    render() {
        return (
            <>
                <NavBar />
                <Router>
                    <Home
                        beer={this.state.beer}
                        fallbackImage={this.state.fallbackImage}
                        fetchRandomBeer={this.fetchRandomBeer}
                        path="/"
                    />
                    <NotFound default />
                </Router>
            </>
        )
    }
}

export default App
