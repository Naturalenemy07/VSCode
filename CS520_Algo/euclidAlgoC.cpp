#include <iostream>

int gcd(int p, int q) 
{
    if (q == 0) {
        return p;
    };
    int r = p % q;
    return gcd(q, r);
};

int main() 
{
    int vari = gcd(106,52);
    std::cout << vari;
}