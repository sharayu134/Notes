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
  * 





