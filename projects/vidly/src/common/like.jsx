// import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularFaHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidFaHeart } from "@fortawesome/free-solid-svg-icons";

/*
  When using a statless functional component remember to pass "props" and avoid
  using "this".
*/
const Like = (props) => {
  return (
    <FontAwesomeIcon
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      icon={props.liked ? solidFaHeart : regularFaHeart}
    />
  );
};

export default Like;

// Class component example...
// class Like extends Component {
//   render() {
//     return (
//       <FontAwesomeIcon
//         onClick={this.props.onClick}
//         style={{ cursor: "pointer" }}
//         icon={this.props.liked ? solidFaHeart : regularFaHeart}
//       />
//     );
//   }
// }

// export default Like;
