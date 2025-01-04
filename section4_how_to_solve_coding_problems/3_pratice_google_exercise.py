# Assignment
# Mencari item yang sama, dan return boolean jika item sama maka outputnya akan True apabila sebaliknya maka output yang dihasilkan adalah False
# [1,2,3,9] Sum = 8 No 
# [1,2,4,4] Sum = 8 Yes 
# Interviewer mengatakan ini bisa berada di dalam Sebuah array atau list atau bahkan di memory
# Kita juga bisa asumsikan barisan ascending atau descending
# Di asumsikan juga index pada array kita bernilai Interger dan bisa saja + atau -


# Goals dari Interviewer adalah yaitu efisiensi dari method atau code kita dalam tackle assignment 

# array1 = [1,2,3,9] 
# array2 = [1,2,4,4]

# def cariKesamaanNilai(arr1, arr2):
#     n = {}
#     for i in range(len(arr1)):
#         if n != arr1[i]:
#             item = arr1[i]
#             n[item] = True

#     for j in range(len(arr2)):
#         if n != arr2[j]:
#             item = arr2[j]
#             n[item] = True
    
#     return False

# print(cariKesamaanNilai(array1, array2))


def cariKesamaanNilai(arr1, arr2):  
    # Buat dictionary untuk menyimpan elemen dari array pertama  
    n = {}  
    
    # Tambahkan setiap elemen dari array pertama ke dictionary  
    for item in arr1:  
        n[item] = True  
    
    # Periksa apakah ada elemen dari array kedua yang ada di dictionary  
    for item in arr2:  
        if item in n:  
            return True  
    
    # Jika tidak ada elemen yang sama, kembalikan False  
    return False  

# Contoh array  
array1 = ['a', 'b', 'c', 'x']  
array2 = ['z', 'y', 'x']  

# Cetak hasil  
print(cariKesamaanNilai(array1, array2))  
