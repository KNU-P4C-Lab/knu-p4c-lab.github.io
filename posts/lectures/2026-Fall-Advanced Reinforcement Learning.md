---
code: "48400058"
year: "2026"
semester: fall
division: "1 Div."
title: "Advanced Reinforcement Learning (for Graduates)"
types: major
active: true
description: "Reinforcement learning (RL) is one of the popular machine learning paradigms for solving sequential decision-making problems. In this paradigm, agents learn the optimal policies by repeatedly interacting with an environment to maximize (cumulative) rewards. This course will cover the foundational concepts of RL, state-of-the-art RL algorithms, and recent conceptual shifts in RL."
---

# Instruction
## Course Staff
* Lecturer: Woohyeok Choi
  * Office: #407, College of Engineering #6
  * Mail: woohyeok.choi@kangwon.ac.kr
* Teaching Assistant: None

## Time & Location
* Wed. 09:00 - 11:50, #412, Hanbit Hall

## Office Hours
* Tue. 13:00 - 15:00

## Textbook
* [Ri20] Richard S. Sutton, Andrew G. Barto. "Reinforcement Learning: An Introduction (2nd Ed.)." The MIT Press.
* [Al20] Alexander Zai and Brandon Brown. "Deep Reinforcement Learning in Action." Manning.
* [St24] Stefano V. Albrecht, Filippos Christianos, Lukas Schäfer. "Multi-Agent Reinforcement Learning: Foundations and Modern Approaches." The MIT Press.

## Prerequisite
* Python Programming

## Grading Policy
### Reinforcement Learning Competitions (90%)
* [Round 1]()
* [Round 2]()
* [Round 3]()

### Attendance (10%)
- 1% of credit is deducted for each absence or each 3-lateness
- At least 11-Absence = F grade

# Schedule
## Week 01 (September 02) — Introduction to Reinforcement Learning
* [Lecture]()
  * [Ri20] Chap. 1
---

## Week 02 (September 09) — Markov Process and Dynamic Programming
* [Lecture]()
* Reference
  * [Ri20] Chap. 3 - 4
---

## Week 03 (September 16) — Tabular Methods
* [Lecture]()
* Reference
    * [Ri20] Chap. 5 - 6
---

## Week 04 (September 23) — Function Approximation
* [Lecture]()
* Reference
    * [Ri20] Chap. 9 - 10
* Readings
---

## Week 05 (September 30) — Deep-Q Network / Policy Gradient Methods
* [Lecture]()
* Reference
  * [Ri20] Chap. 11, 13
  * Volodymyr Mnih, Koray Kavukcuoglu, David Silver et al. “Human-level control through deep reinforcement learning”. Nature 518, 529–533 (2015). https://doi.org/10.1038/nature14236
---

## Week 06 (October 07) — Extensions of Deep Q-Network / Deterministic Policy Gradient Methods
* [Lecture]()
* [Announcement: RL Competition Round 1]()
* References
  * Hado van Hasselt, Arthur Guez, David Silver. "Deep Reinforcement Learning with Double Q-Learning". In Proceedings of the AAAI Conference on Artificial Intelligence, 2094–2100 (2016). https://doi.org/10.1609/aaai.v30i1.10295
  * Tom Schaul, John Quan, Ioannis Antonoglou, David Silver. "Prioritized Experience Replay." arXiv preprint arXiv:1511.05952 (2015). https://arxiv.org/abs/1511.05952
  * Ziyu Wang, Tom Schaul, Matteo Hessel, Hado Hasselt, Marc Lanctot, Nando Freitas. "Dueling network architectures for deep reinforcement learning." In Proceedings of The 33rd International Conference on Machine Learning, PMLR 48:1995-2003 (2016). https://proceedings.mlr.press/v48/wangf16.html
  * Matthew Hausknecht, Peter Stone. "Deep Recurrent Q-Learning for Partially Observable MDPs." AAAI Fall symposia. Vol. 45 (2015). https://cdn.aaai.org/ocs/11673/11673-51288-1-PB.pdf
  * Timothy P. Lillicrap, Jonathan J. Hunt, Alexander Pritzel, Nicolas Heess, Tom Erez, Yuval Tassa, David Silver, Daan Wierstra. "Continuous control with deep reinforcement learning." arXiv preprint arXiv:1509.02971 (2015). https://arxiv.org/abs/1509.02971
  * Scott Fujimoto, Herke Hoof, David Meger. "Addressing function approximation error in actor-critic methods." In Proceedings of the 35th International Conference on Machine Learning, PMLR 80:1587-1596 (2018). https://proceedings.mlr.press/v80/fujimoto18a.html
---

## Week 07 (October 14) — Entropy Maximization / Trust Region Constraint Methods
* [Lecture]()
* Reference
    * Tuomas Haarnoja, Aurick Zhou, Pieter Abbeel, Sergey Levine. "Soft Actor-Critic: Off-Policy Maximum Entropy Deep Reinforcement Learning with a Stochastic Actor." In Proceedings of the 35th International Conference on Machine Learning, PMLR 80:1861-1870 (2018). https://proceedings.mlr.press/v80/haarnoja18b
    * Tuomas Haarnoja, Aurick Zhou, Kristian Hartikainen, George Tucker, Sehoon Ha, Jie Tan, Vikash Kumar. "Soft actor-critic algorithms and applications." arXiv preprint arXiv:1812.05905 (2018). https://arxiv.org/abs/1812.05905
    * John Schulman, Sergey Levine, Pieter Abbeel, Michael Jordan, and Philipp Moritz. "Trust region policy optimization." In Proceedings of the 32nd International Conference on Machine Learning, PMLR 37:1889-1897 (2015). https://proceedings.mlr.press/v37/schulman15.html
---

## Week 08 (October 21) — Proximal Policy Optimization 
* [Lecture]()
* Reference
  * John Schulman, Filip Wolski, Prafulla Dhariwal, Alec Radford, Oleg Klimov. "Proximal policy optimization algorithms." arXiv preprint arXiv:1707.06347 (2017). https://arxiv.org/abs/1707.06347
  * John Schulman, Philipp Moritz, Sergey Levine, Michael Jordan, Pieter Abbeel. "High-Dimensional Continuous Control Using Generalized Advantage Estimation." arXiv preprint arXiv:1506.02438 (2018). https://arxiv.org/abs/1506.02438
  * Karl Cobbe, Jacob Hilton, Oleg Klimov, John Schulman. "Phasic Policy Gradient." Proceedings of the 38th International Conference on Machine Learning, PMLR 139:2020-2027 (2021). https://proceedings.mlr.press/v139/cobbe21a
---

## Week 09 (October 28) — RL Competition Round 1 
* [Leaderboard: RL Competition Round 1]()
* [Announcement: RL Competition Round 2]()
---

## Week 10 (November 04) — Exploration & Unsupervised Reinforcement Learning
* [Lecture]()
* Reference
    * [Al20] Chap. 8
    * Meire Fortunato, Mohammad Gheshlaghi Azar, Bilal Piot, Jacob Menick, Ian Osband, Alex Graves, Vlad Mnih, Remi Munos, Demis Hassabis, Olivier Pietquin, Charles Blundell, Shane Legg . "Noisy Networks for Exploration." arXiv preprint arXiv:1706.10295 (2019). https://arxiv.org/abs/1706.10295
    * Matthias Plappert, Rein Houthooft, Prafulla Dhariwal, Szymon Sidor, Richard Y. Chen, Xi Chen, Tamim Asfour, Pieter Abbeel, Marcin Andrychowicz. "Parameter Space Noise for Exploration." arXiv preprint arXiv:1706.01905 (2018). https://arxiv.org/abs/1706.01905
    * Deepak Pathak, Pulkit Agrawal, Alexei A. Efros, Trevor Darrell. "Curiosity-driven Exploration by Self-supervised Prediction." In Proceedings of the 34th International Conference on Machine Learning, PMLR 70:2778-2787 (2017). https://proceedings.mlr.press/v70/pathak17a.html
    * Deepak Pathak, Dhiraj Gandhi, Abhinav Gupta. "Self-Supervised Exploration via Disagreement." InProceedings of the 36th International Conference on Machine Learning, PMLR 97:5062-5071 (2019). https://proceedings.mlr.press/v97/pathak19a.html
    * Yuri Burda, Harrison Edwards, Amos Storkey, Oleg Klimov. "Exploration by Random Network Distillation." arXiv preprint arXiv:1812.12894 (2018). https://arxiv.org/abs/1810.12894
    * Benjamin Eysenbach, Abhishek Gupta, Julian Ibarz, Sergey Levine. "Diversity is All You Need: Learning Skills without a Reward Function. arXiv preprint arXiv:1802.06070 (2018). https://arxiv.org/abs/1802.06070
---

## Week 11 (November 11) — Handling Hybrid Action Space
* [Lecture]()
* Reference
  * Warwick Masson, Pravesh Ranchod, George Konidaris. "Reinforcement learning with parameterized actions." In Proceedings of the AAAI conference on artificial intelligence, 30:1 (2016). https://doi.org/10.1609/aaai.v30i1.10226
  * Matthew Hausknecht, Peter Stone. "Deep reinforcement learning in parameterized action space." arXiv preprint arXiv:1511.04143 (2015). https://arxiv.org/abs/1511.04143
  * Craig J. Bester, Steven D. James, George D. Konidaris. "Multi-pass q-networks for deep reinforcement learning with parameterised action spaces." arXiv preprint arXiv:1905.04388 (2019). https://arxiv.org/abs/1905.04388
  * Zhou Fan, Rui Su, Weinan Zhang, Yong Yu. "Hybrid actor-critic reinforcement learning in parameterized action space." arXiv preprint arXiv:1903.01344 (2019). https://arxiv.org/abs/1903.01344
  * Michael Neunert, Abbas Abdolmaleki, Markus Wulfmeier, Thomas Lampe, Tobias Springenberg, Roland Hafner, Francesco Romano, Jonas Buchli, Nicolas Heess, Martin Riedmiller. "Continuous-discrete reinforcement learning for hybrid control in robotics." In Conference on Robot Learning, 735-751 (2020). https://proceedings.mlr.press/v100/neunert20a.html
  * Jiechao Xiong, Qing Wang, Zhuoran Yang, Peng Sun, Lei Han, Yang Zheng, Haobo Fu, Tong Zhang, Ji Liu, Han Liu. "Parametrized Deep Q-Networks Learning: Reinforcement Learning with Discrete-Continuous Hybrid Action Space." arXiv preprint arXiv:1810.0639 (2018). https://arxiv.org/abs/1810.06394

---

## Week 12 (November 18) — RL Competition Round 2
* [Leaderboard: RL Competition Round 2]()
* [Announcement: RL Competition Round 3]()
---

## Week 13 (November 25) — Distributed Reinforcement Learning
* [Lecture]()
* Reference
  * Volodymyr Mnih, Adria Puigdomenech Badia, Mehdi Mirza, Alex Graves, Timothy Lillicrap, Tim Harley, David Silver, Koray Kavukcuoglu. "Asynchronous methods for deep reinforcement learning." In Proceedings of The 33rd International Conference on Machine Learning, PMLR 48:1928-1937 (2016). https://proceedings.mlr.press/v48/mniha16.html
  * Lasse Espeholt, Hubert Soyer, Remi Munos, Karen Simonyan, Vlad Mnih, Tom Ward, Yotam Doron, Vlad Firoiu, Tim Harley, Iain Dunning, Shane Legg, Koray Kavukcuoglu. "IMPALA: Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures". In Proceedings of the 35th International Conference on Machine Learning, PMLR 80:1407-1416 (2018). https://proceedings.mlr.press/v80/espeholt18a.html
  * Lasse Espeholt, Raphaël Marinier, Piotr Stanczyk, Ke Wang, and Marcin Michalski. "Seed rl: Scalable and efficient deep-rl with accelerated central inference." arXiv preprint arXiv:1910.06591 (2019). https://arxiv.org/abs/1910.06591
  * Steven Kapturowski, Georg Ostrovski, John Quan, Remi Munos, and Will Dabney. "Recurrent experience replay in distributed reinforcement learning." In International conference on learning representations (2019). https://openreview.net/forum?id=r1lyTjAqYX&utm_campaign=RL

---

## Week 14 (December 02) — Distributional Reinforcement Learning / Evolutionary Reinforcement Learning
* [Lecture]()
* Reference
    * [Al20] Chap. 6 - 7
    * Marc G. Bellemare, Will Dabney, Rémi Munos. "A Distributional Perspective on Reinforcement Learning." In Proceedings of the 34th International Conference on Machine Learning, PMLR 70:449-458 (2017). https://proceedings.mlr.press/v70/bellemare17a.html
    * Will Dabney, Mark Rowland, Marc G. Bellemare, Rémi Munos. "Distributional Reinforcement Learning with Quantile Regression." In Proceedings of the AAAI Conference on Artificial Intelligence, 32(1) (2018). https://doi.org/10.1609/aaai.v32i1.11791
    * Will Dabney, Georg Ostrovski, David Silver, Rémi Munos. "Implicit Quantile Networks for Distributional Reinforcement Learning." In Proceedings of the 35th International Conference on Machine Learning, PMLR 80:1096-1105 (2018). https://proceedings.mlr.press/v80/dabney18a.html
    * Tim Salimans, Jonathan Ho, Xi Chen, Szymon Sidor, Ilya Sutskever. "Evolution Strategies as a Scalable Alternative to Reinforcement Learning". arXiv preprint arXiv:1703.03864 (2017). https://arxiv.org/abs/1703.03864
---

## Week 15 (December 09) — RL Competition Round 3
* [Leaderboard: RL Competition Round 3]()

