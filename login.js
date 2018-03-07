import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link,NavLink, HashRouter, browserHistory } from 'react-router-dom';
import signup1 from './signup1';
import Footer from './footer'
import Header2 from './header2';

var cors=require('cors')
const url ='http://learncab.com:3010/auth/login/';

export default  class signup2 extends Component {



 login(event) {                                /*     */ 
event.preventDefault();
app.use(cors({
  origin: ["http://localhost:3000 "],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
console.log('will login now');
console.log(this.state.username);
axios.post(url ,{ username :this.state.username, password :this.state.password},).then(res => {
 console.log('hh',this.state.username); 
 document.location = '/#/';
    }, err=>{
        alert('Invalid Password')
    })
  }




  constructor() {
    super();
    this.state = {
    username : '',
    password : '',
    loggedIn : false,
    };
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.login.bind(this);  
 }
 handleUserNameChange(event) {
    this.setState({ username : event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password : event.target.value });
  }

  render() {
    var bg={
      background: 'url(./assets/images/background/bg.png)'
  }

  var wid120={
    width:'120px'
  }
  var width={
    width:'100px',

}
var bg={
    background: 'url(./assets/images/background/bg.png)'
}

var wid120={
  width:'120px'
}
var width={
  width:'100px',

}
var hei={
  height: '65px',

}

var bg={
  background: 'url(./assets/images/background/lbg.png)',
  width:'100%',
  
}
var ali={
  'text-align': 'left'
}

var bott={
  'font-size': 12,
  'font-family' : 'Montserrat'
}

var bg={
    background: 'url(./assets/images/background/lbg.png)',
    width:'100%',
    
}
var icons={
  
}
var bg={
    background: 'url(./assets/images/background/bg.png)'
}
var height={
'padding-top': '5%'
}
var ali={
'text-align': 'left',
color:'#fff'
}
var fon={
  'line-height': '40px' ,
  'font-size': 18,
  'font-family' : 'Montserrat' , 
  'text-align': 'left'
}
var sig={
'font-size': 12,
  'font-family' : 'Montserrat' , 
  color:'#fff'
}
var col={
'float':'right'
}
var bcol={
'background-color': '#41b554'
}
var col8={
'text-align': 'left',
'padding-right': '70px',
'padding-left': '78px',
'padding-top': '32px'
}
var bott={
  'font-size': 12,
  'font-family' : 'Montserrat',
  color:'#fff'
}
var white={
  color:'#fff'
}
var page={
'min-height': '410px !important'
}
var foot={
  '    bottom': '0!important'
}
var right={
  float:'right'
}
var cont={
    padding: '0px'
}
var tbox={
  'font-size': 48,
   
   
}
var tbox1={
  'font-size': 18,
    'text-align': 'left',
   
}
var bt={

background: 'linear-gradient(to right, #3853a4 , #41b554)',

color: '#FFFFFF',
}
var font={
  'background': '#fff',
  'font-family': 'sans-serif',
}
var col9={
  'text-align': 'right'
  }
  var pattern={
    'font-size': 12
  }
  var imgstyle={
    height:'772px'
  }
  var padd={
    'padding-left':'5%',
    'padding-bottom': '0%'
  }
  var center={
    'text-align': 'center',
    'padding-top': '10%'
  }
  var left={
    'text-align': 'left',
    'margin-left': '17%',
    'font-size': '28.6 px'
  }
  var line_height={
    'line-height': '3.5'
  }
  var line={
'    margin-bottom': '0rem !important'
  }
  var please_font={
    'text-align': 'left',
    'font-size': '14px',
    'margin-left': '18%'
  }
  var backimg={
    background: 'url(./assets/images/background/lb1.jpg)',
    'background-repeat': 'no-repeat',
    'left': '0px',
    'top': '0px',
    'overflow': 'hidden',
    'margin': '0px',
    'padding': '0px',
    
    'z-index': '-999999'
  
  
  }
  var box={ 
    'border': ' 5px solid transparent',
    'border-radius': '2%',
    '-moz-border-image': '-moz-linear-gradient(top, #41b554 0%, #3853a4 100%)',
  
 'border-image': 'linear-gradient(to bottom, #41b554 0%, #3853a4 100%)',
   'border-image-slice': '1'
  }
  var pad={
    'float':'right',
    
  }
  var cpadd={
    'align-self':'center',
    'padding-top': '9%',
    'padding-left': '12%'
     }
    
     var pagewapper={

     }
     var text_pad={
       'padding-top':'97px'
     }
    return (
    
      <div id ='pagewapper'>
       <div style={backimg}>
            <Header2/>
           
            <div class='top-content' >
        	
          <div class='inner-bg'>
              <div class='container'  >
                  <div class='row'>
                      <div class='col-sm-7 text' style={text_pad}>
                            <h1>Great to Have You Back! </h1>
                            <p class='subtext'>You can sign into LearnCab With existing account</p>
                        </div>
  <div class='col-sm-5 form-box'>
                        <div class='form-top' style={box}>
                          <div class='form-top-left'>
                <form class='form-horizontal form-material' id='loginform' action='index.html'>
                        <h3 class='box-title m-b-20'>Sign In</h3>
                        <h6>Please enter your details</h6>
                        <div class='form-group '>
                            <div class='col-xs-12'>
                                <input class='form-control' type='text' required=''  name='Username' placeholder='Username' onChange={this.handleUserNameChange}/> </div>
                        </div>
                        <div class='form-group'>
                            <div class='col-xs-12'>
                                <input class='form-control' type='password' required=''  name='password' placeholder='Password' onChange={this.handlePasswordChange}/> </div>
                        </div>
                        <div class='form-group row'>
                            <div class='col-md-12 font-14'>
                                <div class='checkbox checkbox-primary pull-left p-t-0'>
                                    <input id='checkbox-signup' type='checkbox'/>
                                    <label for='checkbox-signup'> Remember me </label>
                                </div> <a href='javascript:void(0)' id='to-recover' class='text-dark pull-right'> Forgot pwd?</a> </div>
                        </div>
                        <div class='form-group text-center m-t-20'>
                            <div class='col-xs-12'>
                                <button class='btn btn-info btn-lg btn-block text-uppercase ' type='submit'  onClick={this.login} style={bt}>Log In</button>
                            </div>
                        </div>
                     
                        <div class='form-group m-b-0'>
                            <div class='col-sm-12 text-center'>
                                <div>New here?  <a>  <NavLink to='/signup1'  >Create an Free Account</NavLink></a></div>
                            </div>
                        </div>
                    </form>
                    <form class='form-horizontal' id='recoverform' action='index.html'>
                        <div class='form-group '>
                            <div class='col-xs-12'>
                                <h3>Recover Password</h3>
                                <p class='text-muted'>Enter your Email and instructions will be sent to you! </p>
                            </div>
                        </div>
                        <div class='form-group '>
                            <div class='col-xs-12'>
                                <input class='form-control' type='text' required='' placeholder='Email'/> </div>
                        </div>
                        <div class='form-group text-center m-t-20'>
                            <div class='col-xs-12'>
                                <button class='btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light' type='submit'>Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
        </div>
<div class='container-fluid'>
     <Footer/>
     </div>   
     </div>   
        </div>

 
    );
  }
}


