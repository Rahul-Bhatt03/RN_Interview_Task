# 📱 React Native Quiz App (Expo)

A simple mobile **Quiz App** built using **React Native with Expo** and **React Navigation**.
This app allows users to answer multiple-choice questions, get instant feedback, and view their final score.

---

## 🚀 Features

### 🏠 Home Screen

* Displays app title
* “Start Quiz” button to begin

### ❓ Quiz Screen

* Shows one question at a time
* 3–4 multiple-choice options
* Instant feedback: **Correct / Wrong**
* Automatically moves to next question

### 📊 Result Screen

* Displays final score (e.g., `3/5`)
* Button to restart quiz

---

## 🧠 Quiz Logic

* Questions stored in a **JSON file**
* Tracks:

  * Current question index
  * User score
* Navigation handled using **React Navigation**

---

## ⚙️ Tech Stack

* React Native (Expo)
* React Hooks (`useState`, `useEffect`)
* React Navigation (Stack Navigator)

---

## ⭐ Bonus Features (Optional)

* Progress bar showing quiz progress
* Randomly shuffled options

---

# 📦 Getting Started

## 🔽 1. Clone the Repository

```bash
git clone https://github.com/your-username/quiz-app.git
cd quiz-app
```

---

## 📥 2. Install Dependencies

```bash
npm install
```

---

## ▶️ 3. Start the Expo Server

```bash
npx expo start
```

---

## 📱 4. Run on Your Phone (Expo Go)

### Step-by-step:

1. Install **Expo Go** on your phone:

   * Android: Play Store
   * iOS: App Store

2. Make sure:

   * Your phone and computer are on the **same WiFi network**

3. Run the app:

   * Scan the QR code shown in terminal or browser
   * OR manually enter the URL in Expo Go

---

## 📁 Project Structure

```
quiz-app/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── QuizScreen.tsx
│   │   └── ResultScreen.tsx
│   ├── components/
│   │   └── OptionButton.tsx
│   ├── utils/
│   │   └── question.json
├── App.tsx
├── package.json
```

---

## 🔄 Navigation Flow

```
Home → Quiz → Result → Restart → Home
```

---

## 📝 Example Question Format (JSON)

```json
{
  "questions": [
    {
      "question": "What is React Native?",
      "options": ["Library", "Framework", "Language", "Tool"],
      "answer": "Framework"
    }
  ]
}
```

---

## 💡 Future Improvements

* Add timer for each question
* Add category-based quizzes
* Store high scores
* Add animations

---

## 🙌 Author

Developed as part of a learning project / interview task.

---

## 📜 License

This project is open-source and free to use.
