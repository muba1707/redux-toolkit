import React from "react";
import { useUpdatePostMutation } from "../store/api";

function UpdatePost() {
  const [updatePost, { data, isLoading }] = useUpdatePostMutation();

  return <div></div>;
}

export default UpdatePost;
