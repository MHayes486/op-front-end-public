import {Fragement} from 'react';
import Header from './Layouts/header';
import Footer from './Layouts/footer';

const Home = ()=>{
    return (
        <Fragement>
        <Header />
        <h1>Home sweet home</h1>
        <p>Home page</p>
        <Footer />
        </Fragement>
    )
};

default export Home;