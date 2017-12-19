from random import randint
from time import sleep
board = []
#board_size = 2
#turns = 2
#testing = 1

#board_size = input("Board Size: ")
#turns = input("Turns: ")
#testing =int(input("Debugging? (0/1): "))

difficulty = input("Difficulty? (Easy, Medium, Hard): ")


def dboard_size(board_input):
    if "easy" in board_input.lower() or "ez" in board_input.lower() or str(board_input.lower()) == "e":
        board_output = 6
        print("Easy mode!")
        return int(board_output)
    elif "med" in board_input.lower() or "medium" in board_input.lower() or str(board_input.lower()) == "m":
        board_output = 8
        print("Medium mode!")
        return int(board_output)
    elif "hard" in board_input.lower() or "hxc" in board_input.lower() or str(board_input.lower()) == "h":
        board_output = 10
        print("Hard mode!")
        return int(board_output)
    elif "test" in board_input.lower() or "testing" in board_input.lower() or str(board_input.lower()) == "t":
        board_output = input("Testing, Board Size:")
        return board_output
    else:
        print("That's not an option!")
        board_output = dboard_size(input("Do you want to play on Easy, Medium, or Hard Difficulty?: "))
        return board_output

def test1(test2):
    if "test" in difficulty.lower() or "testing" in difficulty.lower() or str(difficulty.lower()) == "t":
        test3 = 1
        return test3

board_size = int(dboard_size(difficulty))

turns = int(((board_size * board_size) + board_size)/2)

testing = tet1(difficulty)



for x in range(int(board_size)):
    board.append(["~ "] * int(board_size))

def print_board(board):
    for row in board:
        print(" ".join(row))

print( "Let's play Battleship!")
print( str(turns) + " turns to sink the enemy ship!")
print( "O = miss")
print( "X = hit")

def random_row(board):
    return randint(0, len(board) - 1)

def random_col(board):
    return randint(0, len(board) - 1)



#Making Ship 1: Section 1
ship_row = random_row(board)
ship_col = random_col(board)

ship = []
ship.append(ship_row)
ship.append(ship_col)

#ship_row = 3
#ship_col = 3
#Making Ship 1:Section 2
def ship1(rand):
    if rand == 0:
        rand2 = randint(0,1)
        if rand2 == 0:
            if int(ship_row) == int(board_size)-1:
                return (int(ship_row) - 1)
            else:            
                return (int(ship_row) + 1)
        else:
            if int(ship_row) - 1 < 0:
                return (int(ship_row) + 1)
            else:
                return (int(ship_row) - 1)
    else:
        rand3 = randint(0,1)
        if rand3 == 0:
            if int(ship_col) == int(board_size)-1:
                return (int(ship_col) - 1)
            else:            
                return (int(ship_col) + 1)
        else:
            if int(ship_col) - 1 < 0:
                return (int(ship_col) + 1)
            else:
                return (int(ship_col) - 1)
        
ship_aft = ship1(randint(0,1))

def row_col(r_c):
    if r_c == (ship_col + 1) or r_c == (ship_col - 1):
        return ship_row
    else:
        return ship_col

ship_r_c = row_col(ship_aft)

def sorting1(sort):
    if sort == ship_col:
        return ship_aft
    else:
        return ship_r_c

def sorting2(sort):
    if sort == ship_col:
        return ship_r_c
    else:
        return ship_aft

ship_row2 = sorting1(ship_r_c)
ship_col2 = sorting2(ship_r_c)

ship1_2 = []
ship1_2.append(ship_row2)
ship1_2.append(ship_col2)
#Making Ship 2: Section 1

def locac(loc):
    if loc == ship_col or loc == ship_col2:
        print( "locac changed")
        return locac(randint(0, len(board) - 1))
    else:
        return loc
        
def locar(loc):
    if loc == ship_row or loc == ship_row2:
        print( "locar changed")
        return locar(randint(0, len(board) - 1))
    else:
        return loc

ship2_row = int(randint(0, len(board) - 1))
ship2_col = int(randint(0, len(board) - 1))

ship2 = []
ship2.append(ship2_row)
ship2.append(ship2_col)

#print( ship, ship1_2, ship2)


while ship2 == ship or ship2 == ship1_2:
#    print( "Still the same1")
    ship2_row = int(randint(0, len(board) - 1))
    ship2_col = int(randint(0, len(board) - 1))
    ship2 = []
    ship2.append(ship2_row)
    ship2.append(ship2_col)
#    print(ship2)

#def overlapcheck1r(rows, cols):
#    if (rows == ship_row and cols == ship_col) or (rows == ship_row2 and cols == ship_col2):
#        print "COORD 1r REASSIGNED"
#        ship2_row = randint(0, len(board)-1)
 #       overlapcheck1c(ship2_row,ship2_col)
#    else:
 ##       print "NOTHING NEEDED"
 #       ship2_row = int(rows)
 #       
#def overlapcheck1c(rows, cols):
#    if (rows == ship_row and cols == ship_col) or (rows == ship_row2 and cols == ship_col2):
#        print "COORD 1c REASSIGNED"
#        ship2_col = randint(0, len(board)-1)
#        overlapcheck1r(ship2_col,ship2_row)
#    else:
#        print "NOTHING NEEDED"
#        ship2_col = int(cols)

#if randint(0,1) == 0:
#    overlapcheck1r(ship2_row,ship2_col)
#    overlapcheck1c(ship2_row,ship2_col)
#else:
#    overlapcheck1c(ship2_row,ship2_col)
#    overlapcheck1r(ship2_row,ship2_col)
    
    
    
    
    
    
#Making Ship 2: Section 2
def ship2(rand4):
    if rand4 == 0:
        rand5 = randint(0,1)
        if rand5 == 0:
            if int(ship2_row) == (int(board_size) -1):
                return (int(ship2_row) - 1)
            else:            
                return (int(ship2_row) + 1)
        else:
            if int(ship2_row) - 1 < 0:
                return (int(ship2_row) + 1)
            else:
                return (int(ship2_row) - 1)
    else:
        rand6 = randint(0,1)
        if rand6 == 0:
            if int(ship2_col) == (int(board_size)-1):
                return (int(ship2_col) - 1)
            else:            
                return (int(ship2_col) + 1)
        else:
            if int(ship2_col) - 1 < 0:
                return (int(ship2_col) + 1)
            else:
                return (int(ship2_col) - 1)
#first coordinate given
ship2_aft = ship2(randint(0,1))

def row_col2(r_c):
    if r_c == (ship2_col + 1) or r_c == (ship2_col - 1):
        return ship2_row
    else:
        return ship2_col
#second coordinate given
ship2_r_c = row_col2(ship2_aft)

#sorting into rows and cols
def sorting3(sort):
    if sort == ship2_col:
        return ship2_aft
    else:
        return ship2_r_c

def sorting4(sort):
    if sort == ship2_col:
        return ship2_r_c
    else:
        return ship2_aft
        

ship2_row2 = sorting3(ship2_r_c)
ship2_col2 = sorting4(ship2_r_c)


ship2_2 = []
ship2_2.append(ship2_row2)
ship2_2.append(ship2_col2)

while ship2_2 == ship or ship2_2 == ship1_2:
#    print( "Still the same2")
#    ship2_aft = ship2(randint(0,1))
#    ship2_r_c = row_col2(ship2_aft)
    ship2_row2 = sorting3(row_col2(ship2(randint(0,1))))
    ship2_col2 = sorting4(row_col2(ship2(randint(0,1))))
    ship2_2 = []
    ship2_2.append(ship2_row2)
    ship2_2.append(ship2_col2)
#    print(ship2_2)


#Making Ship2_3

def ship2_3(rand7):
    if ship2_col == ship2_col2:
        if randint(0,1) == 0:
            if ship2_row > ship2_row2:
                if int(ship2_row) == (int(board_size)-1):
                    return ship2_row2 - 1
                else:
                    return ship2_row + 1
            else:
                if int(ship2_row2) == (int(board_size)-1):
                    return ship2_row - 1
                else:
                    return ship2_row2 + 1
        else:
            if ship2_row > ship2_row2:
                if int(ship2_row2) - 1 < 0:
                    return ship2_row + 1
                else:   
                    return ship2_row2 - 1
            else:
                if int(ship2_row) - 1 < 0:
                    return ship2_row2 + 1
                else:   
                    return ship2_row - 1
    else: 
        if randint(0,1) == 0:
            if ship2_col > ship2_col2:
                if int(ship2_col) == (int(board_size)-1):
                    return ship2_col2 - 1
                else:
                    return ship2_col + 1
            else:
                if int(ship2_col2) == (int(board_size)-1):
                    return ship2_col - 1
                else:    
                    return ship2_col2 + 1
        else:
            if ship2_col > ship2_col2:
                if int(ship2_col2) - 1 < 0:
                    return ship2_col + 1
                else:
                    return ship2_col2 - 1        
            else:
                if int(ship2_col) - 1 < 0:
                    return ship2_col2 + 1
                else:       
                    return ship2_col - 1
            

#first coordinate given
ship2_aft2 = ship2_3(randint(0,1))

def row2_col2(r_c):
    if r_c == (ship2_col + 1) or r_c == (ship2_col - 1) or r_c == (ship2_col2 + 1) or r_c == (ship2_col2 - 1):
        return ship2_row2
    else:
        return ship2_col2
#second coordinate given
ship2_r_c2 = row2_col2(ship2_aft2)

#sorting into rows and cols
def sorting5(sort):
    if sort == ship2_col2:
        return ship2_aft2
    else:
        return ship2_r_c2

def sorting6(sort):
    if sort == ship2_col2:
        return ship2_r_c2
    else:
        return ship2_aft2


ship2_row3 = sorting5(ship2_r_c)
ship2_col3 = sorting6(ship2_r_c)

ship2_3 = []
ship2_3.append(ship2_row3)
ship2_3.append(ship2_col3)
    

#print (ship2_row3)
#print (ship2_col3)
#checking for overlap
#def overlapcheck2r(rows, cols):
#    if (rows == ship_row and cols == ship_col) or (rows == ship_row2 and cols == ship_col2):
#        print "COORD 2r REASSIGNED"
#        ship2_aft = ship2(randint(0,1))
##        ship2_r_c = row_col2(ship2_aft)
##        ship2_row2 = overlapcheck2c(sorting3(ship2_r_c),ship2_col2)
#        overlapcheck2c(ship2_row2,ship2_col2)
#    else:
#print "NOTHING NEEDED"
##        ship2_row2 = int(rows)
        
#def overlapcheck2c(rows, cols):
#    if (rows == ship_row and cols == ship_col) or (rows == ship_row2 and cols == #ship_col2):
#        print "COORD 2c REASSIGNED"
#        ship2_aft = ship2(randint(0,1))
#        ship2_r_c = row_col2(ship2_aft)
#        ship2_col2 = overlapcheck2r(sorting3(ship2_r_c),ship2_col2)
#        overlapcheck2r(ship2_row2,ship2_col2)
#    else:
#        print "NOTHING NEEDED"
#        ship2_col2 = int(cols)

#if randint(0,1) == 0:
#overlapcheck2r(ship2_row2,ship2_col2)
#    overlapcheck2c(ship2_row2,ship2_col2)
#else:
#    overlapcheck2c(ship2_row2,ship2_col2)
#    overlapcheck2r(ship2_row2,ship2_col2)


# Debugging, Uncomment for location

if testing == 1:
    board[ship_row][ship_col] = "W "
    board[ship_row2][ship_col2] = "W "
    board[ship2_row][ship2_col] = "Y "
    board[ship2_row2][ship2_col2] = "Y "
    board[ship2_row3][ship2_col3] = "Y "

print_board(board)

if testing == 1:
    print( "Testing: Ship 1: (" + str(ship_col+1) + "," + str(ship_row+1) +")(" + str(ship_col2+1) + "," + str(ship_row2+1) +")")
    print( "Testing: Ship 2: (" + str(ship2_col+1) +"," + str(ship2_row+1) +")(" + str(ship2_col2+1) + "," + str(ship2_row2+1) +")(" + str(ship2_col3+1) + "," + str(ship2_row3+1) +")")


# Everything from here on should go in your for loop!
# Be sure to indent four spaces!
def guess_c(guec):
    if str(guec) == '':
        print ("That's not a coordinate!")
        return int(guess_c(input("Guess Col:"))-1)
    else:
        return int(guec)

def guess_r(guer):
    if str(guer) == '':
        print ("That's not a coordinate!")
        return int(guess_r(input("Guess Row:"))-1)
    else:
        return int(guer)

def out_boarc(oboac):
    if int(oboac) > int(board_size)-1:
        print ("That's not even in the Ocean!")
        return int(out_boarc(int(guess_c(input("Guess Col:")))-1))
    else:
        return int(oboac)


def out_boarr(oboar):
    if int(oboar) > int(board_size)-1:
        print ("That's not even in the Ocean!")
        return int(out_boarr(int(guess_r(input("Guess Row:")))-1))
    else:
        return int(oboar)


for turn in range(int(turns)):
    
    print( "Turn:", turn+1)
    guess_col = int(out_boarc(guess_c(input("Guess Col:"))-1))
    guess_row = int(out_boarr(guess_r(input("Guess Row:"))-1))

    
    if guess_row == ship_row and guess_col == ship_col:
        print ( "You hit my battleship!")
        board[guess_row][guess_col] = "X "
        print (print_board(board))
        if board[ship_row][ship_col] == "X " and board[ship_row2][ship_col2] == "X " and board[ship2_row][ship2_col] == "X " and board[ship2_row2][ship2_col2] == "X " and board[ship2_row3][ship2_col3] == "X ":
            print ("Congratulations! You sunk my Battleships!")
            break
    elif guess_row == ship_row2 and guess_col == ship_col2:
        print ("You hit my battleship!")
        board[guess_row][guess_col] = "X "
        print (print_board(board))
        if board[ship_row][ship_col] == "X " and board[ship_row2][ship_col2] == "X " and board[ship2_row][ship2_col] == "X " and board[ship2_row2][ship2_col2] == "X " and board[ship2_row3][ship2_col3] == "X ":
            print( "Congratulations! You sunk my Battleships!")
            break
    elif guess_row == ship2_row and guess_col == ship2_col:
        print( "You hit my battleship!")
        board[guess_row][guess_col] = "X "
        print( print_board(board))
        if board[ship_row][ship_col] == "X " and board[ship_row2][ship_col2] == "X " and board[ship2_row][ship2_col] == "X " and board[ship2_row2][ship2_col2] == "X " and board[ship2_row3][ship2_col3] == "X ":
            print( "Congratulations! You sunk my Battleships!")
            break
    elif guess_row == ship2_row2 and guess_col == ship2_col2:
        print ("You hit my battleship!")
        board[guess_row][guess_col] = "X "
        print (print_board(board))
        if board[ship_row][ship_col] == "X " and board[ship_row2][ship_col2] == "X " and board[ship2_row][ship2_col] == "X " and board[ship2_row2][ship2_col2] == "X " and board[ship2_row3][ship2_col3] == "X ":
            print ("Congratulations! You sunk my Battleships!")
            break
    elif guess_row == ship2_row3 and guess_col == ship2_col3:
        print ("You hit my battleship!")
        board[guess_row][guess_col] = "X "
        print (print_board(board))
        if board[ship_row][ship_col] == "X " and board[ship_row2][ship_col2] == "X " and board[ship2_row][ship2_col] == "X " and board[ship2_row2][ship2_col2] == "X " and board[ship2_row3][ship2_col3] == "X ":
            print ("Congratulations! You sunk my Battleships!")
            break
    
    else:
        if turn == (int(turns)-1):
            print ("Game Over, out of turns!")
        else:
            if (guess_row < 0 or guess_row > (int(board_size)-1)) or (guess_col < 0 or guess_col > (int(board_size)-1)):
                print ("Oops, that's not even in the ocean.")
            elif(board[guess_row][guess_col] == "O "):
                print ("You guessed that one already.")
            else:
                print ("You missed my battleship!")
        board[guess_row][guess_col] = "O "
        print (print_board(board))
