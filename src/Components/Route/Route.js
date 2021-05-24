import React from 'react';
import {BrowserRouter, Route, Redirect, useHistory, Switch} from 'react-router-dom'
import {Result, Button} from 'antd';
// import Loading from '../Loading/Loading'
import Layout from '../Layout/Layout'
import HomePage from "../../Vues/HomePage/HomePage";
import AboutPage from "../../Vues/AboutPage/AboutPage";
import ContactPage from "../../Vues/ContactPage/ContactPage";
import LoginPage from "../../Vues/LoginPage/LoginPage";
import AdminPage from "../../Vues/AdminPage";
import responseTamplase from "../../responseTamplase";
import PortfolioPage from "../../Vues/Portfolio/PortfolioPage";
const scrolPublic = () => {
    window.scrollTo(0, 0)
    return true
}
// eslint-disable-next-line react/prop-types
const ScrollPublicRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => (scrolPublic() ?
            <Layout {...props}>

                <Component {...props} />

            </Layout>
            : '')}

    />
)

const chekAutch = async ({history}) => {
    let auch = true

    if (localStorage.getItem('key') !== null) {
        try {
            await responseTamplase("/api/rest/user/ChekToken/",'get')
            auch = true
        }catch (e) {
            auch =false
        }
    }else{
        auch = false

    }
    window.scrollTo(0, 0)
    if (auch===false){
        history.push('/')
    }
    return auch
}
const AutchRouter = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            chekAutch(props) ? (
                <Layout {...props}>

                    <Component {...props} />

                </Layout>
            ) : (
                <Redirect
                    to={{
                        pathname: '/'
                    }}
                />
            )
        }
    />
)

let NotFoundPage = () => {
    const history = useHistory();

    return (
        <div className='no-found'>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button onClick={() => {
                    history.push('/')
                }} type="primary">Go back to the main page</Button>}
            />
        </div>
    )
}


let RouteApp=()=>{

    return(
        <React.Fragment>
            <BrowserRouter>

                    <Switch>
                        {/*<Route exact path="/waviotloginadmin"  render={(props) => <LoginPage {...props}/>}/>*/}
                        <ScrollPublicRoute exact path="/" component={(props) => <HomePage {...props} />}/>
                        <ScrollPublicRoute exact path="/about" component={(props) => <AboutPage {...props} />}/>
                        <ScrollPublicRoute exact path="/contact" component={(props) => <ContactPage {...props} />}/>
                        <ScrollPublicRoute exact path="/adminlogin" component={(props) => <LoginPage {...props} />}/>
                        <ScrollPublicRoute exact path="/portfolio" component={(props) => <PortfolioPage {...props} />}/>
                        <AutchRouter exact path="/admin" component={(props) => <AdminPage {...props} />}/>
                        <ScrollPublicRoute  component={(props) => <NotFoundPage {...props}/>}/>

                    </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}
export default RouteApp
