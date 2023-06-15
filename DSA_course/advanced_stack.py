#leetcode 227 - basic calculator II
#integer division
#the difficulty is PEMDAS
#we don't know when are going to reach operator or space or how many characters comprise each number

import math

def calculate(s):
    #num keeps track of the num ahead of the operator
    num = ""
    #sign will be the previous sign
    sign = None
    stack = []
    i=0

    while i <= len(s):
        if not i == len(s): char = s[i]
        else: char = "$"

        if char == " ": continue

        #if char is number, then add to num
        if char.isdigit():
            num += char
        else:
            #if reach this block, we know that we hit an operator
            num = int(num)
            print("else block", num)

            if not sign or sign == "+":
                stack.append(num)
                print("+", stack)
            elif sign == "-":
                stack.append(-num)
                print("-", stack)
            elif sign == "*":
                multipliedNum = stack.pop() * num
                stack.append(multipliedNum)
                print("*", stack)
            elif sign == "/":
                dividedNum = stack.pop() // num
                stack.append(dividedNum)
                print("/", stack)

            sign = char
            print("sign", sign)
            num = ""

        i+=1

    print("stack before while", stack)
    #at the end of the loop will have result of any multiplication or division in the stack
    #if the sign was "-", then push the negative of that number in the stack
    #therefore can simply sum all the remaining numbers in the stack
    while(len(stack) > 1):
        stack.append(stack.pop() + stack.pop())


    return stack.pop()



print(calculate("7*8+2"))
