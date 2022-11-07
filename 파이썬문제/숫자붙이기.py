import sys
text = sys.stdin.readline()
result = ''

for i in text :
    if i.isupper() :
        num = ord(i) + 13
        if num > 90 :
            num -= 26
        result += chr(num)

    elif i.islower() :
        num = ord(i) + 13
        if num > 122 :
            num -= 26
        result += chr(num)

    else :
        result += i
print(result)