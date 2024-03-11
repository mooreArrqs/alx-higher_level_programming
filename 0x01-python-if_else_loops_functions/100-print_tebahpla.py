#!/usr/bin/python3

# print alternating lowercase and uppercase ASCII
# alphabets in reverse order.

for i in range(ord('z'), ord('a') - 1, - 2):
        print("{}{}".format(chr(i), chr(i - 33)), end='')
