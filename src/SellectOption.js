
// import React from "react";

// class SellectOption extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: 'javascript' };
//   };

//   handleChange = (event) => {
//     this.setState({ value: event.target.value });
//   };

//   handleSubmit = (event) => {
//     alert('Giá trị đã được submit: ' + this.state.value);
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Chọn khóa học:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="html">HTML</option>
//             <option value="css">CSS</option>
//             <option value="javascript">JAVASCRIPT</option>
//             <option value="react.js">REACT.JS</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   };

// };
// export default SellectOption;