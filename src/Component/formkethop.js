 
import React from 'react';
 
class ActionBT extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isCheck: true,
            fullName: 'Bui Van Nguyen',
            course: 'css', //khoa hoc dai dien cho select ben duoi
            message: 'Your message name to here'
        };
    };
    
    handleInputChage = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
                [name]: value
            });
    };

    handleSubmit = (event) => {
        alert('Tham gia '+ this.state.isCheck + ',Ho ten: '+ this.state.fullName + ', '+ this.state.course + ' va '+ this.state.message);
        event.preventDefault();
        console.log('ban da submit');
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Tham gia:
                    < input name="isCheck" type="checkbox"
                        checked={this.state.isCheck}
                        onChange={this.handleInputChage} />
                </label>
                <br />
                <label  >
                    Ghi ro ho ten:
                    <input name="fullName"
                        type="text"
                        value={this.state.fullName}
                        onChange={this.handleInputChage} />
                </label>
                <br />
                <label  >
                    Chon khoa hoc:
                    <select
                        name="course"
                        value={this.state.course}
                        onChange={this.handleInputChage}>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="javascript">JAVASCRIPT</option>
                        <option value="react.js">REACT.JS</option>
                    </select>
                </label>
                <br />
                <label  >
                    Message:
                    <textarea 
                        name="message"
                        type="text"
                        value={this.state.message}
                        onChange={this.handleInputChage}
                    />
                </label>
                <br />

                <input type="submit" value="Submit" />
                
            </form>
        );
    };
}
export default ActionBT;