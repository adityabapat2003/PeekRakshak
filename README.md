
# 🌾 Peek Rakshak – AI-Powered Crop Protection & Monitoring System  


**Peek Rakshak** is an AI-driven **crop monitoring and protection system** that leverages **machine learning** to provide **real-time insights** for farmers. It offers **crop recommendations, fertilizer suggestions, and disease detection** to promote **sustainable and efficient farming.**  

---

## 📌 Table of Contents  
- [🌱 Inspiration](#-inspiration)  
- [🛠 How We Built It](#-how-we-built-it)  
- [🔥 Challenges We Faced](#-challenges-we-faced)  
- [🎓 What We Learned](#-what-we-learned)  
- [🌍 Impact](#-impact)  
- [🖥️ Tech Stack](#️-tech-stack)  
- [🚀 Getting Started](#-getting-started)  
- [📺 Demo Video](#-demo-video)  
- [📜 License](#-license)  

---

## 🌱 Inspiration  
Agriculture faces challenges like **crop diseases, improper fertilizer use, and yield prediction issues.** Farmers often lack **real-time insights** for making informed decisions. **Peek Rakshak** was developed to address these problems by using **AI and data analytics** to **empower farmers** with actionable recommendations.  

---

## 🛠 How We Built It  

Peek Rakshak integrates **multiple AI-powered components** to assist farmers:  

### 🌾 Crop Recommendation System  
- Uses **machine learning** trained on **soil and environmental data**.  
- Suggests the best crops based on **soil type, temperature, and humidity**.  

### 🌱 Fertilizer Recommendation Model  
- Built using **decision trees and regression models**.  
- Provides **personalized fertilizer advice** based on **soil nutrients and crop type**.  

### 🍃 Leaf Disease Detection  
- **ResNet (a type of Convolutional Neural Network - CNN)** model trained in **TensorFlow/Keras** with **98% accuracy**.  
- Classifies **diseased vs. healthy** leaves and suggests treatment.  
- Deployed using **Flask/FastAPI** for real-time detection.  

---

## 🔥 Challenges We Faced  
- **Model Optimization:** We optimized AI models using **quantization** and **pruning** for faster inference.  
- **Integration:** Integrating the frontend with the ML models running in the backend Flask server.  

---

## 🎓 What We Learned  
- **Fine-tuning deep learning models** for agricultural applications.  
- **Efficiently deploying AI models** using Flask/FastAPI.  
- The importance of **user-friendly AI interfaces** for non-technical users.  

---

## 🌍 Impact  
Peek Rakshak helps **reduce agricultural losses** and **increase productivity** by offering AI-powered recommendations. With **real-time insights**, farmers can make **data-driven decisions** for a **more sustainable future**.  

---

## 🖥️ Tech Stack  
- **Programming Languages:** Python, JavaScript  
- **Machine Learning:** TensorFlow, Keras, scikit-learn, NumPy, Pandas  
- **Backend:** Flask, FastAPI  
- **Frontend:** React.js  

---

## 📂 Repository Structure  
```
📂 Peek-Rakshak  
│── 📁 models              # Trained ML models  
│── 📁 backend             # Flask/FastAPI backend  
│── 📁 frontend            # React.js UI  
│── 📁 data                # Datasets for training  
│── 📁 notebooks           # Jupyter notebooks for experiments  
│── README.md              # Project documentation  
```

---

## 🚀 Getting Started  

### 🔹 Prerequisites  
Ensure you have the following installed:  
- Python 3.x  
- TensorFlow/Keras  
- Flask/FastAPI  
- React.js  

### 🔹 Setup Instructions  
```bash
# Clone the repository
git clone https://github.com/yourusername/peek-rakshak.git  
cd peek-rakshak  

# Install dependencies
pip install -r requirements.txt  

# Run the backend
cd backend  
python app.py  

# Run the frontend
cd frontend  
npm install  
npm start  
```

---

## 📺 Demo Video  
🎥 Watch the full project demo here: [![Peek Rakshak Demo](https://img.youtube.com/vi/YEKBCB-swsRo/0.jpg)](https://www.youtube.com/watch?v=EKBCB-swsRo)  

> *(Click on the image above or the link below to watch the demo!)*  
🔗 [https://www.youtube.com/watch?v=YOUR_VIDEO_ID](https://www.youtube.com/watch?v=EKBCB-swsRo)  

---

## 📜 License  
This project is licensed under the **MIT License**.  

---
