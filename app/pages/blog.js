import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
function Blog() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blogs");
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setResponse(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className={`container text-light text-center`}>
        {response.map((item) => (
          <div className={`${styles.content}`}>
            <Link href={`/blogpost/${item.slug}`}>
              <h1>{item.title}</h1>
            </Link>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
