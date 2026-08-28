import { Cpu, LayoutDashboard, Monitor, Settings, Zap, HardDrive, Cpu as Microchip, Wifi, Code, Battery, Box, Eye, Layers } from "lucide-react";

export const USER_INFO = {
  name: "Kangkan Sarkar",
  role: "Electronics & Communication Engineering Student",
  description: "Electronics & Communication Engineering student exploring VLSI, PCB Design, Embedded Systems and Hardware Development.",
  email: "kangkan9153@gmail.com",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/kangkan-sarkar06/",
  instagram: "https://www.instagram.com/kangkanskr/",
  stats: {
    projects: "15+",
    technologies: "20+",
    domains: "4",
    hours: "2000+",
  },
  education: {
    degree: "Bachelor of Technology",
    major: "Electronics and Communication Engineering",
    college: "Alipurduar Government Engineering and Management College",
    graduation: "2024-2028",
  }
};

export const SKILLS = [
  {
    category: "Programming",
    items: [
      { name: "C", status: "Proficient" },
      { name: "Embedded C", status: "Proficient" },
      { name: "Python", status: "Familiar" },
    ]
  },
  {
    category: "Hardware",
    items: [
      { name: "Arduino", status: "Proficient" },
      { name: "ESP32", status: "Proficient" },
      { name: "Sensors", status: "Proficient" },
      { name: "Microcontrollers", status: "Proficient" },
      { name: "Digital Electronics", status: "Proficient" },
    ]
  },
  {
    category: "Design Tools",
    items: [
      { name: "KiCad", status: "Proficient" },
      { name: "Proteus", status: "Proficient" },
    ]
  },
  {
    category: "Core Electronics",
    items: [
      { name: "Digital Logic", status: "Proficient" },
      { name: "Analog Electronics", status: "Familiar" },
      { name: "Communication Systems", status: "Learning" },
      { name: "Signals & Systems", status: "Familiar" },
      { name: "Network Theory", status: "Familiar" },
    ]
  },
  {
    category: "VLSI",
    items: [
      { name: "Digital Design", status: "Learning" },
      { name: "Verilog", status: "Learning" },
      { name: "RTL Design", status: "Learning" },
      { name: "FPGA", status: "Exploring" },
      { name: "ASIC concepts", status: "Exploring" },
    ]
  }
];

export const PROJECTS = [
  {
    id: "esp32-home-automation",
    title: "ESP32 Smart Home Automation",
    tags: ["ESP32", "Embedded C", "IoT"],
    status: "Completed",
    description: "Wireless appliance control system using ESP32 with real-time status updates.",
    longDescription: "A complete home automation system built around the ESP32 microcontroller. This project integrates multiple relays, sensors, and a web interface to allow for seamless control of household appliances from anywhere in the world.",
    problem: "Existing home automation solutions are either too expensive or lack customization options for standard Indian households.",
    solution: "Developed a custom ESP32-based node that interfaces with existing switchboards, providing both physical and digital control without replacing hardware.",
    components: ["ESP32 NodeMCU", "4-Channel Relay Module", "DHT11 Sensor", "5V Power Supply"],
    principles: "Utilizes MQTT for lightweight communication between the device and the broker. FreeRTOS is used on the ESP32 to handle sensor polling and network tasks concurrently.",
    future: "Implementing voice control via local AI and adding power consumption monitoring.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/kangkan9153/ESP32-Smart-Home-Automation-Code/blob/main/automation_P01.ino"
  },
  {
    id: "gesture-rgb",
    title: "Gesture-Controlled RGB Lighting",
    tags: ["Arduino", "Sensors", "LEDs"],
    status: "Completed",
    description: "Interactive ambient lighting system controlled by hand gestures.",
    longDescription: "An ambient lighting solution that responds to intuitive hand gestures. Swipe to change colors, raise hand to increase brightness, and hold to turn off.",
    problem: "Traditional light switches require physical contact and offer limited control over RGB lighting features.",
    solution: "Used an APDS-9960 gesture sensor to detect directional swipes and proximity, mapping these gestures to HSV color space translations for smooth LED transitions.",
    components: ["Arduino Nano", "APDS-9960 Gesture Sensor", "WS2812B LED Strip"],
    principles: "I2C communication reads sensor data. FastLED library translates logic to precise timing signals required by WS2812B addressable LEDs.",
    future: "Expanding to a synchronized multi-room setup using ESP8266.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1000",
    github: "#"
  },
  {
    id: "esp32-cam-vision",
    title: "ESP32-CAM Vision Project",
    tags: ["ESP32-CAM", "Computer Vision", "Embedded Systems"],
    status: "Prototype",
    description: "Low-cost wireless camera node for basic image processing and surveillance.",
    longDescription: "Exploring the capabilities of the ESP32-CAM module for edge computing. This prototype streams video over WiFi and performs basic motion detection.",
    problem: "Deploying camera nodes in remote areas of a campus or home is restricted by power and wiring constraints.",
    solution: "Created a battery-powered ESP32-CAM node with a deep-sleep strategy that wakes up on PIR sensor triggers to capture and upload images.",
    components: ["ESP32-CAM AI-Thinker", "PIR Motion Sensor", "18650 Battery Shield"],
    principles: "Direct Memory Access (DMA) is used to efficiently move camera buffer data to WiFi peripherals. Power management is handled via the RTC (Real Time Clock) domain.",
    future: "Adding basic facial recognition using Edge Impulse.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000",
    github: "#"
  },
  {
    id: "kicad-pcb-design",
    title: "Custom PCB Designs",
    tags: ["KiCad", "PCB Design", "Electronics"],
    status: "Work in Progress",
    description: "Various printed circuit board layouts transitioning from breadboards to manufactured boards.",
    longDescription: "A collection of PCB designs created using KiCad, focusing on translating messy breadboard prototypes into reliable, manufactured hardware.",
    problem: "Breadboard prototypes are fragile and susceptible to noise and parasitic capacitance, making them unsuitable for permanent deployment.",
    solution: "Designed custom 2-layer PCBs incorporating proper decoupling, ground planes, and optimized trace routing for logic and power.",
    components: ["Custom PCBs", "SMD Components", "Through-hole connectors"],
    principles: "Applied Design Rule Checks (DRC), calculated trace widths for current capacity, and practiced component footprint mapping.",
    future: "Designing a 4-layer board for high-speed digital signals.",
    image: "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?auto=format&fit=crop&q=80&w=1000",
    github: "#"
  }
];

export const VLSI_JOURNEY = [
  { step: 1, title: "Digital Electronics", description: "Boolean logic, gates, K-maps.", status: "Completed" },
  { step: 2, title: "Digital Logic Design", description: "Combinational & sequential circuits, state machines.", status: "Completed" },
  { step: 3, title: "Verilog HDL", description: "Hardware description language syntax and modeling.", status: "Learning" },
  { step: 4, title: "RTL Design", description: "Register-transfer level abstractions.", status: "Learning" },
  { step: 5, title: "Computer Architecture", description: "Processors, pipelining, and memory hierarchies.", status: "Next" },
  { step: 6, title: "FPGA", description: "Field-programmable gate array deployment.", status: "Future" },
  { step: 7, title: "ASIC Design", description: "Application-specific integrated circuits.", status: "Future" },
  { step: 8, title: "Advanced VLSI", description: "Physical design, timing analysis, and testing.", status: "Future" },
];

export const PCB_WORKFLOW = [
  { step: "Schematic", desc: "Logical connections" },
  { step: "Component Selection", desc: "Footprints & BOM" },
  { step: "PCB Layout", desc: "Placing components" },
  { step: "Routing", desc: "Trace drawing" },
  { step: "Design Rule Check", desc: "Validating constraints" },
  { step: "3D Visualization", desc: "Mechanical fit" },
  { step: "Fabrication", desc: "Gerber generation" }
];

export const LAB_EQUIPMENT = [
  { name: "Arduino UNO", category: "Microcontroller", usage: "Prototyping", icon: Cpu },
  { name: "ESP32", category: "Microcontroller", usage: "IoT & Wireless", icon: Wifi },
  { name: "ESP32-CAM", category: "Module", usage: "Vision & Imaging", icon: Eye },
  { name: "Sensors Pack", category: "Component", usage: "Data Acquisition", icon: LayoutDashboard },
  { name: "LEDs & Display", category: "Component", usage: "Visual Output", icon: Monitor },
  { name: "Breadboard", category: "Tool", usage: "Circuit Testing", icon: Box },
  { name: "Multimeter", category: "Instrument", usage: "Measurement", icon: Zap },
  { name: "Jumper Wires", category: "Tool", usage: "Connectivity", icon: Layers },
];

export const CERTIFICATIONS = [
  {
    name: "Embedded Systems Essentials",
    organization: "Placeholder Organization",
    date: "2024",
    link: "#"
  },
  {
    name: "Internet of Things (IoT) Introduction",
    organization: "Placeholder Organization",
    date: "2024",
    link: "#"
  },
  {
    name: "C Programming for Hardware",
    organization: "Placeholder Organization",
    date: "2023",
    link: "#"
  }
];

export const GALLERY_IMAGES = [
  { src: "https://drive.google.com/thumbnail?id=1otlF3IJt_d_KEYRUcOILPMbKqMVLHYEX&sz=w1000", alt: "Gallery Image 1", category: "Electronics" },
  { src: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800", alt: "Hardware prototyping", category: "Projects" },
  { src: "https://images.unsplash.com/photo-1504610926078-a1611febcad3?auto=format&fit=crop&q=80&w=800", alt: "Soldering tools", category: "Electronics" },
  { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800", alt: "Microchip macro", category: "Electronics" },
  { src: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=800", alt: "Electronics workspace", category: "Projects" },
  { src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800", alt: "Sensors and breadboard", category: "Projects" }
];
