#include<iostream>
#include<string>

class MyClass {
    public:
        int myNum;
};

int main() {
    MyClass myObj;
    myObj.myNum = 15;

    std::cout << myObj.myNum << "\n";
    return 0;
}