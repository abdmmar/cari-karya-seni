import React, { useState, useEffect } from "react";
import { useParams } from "@reach/router";

const API_KEY = `?apikey=${process.env.REACT_APP_API_KEY}&`;
const GET_OBJECT = "https://api.harvardartmuseums.org/object/";

const Details = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [artist, setArtist] = useState("Unknown");
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchObjectId = async () => {
      const response = await fetch(`${GET_OBJECT}${params.id}${API_KEY}`);
      const jsonData = await response.json();
      const item = await jsonData;
      setData((data) => ({ ...data, ...item }));
    };

    fetchObjectId();
  }, [params.id]);

  useEffect(() => {
    if (data.people !== undefined) {
      setArtist(data.people[0].name);
      setRole(data.people[0].role);
    }
  }, [data.people]);

  const isUnknown = (data) => {
    if (data != null) {
      return data;
    } else {
      return "Unknown";
    }
  };

  const isDescriptionOrLabelText = (data) => {
    const dataDesc = data.description || data.labeltext;
    if (dataDesc != null) {
      return dataDesc;
    } else {
      return "Unknown";
    }
  };

  return (
    <div className="details-art">
      <figure>
        <img src={data.primaryimageurl} alt={data.title} />
        <figcaption>{data.copyright}</figcaption>
      </figure>
      <div className="details-art-title">
        <h1 className="">{data.title}</h1>
        <div className="details-art-artist">
          <p className="artist-name">{artist}</p>
          <p className="artist-role">{role}</p>
        </div>
      </div>
      <div className="details-art-desc">
        <dt>Description</dt>
        <dd>{isDescriptionOrLabelText(data)}</dd>
      </div>
      <dl className="details-art-info">
        <dt>Date</dt>
        <dd>{isUnknown(data.dated)}</dd>
        <dt>Classification</dt>
        <dd>{isUnknown(data.classification)}</dd>
        <dt>Medium</dt>
        <dd>{isUnknown(data.medium)}</dd>
        <dt>Dimensions</dt>
        <dd>{isUnknown(data.dimensions)}</dd>
      </dl>
    </div>
  );
};

export default Details;
