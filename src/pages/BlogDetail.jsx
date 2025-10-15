import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CalendarDays, User, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import blog_1 from "../assets/images/blog_1.webp";
import blog_2 from "../assets/images/blog_2.webp";
import blog_3 from "../assets/images/blog_3.webp";
import blog_4 from "../assets/images/blog_4.webp";
import blog_5 from "../assets/images/blog_5.webp";
import blog_6 from "../assets/images/blog_6.webp";
import blog_7 from "../assets/images/blog_7.webp";
import blog_8 from "../assets/images/blog_8.webp";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // 🔥 FIXED: Force re-render when blog ID changes
  useEffect(() => {
    // Scroll to top when blog changes
    window.scrollTo(0, 0);
    
    // Force translation reload
    const currentLang = i18n.language;
    i18n.changeLanguage(currentLang);
  }, [id, i18n]);

  const blogs = t("blog.blogs", { returnObjects: true }) || [];
  
  // Find blog by converting both to string for comparison
  const blog = blogs.find((b) => String(b.id) === String(id));

  const imageMap = {
    blog_1: blog_1,
    blog_2: blog_2,
    blog_3: blog_3,
    blog_4: blog_4,
    blog_5: blog_5,
    blog_6: blog_6,
    blog_7: blog_7,
    blog_8: blog_8,
  };

  // 🔥 FIXED: Translated "Blog Not Found" page
  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 mt-20">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t("blog.notFound.title")}
          </h2>
          <p className="text-gray-600 mb-6">
            {t("blog.notFound.description")}
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-[#14b8a6] text-white px-6 py-3 rounded-full hover:bg-[#0f9a8a] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("blog.notFound.backButton")}
          </Link>
        </div>
      </div>
    );
  }

  // Get related blogs (3 random blogs excluding current)
  const relatedBlogs = blogs
    .filter((b) => String(b.id) !== String(id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen py-16 mt-16 sm:mt-20">
      <SEO
        title={`${blog.title} | Riyadh Repair Blog`}
        description={blog.description}
        keywords={blog.keywords?.join(", ")}
        canonical={`https://riyadhrepairingservice.com/blog/${id}`}
        ogTitle={blog.title}
        ogDescription={blog.description}
      />

      {/* Consistent Container */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
        {/* 🔥 FIXED: Translated Back Button */}
        <button
          onClick={() => navigate("/blog")}
          className="inline-flex items-center gap-2 text-[#14b8a6] hover:text-[#0d9488] font-semibold mb-6 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("blog.detail.backButton")}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <article className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Featured Image */}
            <img
              src={imageMap[blog.image] || blog.image}
              alt={blog.title}
              className="w-full h-64 sm:h-96 object-cover"
            />

            {/* Content */}
            <div className="p-6 sm:p-10">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <time className="flex items-center gap-2" dateTime={blog.date}>
                  <CalendarDays className="w-4 h-4 text-[#14b8a6]" />
                  {blog.date}
                </time>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#14b8a6]" />
                  {blog.author}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                {blog.title}
              </h1>

              {/* Keywords */}
              {blog.keywords && blog.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-[#f0fdfa] text-[#0f766e] text-xs font-medium px-3 py-1 rounded-full border border-[#99f6e4]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4 text-base sm:text-lg">{blog.description}</p>
                
                {/* Full content if available */}
                {blog.content && (
                  <div className="mt-6 space-y-4">
                    {blog.content.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="text-gray-600">{paragraph}</p>
                    ))}
                  </div>
                )}

                {/* 🔥 FIXED: Translated default content */}
                {!blog.content && (
                  <div className="mt-6 space-y-4 text-gray-600">
                    <p>{t("blog.detail.defaultContent.paragraph1")}</p>
                    <p>{t("blog.detail.defaultContent.paragraph2")}</p>
                    <p>{t("blog.detail.defaultContent.paragraph3")}</p>
                  </div>
                )}
              </div>

              {/* 🔥 FIXED: Translated CTA Section */}
              <div className="mt-10 p-6 bg-[#f0fdfa] rounded-xl border border-[#99f6e4]">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t("blog.detail.cta.title")}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t("blog.detail.cta.description")}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#14b8a6] text-white px-6 py-3 rounded-full hover:bg-[#0f9a8a] transition font-semibold"
                  >
                    {t("blog.detail.cta.button")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+966598001569"
                    className="inline-flex items-center gap-2 bg-white text-[#14b8a6] border-2 border-[#14b8a6] px-6 py-3 rounded-full hover:bg-[#f0fdfa] transition font-semibold text-sm sm:text-base"
                  >
                    {t("blog.detail.cta.callButton")}
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 🔥 FIXED: Translated Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {t("blog.detail.relatedBlogs")}
              </h3>
              
              {relatedBlogs.length > 0 ? (
                <div className="space-y-4">
                  {relatedBlogs.map((relatedBlog) => (
                    <Link
                      key={relatedBlog.id}
                      to={`/blog/${relatedBlog.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <img
                          src={imageMap[relatedBlog.image] || relatedBlog.image}
                          alt={relatedBlog.title}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-sm font-semibold text-gray-800 group-hover:text-[#14b8a6] transition line-clamp-2 mb-1">
                            {relatedBlog.title}
                          </h4>
                          <p className="text-xs text-gray-500">{relatedBlog.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  {t("blog.detail.noRelated") || "No related articles found."}
                </p>
              )}

              {/* View All Button */}
              <Link
                to="/blog"
                className="mt-6 block text-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition font-semibold text-sm"
              >
                {t("blog.detail.viewAll")}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;