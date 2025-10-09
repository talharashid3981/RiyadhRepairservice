import React, { useState } from "react";
import { MapPin, Phone, Mail, User, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import contactbg from "../assets/images/contactBackground.png";
import emailjs from "emailjs-com";

const ContactQuote = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_46i194v",
        "template_drbrr05",
        formData,
        "1QgmRM5GmPIm8hxUV"
      )
      .then(() => {
        alert(t("contactQuote.form.successMessage"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email Error:", error);
        alert(t("contactQuote.form.errorMessage"));
      });
  };

  return (
    <section className="relative min-h-screen w-full">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={contactbg}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative w-full h-full flex justify-center px-4">
        <div className="w-full max-w-6xl border-8 sm:border-[20px] lg:border-[40px] border-white mb-5 rounded-b-2xl sm:rounded-b-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* LEFT SECTION */}
            <div className="bg-[#101840] backdrop-blur-md text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[500px] sm:min-h-[600px] shadow-xl">
              <div>
                {/* Address Section */}
                <h2 className="text-[#14b8a6] text-lg sm:text-xl font-bold mb-4 sm:mb-6 uppercase tracking-wide">
                  {t("contactQuote.location.title")}
                </h2>
                <a
                  href="https://maps.app.goo.gl/6FgEyFnvMN1KQhZX9?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 mb-4 sm:mb-6 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#14b8a6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#14b8a6] transition">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#14b8a6] group-hover:text-white transition" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold group-hover:text-[#14b8a6] transition">
                    {t("contactQuote.location.address")}
                  </h3>
                </a>

                {/* Quick Contact Section */}
                <h2 className="text-[#14b8a6] text-lg sm:text-xl font-bold mb-4 sm:mb-6 uppercase tracking-wide">
                  {t("contactQuote.quickContact.title")}
                </h2>

                <div className="space-y-4 sm:space-y-5">
                  {/* Phone */}
                  <a
                    href="tel:+966598001569"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#14b8a6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#14b8a6] transition">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#14b8a6] group-hover:text-white transition" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-300">
                        {t("contactQuote.quickContact.callUs")}
                      </p>
                      <p className="text-base sm:text-lg font-semibold group-hover:text-[#14b8a6] transition">
                        +966 598 001 569
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:contact@riyadhrepairingservices.com"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#14b8a6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#14b8a6] transition">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#14b8a6] group-hover:text-white transition" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-300">
                        {t("contactQuote.quickContact.emailUs")}
                      </p>
                      <p className="text-sm sm:text-base font-semibold break-all group-hover:text-[#14b8a6] transition">
                        contact@riyadhrepairingservices.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="border-t border-gray-600 pt-4 mt-6">
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-2">
                  {t("contactQuote.businessHours.message")}
                </p>
                <p className="text-lg sm:text-xl font-bold">
                  {t("contactQuote.businessHours.time")}
                </p>
              </div>
            </div>

            {/* RIGHT SECTION (Form) */}
            <div className="bg-white/30 backdrop-blur-[30px] p-6 sm:p-8 lg:p-10 relative overflow-hidden min-h-[500px] sm:min-h-[600px] shadow-xl">
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-[#14b8a6] mb-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    {t("contactQuote.form.badge")}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1033]">
                  {t("contactQuote.form.title")}
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5 relative z-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contactQuote.form.namePlaceholder")}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 bg-white/70 border border-gray-200 rounded-lg shadow-sm focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/40 focus:outline-none transition-all text-sm sm:text-base"
                      required
                    />
                    <User className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contactQuote.form.emailPlaceholder")}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 bg-white/70 border border-gray-200 rounded-lg shadow-sm focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/40 focus:outline-none transition-all text-sm sm:text-base"
                      required
                    />
                    <Mail className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("contactQuote.form.phonePlaceholder")}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 bg-white/70 border border-gray-200 rounded-lg shadow-sm focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/40 focus:outline-none transition-all text-sm sm:text-base"
                      required
                    />
                    <Phone className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  </div>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/70 border border-gray-200 rounded-lg shadow-sm focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/40 focus:outline-none appearance-none text-gray-700 text-sm sm:text-base"
                      required
                    >
                      <option value="">
                        {t("contactQuote.form.subjectPlaceholder")}
                      </option>
                      <option value="general">
                        {t("contactQuote.form.subjects.general")}
                      </option>
                      <option value="repair">
                        {t("contactQuote.form.subjects.repair")}
                      </option>
                      <option value="maintenance">
                        {t("contactQuote.form.subjects.maintenance")}
                      </option>
                      <option value="installation">
                        {t("contactQuote.form.subjects.installation")}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contactQuote.form.messagePlaceholder")}
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/70 border border-gray-200 rounded-lg shadow-sm focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/40 focus:outline-none transition-all resize-none text-sm sm:text-base"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#14b8a6] text-white font-bold py-2 sm:py-3 px-8 sm:px-10 rounded-full flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  <span>{t("contactQuote.form.button")}</span>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactQuote;
