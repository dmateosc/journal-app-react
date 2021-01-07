import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some Awesome Title"
          className="notes__title-input"
        />
        <textarea
          name=""
          placeholder="What happened today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
            alt="Imagen"
          />
        </div>
      </div>
    </div>
  );
};
