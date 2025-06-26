# Healthy Habits Tracker – Build a Better Routine

## Hackathon Details :
This Project is made for Hack4Health hackathon Submission.

## Overview
The Healthy Habits Tracker is a simple yet effective web application designed to help users cultivate and maintain healthy habits. It allows you to set daily goals for various habits like water intake, sleep hours, daily steps, and screen time, track your progress, and celebrate your achievements.

## What It Does
- **Goal Setting**: Users can set personalized daily goals for each habit (e.g., drink 8 glasses of water, get 8 hours of sleep).
- **Daily Tracking**: Easily track your daily progress using input fields for each habit.
- **Progress Visualization**: A clear progress bar for each habit shows how close you are to achieving your daily goal.
- **Weekly Streaks & Achievements**: Earn badges and unlock achievements for completing habits consistently over a week, providing motivational feedback.
- **Intuitive UI**: A clean, calming, and responsive user interface makes tracking your habits a pleasant experience.

## Why It’s Great
- **No Login Required**: Your data is stored locally in your browser, ensuring privacy and immediate access without the need for user accounts or sign-ups.
- **Interactive & Motivational**: The app provides immediate visual feedback and celebrates your progress with achievements, keeping you engaged and motivated.
- **Offline Functionality**: Since all data is stored locally, the application works seamlessly even without an internet connection.
- **Beginner-Friendly**: Simple to use and understand, making it accessible for anyone looking to start building better habits.

## 🛠️ How We Built It

-   **Frontend**: Built with **React** and **TypeScript**, using **Vite** for a fast development experience. Styled with **Tailwind CSS** for a modern and responsive UI, and **Lucide React** for a consistent icon set.
-   **Data Storage**: Utilizes the browser's `localStorage` to persist habit progress and settings directly on the user's device, ensuring privacy and offline functionality.
-   **Design**: Features a calming orange-beige color palette and a clean, intuitive user interface designed for minimal distractions and an engaging user experience.
-   **No Backend**: The application is entirely client-side, making it lightweight, fast, and accessible without the need for server-side infrastructure or user accounts.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository** (if applicable, replace with actual clone command if hosted on Git):
    ```bash
    git clone <repository-url>
    cd healthy-habits-tracker
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    This will typically open the application in your browser at `http://localhost:5173`.

## Deployment

This application is designed for easy deployment to static hosting services. It has been successfully deployed to Netlify.

## Future Enhancements (Ideas)

-   **Historical Data View**: Implement charts (e.g., using Chart.js) to visualize habit progress over longer periods (weeks, months).
-   **More Habit Types**: Allow users to add custom habits beyond the default ones.
-   **Notifications**: Add browser notifications to remind users to track their habits.
-   **Data Export/Import**: Provide options to export and import habit data for backup or transfer.
-   **Theming**: Allow users to customize the color palette or choose different themes.
