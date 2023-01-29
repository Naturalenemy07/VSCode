#include <iostream>

int main()
{
    //get three integers from user
    int input_1, input_2, input_3;
    std::cout << "Number 1: ";
    std::cin >> input_1;
    std::cout << "Number 2: ";
    std::cin >> input_2; 
    std::cout << "Number 3: ";
    std::cin >> input_3;

    //Compare the integers
    if(input_1 == input_2 && input_2 == input_3) {
        std::cout << "equal!\n";
    } else {
        std::cout << "not equal\n";
    }

}