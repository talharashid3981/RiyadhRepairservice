import React from "react";
import { Helmet } from "react-helmet-async";
import { CalendarDays, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import blog_1 from "../assets/images/blog_1.webp";
import blog_2 from "../assets/images/blog_2.webp";
import blog_3 from "../assets/images/blog_3.webp";
import blog_4 from "../assets/images/blog_4.webp";
import blog_5 from "../assets/images/blog_5.webp";
import blog_6 from "../assets/images/blog_6.webp";
import blog_7 from "../assets/images/blog_7.webp";
import blog_8 from "../assets/images/blog_8.webp";

const Blog = () => {
  const { t } = useTranslation();
  
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Appliance Repair Tips & Guides - Riyadh Repairing Service Blog",
    "alternateName": "مدونة نصائح وأدلة إصلاح الأجهزة - خدمة الرياض للإصلاح",
    "url": "https://riyadhrepairingservice.com/blog",
    "description": "Expert tips and guides on washing machine repair, refrigerator repair, and appliance maintenance in Riyadh",
    "publisher": {
      "@type": "Organization",
      "name": "Riyadh Repairing Service",
      "logo": {
        "@type": "ImageObject",
        "url": "https://riyadhrepairingservice.com/src/assets/images/footer_logo.png"
      }
    },
    "inLanguage": ["en", "ar"]
  };
  
  // Fetch blogs dynamically from translations
  const blogs = t("blog.blogs", { returnObjects: true }) || [];

  // Map imported images to blog posts
  const imageMap = {
    "blog_1": blog_1,
    "blog_2": blog_2,
    "blog_3": blog_3,
    "blog_4": blog_4,
    "blog_5": blog_5,
    "blog_6": blog_6,
    "blog_7": blog_7,
    "blog_8": blog_8
  };

  return (
    <section
      className="bg-gray-50 py-16 mt-16 sm:mt-20"
      aria-labelledby="blog-heading"
    >
      {/* ==================== SEO META TAGS - ENGLISH & ARABIC ==================== */}
      <Helmet>
        {/* ===== ENGLISH TITLE ===== */}
        <title>Appliance Repair Tips & Guides | Washing Machine & Refrigerator Maintenance Blog | Riyadh</title>
        <meta name="title" content="Appliance Repair Tips & Guides | Washing Machine & Refrigerator Maintenance Blog | Riyadh" />
        <meta name="description" content="Expert appliance repair tips, washing machine maintenance guides, refrigerator care advice, and troubleshooting tips. Learn how to fix common problems, maintain your appliances, and extend their lifespan. Professional advice from Riyadh repair experts." />
        
        {/* ===== ARABIC TITLE ===== */}
        <meta name="title-ar" content="نصائح وأدلة إصلاح الأجهزة | مدونة صيانة الغسالات والثلاجات | الرياض" />
        <meta name="description-ar" content="نصائح خبيرة في إصلاح الأجهزة، أدلة صيانة الغسالات، نصائح العناية بالثلاجات، ونصائح استكشاف الأخطاء. تعلم كيفية إصلاح المشاكل الشائعة وصيانة أجهزتك وإطالة عمرها. نصائح احترافية من خبراء الإصلاح في الرياض." />
        
        {/* ===== KEYWORDS - ENGLISH + ARABIC ===== */}
        <meta name="keywords" content="appliance repair tips, washing machine maintenance, refrigerator care, appliance troubleshooting, repair guides, maintenance tips, how to fix washing machine, how to fix refrigerator, appliance care tips, washing machine problems, refrigerator problems, repair blog, maintenance blog riyadh, washing machine not spinning, refrigerator not cooling, ice maker repair, compressor problems, washing machine leaking, نصائح إصلاح الأجهزة, صيانة الغسالات, العناية بالثلاجات, استكشاف أخطاء الأجهزة, أدلة الإصلاح, نصائح الصيانة, كيفية إصلاح الغسالة, كيفية إصلاح الثلاجة, نصائح العناية بالأجهزة, مشاكل الغسالات, مشاكل الثلاجات, مدونة الإصلاح, مدونة الصيانة الرياض, الغسالة لا تدور, الثلاجة لا تبرد, تصليح صانع الثلج, مشاكل الضاغط, الغسالة تسرب ماء" />
        
        {/* ===== CANONICAL URL ===== */}
        <link rel="canonical" href="https://riyadhrepairingservice.com/blog" />
        
        {/* ===== HREFLANG TAGS ===== */}
        <link rel="alternate" href="https://riyadhrepairingservice.com/blog" hreflang="en" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/ar/blog" hreflang="ar" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/blog" hreflang="x-default" />
        
        {/* ===== OPEN GRAPH - ENGLISH ===== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://riyadhrepairingservice.com/blog" />
        <meta property="og:title" content="Appliance Repair Tips & Guides - Expert Blog | Riyadh" />
        <meta property="og:description" content="Learn expert tips for washing machine repair, refrigerator maintenance, and appliance care. Professional advice from Riyadh repair specialists." />
        <meta property="og:image" content="https://riyadhrepairingservice.com/src/assets/images/footer_logo.png" />
        <meta property="og:site_name" content="Riyadh Repairing Service" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ar_SA" />
        
        {/* ===== OPEN GRAPH - ARABIC ===== */}
        <meta property="og:title:ar" content="نصائح وأدلة إصلاح الأجهزة - مدونة احترافية | الرياض" />
        <meta property="og:description:ar" content="تعلم نصائح خبيرة لتصليح الغسالات وصيانة الثلاجات والعناية بالأجهزة. نصائح احترافية من متخصصي الإصلاح في الرياض." />
        
        {/* ===== TWITTER CARD - ENGLISH ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Appliance Repair Tips & Maintenance Guides | Riyadh Blog" />
        <meta name="twitter:description" content="Expert washing machine and refrigerator repair tips, maintenance guides, and troubleshooting advice." />
        <meta name="twitter:image" content="https://riyadhrepairingservice.com/src/assets/images/footer_logo.png" />
        
        {/* ===== TWITTER CARD - ARABIC ===== */}
        <meta name="twitter:title:ar" content="نصائح إصلاح الأجهزة وأدلة الصيانة | مدونة الرياض" />
        <meta name="twitter:description:ar" content="نصائح خبيرة في تصليح الغسالات والثلاجات وأدلة الصيانة ونصائح استكشاف الأخطاء." />
        
        {/* ===== ROBOTS & SEO ===== */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Riyadh Repairing Service" />
        
        {/* ===== SCHEMA MARKUP ===== */}
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>
      
      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
        {/* Header */}
        <header className="text-center mb-14">
          <h1
            id="blog-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4"
          >
            {t("blog.header.title")}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("blog.header.subtitle")}{" "}
            <span className="font-semibold text-[#14b8a6]">
              {t("blog.header.company")}
            </span>
            .
          </p>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 group flex flex-col hover:shadow-2xl transition-all duration-500"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* Clickable Image Link */}
              <Link to={`/blog/${blog.id}`} className="overflow-hidden relative block">
                <img
                  src={imageMap[blog.image] || blog.image}
                  alt={`${blog.title} - Appliance repair tips and maintenance guide`}
                  loading="lazy"
                  className="w-full h-56 sm:h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  itemProp="image"
                />
              </Link>

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

                {/* Clickable Title Link */}
                <Link to={`/blog/${blog.id}`}>
                  <h2
                    className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#14b8a6] transition-colors line-clamp-2 cursor-pointer"
                    itemProp="headline"
                  >
                    {blog.title}
                  </h2>
                </Link>

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
                <Link
                  to={`/blog/${blog.id}`}
                  className="mt-5 inline-block text-sm font-semibold text-[#14b8a6] hover:text-[#0d9488] transition cursor-pointer"
                  itemProp="url"
                  aria-label={`Read more about ${blog.title}`}
                >
                  {t("blog.readMore")} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;