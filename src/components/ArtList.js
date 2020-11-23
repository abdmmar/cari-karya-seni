import Art from "./Art";

const ArtList = ({ list }) => {
  return (
    <>
      {!list.length ? (
        <h1>No Arts Found!</h1>
      ) : (
        list.map(
          (art) =>
            art.primaryimageurl && <Art key={art.id} id={art.id} data={art} />
        )
      )}
    </>
  );
};

export default ArtList;
