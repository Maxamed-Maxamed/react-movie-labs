// import React, { useContext } from "react";

import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToFavoritesIcon = ({ movie }) => {
  //   const context = useContext(MoviesContext);

  //   const handleAddToFavorites = (e) => {
  //     e.preventDefault();
  //     context.addToFavorites(movie);
  //   };

  return (
    <IconButton aria-label="add to list">
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;