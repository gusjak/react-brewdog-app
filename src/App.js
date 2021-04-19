import React, { Component } from 'react'
import { Router } from '@reach/router'

// Components
import NavBar from './components/Navbar'

// Pages
import Home from './pages/Home'
import Beer from './pages/Beer'
import Beers from './pages/Beers'
import NotFound from './pages/NotFound'

class App extends Component {
    state = {
        beer: '',
        allBeers: [],
        fallbackImage: 'https://i0.wp.com/i.ya-webdesign.com/images/beer-bottle-png-6.png',
    }
    componentDidMount = () => {
        this.fetchRandomBeer()
        this.fetchAllBeers()
    }

    fetchRandomBeer = () => {
        fetch('https://api.punkapi.com/v2/beers/random')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ beer: data[0] })
            })
            .catch((error) => console.error(error))
    }

    fetchAllBeers = () => {
        fetch('https://api.punkapi.com/v2/beers?per_page=51')
            .then((response) => response.json())
            .then((data) => this.setState({ allBeers: [...this.state.allBeers, ...data] }))
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
                    <Beers allBeers={this.state.allBeers} path="/beers" />
                    <Beer path="/beers/:id" />
                    <NotFound default />
                </Router>
            </>
        )
    }
}

export default App
