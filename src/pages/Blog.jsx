import React from "react";
import { CalendarDays, User } from "lucide-react";
import { useTranslation } from "react-i18next";

const blogs = [
  {
    id: 1,
    title: "7 Warning Signs Your Washing Machine Needs Professional Repair",
    date: "October 2025",
    author: "Riyadh Appliance Services",
    image:
      "https://images.unsplash.com/photo-1581578731548-207f3b6ccab0?auto=format&fit=crop&w=1200&q=60",
    keywords: ["washing machine repair", "appliance maintenance", "Riyadh services"],
    description:
      "Discover the early warning signs of washing machine problems. Learn about unusual noises, water leaks, and other symptoms that require professional attention to prevent costly damage.",
  },
  {
    id: 2,
    title: "Essential Refrigerator Maintenance Tips for Saudi Homes",
    date: "October 2025",
    author: "Riyadh Appliance Services",
    image:
      "https://images.unsplash.com/photo-1616627893735-0f4a45b9e9c7?auto=format&fit=crop&w=1200&q=60",
    keywords: ["refrigerator care", "appliance maintenance", "energy saving"],
    description:
      "Keep your refrigerator running efficiently in Riyadh's climate. Simple maintenance steps that extend appliance life and reduce electricity bills throughout the year.",
  },
  {
    id: 3,
    title: "Solving Common Washing Machine Problems: Expert Solutions",
    date: "October 2025",
    author: "Riyadh Appliance Services",
    image:
      "https://images.unsplash.com/photo-1599058917212-d7500896e56d?auto=format&fit=crop&w=1200&q=60",
    keywords: ["washer troubleshooting", "appliance repair", "professional service"],
    description:
      "Expert guide to fixing common washing machine issues. From drainage problems to spin cycle failures, learn how professional technicians diagnose and repair your appliance.",
  },
  {
    id: 4,
    title: "Choosing the Right Refrigerator for Riyadh's Climate",
    date: "October 2025",
    author: "Riyadh Appliance Services",
    image:
      "https://images.unsplash.com/photo-1588854337221-cbfa4f0e7a45?auto=format&fit=crop&w=1200&q=60",
    keywords: ["refrigerator selection", "climate considerations", "appliance guide"],
    description:
      "Guide to selecting durable refrigerators for hot climates. Compare top brands and learn maintenance practices that ensure optimal cooling performance in Saudi Arabia.",
  },
  {
    id: 5,
    title: "Benefits of Regular Washing Machine Servicing",
    date: "October 2025",
    author: "Riyadh Appliance Services",
    image:
      "https://images.unsplash.com/photo-1577972067685-18e8c84a6c85?auto=format&fit=crop&w=1200&q=60",
    keywords: ["preventive maintenance", "appliance care", "service benefits"],
    description:
      "Why annual washing machine service saves money long-term. Prevent unexpected breakdowns and maintain peak performance with regular professional maintenance.",
  },
  {
    id: 6,
    title: "Smart Ways to Reduce Your Refrigerator Energy Consumption",
    date: "October 2025",
    author: "Riyadh Appliance Services",
    image:
      "https://images.unsplash.com/photo-1624454158405-1bb09a177fa0?auto=format&fit=crop&w=1200&q=60",
    keywords: ["energy efficiency", "cost savings", "appliance tips"],
    description:
      "Practical tips to lower electricity costs with efficient refrigerator use. Perfect strategies for managing energy consumption in warm climates like Riyadh.",
  },
  {
    id: 7,
    title: "24/7 Emergency Appliance Repair Services in Riyadh",
    date: "October 2025",
    author: "Riyadh Appliance Services",
    image:
      "https://images.unsplash.com/photo-1626785774573-502adf0c09a5?auto=format&fit=crop&w=1200&q=60",
    keywords: ["emergency repair", "24/7 service", "quick response"],
    description:
      "Round-the-clock emergency repair services for washing machines and refrigerators. Fast, reliable, and affordable solutions available throughout Riyadh.",
  },
  {
    id: 8,
    title: "Troubleshooting Guide: When Your Refrigerator Stops Cooling",
    date: "October 2025",
    author: "Riyadh Appliance Services",
    image:
      "https://images.unsplash.com/photo-1598209391060-261066105f66?auto=format&fit=crop&w=1200&q=60",
    keywords: ["refrigerator problems", "cooling issues", "troubleshooting guide"],
    description:
      "Step-by-step troubleshooting when your refrigerator loses cooling. Simple checks you can perform before calling for professional repair service.",
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
                alt={blog.title}
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
                href={`#blog-${blog.id}`}
                className="mt-4 inline-block text-xs sm:text-sm font-medium text-[#14b8a6] hover:text-[#0d9488] transition"
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

export default BlogSection;