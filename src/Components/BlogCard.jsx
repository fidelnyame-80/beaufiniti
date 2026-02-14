import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, excerpt, link }) => {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 hover:bg-neutral-800 transition">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-neutral-400 mb-4">{excerpt}</p>

      <Link
        to={link}
        className="text-sm font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-neutral-200 transition"
      >
        Read Article
      </Link>
    </div>
  );
};

export default BlogCard;
