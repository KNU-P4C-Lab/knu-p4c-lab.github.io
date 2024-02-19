---
code: 4471037
title: "기계 학습 / Machine Learning"
year: 2024
semester: spring
division: "2분반"
description: "This course covers theoretical backgrounds and practical implementation of different machine learning techniques, including supervised learning, unsupervised learning, deep learning, active learning, anmd reinforcement learning. In addition, it explores the entire pipeline to build applications of machine learning with practices. Furthermore, it provides a broad introduction to ethical issues relevant to machine learning."
---
# Instruction
## Course Staff
* 강의자: 최우혁
    * 연구실: 공학 6호관 407호
    * 이메일: woohyeok.choi@kangwon.ac.kr

## Time & Location
* 월/목요일 12:00 - 13:45, 공학 6호관 608호

## Office Hours
* 일시/장소: 화요일 13:00 - 15:00, 공학 6호관 407호
* 주의 사항
  * 수업 및 과제 관련 내용 질의/응답은 면담 대신 e루리 질의 응답 게시판을 이용
  * 면담 1일전 미리 이메일 연락 등을 통해 일정을 잡을 것

## Textbook
* Primary 
  * [Ge23] Aurélien Géron. 2023. Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems, 3rd Ed. O`Reilly
* Secondary
  * [Oh21] 오일석. 2021. 기계 학습. 한빛 아카데미
  * [Ow22] Louis Owen. 2022. Hyperparameter Tuning with Python: Boost your machine learning model’s performance via hyperparameter tuning. Packt.
  * [Br20] Jason Brownlee. 2020. Data Preparation for Machine Learning, 1.1 Ed. Machine Learning Mastery
  * [Br21] Jason Brownlee. 2021. Imbalanced Classification with Python, 1.3 Ed. Machine Learning Mastery

## Prerequisite
* (필수) 파이썬프로그래밍
  * 파이썬 사용법 및 Numpy/Pandas 라이브러리 사용법은 숙지된 상태라고 가정하고 수업을 진행
* (선택) 자료구조, 선형대수학, 데이터분석프로그래밍

## Grading Policy
### 팀 프로젝트Team Project (30%)
- End-to-End Machine Learning Projects for Human Activity Recognition
  - #1 (10%): Data collection, preprocessing, and annotation for HAR
  - #2 (20%): Model building and evaluation for HAR

### 개인 과제Assignments (40%)
- Kaggle ML Competition
  - #1 (8%): Housing
  - #2 (8%): Wine Quality
  - #3 (8%): Student Dropout or Success
  - #4 (8%): Nurse Stress Prediction using Wearable Sensors
  - #5 (8%): Doom or Animal Crossing
  
### 중간 과제Midterm Assignment (20%)
  - Kaggle ML Competition: Young Adult's Affective Data - ECG and GSR Signals

### 출석Attendance (10%)
  - 지각 3회 = 결석 1회
  - 결석 1회에 출석 점수 1% 차감
  - 총 수업 일의 1/3 (10회) 초과 결석 시 F
    - 즉, 11회 이상 결석 시 F
  - 별도의 사유(예. 예비군 훈련 등)가 있을 시 수업 시간 전에 교수에게 이메일 송부
    - 단, 급하게 벌어진 사유(예. 급병, 친족상 등)는 소명 자료를 제출

# Schedule
## W01: Overview
### March 04: Overview
* Lecture
* References: None
### March 07: Machine Learning Landscape
* Lecture
* Reference
  * [Ge23] Chap. 1
  * [Oh21] Chap. 1

---

## W02: Machine Learning Pipeline
### March 11: Machine Learning Pipeline - Theory
* Lecture
* Reference
  * [Ge23] Chap. 2
  * D. Sculley et al. 2015. Hidden technical debt in Machine learning systems. In Proceedings of the 28th International Conference on Neural Information Processing Systems - Volume 2 (NIPS'15). 
  * Soowon Kang et al. 2023. K-EmoPhone: A Mobile and Wearable Dataset with In-Situ Emotion, Stress, and Attention Labels. Sci Data 10, 351 (2023). 

### March 14: Machine Learning Pipeline - End-to-End Practice
* Lab
* Assignment #1 (- March 20): End-to-End Practice for the Housing Dataset
* Reference
  * [Ge23] Chap. 3

---

## W03: Linear Model
### March 18: 1st Order Linear Model
* Lecture
* Lab
* Reference
  * [Ge23] Chap. 4
  * [Oh21] Chap. 2

### March 21: Polynomial Model, Regularized Linear Model, and Logistic Regression
* Lecture
* Lab
* Reference
  * [Ge23] Chap. 4
  * [Oh21] Chap. 2

---

## W04: Support Vector Machine and Decision Tree
### March 25: Support Vector Machine
* Lecture
* Lab
* Reference
  * [Ge23] Chap. 5
  * [Oh21] Chap. 11

### March 28: Decision Tree
* Lecture
* Lab
* Assignment #2 (- April 03): Wine Quality
* Reference
  * [Ge23] Chap. 6

---

## W05: Ensemble Model
### April 01: Random Forest
* Lecture
* Lab
* Reference
  * [Ge23] Chap. 7
  * [Oh21] Chap. 12

### April 04: Gradient Boosted Tree
* Lecture
* Lab
* Reference
  * [Ge23] Chap. 7

---

## W06: Feature Engineering #1
### April 08: Feature Extraction
* Lecture
* Lab
* Reference
  * Andreas Bulling et al. 2014. A tutorial on human activity recognition using body-worn inertial sensors. ACM Comput. Surv. 46, 3,   Article 33.
  * Soujanya Poria et al. 2017. A review of affective computing: From unimodal analysis to multimodal fusion. Information Fusion, 37, 98–125.

### April 11: Feature Selection
* Lecture
* Lab
* Assignment #3 (- April 17): Student Dropout vs. Success
* Reference
  * [Br20] Chap. 4

---
## W07: Feature Engineering #2
### April 15: Dimensionality Reduction
* Lecture
* Lab
* Reference
  * [Ge23] Chap. 8
  * [Br20] Chap. 7

### April 18: Balancing Label Distribution
* Lecture
* Lab
* Reference
  * [Br21] Chap. 4
---

## W08: Midterm
* Midterm Assignment (April 22 - April 28): Young Adult's Affective Data - ECG and GSR Signals
---

## W09: Cross-Validation and Hyper-parameter Tuning
### April 29: Cross-Validation
* Lecture
* Lab
* Team Assignment #1 (- May 12): Data Collection, Preprocessing, and Annotation for HAR  
* Reference
  * Berrar, D. 2019. Cross-Validation
  * HAPT Dataset?

### May 02: Hyper-parameter Tuning
* Lecture
* Lab
* Reference
  * [Ow22] Chap. 2, 3, 4, 7, 8, 9.
  * Tong Yu and Hong Zhu. 2000. Hyper-Parameter Optimization: A Review of Algorithms and Applications
---

## W10: Unsupervised Learning
### May 06: 어린이날 대체 휴일

### May 09: Clustering
* Lecture
* Lab
* References
  * [Ge23] Chap. 9
  * [Oh21] Chap. 6

---

## W11: Artificial Neural Network
### May 13: Anomaly Detection
* Lecture
* Lab
* References
  * [Ge23] Chap. 9
  * [Oh21] Chap. 6

### May 16: Artificial Neural Network #1
* Lecture
* Lab
* References
  * [Ge23] Chap. 10
  * [Oh21] Chap. 3

---

## W12: Deep Neural Network
### May 20: Artificial Neural Network #2
* Lecture
* Lab
* Team Assignment #2 (- June 20): Model Building and Evaluation for HAR
* Assignment #4 (- June 02): Nurse Stress Prediction using Wearable Sensors
* References
  * [Ge23] Chap. 10
  * [Oh21] Chap. 3

### May 23: Deep Neural Network #1
* Lecture
* Lab
* References
  * [Ge23] Chap. 11
  * [Oh21] Chap. 4, 5

---

## W13: Convolution Neural Network #1
### May 27: Deep Neural Network #2
* Lecture
* Lab
* References
  * [Ge23] Chap. 11
  * [Oh21] Chap. 4, 5

### May 30: Convolution Neural Network #1
* Lecture
* Lab
* References
  * [Ge23] Chap. 14
  * [Oh21] Chap. 4

---

## W14: Convolution Neural Network #2
### June 03: Convolution Neural Network #2
* Lecture
* Lab
* Assignment #5 (- June 12): Doom or Animal Crossing?
* References
  * [Ge23] Chap. 14
  * [Oh21] Chap. 4

### June 06: 현충일

---

## W15: Recurrent Neural Network
### June 10: Recurrent Neural Network #1
* Lecture
* Lab
* References
  * [Ge23] Chap. 15
  * [Oh21] Chap. 8
  
### June 13: Recurrent Neural Network #2
* Lecture
* Lab
* References
  * [Ge23] Chap. 15
  * [Oh21] Chap. 8

---

## W16: Final Term
* No exam. Team Assignment #2 should be submitted in this week.