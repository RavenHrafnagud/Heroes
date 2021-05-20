import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DcScreen from '../components/dc/DcScreen'
import HeroesScreen from '../components/heroes/HeroesScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/iu/NavBar'
import SearchScreen from '../components/search/SearchScreen'

function DashboardRoutes() {
    return (
        <div>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/hero/:heroId" component={HeroesScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </div>
    )
}

export default DashboardRoutes
