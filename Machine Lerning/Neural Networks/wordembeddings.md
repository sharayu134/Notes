# Words Embeddings

* For any ML models including Neural Network to understand words, we need to turn words into numbers
* One way to do that is assigning one number to a word
* <img width="334" height="217" alt="image" src="https://github.com/user-attachments/assets/5bcaeec3-3999-4a44-9874-5fb8c5d5ae67" />
* in this case we can resuse repeative words
* <img width="461" height="217" alt="image" src="https://github.com/user-attachments/assets/7202b4bb-dd5e-464d-9a45-9bea2ac6581c" />
* But it means when words have same meaning they will have different number assigned
* <img width="665" height="217" alt="image" src="https://github.com/user-attachments/assets/d71fab6b-be18-47b2-ae71-5646db788181" />
* <img width="665" height="217" alt="image" src="https://github.com/user-attachments/assets/057d2a98-9a10-4670-a82e-6f16153ef2d3" />
* similar words could have similar numbers
* also same words can be used in different context or made plural or used in some other way, it might be nice to assign each word more than one number so tha Neural Net can more easily adjust to different context
*  StatQuest is Great! My cellphone's brokem, great, same word can be used both positive and negative way
*  A simple neural network can be used for the same
*  So this neural network is going to have input as words in the statement
* Adding one activation function will give one number
* each word will be associated with a weight
* <img width="410" height="361" alt="image" src="https://github.com/user-attachments/assets/f286da64-cb3e-403e-b95b-c58e862faac3" />

* we can keep adding activation functins to neural net to get additional numbers
* So as per number of activation function each word will have multiple weights
* <img width="410" height="361" alt="image" src="https://github.com/user-attachments/assets/be1ed519-d604-4f85-8718-e24c99edcd53" />
* These weigths will be initialised randomly and then optimised through backpropagation
* On order to do backpropagation we have to make predictions..
* So we will use input word to predict next word on phrase
* Example Troll2 is great, gymkata is great
* To predict what comes after troll2, input troll2 as 1 and others as 0
* <img width="946" height="538" alt="image" src="https://github.com/user-attachments/assets/f7d2b95c-4dfa-4335-b913-b220e45602a3" />
* Here we are expecting to get 1 for is when we input 1 for troll2
* So it's like classifications for next step
* All the outputs will be multiplied by new weights and go to softmax(0 or 1)
* <img width="946" height="538" alt="image" src="https://github.com/user-attachments/assets/602535fd-f750-4bd2-baa8-689570e62416" />
* we can use cross entropy loss function for backpropagation
* The new weights on the connections from the inputs to the activation functions are word embeddings
* This is how the word emn=beddings look after the backpropagtion <img width="1024" height="538" alt="image" src="https://github.com/user-attachments/assets/a2afba9a-4da7-47f5-b845-948aef2f5bdb" />
* troll2 and gymkata are now relatively close to each other compared to the other words in the training data
  <img width="1024" height="365" alt="image" src="https://github.com/user-attachments/assets/3aadaf01-e2a0-4d59-a080-4c8bca24eedd" />
* when troll2 - 1 is given in input the model predicts is as 1
  <img width="1024" height="365" alt="image" src="https://github.com/user-attachments/assets/a604dc84-7d24-4020-9cc8-a4c48d92bdcd" />
* This is how context is used by neural network to give similar words similar embedding
* So learning how a word is used helps learn how similar words used

  ## Wrod2Vec

  * uses following methods
 
    * Continuous bag of words 
      * increases the context by using the surrounding words to predict what surrounding words to predict what occurs in the middle
      * so reoll2 and great can be used to predict is
    * Skip Gram
      *  uses middle word to predict surrounding words
      *  is can be used to predict troll2, great, gymkata     

* in practice 100 or more activation functions to create a lot of embeddings per word
* also input huge like entire wikipedia is used
* word2vec might have vocabulary of 30,00,000 words and phrases
* so we have to optimise weights equal to 30,00,000(words input) * activations(100) * 2(summed up in the last) = 60,00,00,000
* training can be slow, so negative sampling is used to reduce this
* the number which are not considered for predictions will be considered as 0 in input
<img width="1024" height="542" alt="image" src="https://github.com/user-attachments/assets/e0860888-d958-4d01-8dd4-a85b2fe48785" />
* 


 




