import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [post, setPost] = useState({
    title: "",
    image: null,
  });

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if ([e.target.name] === "image") {
      setImage({ image: e.target.files });
    } else if ([e.target.name] === "title") {
      setTitle({
        title: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const formData = new FormData();
    formData.append("title", title);
    // if (image) {
    formData.append("image", image, image.name);
    // }

    const url = "http://localhost:8000/post/creates/";

    axios
      .post(url, formData, config)
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button>Post</button>
      </form>
    </div>
  );
};

export default Create;
