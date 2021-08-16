// import React from 'react';

//  class ActionButton extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'Your message here'};
//     };

//     handleChange = (event) => {
//       this.setState({value: event.target.value});
//     };

//     handleSubmit = (event) => {
//       alert('Giá trị đã được submit: ' + this.state.value);
//       event.preventDefault();
//     };

//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Message: 
//             <textarea type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     };
//   };

//   export default ActionButton;