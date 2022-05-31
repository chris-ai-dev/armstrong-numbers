# How can you make this more scalable and reusable later?
def find_armstrong_numbers(numbers):
    #input is a list
    #output is a list of the armstrong number
    
    #want to check each element in list
    #iterate over list could
        #sperate each element into indivual numbers
        #map indiv element

        #use the new element to raise them then add back togther
        #check that they equal to the input
        #add to new list

    armstrong_list = []

    for i in numbers:
        #print(i)
        single_num = [int(a) for a in str(i)]
        #print(single_num) [1, 5, 3]
        mult = len(single_num)
        #print(mult)
        if mult == 1:
            armstrong_list.append(single_num[0])
        elif mult > 1: 
            for j+9 in single_num:
                #raise each element by mulipler
                answer = j ** mult
            
                armstrong_list.append(answer)
    
    return single_num






#example of armstrong numbers are 153 = 1^3 + 5^3+3^3 = 1 +125 +27 = 153
#another is 5 = 5^1 = 5, no 2 digit armstrong nubers

#testcases
print(find_armstrong_numbers(list(range(0,100))))
#== [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])