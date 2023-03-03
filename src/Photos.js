import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="">
        <div className="row mt-2 mb-2 g-3">
          {props.photos.map(function (photo, keyword) {
            //console.log(photo);
            return (
              <div className="col-4 md-4" key={photo.id}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid photo"
                    alt={keyword}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
