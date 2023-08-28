
	```
 %% Arrays
 	var books = [10] string // declaration
     	var books = [5] uint {}  //with no element
    	var books = [6] bool {true, false, false} // with elements

	var books = [10]string{"nana", "K", "f"}
	fmt.Println(books)
	fmt.Printf("%T \n", books)
	fmt.Println(books[0])
	books[0] = "kk"
	fmt.Println(books)
 	fmt.Println(len(books))

  dynamic array  %% Slices
  
        var ar []string
	ar[0] = "s"
	fmt.Print(ar)


  
