import React from "react";

function Dummy() {
  return (
    <div>
      <style jsx global>
        {`
          .dummy {
            text-decoration: underline;
            border-radius: 0.2vw;
          }
        `}
      </style>
      {/* <h1 className="text-light">Dummy Component</h1> */}
    </div>
  );
}

export default Dummy;
