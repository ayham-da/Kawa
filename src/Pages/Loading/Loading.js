import React, { Component } from 'react';
import '../Loading/Loading.css';
import { Redirect } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import PuffLoader from "react-spinners/PuffLoader";

class Loading extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
     this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
  }
    
  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/home" />
      : <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Samer Alnajjar</title>
                <link rel="canonical" href="#Samer Alnajjar" />
                <meta name="description" content="Samer Alnajjar| Author " />
         </Helmet>
        <div className="Loading-header">
          <PuffLoader
            size={'40vw'}
            color={"#fff"}
            loading={true}
          />
        </div>
        </div>
  }
}

export default Loading;
