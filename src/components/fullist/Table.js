import React, { useState, useEffect } from "react";
import Header from '../utilities/Header';

import Table from "./Table";

function FullTable() {
  return (
    <div>
        <Header />
        <Content />
    </div>
);
}

class Content extends React.Component {
render() {
   return (
      <div>
         <h2>Content</h2>
         <p>The content text!!!</p>
      </div>
   );
}
}

export default FullTable;