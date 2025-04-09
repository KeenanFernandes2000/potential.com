"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  companyWebsite: string;
}

interface Message {
  content: string;
  isUser: boolean;
}

interface RecommendedProduct {
  productId: string;
  name: string;
  description: string;
  icon: string;
  url: string;
}

interface VapiInstance {
  on: (event: string, callback: (data: any) => void) => void;
}

interface ToolResponse {
  type: string;
  functionCall: {
    name: string;
    arguments: {
      IsQualified: boolean;
      RecommendedProducts: RecommendedProduct[];
    };
  };
}

interface ToolCall {
  name: string;
  arguments: {
    IsQualified: boolean;
    RecommendedProducts: RecommendedProduct[];
  };
}

declare global {
  interface Window {
    vapiSDK?: {
      run: (config: any) => VapiInstance;
    };
    hbspt?: any;
  }
}

export default function TalkToVera() {
  const { theme } = useTheme();
  const [showForm, setShowForm] = useState(false);
  const [showVera, setShowVera] = useState(true);
  const [mode, setMode] = useState<"chat" | "voice">("voice");
  const [hasMessages, setHasMessages] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebsite: "",
  });

  // Add new state variables
  const [vapiInstance, setVapiInstance] = useState<VapiInstance | null>(null);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [eventSource, setEventSource] = useState<EventSource | null>(null);

  useEffect(() => {
    // Initialize Vapi script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  // Add Hubspot submission function
  const submitToHubspot = async (userData: FormData) => {
    const portalId = "25217377";
    const formGuid = "3127f733-4c53-4a2a-bad2-dbbf4a9c4c05";
    const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    try {
      const ipData = await fetch("https://ipapi.co/json/").then((res) =>
        res.json()
      );

      const formData = {
        submittedAt: Date.now().toString(),
        fields: [
          {
            objectTypeId: "0-1",
            name: "email",
            value: userData.email,
          },
          {
            objectTypeId: "0-1",
            name: "firstname",
            value: userData.firstName,
          },
          {
            objectTypeId: "0-1",
            name: "lastname",
            value: userData.lastName,
          },
          {
            objectTypeId: "0-1",
            name: "company",
            value: userData.companyName,
          },
          {
            objectTypeId: "0-1",
            name: "phone",
            value: userData.phone,
          },
          {
            objectTypeId: "0-1",
            name: "website",
            value: userData.companyWebsite,
          },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
          ipAddress: ipData.ip,
        },
      };

      const response = await fetch(hubspotEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Hubspot submission successful:", data);
    } catch (error) {
      console.error("Error submitting to Hubspot:", error);
    }
  };

  // Add chat session creation function
  const createChatSession = async () => {
    try {
      const systemPrompt = `
        You are Vera, an AI Consultant helping businesses determine if they are the right fit for Potential.com's AI solutions. Your primary role is to understand the user's needs and recommend the most suitable products from our portfolio.

        Whenever you recommend a product, use the isQualified tool to determine if the user is qualified for the product and display the recommended products to the user in a card format and just say Here are the products I recommend for you and list why you recommend them do not list the products in the chat just show the cards.

        Available Products:

        1. AI Chatbot (POT001)
        - Description: A Simple Yet Powerful AI Chatbot for Websites
        - Best for: Businesses looking to automate customer support and improve website engagement
        - Key Features: 24/7 support, easy setup, website integration
        - CTA: Get Started
        - URL: https://ai.potential.com/login?utm_source=chat&utm_medium=vera

        2. AI Coach (POT002)
        - Description: Scale Your Coaching Business with a 24/7 AI Coach
        - Best for: Coaching businesses, consultants, and trainers
        - Key Features: Personalized coaching, scalable solution
        - CTA: Get Started
        - URL: https://potential.com/book/?utm_source=coach&utm_medium=vera

        3. AI Voice Agent (POT003)
        - Description: Human-Like AI Voice Assistants for Calls
        - Best for: Businesses handling high call volumes or needing 24/7 phone support
        - Key Features: Natural conversations, call handling
        - CTA: Book your appointment
        - URL: http://potential.com/book/?utm_source=voice&utm_medium=vera

        4. AI Workflows (POT004)
        - Description: AI-Powered Automated Workflows for Business
        - Best for: Businesses looking to automate processes and improve efficiency
        - Key Features: Process automation, workflow optimization
        - CTA: Book your appointment
        - URL: http://potential.com/book/?utm_source=workflow&utm_medium=vera

        5. Book Appointment (POT005)
        - Description: Schedule a meeting with a Human Consultant
        - Best for: Users who need personalized guidance or have complex requirements
        - Key Features: One-on-one consultation, expert guidance
        - CTA: Book your appointment
        - URL: http://potential.com/book/?utm_source=vera&utm_medium=vera

        Below is the information of the user that filled out the form:

        Name: ${formData.firstName} ${formData.lastName}
        Company Name: ${formData.companyName}
        Company Website: ${formData.companyWebsite}
        Email: ${formData.email}
        Phone: ${formData.phone}
      `;

      const response = await fetch(
        "https://ai.potential.com/api/agentstream/create-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            systemPrompt: systemPrompt,
            Tools: [
              {
                name: "DetermineIfQualified",
                description:
                  "Determines if the user is qualified and provides recommended products",
                parameters: {
                  type: "object",
                  properties: {
                    IsQualified: {
                      type: "boolean",
                      description:
                        "Whether the user is qualified for product recommendations",
                    },
                    RecommendedProducts: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          productId: { type: "string" },
                          name: { type: "string" },
                          description: { type: "string" },
                          icon: { type: "string" },
                          url: { type: "string" },
                        },
                        required: [
                          "productId",
                          "name",
                          "description",
                          "icon",
                          "url",
                        ],
                      },
                    },
                  },
                  required: ["IsQualified", "RecommendedProducts"],
                },
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create session");
      }

      const data = await response.json();
      setCurrentSessionId(data.sessionId);
      console.log("Session created:", data.sessionId);
    } catch (error) {
      console.error("Error creating session:", error);
      addMessage(
        "Sorry, I encountered an error while starting our conversation. Please try again.",
        false
      );
    }
  };

  // Add message sending function
  const sendMessageToAPI = async (message: string) => {
    try {
      // Close any existing EventSource
      if (eventSource) {
        eventSource.close();
      }

      // Create a new EventSource for streaming
      const params = new URLSearchParams({
        sessionId: "123123123",
        message: message,
      });

      const newEventSource = new EventSource(
        `https://ai.potential.com/api/agentstream/call-agent?${params.toString()}`
      );
      setEventSource(newEventSource);

      let responseContent = "";
      let pendingToolResponse: ToolCall | null = null;

      newEventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          // Handle content first
          if (data.content) {
            if (responseContent === "") {
              // Start a new message
              responseContent = data.content;
              addMessage(responseContent, false);
            } else {
              // Update the last message
              responseContent += data.content;
              setMessages((prev) => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].content = responseContent;
                return newMessages;
              });
            }
          }

          // Store tool response but don't display yet
          if (data.toolCall) {
            pendingToolResponse = data.toolCall;
          }

          // If we have content and a pending tool response, show the tool response after a delay
          if (responseContent && pendingToolResponse) {
            setTimeout(() => {
              if (pendingToolResponse) {
                handleFunctionCall(pendingToolResponse);
              }
              pendingToolResponse = null;
            }, 1000);
          }
        } catch (error) {
          console.error("Error parsing message:", error);
        }
      };

      newEventSource.onerror = (error) => {
        console.error("EventSource error:", error);
        newEventSource.close();
        setEventSource(null);
      };
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Add function call handler
  const handleFunctionCall = (functionCall: any) => {
    if (functionCall.name === "DetermineIfQualified") {
      const { IsQualified, RecommendedProducts } = functionCall.arguments;
      if (IsQualified && RecommendedProducts) {
        showProductCards(RecommendedProducts);
      }
    }
  };

  // Add product cards display function
  const showProductCards = (products: RecommendedProduct[]) => {
    const iconMap: { [key: string]: string } = {
      chat: `<svg class="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>`,
      coach: `<svg class="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>`,
      voice: `<svg class="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>`,
      workflow: `<svg class="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>`,
      calendar: `<svg class="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>`,
    };

    // Create product cards HTML
    const cardsHTML = products
      .map(
        (product) => `
      <a target="_blank" href="${product.url}"
        class="group bg-transparent rounded-lg p-3 flex items-center justify-between hover:bg-white/5 transition-all duration-200 border border-white/20 hover:border-white/30">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
            ${iconMap[product.icon] || iconMap.chat}
          </div>
          <div class="text-left">
            <h4 class="font-medium text-sm text-white">${product.name}</h4>
            <p class="text-xs text-white/60">${product.description}</p>
          </div>
        </div>
        <div class="flex items-center text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </div>
      </a>
    `
      )
      .join("");

    // Add cards to the chat
    const newMessage = {
      content: `<div class="product-cards grid gap-3">${cardsHTML}</div>`,
      isUser: false,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  // Initialize Vera with user data
  const initializeVera = (userData: FormData) => {
    if (!window.vapiSDK) return;

    const assistant = {
      name: "Vera",
      voice: {
        voiceId: "sarah",
        provider: "11labs",
        stability: 0.5,
        similarityBoost: 0.75,
      },
      model: {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are Vera, an AI Consultant helping businesses determine if they are the right fit for Potential.com's AI solutions...`,
          },
        ],
        provider: "openai",
        functions: [
          {
            name: "DetermineIfQualified",
            async: false,
            parameters: {
              type: "object",
              properties: {
                IsQualified: {
                  type: "boolean",
                  description:
                    "Whether the user is qualified for product recommendations",
                },
                RecommendedProducts: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      productId: { type: "string" },
                      name: { type: "string" },
                      description: { type: "string" },
                      icon: { type: "string" },
                      url: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        ],
        maxTokens: 250,
        temperature: 0,
        emotionRecognitionEnabled: true,
      },
      recordingEnabled: true,
      firstMessage: `Hi ${userData.firstName}, I'm Vera your AI Voice Consultant. Before we begin, I'd love to confirm—are you reaching out on behalf of ${userData.companyName}?`,
      endCallFunctionEnabled: true,
      endCallMessage: "Thank you for contacting us. Have a great day!",
      transcriber: {
        model: "nova-3",
        keywords: [],
        language: "en",
        provider: "deepgram",
      },
      clientMessages: ["function-call"],
      serverMessages: ["end-of-call-report"],
      dialKeypadFunctionEnabled: false,
      endCallPhrases: ["goodbye"],
      hipaaEnabled: false,
      voicemailDetectionEnabled: false,
    };

    const buttonConfig = {
      buttonColor: "transparent",
      buttonHoverColor: "rgba(255, 255, 255, 0.1)",
      buttonIconColor: "#00f0ff",
    };

    const instance = window.vapiSDK.run({
      apiKey: "d0dbbaaa-6787-446f-9c3f-c728c9ede4d4",
      assistant: assistant,
      config: buttonConfig,
    });

    setVapiInstance(instance);
    setupVapiEventListeners(instance);
  };

  // Setup Vapi event listeners
  const setupVapiEventListeners = (instance: VapiInstance) => {
    instance.on("call-start", () => {
      setIsConnected(true);
      setIsSpeaking(true);
    });

    instance.on("call-end", () => {
      setIsConnected(false);
      setIsSpeaking(false);
    });

    instance.on("error", (e) => {
      console.error(e);
      setIsConnected(false);
      setIsSpeaking(false);
    });

    instance.on("speech-start", () => {
      setIsSpeaking(true);
    });

    instance.on("speech-end", () => {
      setIsSpeaking(false);
    });

    instance.on("volume-level", (volume) => {
      // Handle volume level updates if needed
    });

    instance.on("message", (message) => {
      if (
        message.type === "function-call" &&
        message.functionCall.name === "DetermineIfQualified"
      ) {
        const { IsQualified, RecommendedProducts } =
          message.functionCall.parameters;
        if (IsQualified && RecommendedProducts) {
          showProductCards(RecommendedProducts);
        }
      }
    });
  };

  // Update form submission handler
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
    setShowVera(true);

    // Submit to Hubspot
    await submitToHubspot(formData);

    // Create chat session
    await createChatSession();

    // Initialize Vera
    initializeVera(formData);
  };

  // Update chat submission handler
  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      content: inputMessage,
      isUser: true,
    };
    setMessages((prev) => [...prev, newMessage]);
    setHasMessages(true);
    setInputMessage("");

    // Send message to API
    await sendMessageToAPI(inputMessage);
  };

  // Add cleanup effect
  useEffect(() => {
    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [eventSource]);

  const handleTalkButtonClick = () => {
    if (!isConnected) {
      setIsConnected(true);
      // Here you would typically initialize your voice connection
    } else {
      setIsConnected(false);
      // Here you would typically disconnect
    }
  };

  // Add helper function for adding messages
  const addMessage = (content: string, isUser: boolean) => {
    setMessages((prev) => [...prev, { content, isUser }]);
  };

  return (
    <main>
      {/* <!-- ===== Hero Start ===== --> */}
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="animate_left md:w-1/2">
              <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5">
                Hello, I'm Vera,
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  Your AI Business Consultant
                </span>
              </h1>
              <p>
                Chat or talk to me, and I'll help you explore AI solutions for
                your business—completely free!
              </p>

              <div className="mt-10">
                <div className="flex flex-wrap gap-5">
                  <Link
                    href="#talktovera"
                    className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primaryho px-8 py-4 text-base font-semibold text-white transition-all duration-500 talktoverabtn"
                  >
                    Get Started with Vera
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="animate_right md:w-1/2 hidden lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/newimages/shape-02.svg"
                  alt="shape"
                  width={46}
                  height={46}
                  className="absolute right-0 bottom-0"
                />
                <Image
                  src="/newimages/shape-03.svg"
                  alt="shape"
                  width={26}
                  height={26}
                  className="absolute -right-6.5 bottom-0"
                />
                <div className="flex justify-center">
                  <Image
                    src="/newimages/vera-avatar.png"
                    alt="Hero"
                    width={420}
                    height={420}
                    className="dark:hidden"
                  />
                  <Image
                    src="/newimages/vera-avatar.png"
                    alt="Hero"
                    width={420}
                    height={420}
                    className="hidden dark:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Hero End ===== --> */}

      {/* <!-- ===== Talk to Vera Start ===== --> */}
      <section
        id="talktovera"
        className="pt-20 lg:pt-25 xl:pt-30 pb-25 lg:pb-32.5 xl:pb-37.5 overflow-hidden"
      >
        <div className="animate_top mx-auto max-w-[1000px] text-center px-4">
          <h2 className="font-semibold text-3xl md:text-[40px] text-[#1D2D3A] dark:text-white mb-4">
            Get Started Now
          </h2>
          <p className="mb-12 text-lg">
            Fill out the form and start chatting with me instantly!
          </p>

          {/* Form Section */}
          {showForm && (
            <div className="bg-white dark:bg-blacksection p-12 rounded-[32px] shadow-[0_8px_24px_-4px_rgba(24,39,75,0.08)] max-w-[840px] mx-auto">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Form fields */}
                  <div className="text-left">
                    <label className="block text-base font-medium text-black dark:text-white mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                      className="w-full h-[52px] px-4 rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-black text-black dark:text-white focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF] focus:ring-opacity-20 outline-none transition-all duration-200"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-base font-medium text-black dark:text-white mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                      className="w-full h-[52px] px-4 rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-black text-black dark:text-white focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF] focus:ring-opacity-20 outline-none transition-all duration-200"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-base font-medium text-black dark:text-white mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full h-[52px] px-4 rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-black text-black dark:text-white focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF] focus:ring-opacity-20 outline-none transition-all duration-200"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-base font-medium text-black dark:text-white mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="w-full h-[52px] px-4 rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-black text-black dark:text-white focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF] focus:ring-opacity-20 outline-none transition-all duration-200"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-base font-medium text-black dark:text-white mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                      required
                      className="w-full h-[52px] px-4 rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-black text-black dark:text-white focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF] focus:ring-opacity-20 outline-none transition-all duration-200"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-base font-medium text-black dark:text-white mb-3">
                      Company Website
                    </label>
                    <input
                      type="url"
                      value={formData.companyWebsite}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyWebsite: e.target.value,
                        })
                      }
                      className="w-full h-[52px] px-4 rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-black text-black dark:text-white focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF] focus:ring-opacity-20 outline-none transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#8B3DFF] hover:bg-[#7B2FEF] text-white text-lg font-semibold rounded-full px-8 py-4 transition-all duration-200"
                  >
                    Talk to Vera
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Vera Interface */}
          {showVera && (
            <div className="relative">
              {/* Mode Toggle Menu */}
              <div className="absolute top-4 right-4 md:right-10 lg:right-20 z-10">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setMode("chat")}
                    className={`p-2 hover:bg-white/10 rounded-full transition-all duration-200 ${
                      mode === "chat" ? "bg-white/10" : ""
                    }`}
                    title="Text Mode"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => setMode("voice")}
                    className={`p-2 hover:bg-white/10 rounded-full transition-all duration-200 ${
                      mode === "voice" ? "bg-white/10" : ""
                    }`}
                    title="Voice Mode"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Chat Interface */}
              {mode === "chat" && (
                <div className="bg-[#8B3DFF] text-white p-4 md:p-8 rounded-[32px] shadow-lg relative h-[80vh] max-h-[800px] w-full max-w-[840px] mx-auto">
                  {/* Chat header */}
                  <div
                    className={`flex-none transition-all duration-300 ${
                      hasMessages ? "mb-4" : "mb-8"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 transition-all duration-300 ${
                        hasMessages
                          ? "justify-start flex-row px-4"
                          : "justify-center flex-col"
                      }`}
                    >
                      <div
                        className={`transition-all duration-300 ${
                          hasMessages ? "w-12 h-12" : "w-32 h-32"
                        }`}
                      >
                        <div className="rounded-full overflow-hidden bg-white/10 w-full h-full">
                          <Image
                            src="/newimages/vera-avatar.png"
                            alt="Vera AI"
                            width={hasMessages ? 48 : 128}
                            height={hasMessages ? 48 : 128}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className={`transition-all duration-300 ${
                          hasMessages ? "text-left mt-0" : "text-center mt-4"
                        }`}
                      >
                        <h3
                          className={`font-semibold transition-all duration-300 ${
                            hasMessages ? "text-base" : "text-2xl"
                          }`}
                        >
                          Vera
                          <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded-full">
                            AI
                          </span>
                        </h3>
                        <p
                          className={`text-sm opacity-80 transition-all duration-300 ${
                            hasMessages ? "hidden" : ""
                          }`}
                        >
                          AI Product Guide
                        </p>
                      </div>
                    </div>

                    {/* Greeting message */}
                    <div
                      className={`bg-white/10 rounded-xl p-4 mt-4 mx-4 transition-all duration-300 ${
                        hasMessages ? "text-left" : "text-center"
                      }`}
                    >
                      <p>
                        Hi {formData.firstName}! I'm here to help you find the
                        perfect product. Let's get started!
                      </p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div
                    ref={chatMessagesRef}
                    className="flex-1 overflow-y-auto px-4 space-y-4 mb-24 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30 scroll-smooth"
                  >
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.isUser ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.isUser
                              ? "bg-white text-[#8B3DFF]"
                              : "bg-white/10 text-white"
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="absolute bottom-0 left-0 right-0 px-2 md:px-8 py-2">
                    <form
                      onSubmit={handleChatSubmit}
                      className="bg-white/10 rounded-full p-4 flex items-center"
                    >
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="w-full bg-transparent border-none focus:outline-none text-white placeholder-white/60"
                      />
                      <button
                        type="submit"
                        className="ml-4 p-3 bg-white text-[#8B3DFF] rounded-full hover:bg-opacity-90 transition-all duration-200 flex-shrink-0"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14M12 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Voice Interface */}
              {mode === "voice" && (
                <div className="bg-[#8B3DFF] text-white p-4 md:p-8 rounded-[32px] shadow-lg relative h-[80vh] max-h-[800px] w-full max-w-[840px] mx-auto">
                  <div className="h-full flex flex-col items-center justify-center">
                    <div className="text-center mb-8">
                      <div
                        className={`vera-avatar-container w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 mx-auto bg-white/10 relative shadow-lg ${
                          isSpeaking ? "speaking" : ""
                        }`}
                      >
                        <Image
                          src="/newimages/vera-avatar.png"
                          alt="Vera AI"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover relative z-10"
                        />
                        <div
                          className={`sound-wave absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full -z-10 ${
                            isSpeaking ? "opacity-100" : "opacity-0"
                          } pointer-events-none transition-opacity duration-300 ease-in-out`}
                        >
                          {/* Sound wave bars */}
                          {Array.from({ length: 9 }).map((_, index) => (
                            <div
                              key={index}
                              className={`bar absolute top-1/2 w-1 bg-purple-300/60 rounded-md origin-bottom -translate-y-1/2 shadow-glow`}
                              style={{
                                left: `${10 + index * 10}%`,
                                height: `${30 + (index % 3) * 20}%`,
                                animationDelay: `${index * 0.1}s`,
                              }}
                            />
                          ))}
                        </div>
                        {/* Pulse rings */}
                        <div className="absolute inset-0 z-0 rounded-full bg-purple-500/10 animate-ping-slow" />
                        <div className="absolute inset-[-8px] z-0 rounded-full bg-purple-500/5 animate-ping-slower" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">
                        Vera
                        <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded-full">
                          AI
                        </span>
                      </h3>
                      <p className="text-lg opacity-80 mb-8">AI Voice Agent</p>
                    </div>

                    {/* Voice Call Button */}
                    <button
                      onClick={handleTalkButtonClick}
                      className={`inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white rounded-full px-6 py-4 transition-all duration-200 ${
                        isSpeaking ? "speaking" : ""
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                      <span>{isConnected ? "Connected" : "Talk to Vera"}</span>
                    </button>

                    {/* Hidden support button for Vapi */}
                    <button id="vapi-support-btn" className="hidden" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      {/* <!-- ===== Talk to Vera End ===== --> */}

      {/* ===== Meet Vera Start ===== */}
      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden bg-gradient-to-b from-white/[2%] to-transparent dark:from-blacksection/[2%] dark:to-transparent">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 mt-12.5 xl:mt-17.5">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32.5">
            {/* Image Column */}
            <div className="animate_left md:w-1/2">
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-1 rounded-xl overflow-hidden">
                  <img
                    src="/newimages/vera-avatar.png"
                    alt="Vera AI Assistant"
                    className="w-full max-w-[420px] mx-auto"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 -z-1 opacity-30 dark:opacity-10">
                  <svg
                    width="150"
                    height="150"
                    viewBox="0 0 150 150"
                    fill="none"
                  >
                    <circle cx="75" cy="75" r="75" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="0"
                        y1="0"
                        x2="150"
                        y2="150"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#8B3DFF" />
                        <stop offset="1" stopColor="#8B3DFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                {/* Floating Elements */}
                <div className="absolute bottom-0 right-0 z-10">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle
                      cx="30"
                      cy="30"
                      r="30"
                      fill="#8B3DFF"
                      fillOpacity="0.1"
                    />
                    <circle
                      cx="30"
                      cy="30"
                      r="20"
                      fill="#8B3DFF"
                      fillOpacity="0.2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="animate_right md:w-1/2">
              <div className="text-center md:text-left">
                <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                  Meet Vera:
                  <span className="relative inline-block">
                    Your AI Guide
                    <span className="absolute bottom-2.5 left-0 w-full h-3 bg-titlebg dark:bg-titlebgdark -z-1"></span>
                  </span>
                </h2>
                <div className="mt-7.5 space-y-5 text-waterloolight text-regular">
                  <p className="leading-relaxed">
                    I'm Vera, your AI-powered consultant, here to guide you
                    through the world of AI adoption. With my expertise, I can
                    help you:
                  </p>
                  <ul className="space-y-4 text-left">
                    <li className="flex items-center gap-5">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                        </svg>
                      </div>
                      <span>
                        Automate your customer support with AI solutions
                      </span>
                    </li>
                    <li className="flex items-center gap-5">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                        </svg>
                      </div>
                      <span>Boost your sales with intelligent chatbots</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                        </svg>
                      </div>
                      <span>Optimize your business processes with AI</span>
                    </li>
                  </ul>
                  <p className="mt-5 font-medium text-black dark:text-white">
                    Best of all? My consultation is completely free!
                  </p>
                </div>
                {/* CTA Button */}
                <div className="mt-10">
                  <a
                    href="#talktovera"
                    className="inline-flex items-center gap-2.5 rounded-full bg-primary hover:bg-primaryho px-6 py-3 font-medium text-white transition-all duration-300"
                  >
                    Start Your Free Consultation
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Meet Vera End ===== */}

      {/* ===== How can i help you Start ===== */}
      <section id="howcanihelpyou" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <div
            className="animate_top text-center mx-auto"
            x-data="{ sectionTitle: `How Can I Help You?`, sectionSubtitle: `How Can I Help You?`, sectionTitlePara: ``}"
          >
            {/* @ts-expect-error Server Component */}
            <include src="./partials/section-title.html" />
          </div>
          {/* Section Title End */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12.5 lg:mt-15 xl:mt-20">
            {/* Features item Start */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-12 h-12">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-lg text-black dark:text-white mt-5 mb-3">
                Find the Right AI Solutions
              </h3>
              <p className="text-sm">
                I'll help you identify the best AI tools tailored to your needs.
              </p>
            </div>
            {/* Features item End */}

            {/* Features item Start */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-12 h-12">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-semibold text-lg text-black dark:text-white mt-5 mb-3">
                Guide You Through
              </h3>
              <p className="text-sm">
                I'll walk you through the steps to integrate AI seamlessly.
              </p>
            </div>
            {/* Features item End */}

            {/* Features item Start */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-12 h-12">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="font-semibold text-lg text-black dark:text-white mt-5 mb-3">
                Schedule a Meeting
              </h3>
              <p className="text-sm">
                Need expert advice? I can set up a call with a human consultant.
              </p>
            </div>
            {/* Features item End */}

            {/* Features item Start */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-12 h-12">
                <span className="text-2xl">🕒</span>
              </div>
              <h3 className="font-semibold text-lg text-black dark:text-white mt-5 mb-3">
                Available 24/7
              </h3>
              <p className="text-sm">
                Chat or talk to me anytime—wherever you are!
              </p>
            </div>
            {/* Features item End */}
          </div>
        </div>
      </section>
      {/* ===== How can i help you End ===== */}

      {/* ===== Clients Start ===== */}
      <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-11 mt-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8 justify-center items-center">
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/AIRBUS-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/AIRBUS-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/cartier-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/cartier-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/intel-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/intel-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/hsbc-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/hsbc-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/UN-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/UN-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/DG-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/DG-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/Nestle-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/Nestle-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/pepsico-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/pepsico-logo.png"
                alt="Clients"
              />
            </a>
          </div>
        </div>
      </section>
      {/* ===== Clients End ===== */}

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }

        @keyframes avatar-pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1);
            opacity: 0.4;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.8;
          }
        }

        .speaking::before {
          content: "";
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          animation: pulse 2s infinite;
          z-index: -1;
        }

        .vera-avatar-container.speaking::before {
          content: "";
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          z-index: -1;
          animation: avatar-pulse 1.5s infinite;
        }

        .vera-avatar-container.speaking::after {
          content: "";
          position: absolute;
          top: -16px;
          left: -16px;
          right: -16px;
          bottom: -16px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          z-index: -2;
          animation: avatar-pulse 1.5s infinite 0.5s;
        }

        .bar {
          animation: sound-wave-anim 0.7s ease-in-out infinite;
        }

        @keyframes sound-wave-anim {
          0%,
          100% {
            transform: translateY(-50%) scaleY(0.5);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-50%) scaleY(1);
            opacity: 1;
          }
        }

        .shadow-glow {
          box-shadow: 0 0 8px rgba(216, 180, 254, 0.7);
        }
      `}</style>
    </main>
  );
}
