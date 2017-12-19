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

def checkr(r,c):
    if ship3 == ship2 or ship3 == ship1:
        r = randint(1,2)
        checkr(r, c)
        checkc(r, c)
        print("checking r:",r)
        return r
        print( r)
    else:
        return r

def checkc(r,c):
    if ship3 == ship2 or ship3 == ship1:
        r = randint(1,2)
        checkc(r, c)
        checkr(r, c)
        print("checking c:",c)
        return c
        print( c)
    else:
        return c

shipr = checkr(s2r,s2c)
shipc = checkc(s2r,s2c)
print(str(shipr))
print(shipc)

string = []
string.append(shipr)
string.append(shipc)
print(string)
