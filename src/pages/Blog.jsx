import React from "react";
import { CalendarDays, User } from "lucide-react";
import { useTranslation } from "react-i18next";

const blogs = [
  {
    id: 1,
    title: "Why Regular AC Maintenance is Important in Riyadh",
    date: "October 2025",
    author: "AC Services Riyadh",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=60",
    keywords: ["AC maintenance Riyadh", "AC service Riyadh", "best AC technician Riyadh"],
    description:
      "Regular AC maintenance in Riyadh improves cooling performance and reduces energy bills. Our technicians ensure your unit runs efficiently all year, keeping your home comfortable in every season.",
  },
  {
    id: 2,
    title: "Top 5 Signs You Need AC Repair in Riyadh",
    date: "October 2025",
    author: "AC Services Riyadh",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a1b16?auto=format&fit=crop&w=1200&q=60",
    keywords: ["AC repair Riyadh", "AC not cooling", "AC technician Riyadh"],
    description:
      "Is your AC not cooling properly? From weak airflow to unusual noises, learn the top 5 signs your air conditioner needs professional AC repair in Riyadh. Don't wait—book a quick inspection today!",
  },
  {
    id: 3,
    title: "How to Choose the Best AC Services in Riyadh",
    date: "October 2025",
    author: "AC Services Riyadh",
    image:
      "https://images.unsplash.com/photo-1616628188460-5b6f4c72e6cb?auto=format&fit=crop&w=1200&q=60",
    keywords: ["best AC services Riyadh", "AC maintenance company", "AC experts Riyadh"],
    description:
      "Choosing the right AC service company in Riyadh can be tricky. Learn what to look for—experienced technicians, quick service, and transparent pricing—from the experts at AC Services Riyadh.",
  },
];

const BlogSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-10 xl:px-20 mt-16 sm:mt-20"
      aria-labelledby="blog-heading"
    >
      <header className="max-w-7xl mx-auto text-center mb-10">
        <h2
          id="blog-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4"
        >
          {t("blog.header.title")}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
          {t("blog.header.subtitle")}{" "}
          <span className="font-semibold text-[#14b8a6]">
            {t("blog.header.company")}
          </span>
          .
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
            itemScope
            itemType="https://schema.org/BlogPosting"
          >
            <div className="overflow-hidden relative">
              <img
                src={blog.image}
                alt={`Image illustrating ${blog.title}`}
                loading="lazy"
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                itemProp="image"
              />
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-grow text-left">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3">
                <time
                  className="flex items-center gap-1"
                  dateTime="2025-10"
                  itemProp="datePublished"
                >
                  <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4 text-[#14b8a6]" />
                  {blog.date}
                </time>
                <span className="flex items-center gap-1" itemProp="author">
                  <User className="w-3 h-3 sm:w-4 sm:h-4 text-[#14b8a6]" />
                  {blog.author}
                </span>
              </div>

              <h3
                className="text-base sm:text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#14b8a6] transition-colors line-clamp-2"
                itemProp="headline"
              >
                {blog.title}
              </h3>

              <p
                className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-3 flex-grow"
                itemProp="description"
              >
                {blog.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {blog.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-[#f0fdfa] text-[#0f766e] text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 rounded-full border border-[#99f6e4]"
                    itemProp="keywords"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="mt-4 inline-block text-xs sm:text-sm font-medium text-[#14b8a6] hover:text-[#0d9488] transition"
                itemProp="url"
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

export default BlogSection;
