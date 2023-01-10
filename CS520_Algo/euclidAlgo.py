# Classic function to implement Euclids algorithm for finding the greatest common divisor

def gcd(p,q):
    if q == 0:
        return p
    else:
        r = p % q
        return gcd(q,r)

print(gcd(102,24))