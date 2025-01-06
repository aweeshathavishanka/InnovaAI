import React from "react";
const steps = [
  {
    id: 1,
    stepNo: "Step 1",
    title: "Sign Up and Customize",
    desc: "Start by creating your account and tailoring the platform to your needs. Personalize your workspace with tools designed for SaaS management and blog creation.",
  },
  {
    id: 2,
    stepNo: "Step 2",
    title: "Leverage AI-Powered Features",
    desc: "Use OpenAI-driven tools to automate workflows, generate ideas, and produce high-quality content for your blog. Effortlessly manage your business operations with intelligent solutions.",
  },
  {
    id: 3,
    stepNo: "Step 3",
    title: "Publish and Manage",
    desc: "Publish engaging blogs and manage your SaaS operations seamlessly from one platform. Keep track of performance with insightful analytics and reporting tools.",
  },
  {
    id: 4,
    stepNo: "Step 4",
    title: "Scale and Grow",
    desc: "Focus on scaling your business while the platform handles the heavy lifting. From content marketing to business operations, unlock new possibilities with our AI-powered ecosystem.",
  },
];
export default function HowItWorks() {
  return (
    <section className=" py-28 md:py-32">
      <div className=" flex items-center flex-col gap-y-3">
        <h1 className=" text-md text-violet-700">How It Works</h1>
        <h1 className=" text-4xl font-medium">Simplify, Create, Innovate</h1>
      </div>
      <div className=" max-w-7xl mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className=" flex flex-col md:flex-row items-start justify-center gap-6 py-20">
              <div className=" flex flex-col gap-4">
                <div className=" text-violet-700 font-medium ">
                  {step.stepNo}
                </div>
                <h1 className=" text-2xl font-medium">{step.title}</h1>
                <p className=" text-gray-400 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
