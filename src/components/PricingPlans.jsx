import React from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PricingPlans = () => {
  const { t } = useTranslation();

  const plans = [
    {
      title: t("pricingPlans.plans.basic.title"),
      price: t("pricingPlans.plans.basic.price"),
      billing: t("pricingPlans.plans.basic.billing"),
      features: [
        t("pricingPlans.features.monthlyInspection"),
        t("pricingPlans.features.generalRepair"),
      ],
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
      icon: "🔧",
      unavailable: [
        t("pricingPlans.features.maintenance"),
        t("pricingPlans.features.faultyWiring"),
        t("pricingPlans.features.acRepair"),
      ],
      popular: false,
    },
    {
      title: t("pricingPlans.plans.standard.title"),
      price: t("pricingPlans.plans.standard.price"),
      billing: t("pricingPlans.plans.standard.billing"),
      features: [
        t("pricingPlans.features.monthlyInspection"),
        t("pricingPlans.features.generalRepair"),
        t("pricingPlans.features.maintenance"),
      ],
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
      icon: "⚙️",
      unavailable: [
        t("pricingPlans.features.faultyWiring"),
        t("pricingPlans.features.acRepair"),
      ],
      popular: true,
    },
    {
      title: t("pricingPlans.plans.premium.title"),
      price: t("pricingPlans.plans.premium.price"),
      billing: t("pricingPlans.plans.premium.billing"),
      features: [
        t("pricingPlans.features.monthlyInspection"),
        t("pricingPlans.features.generalRepair"),
        t("pricingPlans.features.faultyWiring"),
        t("pricingPlans.features.acRepair"),
      ],
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
      icon: "💎",
      unavailable: [t("pricingPlans.features.maintenance")],
      popular: false,
    },
  ];

  const allFeatures = [
    t("pricingPlans.features.monthlyInspection"),
    t("pricingPlans.features.generalRepair"),
    t("pricingPlans.features.maintenance"),
    t("pricingPlans.features.faultyWiring"),
    t("pricingPlans.features.acRepair"),
  ];

  return (
    <section className="pt-6 sm:pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:mt-10 gap-6 sm:gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-6 lg:p-8 flex flex-col transition-transform duration-300 ${
                plan.popular
                  ? "lg:scale-105 ring-2 ring-[#14b8a6]"
                  : "hover:scale-[1.02]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-[#14b8a6] rounded-full shadow-lg tracking-widest uppercase">
                    {t("pricingPlans.popularBadge")}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 sm:mb-6">
                <div className="flex-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ccfbf1] rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-inner">
                    <span className="text-2xl sm:text-3xl">{plan.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-bold text-[#14b8a6]">
                      {plan.price}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">
                      {plan.billing}
                    </span>
                  </div>
                </div>

                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-[#ccfbf1] shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300 flex-shrink-0">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="h-px bg-gray-300 my-3 sm:my-4" />

              <ul className="space-y-2 sm:space-y-3 flex-grow mb-6 sm:mb-8">
                {allFeatures.map((feature, idx) => {
                  const isUnavailable = plan.unavailable.includes(feature);

                  return (
                    <li
                      key={idx}
                      className={`flex items-center text-xs sm:text-sm lg:text-[15px] ${
                        isUnavailable
                          ? "text-gray-400 line-through"
                          : "text-gray-800"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full mr-2 sm:mr-3 flex-shrink-0 ${
                          isUnavailable ? "bg-gray-100" : "bg-[#ccfbf1]"
                        }`}
                      >
                        {isUnavailable ? (
                          <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                        ) : (
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#14b8a6]" />
                        )}
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  );
                })}
              </ul>

              <Link
                to="/contact"
                className={`mt-auto cursor-pointer w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg ${
                  plan.popular
                    ? "bg-[#14b8a6] text-white hover:bg-[#0f9a8a]"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {t("pricingPlans.button")} <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;