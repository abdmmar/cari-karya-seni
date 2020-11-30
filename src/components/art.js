import { navigate } from "@reach/router";

const Art = ({ id, data }) => {
  const people = data.people === undefined ? "Unknown" : data.people[0].name;

  const handleOnClick = (e) => {
    switch (e.target.className) {
      case "artist":
        break;

      default:
        navigate(`/details/${id}`);
        break;
    }
  };

  return (
    <article id={id} className="art" onClick={handleOnClick}>
      <img loading="lazy" src={data.primaryimageurl} alt={data.title} />
      <div className="art-info">
        <p className="artist">{people}</p>
        <h3 className="art-title">{data.title}</h3>
        <p className="art-class-medium">
          {data.classification} {data.medium !== null ? `• ${data.medium}` : ""}
          {data.datebegin !== 0 ? ` • ${data.datebegin}` : ""}
        </p>
      </div>
    </article>
  );
};

export default Art;
