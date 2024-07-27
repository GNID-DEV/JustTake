# PCMOB7 Final Project and Publishing

## 1. Documentation (40%)
- **a. The proposal and mockups, approved by trainer/TAs (30%)**
- **b. Final reflections (10%)**: Provide reflections on:
  - What you learned
  - What you’re interested in finding out more about
  - Why you learned all this

## 2. Project (60%)
- **a. 5-minute in-class presentation (30%)**, including a 30-second video demo
- **b. Overall project grade (30%)**: Did the project help demonstrate an understanding of the topics taught in the class?

## What to Submit
- **1a**: A Word/PDF file with the proposal and Figma mockups link
- **1b**: Reflections in a Word document or text reply
- **2a**: 30-second video demo
- **2b**: Submit a zip file of the project or provide a GitHub/Expo Snack link


# PCMOB7 Mobile Application

## Overview

The PCMOB7 mobile application is a React Native project that provides a comprehensive platform for users to manage their profiles, browse products, and access various features such as favorites and listings. This application integrates Google Sign-In and uses React Navigation to handle navigation between different screens.

## Features

- **Authentication**: Users can sign in, sign up, and view a splash screen.
- **Home Screen**: Displays the main content and navigation options.
- **Favorites**: Users can manage their favorite items.
- **Profile**: Users can view and edit their profile, access settings, and manage their listings.
- **Product Details**: Provides detailed information about individual products.
- **Create and Manage Listings**: Allows users to create and view their own listings.

## Installation

To get started with the project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/gnid-dev/smu-pcmob7.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd smu-pcmob7

3. **Install Dependencies**

   Make sure you have Node.js and Yarn installed.

   ```bash
   yarn install
   ```

4. Configure Google Sign-In

   Create a .env file in the root directory of the project and add the following configuration:
   ```env
   GOOGLE_WEB_CLIENT_ID=your_google_web_client_id
   GOOGLE_IOS_CLIENT_ID=your_google_ios_client_id
   ```

5. Run the Application

   For iOS:

   ```bash
   npx react-native run-ios
   ```

   For Android:
   ```bash
   npx react-native run-android
   ```

## Navigation
The app uses React Navigation to manage screen transitions:

- ProfileStack: Includes screens for user profile, settings, create listing, and my listings.
- Tabs: Includes bottom tab navigation with icons for Home, Favorites, and ProfileStack.

## Configuration

### Google Sign-In
Google Sign-In is configured with the following scopes and client IDs:

- **Scopes**: https://www.googleapis.com/auth/drive.readonly
- **Web Client ID**: Configured in .env file
- **iOS Client ID**: Configured in .env file

## Contribution

Contributions to this project are welcome! If you have any suggestions, bug reports, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
   
   
