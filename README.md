
# 📱 Frontend Assignment – Infinite Scrolling Feed

A simple mobile UI built with **React Native** and **Expo** that demonstrates **infinite scrolling**, smooth performance, and search functionality using a large static JSON dataset.

---

## 🎯 Goal
To build a **responsive**, **smooth**, and **optimized** infinite scrolling feed that supports **local search** without excessive network calls.

---

## ✨ Features
- ♾ **Infinite Scroll** – Auto-loads more posts as the user scrolls.  
- 🔍 **Search Bar** – Full-text search across all post titles and descriptions.  
- ⚡ **Performance Optimized** – Uses `FlatList` optimizations (`getItemLayout`, `initialNumToRender`, etc.).  
- 📂 **Offline Data Simulation** – Uses a large static JSON file to simulate posts.  

---

## 🛠 Tech Stack
- **Framework:** React Native + Expo  
- **Language:** TypeScript  
- **UI:** Styled Components  
- **Data:** Local static JSON file  

---

## 📦 Installation & Setup

```bash
1️⃣ Clone the repository
git clone https://github.com/Anukeerth-ek/Infinite_Scroll_React_Native.git
cd Infinite_Scroll_React_Native


2️⃣ Install dependencies

npm install
or
yarn install


3️⃣ Start the project


npm start
or

yarn start
📱 Running on Device / Emulator
Press a → Open in Android Emulator

Press i → Open in iOS Simulator (Mac only)

📷 Scan the QR code in Expo DevTools using the Expo Go app on your phone



Assignment Flow

[posts.json]
     ↓ (data load)
[FeedScreen]
     → SearchBar (for text input)
     → FlatList (renders list of PostCards)
             ↓
        PostCard (renders one post)



