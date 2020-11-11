import React from "react";

import Art from "./Art";

const ArtList = ({ list }) => {
  return (
    <div className="art-container">
      {list.map(
        (art) =>
          art.primaryimageurl && <Art key={art.id} id={art.id} data={art} />
      )}
    </div>
  );
};

export default ArtList;
