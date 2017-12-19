from random import randint

s1r = 1
s1c = 1
s1r2 = 1
s1c2 = 2

ship1 = []
ship1.append(s1r)
ship1.append(s1c)
ship2 = []
ship2.append(s1r2)
ship2.append(s1c2)

s2r = 1
s2c = 1

ship3 = []
ship3.append(s2r)
ship3.append(s2c)
print( ship3)

ship4 = [2, 1]

while ship3 == ship1 or ship3 == ship2 or ship3 == ship4:
    print("Still the same")
    s2r = randint(1,2)
    s2c = randint(1,2)
    ship3 = []
    ship3.append(s2r)
    ship3.append(s2c)
    print( ship3)



print(ship1, ship2, ship3)
