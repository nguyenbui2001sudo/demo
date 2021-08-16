import React from 'react';

function UserDangNhap () {
    return <h1> Wellcom back! </h1>
}
function UserDangXuat () {
    return <h1> Please sign up. </h1>
}

function Greeting (props) {
    const check = props.check;
    if(check){
        return <UserDangNhap />
    }
    return <UserDangXuat />
}

function LoginButton (props) {
    return (
        <button onClick = {props.onClick} >
            Login
        </button>
    )
}
function LogoutButton (props) {
    return (
        <button onClick = {props.onClick} >
            Logout
        </button>
    )
}

class LoginlogoutControll extends React.Component {

    constructor(props) {
        super(props);
        this.LoginClick = this.LoginClick.bind(this);
        this.LogoutClick = this.LogoutClick.bind(this);
        this.state = {check : false};
    }
    LoginClick() {
        this.setState({check : true});
    }
    LogoutClick () {
        this.setState ({check : false});
    }

    render () {
        const check = this.state.check;
        let button;
        if(check) {
            button = <LogoutButton onClick = {this.LogoutClick}/>
        } else
        {
            button = <LoginButton onClick = {this.LoginClick}/>
        }
        return (
            <div>
                <Greeting check= {check} />
                {button}
            </div>
        )
    }
    
}
export default LoginlogoutControll;