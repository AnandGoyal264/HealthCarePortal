import { useEffect, useState } from "react";
import API from "../services/api";

const HealthTips = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get("/blogs").then(res => setBlogs(res.data.blogs));
  }, []);

  return (
    <div>
      <h2>Health Tips</h2>
      {blogs.map(b => (
        <div key={b._id}>
          <h3>{b.title}</h3>
          <p>{b.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthTips;
