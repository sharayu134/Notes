#  Sequence to Sequence problem can be solved with Encoder-Decoder problem

* lets understand seq2seq problems (translation)
  * convert let's go in spanish
  * sequence of amino acids to be translated to 3D structures like alpha helics
 
* In case of translations the length of sentenses are not the same they differ in length even translated spanish sentense does not have encoder decoder
* **LSTM** can pistch in here as it deals with variable length
* we use word embeddings as we need to convert the word into numbers
* <EOS> is added to know where the sentence ends - End Of Sentence
* So input from Embedding layer will go into LSTM
  <img width="226" height="257" alt="image" src="https://github.com/user-attachments/assets/3a351bb0-20c1-4e75-a216-9d1f22e73906" />
* Now we unroll LSTM by giving one by one input to embedding
  <img width="446" height="257" alt="image" src="https://github.com/user-attachments/assets/f514eb42-daa6-408f-9a19-325aac18fa19" />
* LSTM will keep the weight same for each and every new input
* Now to have more weights and biases few more LSTM layers are added
<img width="446" height="377" alt="image" src="https://github.com/user-attachments/assets/d7910d6e-4b4e-4ebe-8f8b-438d4f1b8db7" />
* These LSTMs have their own set of weights and biases
* Now the outputs from layer 1 will be passed to layer 2 as input
* We also initialise the Long and Short term memory
* This becomes the encoder part of the Encoder-Decoder
<img width="435" height="395" alt="image" src="https://github.com/user-attachments/assets/b7b8e8de-6b13-48f2-a9d0-90e681703d33" />
* The Long(cell) and Short(hidden) term are called as Context Vectors
* Now we need to decode the context vector
* Connect the Long and Short term memories to new layers of LSTM
* These LSTMs from decoder are separate from encoder
* Context Vector is used to initialize the memories in Decoder
* The input will go through the embedding layer then it will go through the above LSTM
* the decodes starts with the embedding values for <EOS> token
 <img width="834" height="532" alt="image" src="https://github.com/user-attachments/assets/50182daf-df64-4147-9821-7fda1acb069a" />
* It then sent through embedding to 2 LSTM layers
* Then they are passed through Fully connected layer
<img width="864" height="532" alt="image" src="https://github.com/user-attachments/assets/0fb6737b-5c58-4632-b364-a6619e86f433" />
*  This FC has 2 inputs from previous LSTMs are 4 output tokens in spanish
*  then it goes to softmax function
  <img width="864" height="532" alt="image" src="https://github.com/user-attachments/assets/03187d49-3dc3-4a46-bba8-88277e33f335" />
* The decoder does not stop untill <EOS>
* so input next vamos to decoder so it again goes through Embedding, 2 LSTMS, the FC, softmax to give <EOS>
<img width="1031" height="532" alt="image" src="https://github.com/user-attachments/assets/34eccb2b-fd1b-4187-9bbb-16a7a145fe60" />
* translation done



