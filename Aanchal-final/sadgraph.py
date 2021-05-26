
Import matplotlib.pyplot as plt
Freq = [1, 12, 9, 18, 12, 8, 7, 3, 6, 4, 25, 26, 19, 2,
    5, 14, 21, 24, 26, 23, 19, 20, 14, 13, 2, 3, 27]*16
C = [0, 5, 10, 15, 20, 25, 30]
plt.hist(Freq, C, rwidth=0.8)
plt.xticks(c)
plt.xlabel(“Number of days”)
plt.yticks((range(0, 101, 5))
plt.ylabel(“Percentage”)
plt.title(“SAD”)
