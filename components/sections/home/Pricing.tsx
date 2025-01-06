import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const pricingPlans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "9.99",
    features: [
      "Up to 3 blog posts per month",
      "3 transcriptions per month",
      "Access to basic AI-powered writing tools",
      "Limited analytics dashboard",
    ],
    paymentLink: "https://buy.stripe.com/test_6oE8y52ST9az6645kl",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1QeDasSELYy8MzLXcX5x3ePe"
        : "",
  },
  {
    id: 2,
    name: "Standard Plan",
    price: "19.99",
    features: [
      "Up to 10 blog posts per month",
      "10 transcriptions per month",
      "Enhanced AI-powered content generator",
      "SEO optimization tools",
      "Access to analytics and performance insights",
      "Priority email support",
    ],
    paymentLink: "https://buy.stripe.com/test_bIYg0x655biHgKI5km",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1QeDasSELYy8MzLXbwbUhUZE"
        : "",
  },
  {
    id: 3,
    name: "Pro Plan",
    price: "39.99",
    features: [
      "Unlimited blog posts",
      "Unlimited transcriptions",
      "Advanced AI-powered content generation with customization",
      "Comprehensive SEO tools and keyword research",
      "Team collaboration features",
      "Premium analytics and reporting tools",
      "24/7 priority support",
    ],
    paymentLink: "https://buy.stripe.com/test_00g3dL2STgD1fGE4gj",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1QeDasSELYy8MzLXGo8WK0U9"
        : "",
  },
];

export default function Pricing() {
  return (
    <section>
      <div>
        <div className=" flex flex-col items-center justify-center gap-y-2 py-28 md:py-32">
          <h1 className=" text-md text-violet-700">Pricing</h1>
          <h1 className=" text-4xl font-medium">
            Choose the Perfect Plan for Your Needs
          </h1>
          <p className=" text-gray-500 max-w-md mx-auto text-center">
            Whether you&apos;re just starting out or scaling up, we have a plan
            tailored for you
          </p>
          <div className=" max-w-7xl mx-auto pt-10">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={cn(
                    " border border-gray-200 rounded-xl p-6 flex flex-col gap-y-4",
                    plan.id === 3 && "border-violet-700 border-2"
                  )}>
                  <h1 className=" text-lg font-medium">{plan.name}</h1>
                  <div className=" flex items-end gap-x-2">
                    <p className=" text-violet-700 text-4xl font-bold">
                      {plan.price}
                    </p>
                    <div>
                      <p className=" text-gray-400 text-xs">USD</p>
                      <p className=" text-gray-400 text-xs">/ month</p>
                    </div>
                  </div>
                  <Button
                    className={cn(
                      " rounded-full bg-black text-white hover:text-white hover:bg-violet-600",
                      plan.id === 3 && "border-yellow-300 border-2"
                    )}>
                    <Link href={"/"}>Get Started</Link>
                  </Button>
                  <div className=" flex flex-col gap-y-2">
                    {plan.features.map((feature) => (
                      <p
                        key={feature}
                        className=" text-gray-400 text-sm flex items-center gap-2">
                        <span>
                          <Check size={12} />
                        </span>
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
