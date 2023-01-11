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
    int v1;
    int v2;
    std::cout << "Number 1: ";
    std::cin >> v1;
    std::cout << "Number 2: ";
    std::cin >> v2;
    int vari = gcd(v1,v2);
    std::cout << vari;
}