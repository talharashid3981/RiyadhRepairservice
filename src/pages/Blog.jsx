import React from "react";
import { CalendarDays, User } from "lucide-react";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  // Fetch blogs dynamically from translations
  const blogs = t("blog.blogs", { returnObjects: true }) || [];

  return (
    <section
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12 xl:px-24 mt-16 sm:mt-20"
      aria-labelledby="blog-heading"
    >
      {/* Header */}
      <header className="max-w-7xl mx-auto text-center mb-14">
        <h2
          id="blog-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4"
        >
          {t("blog.header.title")}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {t("blog.header.subtitle")}{" "}
          <span className="font-semibold text-[#14b8a6]">
            {t("blog.header.company")}
          </span>
          .
        </p>
      </header>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 group flex flex-col hover:shadow-2xl transition-all duration-500"
            itemScope
            itemType="https://schema.org/BlogPosting"
          >
            {/* Image */}
            <div className="overflow-hidden relative">
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="w-full h-56 sm:h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                itemProp="image"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow text-left">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                <time
                  className="flex items-center gap-2"
                  dateTime={blog.date}
                  itemProp="datePublished"
                >
                  <CalendarDays className="w-4 h-4 text-[#14b8a6]" />
                  {blog.date}
                </time>
                <span className="flex items-center gap-2" itemProp="author">
                  <User className="w-4 h-4 text-[#14b8a6]" />
                  {blog.author}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#14b8a6] transition-colors line-clamp-2"
                itemProp="headline"
              >
                {blog.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow leading-relaxed"
                itemProp="description"
              >
                {blog.description}
              </p>

              {/* Keywords (Tags) */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {blog.keywords &&
                  blog.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-[#f0fdfa] text-[#0f766e] text-xs font-medium px-3 py-1 rounded-full border border-[#99f6e4]"
                      itemProp="keywords"
                    >
                      {keyword}
                    </span>
                  ))}
              </div>

              {/* Read More Link */}
              <a
                href={`#blog-${blog.id}`}
                className="mt-5 inline-block text-sm font-semibold text-[#14b8a6] hover:text-[#0d9488] transition"
                itemProp="url"
                aria-label={`Read more about ${blog.title}`}
              >
                {t("blog.readMore")} →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
