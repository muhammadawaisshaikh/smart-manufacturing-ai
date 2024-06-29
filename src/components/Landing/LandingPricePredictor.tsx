"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Landing.module.css";

const LandingPage: React.FC = () => {
  return (
    <div>
      <div>
        {/* <Link className={styles.dashboardbtn} href="/dashboard">
          Go to Dashboard
        </Link> */}
      </div>
      <header className="pt-4 text-white">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex w-full items-center justify-between">
            <div>
              <Image
                src="https://www.royalcyber.com/wp-content/uploads/2018/04/Royal-Cyber-Logo.svg"
                alt="Your Logo"
                width={100}
                height={100}
                className="w-6/12"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto mb-8 mt-8">
        <div className="rounded-xl bg-white p-8 shadow-md">
          <h1 className="pb-2 text-center text-3xl font-semibold text-stone-950">
            <strong>Purchase</strong> Price Optimizer
          </h1>
          <p className="pb-8 text-center text-stone-950">
            Our Optimizer suggests to you, the best sourcing strategy based on
            input purchase requisition information providing highest cost
            saving. Our tool also provides valuable insights on ESG & Carbon
            footprint regarding your purchase decision
          </p>

          <div className="quote-container flex gap-8">
            <div className="quote flex-1 rounded-lg bg-white p-4">
              <Link href="/dashboard">
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/volumn-img.jpg"
                    alt="Employee Image"
                    width={300}
                    height={250}
                    className="h-64 w-full rounded-lg object-cover"
                  />
                </div>
              </Link>
              <h4 className="mt-3 text-center text-xl font-extrabold text-stone-950">
                Volume Variation
              </h4>
              <p className="text-center text-lg text-stone-950">
                Volume Variation is a critical factor in price optimization
                strategies. It refers to the changes in the quantity of products
                sold or demanded over a period, which can significantly impact
                pricing decisions. By analyzing volume variation, businesses can
                better understand consumer behavior, optimize inventory levels,
                and adjust pricing to maximize profits.
              </p>
            </div>
            <div className="quote flex-1 rounded-lg bg-white p-4">
              <Link href="/dashboard">
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/supply-img.jpg"
                    alt="Employee Image"
                    width={300}
                    height={250}
                    className="h-64 w-full rounded-lg object-cover"
                  />
                </div>
              </Link>
              <h4 className="mt-3 text-center text-xl font-extrabold text-stone-950">
                Supplier Variation
              </h4>
              <p className="text-center text-lg text-stone-950">
                Incorporating supplier variation into a price optimizer involves
                understanding and managing the differences in cost, quality,
                reliability, and performance among various suppliers. This can
                significantly impact the overall pricing strategy, procurement
                decisions, and ultimately, the profitability of a business.
              </p>
            </div>
            <div className="quote flex-1 rounded-lg bg-white p-4">
              <Link href="/dashboard">
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/carbon-img.jpg"
                    alt="Employee Image"
                    width={300}
                    height={250}
                    className="h-64 w-full rounded-lg object-cover"
                  />
                </div>
              </Link>
              <h4 className="mt-3 text-center text-xl font-extrabold text-stone-950">
                Carbon Footprint & ESG Score
              </h4>
              <p className="text-center text-lg text-stone-950">
                Integrating carbon footprint and Environmental, Social, and
                Governance (ESG) scores into a price optimizer involves
                considering the environmental and social impacts of procurement
                decisions alongside traditional cost and quality metrics. This
                holistic approach aligns with sustainable business practices and
                can enhance the company reputation, compliance, and long-term
                profitability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 text-center">
            © 2024 Royal Cyber. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
