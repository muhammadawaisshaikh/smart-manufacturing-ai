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

      <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Smart Manufacturing: Pioneering the Future of Production.
                </h1>
                <p className="mt-4 text-lg text-white">
                  Revolutionizing industry through data-driven decisions, AI-powered analytics, and relentless innovation for unparalleled efficiency and quality
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white bg-orange-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-brain"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Data-Driven Decision Making</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Use real-time analytics and predictive modeling to optimize production, reduce waste, and anticipate market demands. Leverage technology to identify inefficiencies and forecast trends, enabling proactive adjustments and informed strategic decisions
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
                    Harnessing machine learning algorithms and advanced analytics to automate production workflows, predict maintenance needs, and uncover hidden patterns in manufacturing data for enhanced efficiency and product quality
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white bg-lime-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-sync-alt"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Continuous Improvement</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Foster a culture of ongoing refinement in manufacturing techniques, quality control, and supply chain management to stay ahead of industry standards and drive innovation. Emphasize continuous learning and process enhancement, empowering teams to identify and implement improvements
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
        <h3 className="text-3xl mb-5 font-semibold leading-normal">Upstream and Downstream Supply Chain</h3>
        <div className="bg-white w-full shadow-lg rounded-lg p-10 mb-20">

          <img className="w-ful block m-auto" src="../images/SupplyChainFlow.svg" alt="Modules" />
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
      <section className="relative pb-20 bg-cyan-950 text-white py-10">
        <div
          className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20 "
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
              className="text-white fill-cyan-950 text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-cyan-950 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-database text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">Sales Forecast</h3>
            <p className="text-md mt-2">
              Revolutionize sales forecasting with our AI solution. Analyzing data from sales history, market trends, and customer behavior, our platform delivers precise predictions. Trust in our scalable and adaptable technology, continuously learning for accurate insights.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
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
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
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
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
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
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-database"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Seamlessly integrate into your systems for effortless implementation
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto pb-20">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
              <a href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4" target="_blank">
                <img
                  alt="..."
                  src="https://royal-cyber-ai.vercel.app/images/demo-videos/sales-forecast.png"
                  className="w-full align-middle rounded-t-lg"
                />
              </a>
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w-full mx-auto text-center">
                  <div className="text-sm text-cyan-950 font-semibold">
                    <a
                      onClick={() => toggleModal()}
                      // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                      className="text-cyan-800 hover:text-cyan-800 py-6 block text-lg cursor-pointer"
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
      <section className="relative pb-20 bg-cyan-950 text-white py-10">
        <div
          className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20 "
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
              className="text-white fill-cyan-950 text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-cyan-950 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-chart-line text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">Inventory Optimization</h3>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Maximize efficiency with our AI-driven inventory optimization solution. Harnessing data analytics, including sales trends, supplier behavior, and demand forecasts, we ensure optimal stock levels. Our scalable platform adapts to your business needs, continuously refining predictions for accuracy.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
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
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
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
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-chart-line"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Maximize efficiency with our AI-driven inventory optimization solution
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-chart-line"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Seamlessly integrate into existing systems for streamlined operations.
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto pb-20">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
              <a href="https://royal-cyber-ai.vercel.app/videos/inventory-optimization.mp4">
                <img
                  alt="..."
                  src="https://royal-cyber-ai.vercel.app/images/demo-videos/inventory%20optimization.png"
                  className="w-full align-middle rounded-t-lg"
                />
              </a>
              <blockquote className="relative mb-4">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-full mx-auto text-center">
                    <div className="text-sm text-cyan-950 font-semibold">
                      <a
                        onClick={() => toggleModal()}
                        // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                        className="text-cyan-800 hover:text-cyan-800 py-6 block text-lg cursor-pointer"
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
      <section className="relative pb-20 bg-cyan-950 text-white py-10">
        <div
          className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20 "
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
              className="text-white fill-cyan-950 text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-cyan-950 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-robot text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">Financial Chatbot</h3>
            <p className="text-md mt-2">
              Our Financial AI Chatbot offers seamless and personalized assistance for your website visitors. With its user-friendly interface and advanced natural language processing, interacting with our chatbot feels just like conversing with a real person. It learns from each interaction, continually enhancing its responses and effectiveness. Revolutionize your customer interactions with our cutting-edge artificial intelligence technology!
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-robot"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Our Financial AI Chatbot is designed to provide seamless and personalized assistance to your website visitors.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-robot"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      With a user-friendly interface and natural language processing capabilities, interacting with our chatbot feels like talking to a real person.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-robot"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      It learns from every interaction, continuously improving its responses and becoming even more effective over time.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-robot"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Revolutionizing how you interact with your customers! Powered by cutting-edge artificial intelligence technology.
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto pb-20">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
              <a href="https://royal-cyber-ai.vercel.app/videos/financial-chatbot.mp4">
                <img
                  alt="..."
                  src="https://royal-cyber-ai.vercel.app/images/demo-videos/financial-ai-chatbot.png"
                  className="w-full align-middle rounded-t-lg"
                />
              </a>
              <blockquote className="relative mb-4">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-full mx-auto text-center">
                    <div className="text-sm text-cyan-950 font-semibold">
                      <a
                        onClick={() => toggleModal()}
                        // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                        className="text-cyan-800 hover:text-cyan-800 py-6 block text-lg cursor-pointer"
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
      <section className="relative py-20 bg-white">
        <div
          className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <a href="https://royal-cyber-ai.vercel.app/videos/customer-sentiment-analysis.mp4">
                  <img
                    alt="..."
                    src="https://royal-cyber-ai.vercel.app/images/demo-videos/sentiment-analysis.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                </a>
                <blockquote className="relative mb-4">
                  <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-full mx-auto text-center">
                      <div className="text-sm text-cyan-950 font-semibold">
                        <a
                          onClick={() => toggleModal()}
                          // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                          className="text-cyan-800 hover:text-cyan-800 py-6 block text-lg cursor-pointer"
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
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                  <i className="fas fa-smile text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Sentiment Analysis</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Elevate customer insights with our AI-powered sentiment analysis tool. By parsing customer feedback from various channels, including social media, reviews, and surveys, we provide real-time sentiment analysis. Our scalable solution adapts to your evolving needs, uncovering actionable insights to enhance customer satisfaction.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-smile"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Multi-channel feedback collection: social media, customer service, product reviews, and focus groups
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-smile"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Advanced natural language processing for accurate sentiment scoring
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-smile"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Text mining to identify key product features and concerns
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
      <section className="relative pb-20 bg-cyan-950 text-white py-10">
        <div
          className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20 "
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
              className="text-white fill-cyan-950 text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-cyan-950 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-tags text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">Price Predictor</h3>
            <p className="text-md mt-2">
              Our AI-powered Price Predictor tool leverages advanced algorithms and natural language processing (NLP) to forecast future product prices. It provides comprehensive insights into pricing trends, market dynamics, and product demand. With a detailed dashboard, you'll gain visibility into price fluctuations, product categories, and market analysis. Empower your business with data-driven decisions to optimize pricing strategies and enhance profitability using our cutting-edge AI solutions for price prediction.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-tags"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">Our AI-powered Price Predictor tool leverages advanced algorithms and natural language processing (NLP) to forecast future product prices.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-tags"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      It provides comprehensive insights into pricing trends, market dynamics, and product demand.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-tags"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      With a detailed dashboard, you'll gain visibility into price fluctuations, product categories, and market analysis.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-tags"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Empower your business with data-driven decisions to optimize pricing strategies and enhance profitability using our cutting-edge AI solutions for price prediction.
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto pb-20">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
              <a href="https://royal-cyber-ai.vercel.app/videos/price-predictor.mp4">
                <img
                  alt="..."
                  src="https://royal-cyber-ai.vercel.app/images/demo-videos/price-predictor.png"
                  className="w-full align-middle rounded-t-lg"
                />
              </a>
              <blockquote className="relative mb-4">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-full mx-auto text-center">
                    <div className="text-sm text-cyan-950 font-semibold">
                      <a
                        onClick={() => toggleModal()}
                        // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                        className="text-cyan-800 hover:text-cyan-800 py-6 block text-lg cursor-pointer"
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
      <section className="relative py-20 bg-white py-10">
        <div
          className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
              className="text-white fill-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white-500">
                <a href="https://royal-cyber-ai.vercel.app/videos/contract-management.mp4">
                  <img
                    alt="..."
                    src="https://royal-cyber-ai.vercel.app/images/demo-videos/contract-management.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                </a>
                <blockquote className="relative mb-4">
                  <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-full mx-auto text-center">
                      <div className="text-sm text-cyan-950 font-semibold">
                        <a
                          onClick={() => toggleModal()}
                          // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                          className="text-cyan-800 hover:text-cyan-800 py-6 block text-lg cursor-pointer"
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
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4 pb-20">
              <div className="md:pr-12">
                <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                  <i className="fa-solid fa-file-invoice text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Contract Management</h3>
                <p className="text-md font-light mt-2 text-black">
                  Our AI tool for contract management provides comprehensive insights into contracts, suppliers, products and more. It offers a detailed dashboard with visibility of contract types and analytics, supplier rank, and contract consumption. Gain visibility of products by category and supplier, along with detailed and abstract guidance on contract summaries. Empower your operations with data-driven decisions to optimize your contracts and enhance efficiency with our advanced AI solutions for contract management.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fa-solid fa-file-invoice"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Our AI tool for contract management provides comprehensive insights into contracts, suppliers, products and more.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fa-solid fa-file-invoice"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          It offers a detailed dashboard with visibility of contract types and analytics, supplier rank, and contract consumption.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fa-solid fa-file-invoice"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Gain visibility of products by category and supplier, along with detailed and abstract guidance on contract summaries.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fa-solid fa-file-invoice"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Empower your operations with data-driven decisions to optimize your contracts and enhance efficiency with our advanced AI solutions for contract management.
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
      <section className="relative pb-20 bg-cyan-950 text-white py-10">
        <div
          className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20 "
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
              className="text-white fill-cyan-950 text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-cyan-950 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-file-invoice-dollar text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">Supply Chain Financing</h3>
            <p className="text-md mt-2">
              Secure your supply chain finances with our AI-driven invoice amount retention solution. By analyzing payment histories, contract terms, and market trends, we optimize invoice processing for accurate retention amounts. Our scalable platform adapts to your vendor relationships, ensuring fair and consistent retention practices. Seamlessly integrate into existing financial systems for streamlined invoice management. Say goodbye to payment disputes and hello to efficient retention strategies that protect your bottom line.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">Secure your supply chain finances with our AI-driven invoice amount retention solution. By analyzing payment histories, contract terms, and market trends
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      We optimize invoice processing for accurate retention amounts.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Our scalable platform adapts to your vendor relationships, ensuring fair and consistent retention practices.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Seamlessly integrate into existing financial systems for streamlined invoice management.
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto pb-20">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
              <a href="http://119.63.131.228/video/v1/Supply-chain-Retention.mp4">
                <img
                  alt="..."
                  src="https://royal-cyber-ai.vercel.app/images/demo-videos/supplier-retention.png"
                  className="w-full align-middle rounded-t-lg"
                />
              </a>
              <blockquote className="relative mb-4">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-full mx-auto text-center">
                    <div className="text-sm text-cyan-950 font-semibold">
                      <a
                        onClick={() => toggleModal()}
                        // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                        className="text-cyan-800 hover:text-cyan-800 py-6 block text-lg cursor-pointer"
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
      <section className="relative py-20 bg-white py-10">
        <div
          className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
              className="text-white fill-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white-500">
                <a href="https://royal-cyber-ai.vercel.app/videos/fuel-management.mp4">
                  <img
                    alt="..."
                    src="https://royal-cyber-ai.vercel.app/images/demo-videos/fuel-management.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                </a>
                <blockquote className="relative mb-4">
                  <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-full mx-auto text-center">
                      <div className="text-sm text-cyan-950 font-semibold">
                        <a
                          onClick={() => toggleModal()}
                          // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                          className="text-cyan-800 hover:text-cyan-800 py-6 block text-lg cursor-pointer"
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
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4 pb-20">
              <div className="md:pr-12">
                <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                  <i className="fa-solid fa-gas-pump"></i>
                </div>
                <h3 className="text-3xl font-semibold">Fuel Management</h3>
                <p className="text-md mt-2 text-justify">
                  Leverage data analytics and natural language processing to review and compare fuel consumption. Our Fuel Management System is designed to optimize fuel consumption and reduce costs for vehicle fleets by providing real-time fuel monitoring, consumption reports, and driver behavior analysis. It integrates with GPS for comprehensive vehicle tracking, enabling route optimization and proactive maintenance scheduling. Benefits include cost reduction, enhanced operational efficiency, increased security, and a reduced environmental impact. Ideal for logistics companies.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fa-solid fa-gas-pump"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Designed to optimize fuel consumption and reduce costs for vehicle fleets using Ai by providing real-time data.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fa-solid fa-gas-pump"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Advanced natural language processing for accurate vehicle fleets fuel consumption.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fa-solid fa-gas-pump"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          It integrates with GPS for comprehensive vehicle tracking, enabling route optimization and proactive maintenance scheduling.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fa-solid fa-gas-pump"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Benefits include cost reduction, enhanced operational efficiency, increased security, and a reduced environmental impact.
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
      <section className="relative py-20 bg-white py-10">
        <div
          className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
              className="text-white fill-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white-500">
                <a href="https://royal-cyber-ai.vercel.app/videos/preventive-maintenance.mp4">
                  <img
                    alt="..."
                    src="https://royal-cyber-ai.vercel.app/images/demo-videos/predictive-maintainence.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                </a>
                <blockquote className="relative mb-4">
                  <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-full mx-auto text-center">
                      <div className="text-sm text-cyan-950 font-semibold">
                        <a
                          onClick={() => toggleModal()}
                          // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                          className="text-cyan-800 hover:text-cyan-800 py-6 block text-lg cursor-pointer"
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
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4 pb-20">
              <div className="md:pr-12">
                <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                  <i className="fas fa-boxes text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Predictive Maintenance</h3>
                <p className="text-md font-light mt-2 text-black">
                  Enhance equipment reliability with our AI-driven preventive maintenance solution. By analyzing historical data, usage patterns, and equipment performance, we predict maintenance needs before issues arise. Our scalable platform adapts to your equipment fleet, ensuring optimal uptime and reducing costly downtime.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Our scalable platform adapts to your equipment fleet, ensuring optimal uptime and reducing costly downtime.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Seamlessly integrate into existing systems for a seamless maintenance workflow.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Say goodbye to unexpected breakdowns and hello to proactive maintenance strategies that save time and money.
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
      <section className="relative pb-20 bg-cyan-950 text-white py-10">
        <div
          className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20 "
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
              className="text-white fill-cyan-950 text-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-cyan-950 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-file-invoice-dollar text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">Supply Chain Provenance</h3>
            <p className="text-md mt-2">
              Ensure supply chain transparency with our provenance solution. By tracking product origins, transportation routes, and handling processes, we provide real-time visibility into your supply chain. Our scalable platform adapts to your business complexity, ensuring compliance and risk mitigation. Seamlessly integrate into existing systems for streamlined tracking and traceability. Say goodbye to opaque supply chains and hello to trusted provenance data that enhances brand reputation and customer trust
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">By tracking product origins, transportation routes, and handling processes, we provide real-time visibility into your supply chain.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Automate comprehensive insights processes with this Ai tool.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Our scalable platform adapts to your business complexity, ensuring compliance and risk mitigation.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Seamlessly integrate into existing systems for streamlined tracking and traceability.
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto pb-20">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
              <a href="http://119.63.131.228/video/v1/Supply-chain-Provenance.mp4">
                <img
                  alt="..."
                  src="https://royal-cyber-ai.vercel.app/images/demo-videos/food-supplychain.png"
                  className="w-full align-middle rounded-t-lg"
                />
              </a>
              <blockquote className="relative mb-4">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-full mx-auto text-center">
                    <div className="text-sm text-cyan-950 font-semibold">
                      <a
                        onClick={() => toggleModal()}
                        // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                        className="text-cyan-800 hover:text-cyan-800 py-6 block text-lg cursor-pointer"
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
      <section className="relative py-20 bg-white py-10">
        <div
          className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
              className="text-white fill-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white-500">
                <a href="https://royal-cyber-ai.vercel.app/videos/airline-food-beverage-catering.mp4">
                  <img
                    alt="..."
                    src="https://royal-cyber-ai.vercel.app/images/demo-videos/airline-food-beverage-catering.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                </a>
                <blockquote className="relative mb-4">
                  <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-full mx-auto text-center">
                      <div className="text-sm text-cyan-950 font-semibold">
                        <a
                          onClick={() => toggleModal()}
                          // href="https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4"
                          className="text-cyan-800 hover:text-cyan-800 py-6 block text-lg cursor-pointer"
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
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4 pb-20">
              <div className="md:pr-12">
                <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                  <i className="fas fa-boxes text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Catering services Ai</h3>
                <p className="text-md font-light mt-2 text-black">
                  Our AI-driven catering service provides comprehensive insights into demand, inventory optimization along with flights, meals, meal trends along with cost of saving and, and more for catering into airlines. It offers a detailed dashboard with visibility into contract types and analytics, supplier ranking, and contract consumption. Gain visibility of products by category and supplier, along with detailed guidance on contract summaries. Empower your operations with data-driven decisions to optimize your contracts and enhance efficiency.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          It offers a detailed dashboard with visibility into demand, inventory optimization and analytics, supplier ranking, and contract consumption.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Our AI-driven catering service provides comprehensive insights into flights, meals, meal trends along with cost of saving and, and more for catering into airlines.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Gain visibility of products by category and supplier, along with detailed guidance on demand & inventory optimization summaries.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-boxes"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          In addition, our solutions encompass in-flight services and beyond, covering brands across all Skysales retail, meal costs, maximum orders placed, and in-flight durations.
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

      <section className="relative py-20 bg-white">
        <div
          className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
              className="text-white fill-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-32 bg-white text-cyan-950" style={{ maxWidth: 'fit-content' }}>
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-cyan-950">
                Decision Making
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                After careful consideration of all factors, You can decides to
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-white bg-orange-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-emerald-400">
                <i className="fas fa-chart-line"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-cyan-950">
                Supplier Performance
              </h6>
              <p className="mt-2 mb-4 text-blueGray-400">
                Implement performance evaluation systems for suppliers. Develop improvement plans for underperformed suppliers
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-white bg-emerald-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-emerald-400">
                <i className="fas fa-cogs"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-cyan-950">
                Supply Chain Optimization
              </h5>
              <p className="mt-2 mb-4 text-blueGray-400">
                Adjust order volumes based on supplier capabilities and performance. Invest in production capacity and efficiency improvements
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-white bg-lime-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-emerald-400">
                <i className="fas fa-check"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-cyan-950">
                Quality Improvement
              </h5>
              <p className="mt-2 mb-4 text-blueGray-400">
                Conduct regular quality audits of suppliers. Collaborate with suppliers to enhance product quality and processes
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
