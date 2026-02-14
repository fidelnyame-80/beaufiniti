import React from "react";
import BlogCard from "../Components/BlogCard";

const Blogs = () => {
  const posts = [
    {
      title: "Soft Glam Mastery",
      excerpt:
        "Controlled, polished makeup that enhances your structure without looking heavy.",
      link: "/blogs/soft-glam",
    },
    {
      title: "Closet Reset Blueprint",
      excerpt:
        "A methodical way to eliminate clutter and build a functional wardrobe.",
      link: "/blogs/closet-reset",
    },
    {
      title: "Perfume Layering Depth",
      excerpt:
        "How to combine fragrances intentionally so your scent feels signature.",
      link: "/blogs/perfume-layering",
    },
    {
      title: "Morning Face Precision",
      excerpt:
        "A five-minute system that keeps you polished even when you're late.",
      link: "/blogs/morning-face",
    },
    {
      title: "Lighting and Makeup Truth",
      excerpt:
        "Sometimes your makeup is fine. Your lighting is sabotaging you.",
      link: "/blogs/makeup-lighting",
    },
    {
      title: "Luxury Hair System",
      excerpt:
        "Expensive-looking hair built from consistent systems, not random products.",
      link: "/blogs/luxury-hair",
    },
    {
      title: "Signature Look Framework",
      excerpt:
        "Build a recognizable style that feels authentic and intentional.",
      link: "/blogs/signature-look",
    },
    {
      title: "Minimal Makeup for Dark Skin Refinement",
      excerpt:
        "Subtle adjustments that enhance melanin-rich skin beautifully.",
      link: "/blogs/minimal-dark-skin",
    },
    {
      title: "Effortless Date Night Style",
      excerpt:
        "Elevated outfits that feel natural, not costume-like.",
      link: "/blogs/date-night",
    },
    {
      title: "Psychology of Looking Polished",
      excerpt:
        "Why refinement influences perception and confidence more than you think.",
      link: "/blogs/psychology-style",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">
        All Articles
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
