import React, { Component } from "react";

class Spinner extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="lds-circle">
          <div></div>
        </div>
      </>
    );
  }
}

export default Spinner;

// import React from 'react'

// const Spinner = () => {
//   return (  <>
//     <div className="lds-circle">
//       <div></div>
//     </div>
//   </> );
// }

// export default Spinner;
