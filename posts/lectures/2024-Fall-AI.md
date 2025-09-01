---
code: "4471032"
year: "2024"
semester: fall
division: "4 Div."
title: "Artificial Intelligence"
types: major
description: "Reinforcement learning (RL) is one of the popular machine learning paradigms for solving sequential decision-making problems. In this paradigm, agents learn the optimal policies by repeatedly interacting with an environment to maximize (cumulative) rewards. This courses will cover the foundational concepts of RL, including state-action-reward pairs, the Markov decision process, and exploration versus exploitation. In addition, we will learn key RL algorithms, such as the Monte Carlo method, temporal difference learning, function approximation, and policy gradients. Furthermore, you will work on a small team project to implement an RL agent to solve problems with different difficulties, from simple to complex ones."
---

# Instruction
## Course Staff
* 강의자: 최우혁Woohyeok Choi
  * 연구실: 공학 6호관 407호
  * 이메일: woohyeok.choi@kangwon.ac.kr
* 조교: 황상현
  * 이메일: shyeon0114@gmail.com 

## Time & Location
* 월/목요일 09:00 - 10:15, 공학 6호관 609호

## Office Hours
* 화요일 13:00 - 15:00
* 주의 사항
    * 수업 및 과제 관련 내용은 면담 대신 e루리 질의 응답 게시판에 올려서 모든 학생이 공유할 수 있도록 할 것
    * 수업 및 과제 관련 내용을 제외한 면담이 필요시 미리 이메일로 연락하여 일정을 잡을 것

## Textbook
* [Ri 20] Reinforcement Learning: An Introduction, 2nd Ed., Richard S. Sutton and Andrew G. Barto, The MIT Press.


## Prerequisite
* (필수) 파이썬 프로그래밍
* (선택) 이산수학, 알고리즘

## Grading Policy
- Team Competitions: 90%
  - Competition Round 1: 25%
  - Competition Round 2: 30%
  - Competition Round 3: 35%
- Attendance: 10%
    - 지각 3회 = 결석 1회
    - 결석 1회에 출석 점수 1% 차감
    - 총 수업 일의 1/3 (10회) 초과 결석 시 F
        - 즉, 11회 이상 결석 시 F
    - 별도의 사유(예. 예비군 훈련 등)가 있을 시 수업 시간 전에 교수 및 조교에게 이메일 송부
        - 단, 급하게 벌어진 사유(예. 급병, 친족상 등)는 소명 자료를 제출

# Schedule
## W01: Overview
### September 02: Course Overview & Logistics
* [Lecture](https://docs.google.com/presentation/d/1GgJ3dnUhky1tGBlONNZHAi3Bq3wPulskXqSRLhE4_y4/edit?usp=sharing)
### September 05: Basic Math
* [Lecture](https://docs.google.com/presentation/d/1zFT2TwH90jix40d7UV0Yt8PCc6n3iBg2mE0fX21pTkE/edit?usp=drive_link)
---

## W02: Introduction / Multi-Armed Bandits
### September 09: Introduction to Reinforcement Learning
* [Lecture](https://docs.google.com/presentation/d/1TJMm8GEnZe3MQryGiENI2bxRYuXQhNPYZ1lmm2TAT_4/edit?usp=sharing)
* Reference
  * [Ri 20] Chap. 1
### September 12: Multi-Armed Bandits
* [Lecture](https://docs.google.com/presentation/d/1cabfGlcBp8CCZhU9xWNZE0MvUJF-BnNPqmK4Zx8MpgI/edit?usp=drive_link)
* Reference
  * [Ri 20] Chap. 2
---

## W03: Markov Process
### September 16: Chuseok Holiday
* No Class
### September 19: Markov Process
* [Lecture](https://docs.google.com/presentation/d/1id9sY6scC2HxTcEf_0-RZzLgqaIKgp9WgMz6SPEfHoo/edit?usp=drive_link)
* Reference
  * [Ri 20] Chap. 3
---

## W04: Dynamic Programming
### September 23: Dynamic Programming? / Value Iteration
* [Lecture](https://docs.google.com/presentation/d/1CLd96SC71IXm2BroVeXPo56OirutJCzdNsrpECHK7YQ/edit?usp=drive_link)
* Reference
  * [Ri 20] Chap. 4
### September 26: Policy Iteration / Dynamic Programming vs. Reinforcement Learning
* [Lecture](https://docs.google.com/presentation/d/1CLd96SC71IXm2BroVeXPo56OirutJCzdNsrpECHK7YQ/edit#slide=id.g2f859d8ff3d_0_136)
* Reference
  * [Ri 20] Chap. 4
---

## W05: Tutorial on Gymnasium
### September 30: Tutorial on Gymnasium
* [Lecture](https://colab.research.google.com/drive/1ZpvRoARkCRK90T3xx3Bg9heVeJ1rlbVn?usp=drive_link)
* Reference
  * [OpenAI Gymnasium](https://gymnasium.farama.org/)

### October 03: National Foundation Day
* No Class
---

## W06: Monte-Carlo Method
### October 07: Monte-Carlo Method #1
* [Lecture](https://docs.google.com/presentation/d/1Dqcwi8SfLQJvSyRobUCQdK9JGlo7Q_YQKwknBrvyzsM/edit?usp=sharing)
* Reference
  * [Ri 20] Chap. 5

### October 10: Monte-Carlo Method #2
* [Lecture](https://docs.google.com/presentation/d/1Dqcwi8SfLQJvSyRobUCQdK9JGlo7Q_YQKwknBrvyzsM/edit#slide=id.g306b0c5bb0f_0_74)
* Reference
  * [Ri 20] Chap. 5
---

## W07: Temporal Difference Learning / n-Step Bootstrapping
### October 14: Temporal Difference Learning 
* [Lecture](https://docs.google.com/presentation/d/1Dr3PGiGdr9N_-FijjjuKP-fNXs-va7AYrcleFhEHbfE/edit?usp=drive_link)
* Reference
  * [Ri 20] Chap. 6

### October 17: n-Step Bootstrapping
* [Lecture](https://docs.google.com/presentation/d/1JNON9pIkzIkUIRZCr_d85JOPzP6Mqac5QOY6NfgcIgE/edit?usp=drive_link)
* Reference
  * [Ri 20] Chap. 7
---

## W08: Planning & Learning
### October 21: Planning & Learning #1
* [Lecture](https://docs.google.com/presentation/d/1teU9eDvMrVnXx-8BiPAbIWwpwl92rdRbY6aTw9GKZfY/edit?usp=sharing)
* Reference
  * [Ri 20] Chap. 8
* [Announcement: Team Competition Round 1 - *Grid Adventure!*](https://docs.google.com/document/d/1DMapV7a4Rdw6Izys0AC_niAnsCbWH_ue6llX_sjVBc8/edit?usp=sharing)

### October 24: No Class
* Focus on other midterm exams
---

## W09: Planning & Learning
### October 28: Planning & Learning #2
* [Lecture](https://docs.google.com/presentation/d/1teU9eDvMrVnXx-8BiPAbIWwpwl92rdRbY6aTw9GKZfY/edit#slide=id.g2feb4e5b9c9_0_23)
* Reference
  * [Ri 20] Chap. 8

### October 31: Function Approximation #1
* [Lecture](https://docs.google.com/presentation/d/1HJYsQw_FHQj8f7DPC-daL5RednzsZtzKpU0OXmED7Og/edit?usp=sharing)
* Reference
  * [Ri 20] Chap. 9 - 10
---

## W10: Team Competition Round 1
### November 04: Team Competition Round 1 (Early-Bird Slot)


### November 07: Team Competition Round 1 (Regular-Bird Slot)

---

## W11: Function Approximation
### November 11: Function Approximation #2
* [Lecture](https://docs.google.com/presentation/d/1HJYsQw_FHQj8f7DPC-daL5RednzsZtzKpU0OXmED7Og/edit#slide=id.g30fb6f98658_0_0)
* Reference
  * [Ri 20] Chap. 9 - 10
* [Announcement: Team Competition Round 2 - *Grid Survivor!*](https://docs.google.com/document/d/1meNNdSXjKz4h3rC6tYa_H6gr1xSnDJQkco9Q1Exi51Q/edit?usp=sharing)

### November 14: Function Approximation #3
* [Lecture](https://docs.google.com/presentation/d/1HJYsQw_FHQj8f7DPC-daL5RednzsZtzKpU0OXmED7Og/edit#slide=id.g30fb6f98658_0_33)
* Reference
  * [Ri 20] Chap. 9 - 10
---

## W12: Function Approximation
### November 18: Function Approximation #4
* [Lecture](https://docs.google.com/presentation/d/1HJYsQw_FHQj8f7DPC-daL5RednzsZtzKpU0OXmED7Og/edit#slide=id.g31505c2e1f4_0_1)
* Reference
  * [Ri 20] Chap. 9 - 10

### November 21: Deep-Q Network
* [Lecture](https://docs.google.com/presentation/d/1NF3kmKb2gwgJBrDlULBRH7SpDAJVT02cTA3cUBQjEN8/edit?usp=sharing)
* Reference
  * Mnih, V., Kavukcuoglu, K., Silver, D. et al. “Human-level control through deep reinforcement learning”. Nature 518, 529–533 (2015). https://doi.org/10.1038/nature14236
  * van Hasselt, H., Guez, A., & Silver, D. "Deep Reinforcement Learning with Double Q-Learning". Proceedings of the AAAI Conference on Artificial Intelligence, 30 (1) (2016). https://doi.org/10.1609/aaai.v30i1.10295
  * Schaul, T., Quan, J., Antonoglou, I., Silver, D. "Prioritized Experience Replay." arXiv preprint arXiv:1511.05952 (2015). https://arxiv.org/abs/1511.05952

---

## W13: Team Competition Round 2
### November 25: Team Competition Round 2 (Early-Bird Slot)

### November 28: Team Competition Round 2 (Regular-Bird Slot)

---

## W14: Policy Gradient Methods #1
### December 02: Policy Gradient?
* [Lecture](https://docs.google.com/presentation/d/1_HuNWjGBoUT7q6n95PYqoI13D4w9CCIKk0i6FKI29cA/edit#slide=id.g2ea10f9c449_0_21)
* Reference
  * [Ri 20] Chap. 13
* [Announcement: Team Competition Round 3 - *Road Hog!*](https://docs.google.com/document/d/190zElflpGtB_ldWz7r0vcOEJ20YE1LWSstduOAvhHDg/edit?tab=t.0)

### December 05: REINFORCE / Actor-Critic Methods
* [Lecture](https://docs.google.com/presentation/d/1_HuNWjGBoUT7q6n95PYqoI13D4w9CCIKk0i6FKI29cA/edit#slide=id.g31b029cc917_0_140)
* Reference
  * [Ri 20] Chap. 13
---

## W15: Policy Gradient Methods #2
### December 09: Asynchronous Advantage Actor-Critic 
* [Lecture](https://docs.google.com/presentation/d/1_HuNWjGBoUT7q6n95PYqoI13D4w9CCIKk0i6FKI29cA/edit#slide=id.g31b029cc917_0_212)
* Reference
  * Mnih, V., Badia, A.P., Mirza, M., Graves, A., Lillicrap, T., Harley, T., Silver, D. &amp; Kavukcuoglu, K.. :Asynchronous Methods for Deep Reinforcement Learning". Proceedings of The 33rd International Conference on Machine Learning. 48:1928-1937 (2016). https://proceedings.mlr.press/v48/mniha16.html.


### December 12: No Class
* Focus on (other) final exams
---


## W16: Team Competition Round 3
### December 16: Team Competition Round 3 (Early-Bird Slot)

### December 19: Team Competition Round 3 (Regular-Bird Slot)

---


