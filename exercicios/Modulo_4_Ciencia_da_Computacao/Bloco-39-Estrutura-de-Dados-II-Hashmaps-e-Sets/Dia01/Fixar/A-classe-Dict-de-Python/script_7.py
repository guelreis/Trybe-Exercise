double = {i: i*2 for i in range(3, 7)}

for key in double.keys():
	if key % 2 is not 0:
		double[key] = key * 3


print(double)