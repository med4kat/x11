# imropt random method from the library
import random

# function to generate two digit number and multiply by 11 
def two_digit_mul_by_11():
    # generate random two digit int
    x = random.randint(11, 99)
    # multiply int by 11
    y = x * 11

    print(f"{x}*11=")

    return y

## function to generate three digit number and multiply by 11
def three_digit_mul_by_11():
    x = random.randint(100, 999)
    y = x * 11

    print(f"{x}*11=")

    return y
