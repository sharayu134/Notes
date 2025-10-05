To understand what convolution is see this video https://www.youtube.com/watch?v=KuXjwB4LzSA

# CNN
* Image classification with convolutional neural networks
* coming back from a multilayer perceptron example, we are not sure about the performance let say given just a pixel shift of an handwritten digit we dont know of it can predict well
* But we know that the images could have correlated pixels
* <img width="1122" height="456" alt="image" src="https://github.com/user-attachments/assets/25d7809a-68f2-4c5a-95a4-1f9626a7fdd1" />
* <img width="1122" height="456" alt="image" src="https://github.com/user-attachments/assets/3abfd7b3-a2ad-424f-b399-87bed87886fa" />
* <img width="1122" height="456" alt="image" src="https://github.com/user-attachments/assets/51b0f49c-d6cd-428f-bb5d-b6c350c1e4b3" />
* <img width="1122" height="456" alt="image" src="https://github.com/user-attachments/assets/4b06fdd4-cd59-4766-9ddf-4869edee44ac" />
* <img width="1122" height="456" alt="image" src="https://github.com/user-attachments/assets/4280954c-a921-463b-93b7-6d2785a4879a" />
* <img width="1122" height="456" alt="image" src="https://github.com/user-attachments/assets/fa26b520-830c-4e64-8820-42ffe79a39df" />
* So we can use convolutions to make use of these correlations
* Thus classifications of large and complicated images is done using CNN
* 3 things make CNN practical
  * Reduce number of pixels
  * Tolerate small shifts where the pixels are in image
  * Take advantage of the correlations that we observe in complex images

* input image we are taking of 0 and 1 of 6*6, where computer tries to recognise the tictactoe O or X
* First step  a convolutional neural network takes is to apply filter aka kernel to input image
* <img width="1011" height="673" alt="image" src="https://github.com/user-attachments/assets/fed6ee82-2dbe-4958-a814-e6190e1083bc" />
* Filter is smaller square of mostly 3*3 dimention
* The intencity of each pixel is determined by backpropagation
* so first we take the pixels randomly and then we backpropagate to find put the exact value
* we just multiply the first 6*6 part of image into filter we get one value (The multiplication is dot product)
* <img width="1430" height="669" alt="image" src="https://github.com/user-attachments/assets/55388bfd-95c9-4747-afab-2e8414e0e33a" />
* next we add a bias term to the value and then put it in feature map
* <img width="1430" height="686" alt="image" src="https://github.com/user-attachments/assets/266e0c4d-5274-4a2b-9fbc-2f791101594a" />
* Now we can move this filter over next pixel
* <img width="1430" height="686" alt="image" src="https://github.com/user-attachments/assets/bdf58209-8003-4cec-a17b-2519d1d1f9d4" />
* After we convolved over the image by filter gave us feature map <img width="735" height="740" alt="image" src="https://github.com/user-attachments/assets/79b9b1fb-7387-4beb-aae1-c3ec33688104" />
* <img width="1393" height="740" alt="image" src="https://github.com/user-attachments/assets/3c4afece-670e-4fa3-b127-8e1f97579570" />
* Now we pass this feature map through ReLU activstion function
* Now it looks like this as ReLU is max(0,x) <img width="1393" height="740" alt="image" src="https://github.com/user-attachments/assets/3c881402-4755-44da-8d24-3a9c7b5938c9" />
* Now again on the above output we overlap one more filter this can be max pool or mean pool but this time we are not moving over each pixel no overlap
* <img width="1134" height="740" alt="image" src="https://github.com/user-attachments/assets/eb36e2c1-a61e-4e6a-a2bc-a2f0705f17a9" />
* Max pooling did best job finding out where filter(kernel) pattern matched with actual image (CNN made use of correlations)
* <img width="1134" height="740" alt="image" src="https://github.com/user-attachments/assets/10ab1163-12cb-4889-b608-e29488ff89ee" />
* Now this output will go into normal neural network with ReLU activation function, so here the inputs of 6*6=36 was converted into 4 inputs (CNN reduced the input numbers)
* <img width="1424" height="740" alt="image" src="https://github.com/user-attachments/assets/2af379f9-a658-4744-832c-8514119edc4b" />
* This neural network will give 0/1 based output for O or X, we can also use softmax to interpret the result better way
* CNN also works for small shifts in pixels <img width="1424" height="740" alt="image" src="https://github.com/user-attachments/assets/7b6f416c-3878-477b-a3dd-ffcb25f1ebe3" />
* 















