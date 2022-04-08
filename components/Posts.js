import React, { useState } from "react";
import { useGetPostsQuery, useAddPostsMutation } from "../store/api";

const Posts = () => {
  const { data, isLoading, isError, isSuccess } = useGetPostsQuery();
  const [addingthePost] = useAddPostsMutation();

  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const { title, body } = formData;

  const Change = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    const data = {
      // userId: 1,
      // id: 123,
      title: title,
      body: body,
    };
    addingthePost(data).then((res) => {
      if (res.data) {
        console.log("response is posting");
      }
      if (res.error) {
        console.log("error", res.error);
      }
    });
  };

  return (
    <div>
      <form
        style={{
          margin: "20px 12px",
          textAlign: "center",
          display: "flex",
          flexDirection: "columns",
        }}
        onSubmit={submit}
      >
        <input
          type="text"
          value={title}
          name="title"
          onChange={Change}
          placeholder="enter the title"
          style={{ margin: "10px 0", height: "30px" }}
          required
        />
        <input
          type="text"
          value={body}
          name="body"
          onChange={Change}
          placeholder="enter the body"
          style={{ margin: "10px 0", height: "30px" }}
          required
        />
        <button type="submit" style={{ margin: "10px 0", height: "30px" }}>
          submit
        </button>
      </form>

      {isLoading && <h1>Loading</h1>}
      {isError && <h1>Error...</h1>}
      {isSuccess &&
        data &&
        data.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
            }}
            key={item.id}
          >
            <h3>{item.userId}</h3>
            <h3>{item.id}</h3>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Posts;
