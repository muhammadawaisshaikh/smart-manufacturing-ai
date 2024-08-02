"use client";

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./Landing.module.css";
import Navbar from "./../Navbars/AuthNavbar";
import EightShapeFlow from "./ModulesShape";
import ContactModal from "./ContactModal";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar transparent />

      <div className="min-h-screen-75 relative flex content-center items-center justify-center pb-32 pt-20">
        <div
          className="absolute top-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <span
            id="blackOverlay"
            className="absolute h-full w-full bg-black opacity-75"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <div className="pr-12">
                <h1 className="text-5xl font-semibold text-white">
                  Smart Manufacturing: Pioneering the Future of Production.
                </h1>
                <p className="mt-4 text-lg text-white">
                  Revolutionizing industry through data-driven decisions,
                  AI-powered analytics, and relentless innovation for
                  unparalleled efficiency and quality
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-70-px pointer-events-none absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
              <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 bg-orange-500 p-3 text-center text-white shadow-lg">
                    <i className="fas fa-brain"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Data-Driven Decision Making
                  </h6>
                  <p className="text-blueGray-500 mb-4 mt-2">
                    Use real-time analytics and predictive modeling to optimize
                    production, reduce waste, and anticipate market demands.
                    Leverage technology to identify inefficiencies and forecast
                    trends, enabling proactive adjustments and informed
                    strategic decisions
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 text-center md:w-4/12">
              <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 bg-emerald-600 p-3 text-center text-white shadow-lg">
                    <i className="fas fa-robot"></i>
                  </div>
                  <h6 className="text-xl font-semibold">AI and Analytics</h6>
                  <p className="text-blueGray-500 mb-4 mt-2">
                    Harnessing machine learning algorithms and advanced
                    analytics to automate production workflows, predict
                    maintenance needs, and uncover hidden patterns in
                    manufacturing data for enhanced efficiency and product
                    quality
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 pt-6 text-center md:w-4/12">
              <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 bg-lime-600 p-3 text-center text-white shadow-lg">
                    <i className="fas fa-sync-alt"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Continuous Improvement
                  </h6>
                  <p className="text-blueGray-500 mb-4 mt-2">
                    Foster a culture of ongoing refinement in manufacturing
                    techniques, quality control, and supply chain management to
                    stay ahead of industry standards and drive innovation.
                    Emphasize continuous learning and process enhancement,
                    empowering teams to identify and implement improvements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-10 container mx-auto px-7">
        <div className="bg-white w-full shadow-lg rounded-lg p-10">
          <img className="w-ful block m-auto" src="https://i.ibb.co/QHL3gfq/shared-image.jpg" alt="Modules" />
        </div>
      </section> */}

      <section className="container mx-auto px-7 text-center">
        <h3 className="mb-5 text-3xl font-semibold leading-normal">
          Upstream and Downstream Supply Chain
        </h3>
        <div className="mb-20 w-full rounded-lg bg-white p-10 shadow-lg">
          <img
            className="w-ful m-auto block"
            src="../images/SupplyChainFlow.svg"
            alt="Modules"
          />
        </div>
        {/*<h3 className="text-3xl mt-10 font-semibold leading-normal">Supplychain Management Modules</h3>
         <div className="bg-white w-full shadow-lg rounded-lg p-10 mt-5 mb-20">
          <EightShapeFlow />
        </div> */}
      </section>

      {/* <section className="relative pb-20 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white bg-orange-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-brain"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Data-Driven Decision Making</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Use real-time analytics and predictive modeling to optimize production, reduce waste, and anticipate market demands. Leverage technology to identify inefficiencies and forecast trends, proactive adjustments and informed strategic decisions
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white bg-emerald-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-robot"></i>
                  </div>
                  <h6 className="text-xl font-semibold">AI and Analytics</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Harnessing machine learning algorithms and advanced analytics to automate production workflows, predict maintenance needs, and uncover hidden patterns in manufacturing data for enhanced efficiency and  quality
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white bg-lime-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-sync-alt"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Continuous Improvement</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Foster a culture of ongoing refinement in manufacturing techniques, quality control, and supply chain management to stay ahead of industry standards and drive innovation. Empowering to identify and improvements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Sales Forecast */}
      <section className="relative bg-cyan-950 py-10 pb-20 text-white">
        <div
          className="pointer-events-none absolute bottom-auto left-0 right-0 top-1 -mt-20 h-20 w-full overflow-hidden "
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-cyan-950 text-white text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-cyan-950 shadow-lg">
              <i className="fas fa-database text-xl"></i>
            </div>
            <h3 className="mb-2 text-3xl font-semibold leading-normal">
              Sales Forecast
            </h3>
            <p className="text-md mt-2">
              Revolutionize sales forecasting with our AI solution. Analyzing
              data from sales history, market trends, and customer behavior, our
              platform delivers precise predictions. Trust in our scalable and
              adaptable technology, continuously learning for accurate insights.
            </p>
            <ul className="mt-6 list-none">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-database"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      We leverage historical sales data
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-database"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Real-time point-of-sale data from our retail partners
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-database"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Our platform delivers precise predictions
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-database"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Seamlessly integrate into your systems for effortless
                      implementation
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="ml-auto mr-auto w-full px-4 pb-20 md:w-4/12">
            <div className="bg-lightBlue-500 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
              <a
                href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                target="_blank"
              >
                <img
                  alt="..."
                  src="https://royal-cyber-ai.vercel.app/images/demo-videos/sales-forecast.png"
                  className="w-full rounded-t-lg align-middle"
                />
              </a>
              <div className="flex flex-wrap items-center">
                <div className="mx-auto w-full text-center md:w-full">
                  <div className="text-sm font-semibold text-cyan-950">
                    <a
                      onClick={() => toggleModal()}
                      // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                      className="block cursor-pointer py-6 text-lg text-cyan-800 hover:text-cyan-800"
                      // target="new"
                    >
                      Click here for Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Optimization */}
      <section className="relative bg-cyan-950 py-10 pb-20 text-white">
        <div
          className="pointer-events-none absolute bottom-auto left-0 right-0 top-1 -mt-20 h-20 w-full overflow-hidden "
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-cyan-950 text-white text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-cyan-950 shadow-lg">
              <i className="fas fa-chart-line text-xl"></i>
            </div>
            <h3 className="mb-2 text-3xl font-semibold leading-normal">
              Inventory Optimization
            </h3>
            <p className="text-blueGray-500 mt-4 text-lg leading-relaxed">
              Maximize efficiency with our AI-driven inventory optimization
              solution. Harnessing data analytics, including sales trends,
              supplier behavior, and demand forecasts, we ensure optimal stock
              levels. Our scalable platform adapts to your business needs,
              continuously refining predictions for accuracy.
            </p>
            <ul className="mt-6 list-none">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-chart-line"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      We leverage historical sales data
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-chart-line"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Real-time point-of-sale data from our retail partners
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-chart-line"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Maximize efficiency with our AI-driven inventory
                      optimization solution
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-chart-line"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Seamlessly integrate into existing systems for streamlined
                      operations.
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="ml-auto mr-auto w-full px-4 pb-20 md:w-4/12">
            <div className="bg-lightBlue-500 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
              <a href="https://royal-cyber-ai.vercel.app/videos/inventory-optimization.mp4">
                <img
                  alt="..."
                  src="https://royal-cyber-ai.vercel.app/images/demo-videos/inventory%20optimization.png"
                  className="w-full rounded-t-lg align-middle"
                />
              </a>
              <blockquote className="relative mb-4">
                <div className="flex flex-wrap items-center">
                  <div className="mx-auto w-full text-center md:w-full">
                    <div className="text-sm font-semibold text-cyan-950">
                      <a
                        onClick={() => toggleModal()}
                        // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                        className="block cursor-pointer py-6 text-lg text-cyan-800 hover:text-cyan-800"
                        // target="new"
                      >
                        Click here for Demo
                      </a>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Chatbot */}
      <section className="relative bg-cyan-950 py-10 pb-20 text-white">
        <div
          className="pointer-events-none absolute bottom-auto left-0 right-0 top-1 -mt-20 h-20 w-full overflow-hidden "
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-cyan-950 text-white text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-cyan-950 shadow-lg">
              <i className="fas fa-robot text-xl"></i>
            </div>
            <h3 className="mb-2 text-3xl font-semibold leading-normal">
              Financial Chatbot
            </h3>
            <p className="text-md mt-2">
              Our Financial AI Chatbot offers seamless and personalized
              assistance for your website visitors. With its user-friendly
              interface and advanced natural language processing, interacting
              with our chatbot feels just like conversing with a real person. It
              learns from each interaction, continually enhancing its responses
              and effectiveness. Revolutionize your customer interactions with
              our cutting-edge artificial intelligence technology!
            </p>
            <ul className="mt-6 list-none">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-robot"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Our Financial AI Chatbot is designed to provide seamless
                      and personalized assistance to your website visitors.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-robot"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      With a user-friendly interface and natural language
                      processing capabilities, interacting with our chatbot
                      feels like talking to a real person.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-robot"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      It learns from every interaction, continuously improving
                      its responses and becoming even more effective over time.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-robot"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Revolutionizing how you interact with your customers!
                      Powered by cutting-edge artificial intelligence
                      technology.
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="ml-auto mr-auto w-full px-4 pb-20 md:w-4/12">
            <div className="bg-lightBlue-500 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
              <a href="https://royal-cyber-ai.vercel.app/videos/financial-chatbot.mp4">
                <img
                  alt="..."
                  src="https://royal-cyber-ai.vercel.app/images/demo-videos/financial-ai-chatbot.png"
                  className="w-full rounded-t-lg align-middle"
                />
              </a>
              <blockquote className="relative mb-4">
                <div className="flex flex-wrap items-center">
                  <div className="mx-auto w-full text-center md:w-full">
                    <div className="text-sm font-semibold text-cyan-950">
                      <a
                        onClick={() => toggleModal()}
                        // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                        className="block cursor-pointer py-6 text-lg text-cyan-800 hover:text-cyan-800"
                        // target="new"
                      >
                        Click here for Demo
                      </a>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Sentiment Analysis */}
      <section className="relative bg-white py-20">
        <div
          className="pointer-events-none absolute bottom-auto left-0 right-0 top-1 -mt-20 h-20 w-full overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-current text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
              <div className="bg-lightBlue-500 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                <a href="https://royal-cyber-ai.vercel.app/videos/customer-sentiment-analysis.mp4">
                  <img
                    alt="..."
                    src="https://royal-cyber-ai.vercel.app/images/demo-videos/sentiment-analysis.png"
                    className="w-full rounded-t-lg align-middle"
                  />
                </a>
                <blockquote className="relative mb-4">
                  <div className="flex flex-wrap items-center">
                    <div className="mx-auto w-full text-center md:w-full">
                      <div className="text-sm font-semibold text-cyan-950">
                        <a
                          onClick={() => toggleModal()}
                          // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                          className="block cursor-pointer py-6 text-lg text-cyan-800 hover:text-cyan-800"
                          // target="new"
                        >
                          Click here for Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
              <div className="md:pr-12">
                <div className="text-lightBlue-600 bg-lightBlue-300 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full p-3 text-center shadow-lg">
                  <i className="fas fa-smile text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Sentiment Analysis</h3>
                <p className="text-blueGray-500 mt-4 text-lg leading-relaxed">
                  Elevate customer insights with our AI-powered sentiment
                  analysis tool. By parsing customer feedback from various
                  channels, including social media, reviews, and surveys, we
                  provide real-time sentiment analysis. Our scalable solution
                  adapts to your evolving needs, uncovering actionable insights
                  to enhance customer satisfaction.
                </p>
                <ul className="mt-6 list-none">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-smile"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Multi-channel feedback collection: social media,
                          customer service, product reviews, and focus groups
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-smile"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Advanced natural language processing for accurate
                          sentiment scoring
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-smile"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Text mining to identify key product features and
                          concerns
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Predictor */}
      <section className="relative bg-cyan-950 py-10 pb-20 text-white">
        <div
          className="pointer-events-none absolute bottom-auto left-0 right-0 top-1 -mt-20 h-20 w-full overflow-hidden "
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-cyan-950 text-white text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-cyan-950 shadow-lg">
              <i className="fas fa-tags text-xl"></i>
            </div>
            <h3 className="mb-2 text-3xl font-semibold leading-normal">
              Price Predictor
            </h3>
            <p className="text-md mt-2">
              Our AI-powered Price Predictor tool leverages advanced algorithms
              and natural language processing (NLP) to forecast future product
              prices. It provides comprehensive insights into pricing trends,
              market dynamics, and product demand. With a detailed dashboard,
              you'll gain visibility into price fluctuations, product
              categories, and market analysis. Empower your business with
              data-driven decisions to optimize pricing strategies and enhance
              profitability using our cutting-edge AI solutions for price
              prediction.
            </p>
            <ul className="mt-6 list-none">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-tags"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Our AI-powered Price Predictor tool leverages advanced
                      algorithms and natural language processing (NLP) to
                      forecast future product prices.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-tags"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      It provides comprehensive insights into pricing trends,
                      market dynamics, and product demand.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-tags"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      With a detailed dashboard, you'll gain visibility into
                      price fluctuations, product categories, and market
                      analysis.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-tags"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Empower your business with data-driven decisions to
                      optimize pricing strategies and enhance profitability
                      using our cutting-edge AI solutions for price prediction.
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="ml-auto mr-auto w-full px-4 pb-20 md:w-4/12">
            <div className="bg-lightBlue-500 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
              <a href="https://royal-cyber-ai.vercel.app/videos/price-predictor.mp4">
                <img
                  alt="..."
                  src="https://royal-cyber-ai.vercel.app/images/demo-videos/price-predictor.png"
                  className="w-full rounded-t-lg align-middle"
                />
              </a>
              <blockquote className="relative mb-4">
                <div className="flex flex-wrap items-center">
                  <div className="mx-auto w-full text-center md:w-full">
                    <div className="text-sm font-semibold text-cyan-950">
                      <a
                        onClick={() => toggleModal()}
                        // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                        className="block cursor-pointer py-6 text-lg text-cyan-800 hover:text-cyan-800"
                        // target="new"
                      >
                        Click here for Demo
                      </a>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Management */}
      <section className="relative bg-white py-10 py-20">
        <div
          className="pointer-events-none absolute bottom-auto left-0 right-0 top-1 -mt-20 h-20 w-full overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
              <div className="bg-white-500 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                <a href="https://royal-cyber-ai.vercel.app/videos/contract-management.mp4">
                  <img
                    alt="..."
                    src="https://royal-cyber-ai.vercel.app/images/demo-videos/contract-management.png"
                    className="w-full rounded-t-lg align-middle"
                  />
                </a>
                <blockquote className="relative mb-4">
                  <div className="flex flex-wrap items-center">
                    <div className="mx-auto w-full text-center md:w-full">
                      <div className="text-sm font-semibold text-cyan-950">
                        <a
                          onClick={() => toggleModal()}
                          // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                          className="block cursor-pointer py-6 text-lg text-cyan-800 hover:text-cyan-800"
                          // target="new"
                        >
                          Click here for Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="ml-auto mr-auto w-full px-4 pb-20 md:w-5/12">
              <div className="md:pr-12">
                <div className="text-lightBlue-600 bg-lightBlue-300 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full p-3 text-center shadow-lg">
                  <i className="fa-solid fa-file-invoice text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Contract Management</h3>
                <p className="text-md mt-2 font-light text-black">
                  Our AI tool for contract management provides comprehensive
                  insights into contracts, suppliers, products and more. It
                  offers a detailed dashboard with visibility of contract types
                  and analytics, supplier rank, and contract consumption. Gain
                  visibility of products by category and supplier, along with
                  detailed and abstract guidance on contract summaries. Empower
                  your operations with data-driven decisions to optimize your
                  contracts and enhance efficiency with our advanced AI
                  solutions for contract management.
                </p>
                <ul className="mt-6 list-none">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fa-solid fa-file-invoice"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Our AI tool for contract management provides
                          comprehensive insights into contracts, suppliers,
                          products and more.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fa-solid fa-file-invoice"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          It offers a detailed dashboard with visibility of
                          contract types and analytics, supplier rank, and
                          contract consumption.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fa-solid fa-file-invoice"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Gain visibility of products by category and supplier,
                          along with detailed and abstract guidance on contract
                          summaries.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fa-solid fa-file-invoice"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Empower your operations with data-driven decisions to
                          optimize your contracts and enhance efficiency with
                          our advanced AI solutions for contract management.
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Finance */}
      <section className="relative bg-cyan-950 py-10 pb-20 text-white">
        <div
          className="pointer-events-none absolute bottom-auto left-0 right-0 top-1 -mt-20 h-20 w-full overflow-hidden "
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-cyan-950 text-white text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-cyan-950 shadow-lg">
              <i className="fas fa-file-invoice-dollar text-xl"></i>
            </div>
            <h3 className="mb-2 text-3xl font-semibold leading-normal">
              Supply Chain Financing
            </h3>
            <p className="text-md mt-2">
              Secure your supply chain finances with our AI-driven invoice
              amount retention solution. By analyzing payment histories,
              contract terms, and market trends, we optimize invoice processing
              for accurate retention amounts. Our scalable platform adapts to
              your vendor relationships, ensuring fair and consistent retention
              practices. Seamlessly integrate into existing financial systems
              for streamlined invoice management. Say goodbye to payment
              disputes and hello to efficient retention strategies that protect
              your bottom line.
            </p>
            <ul className="mt-6 list-none">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Secure your supply chain finances with our AI-driven
                      invoice amount retention solution. By analyzing payment
                      histories, contract terms, and market trends
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      We optimize invoice processing for accurate retention
                      amounts.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Our scalable platform adapts to your vendor relationships,
                      ensuring fair and consistent retention practices.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Seamlessly integrate into existing financial systems for
                      streamlined invoice management.
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="ml-auto mr-auto w-full px-4 pb-20 md:w-4/12">
            <div className="bg-lightBlue-500 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
              <a href="http://119.63.131.228/video/v1/Supply-chain-Retention.mp4">
                <img
                  alt="..."
                  src="https://royal-cyber-ai.vercel.app/images/demo-videos/supplier-retention.png"
                  className="w-full rounded-t-lg align-middle"
                />
              </a>
              <blockquote className="relative mb-4">
                <div className="flex flex-wrap items-center">
                  <div className="mx-auto w-full text-center md:w-full">
                    <div className="text-sm font-semibold text-cyan-950">
                      <a
                        onClick={() => toggleModal()}
                        // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                        className="block cursor-pointer py-6 text-lg text-cyan-800 hover:text-cyan-800"
                        // target="new"
                      >
                        Click here for Demo
                      </a>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Management */}
      <section className="relative bg-white py-10 py-20">
        <div
          className="pointer-events-none absolute bottom-auto left-0 right-0 top-1 -mt-20 h-20 w-full overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
              <div className="bg-white-500 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                <a href="https://royal-cyber-ai.vercel.app/videos/fuel-management.mp4">
                  <img
                    alt="..."
                    src="https://royal-cyber-ai.vercel.app/images/demo-videos/fuel-management.png"
                    className="w-full rounded-t-lg align-middle"
                  />
                </a>
                <blockquote className="relative mb-4">
                  <div className="flex flex-wrap items-center">
                    <div className="mx-auto w-full text-center md:w-full">
                      <div className="text-sm font-semibold text-cyan-950">
                        <a
                          onClick={() => toggleModal()}
                          // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                          className="block cursor-pointer py-6 text-lg text-cyan-800 hover:text-cyan-800"
                          // target="new"
                        >
                          Click here for Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="ml-auto mr-auto w-full px-4 pb-20 md:w-5/12">
              <div className="md:pr-12">
                <div className="text-lightBlue-600 bg-lightBlue-300 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full p-3 text-center shadow-lg">
                  <i className="fa-solid fa-gas-pump"></i>
                </div>
                <h3 className="text-3xl font-semibold">Fuel Management</h3>
                <p className="text-md mt-2 text-justify">
                  Leverage data analytics and natural language processing to
                  review and compare fuel consumption. Our Fuel Management
                  System is designed to optimize fuel consumption and reduce
                  costs for vehicle fleets by providing real-time fuel
                  monitoring, consumption reports, and driver behavior analysis.
                  It integrates with GPS for comprehensive vehicle tracking,
                  enabling route optimization and proactive maintenance
                  scheduling. Benefits include cost reduction, enhanced
                  operational efficiency, increased security, and a reduced
                  environmental impact. Ideal for logistics companies.
                </p>
                <ul className="mt-6 list-none">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fa-solid fa-gas-pump"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Designed to optimize fuel consumption and reduce costs
                          for vehicle fleets using Ai by providing real-time
                          data.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fa-solid fa-gas-pump"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Advanced natural language processing for accurate
                          vehicle fleets fuel consumption.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fa-solid fa-gas-pump"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          It integrates with GPS for comprehensive vehicle
                          tracking, enabling route optimization and proactive
                          maintenance scheduling.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fa-solid fa-gas-pump"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Benefits include cost reduction, enhanced operational
                          efficiency, increased security, and a reduced
                          environmental impact.
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Maintenance */}
      <section className="relative bg-white py-10 py-20">
        <div
          className="pointer-events-none absolute bottom-auto left-0 right-0 top-1 -mt-20 h-20 w-full overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
              <div className="bg-white-500 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                <a href="http://119.63.131.235/kieco/video/Predictive_Asset_Maintenance_29-07-24_Sushma_(video)_1.mp4">
                  <img
                    alt="..."
                    src="https://royal-cyber-ai.vercel.app/images/demo-videos/predictive-maintainence.png"
                    className="w-full rounded-t-lg align-middle"
                  />
                </a>
                <blockquote className="relative mb-4">
                  <div className="flex flex-wrap items-center">
                    <div className="mx-auto w-full text-center md:w-full">
                      <div className="text-sm font-semibold text-cyan-950">
                        <a
                          onClick={() => toggleModal()}
                          // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                          className="block cursor-pointer py-6 text-lg text-cyan-800 hover:text-cyan-800"
                          // target="new"
                        >
                          Click here for Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="ml-auto mr-auto w-full px-4 pb-20 md:w-5/12">
              <div className="md:pr-12">
                <div className="text-lightBlue-600 bg-lightBlue-300 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full p-3 text-center shadow-lg">
                  <i className="fas fa-boxes text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Predictive Maintenance
                </h3>
                <p className="text-md mt-2 font-light text-black">
                  Enhance equipment reliability with our AI-driven preventive
                  maintenance solution. By analyzing historical data, usage
                  patterns, and equipment performance, we predict maintenance
                  needs before issues arise. Our scalable platform adapts to
                  your equipment fleet, ensuring optimal uptime and reducing
                  costly downtime.
                </p>
                <ul className="mt-6 list-none">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Our scalable platform adapts to your equipment fleet,
                          ensuring optimal uptime and reducing costly downtime.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Seamlessly integrate into existing systems for a
                          seamless maintenance workflow.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Say goodbye to unexpected breakdowns and hello to
                          proactive maintenance strategies that save time and
                          money.
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Provenance */}
      <section className="relative bg-cyan-950 py-10 pb-20 text-white">
        <div
          className="pointer-events-none absolute bottom-auto left-0 right-0 top-1 -mt-20 h-20 w-full overflow-hidden "
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-cyan-950 text-white text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-cyan-950 shadow-lg">
              <i className="fas fa-file-invoice-dollar text-xl"></i>
            </div>
            <h3 className="mb-2 text-3xl font-semibold leading-normal">
              Supply Chain Provenance
            </h3>
            <p className="text-md mt-2">
              Ensure supply chain transparency with our provenance solution. By
              tracking product origins, transportation routes, and handling
              processes, we provide real-time visibility into your supply chain.
              Our scalable platform adapts to your business complexity, ensuring
              compliance and risk mitigation. Seamlessly integrate into existing
              systems for streamlined tracking and traceability. Say goodbye to
              opaque supply chains and hello to trusted provenance data that
              enhances brand reputation and customer trust
            </p>
            <ul className="mt-6 list-none">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      By tracking product origins, transportation routes, and
                      handling processes, we provide real-time visibility into
                      your supply chain.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Automate comprehensive insights processes with this Ai
                      tool.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Our scalable platform adapts to your business complexity,
                      ensuring compliance and risk mitigation.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Seamlessly integrate into existing systems for streamlined
                      tracking and traceability.
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="ml-auto mr-auto w-full px-4 pb-20 md:w-4/12">
            <div className="bg-lightBlue-500 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
              <a href="http://119.63.131.228/video/v1/Supply-chain-Provenance.mp4">
                <img
                  alt="..."
                  src="https://royal-cyber-ai.vercel.app/images/demo-videos/food-supplychain.png"
                  className="w-full rounded-t-lg align-middle"
                />
              </a>
              <blockquote className="relative mb-4">
                <div className="flex flex-wrap items-center">
                  <div className="mx-auto w-full text-center md:w-full">
                    <div className="text-sm font-semibold text-cyan-950">
                      <a
                        onClick={() => toggleModal()}
                        // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                        className="block cursor-pointer py-6 text-lg text-cyan-800 hover:text-cyan-800"
                        // target="new"
                      >
                        Click here for Demo
                      </a>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Maintenance */}
      <section className="relative bg-white py-10 py-20">
        <div
          className="pointer-events-none absolute bottom-auto left-0 right-0 top-1 -mt-20 h-20 w-full overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
              <div className="bg-white-500 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                <a href="https://royal-cyber-ai.vercel.app/videos/airline-food-beverage-catering.mp4">
                  <img
                    alt="..."
                    src="https://royal-cyber-ai.vercel.app/images/demo-videos/airline-food-beverage-catering.png"
                    className="w-full rounded-t-lg align-middle"
                  />
                </a>
                <blockquote className="relative mb-4">
                  <div className="flex flex-wrap items-center">
                    <div className="mx-auto w-full text-center md:w-full">
                      <div className="text-sm font-semibold text-cyan-950">
                        <a
                          onClick={() => toggleModal()}
                          // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                          className="block cursor-pointer py-6 text-lg text-cyan-800 hover:text-cyan-800"
                          // target="new"
                        >
                          Click here for Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="ml-auto mr-auto w-full px-4 pb-20 md:w-5/12">
              <div className="md:pr-12">
                <div className="text-lightBlue-600 bg-lightBlue-300 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full p-3 text-center shadow-lg">
                  <i className="fas fa-boxes text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Catering services Ai</h3>
                <p className="text-md mt-2 font-light text-black">
                  Our AI-driven catering service provides comprehensive insights
                  into demand, inventory optimization along with flights, meals,
                  meal trends along with cost of saving and, and more for
                  catering into airlines. It offers a detailed dashboard with
                  visibility into contract types and analytics, supplier
                  ranking, and contract consumption. Gain visibility of products
                  by category and supplier, along with detailed guidance on
                  contract summaries. Empower your operations with data-driven
                  decisions to optimize your contracts and enhance efficiency.
                </p>
                <ul className="mt-6 list-none">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          It offers a detailed dashboard with visibility into
                          demand, inventory optimization and analytics, supplier
                          ranking, and contract consumption.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Our AI-driven catering service provides comprehensive
                          insights into flights, meals, meal trends along with
                          cost of saving and, and more for catering into
                          airlines.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Gain visibility of products by category and supplier,
                          along with detailed guidance on demand & inventory
                          optimization summaries.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          In addition, our solutions encompass in-flight
                          services and beyond, covering brands across all
                          Skysales retail, meal costs, maximum orders placed,
                          and in-flight durations.
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Manufacturing */}
      <section className="relative bg-white">
        <div
          className="pointer-events-none absolute bottom-auto left-0 right-0 top-1 -mt-20 h-20 w-full overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
              <div className="bg-white-500 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                <a href="http://119.63.131.235/kieco/video/Predictive%20Manufacturing_29-07-24_Sushma_(video)_1.mp4">
                  <img
                    alt="..."
                    src="https://royal-cyber-ai.vercel.app/images/demo-videos/predictive-manufacturing.png"
                    className="w-full rounded-t-lg align-middle"
                  />
                </a>
                <blockquote className="relative mb-4">
                  <div className="flex flex-wrap items-center">
                    <div className="mx-auto w-full text-center md:w-full">
                      <div className="text-sm font-semibold text-cyan-950">
                        <a
                          onClick={() => toggleModal()}
                          // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                          className="block cursor-pointer py-6 text-lg text-cyan-800 hover:text-cyan-800"
                          // target="new"
                        >
                          Click here for Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="ml-auto mr-auto w-full px-4 pb-20 md:w-5/12">
              <div className="md:pr-12">
                <div className="text-lightBlue-600 bg-lightBlue-300 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full p-3 text-center shadow-lg">
                  <i className="fas fa-boxes text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Predictive Manufacturing
                </h3>
                <p className="text-md mt-2 font-light text-black">
                  Our AI-powered predictive manufacturing solution delivers deep
                  insights into demand patterns, inventory management, and
                  production efficiency. The solution features a robust
                  dashboard offering visibility into production timelines,
                  equipment utilization, and process optimization. With detailed
                  analytics, you can track supplier performance, streamline
                  resource use, and minimize operational disruptions. Get clear
                  insights into product categories, supplier relationships, and
                  production summaries. Leverage data-driven strategies to
                  optimize your manufacturing contracts and drive operational
                  excellence.
                </p>
                <p className="text-md mt-2 font-light text-black">
                  This version emphasizes production efficiency and process
                  optimization, while still maintaining a focus on data-driven
                  insights and supplier performance.
                </p>
                <ul className="mt-6 list-none">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Predictive demand forecasting enables accurate
                          production planning, aligning output with market needs
                          and minimizing waste.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Inventory management is optimized using predictive
                          analytics, ensuring materials are available precisely
                          when needed, reducing excess stock and shortages.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Production processes are streamlined by predicting
                          equipment performance and maintenance needs,
                          minimizing downtime and enhancing efficiency.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-lightBlue-600 bg-lightBlue-200 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Supplier reliability and performance are forecasted,
                          allowing for proactive adjustments in the supply chain
                          to ensure consistent quality and timely deliveries.
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20">
        <div
          className="pointer-events-none absolute bottom-auto left-0 right-0 top-1 -mt-20 h-20 w-full overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div
          className="container mx-auto bg-white px-4 text-cyan-950 lg:pb-32 lg:pt-24"
          style={{ maxWidth: "fit-content" }}
        >
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-full px-4 lg:w-6/12">
              <h2 className="text-4xl font-semibold text-cyan-950">
                Decision Making
              </h2>
              <p className="text-blueGray-400 mb-4 mt-4 text-lg leading-relaxed">
                After careful consideration of all factors, You can decides to
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center">
            <div className="w-full px-4 text-center lg:w-3/12">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 bg-orange-500 p-3 text-center text-white shadow-lg">
                <i className="fas fa-chart-line"></i>
              </div>
              <h6 className="mt-5 text-xl font-semibold text-cyan-950">
                Supplier Performance
              </h6>
              <p className="text-blueGray-400 mb-4 mt-2">
                Implement performance evaluation systems for suppliers. Develop
                improvement plans for underperformed suppliers
              </p>
            </div>
            <div className="w-full px-4 text-center lg:w-3/12">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 bg-emerald-600 p-3 text-center text-white shadow-lg">
                <i className="fas fa-cogs"></i>
              </div>
              <h5 className="mt-5 text-xl font-semibold text-cyan-950">
                Supply Chain Optimization
              </h5>
              <p className="text-blueGray-400 mb-4 mt-2">
                Adjust order volumes based on supplier capabilities and
                performance. Invest in production capacity and efficiency
                improvements
              </p>
            </div>
            <div className="w-full px-4 text-center lg:w-3/12">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 bg-lime-600 p-3 text-center text-white shadow-lg">
                <i className="fas fa-check"></i>
              </div>
              <h5 className="mt-5 text-xl font-semibold text-cyan-950">
                Quality Improvement
              </h5>
              <p className="text-blueGray-400 mb-4 mt-2">
                Conduct regular quality audits of suppliers. Collaborate with
                suppliers to enhance product quality and processes
              </p>
            </div>
          </div>
        </div>
      </section>

      {isOpen && <ContactModal toggleModal={toggleModal} />}
    </>
  );
};

export default LandingPage;
