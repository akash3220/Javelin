import "phaser";

import Loader from "./scenes/Loader"; // Scene responsible for loading game assets
import PreLoader from "./scenes/Preloader"; // Initial preloading scene
import Game from "./scenes/Game"; // Main game scene
import FirstPage from "./scenes/FirstPage";

// import Register from './scenes/Register'; // Scene for user registration
// // import Score from './scenes/Score';       // Scene to display scores

import { isMobile, isMobileOnly } from "mobile-device-detect"; // Mobile device detection
import "./style.scss"; // Styles for the game
import { Global } from "./objects/global"; // Global variables and settings

// Check if the user is on iOS
var isIOS = getMobileOperatingSystem() == "iOS";

// Default game dimensions
let DEFAULT_WIDTH = 1242;
let DEFAULT_HEIGHT = 2208;

// Set the global mobile flag
Global.isMobile = isMobile;

// Check if the user is on Firefox
let isFirefox = navigator.userAgent.indexOf("Firefox") != -1;

// Phaser game configuration
const config = {
  fullscreenTarget: document.getElementById("game-sec"), // Element to enable fullscreen
  type: isFirefox && !isIOS ? Phaser.AUTO : Phaser.CANVAS, // Renderer type
  transparent: false, // Background transparency
  scale: {
    parent: "game-sec", // Parent container for the game
    mode: Global.isMobile ? Phaser.Scale.ENVELOP : Phaser.Scale.FIT, // Scaling mode
    autoCenter: Phaser.Scale.CENTER_BOTH, // Centering of the game
    width: DEFAULT_WIDTH, // Game width
    height: DEFAULT_HEIGHT, // Game height
  },
  dom: {
    createContainer: false, // Flag to create a DOM container for the game
  },
  scene: [PreLoader, Loader, Game, FirstPage], // Scenes to be loaded
};

// Initialize the game once the window has fully loaded
window.addEventListener("load", () => {
  const game = new Phaser.Game(config);
});

// Function to detect the mobile operating system
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera; // Get the user agent
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone"; // Return Windows Phone
  }
  if (/android/i.test(userAgent)) {
    return "Android"; // Return Android
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS"; // Return iOS
  }
  return "unknown"; // Default return value for unknown OS
}
