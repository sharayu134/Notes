# Attentions

* In basic encoder decoder model doesn't work well when there are very long inputs as the LSTM carries only two vectos for Long and Short term vectors some input gets lost in this case
* LSTM compresses the entire input sentence into a single context vector
<img width="1110" height="565" alt="image" src="https://github.com/user-attachments/assets/1ed6fecc-6e7a-4e57-84c6-fe7900b45227" />
*  Here if frirst input don't gets lost the meaning of the word changes
<img width="1110" height="565" alt="image" src="https://github.com/user-attachments/assets/289baaf1-df8d-4fe8-8c06-f2d4b47cf7be" />
*  So in RNN same path was used to pass the context so it crated problems for larger input
*  So Long and Short term memory were saved in different path in LSTM
*  SO main idea of attention is to add a bunch of new paths from ENcoder to Decoder one per input so that each step of  the Decoder can directly access input values
<img width="1110" height="403" alt="image" src="https://github.com/user-attachments/assets/07b056cb-fc4d-4f81-9ce0-26b7a652a5ce" />
* Lets consider basic Encoder-Decoder with Embedding Layer and 2 LSTMs each
* However the idea of Attentions is for each step in the Decoder to have direct access to the inputs
<img width="1110" height="403" alt="image" src="https://github.com/user-attachments/assets/138f6964-c35f-4ab2-942d-649a413cee95" />
<img width="1110" height="595" alt="image" src="https://github.com/user-attachments/assets/025d11b1-5a87-405f-99cd-cf8738b4c62a" />
* there are no rules to add attention to encoder decoder
* each manuscript has a slightly different way of doing it
* following is just one example
<img width="536" height="267" alt="image" src="https://github.com/user-attachments/assets/43a08b6f-84e2-4556-b055-e689f47db906" />
* lets say we are translating lets go we given input lets to encoder and input <EOS> to decoder
<img width="809" height="307" alt="image" src="https://github.com/user-attachments/assets/a696e08b-58be-4ef9-965f-645dc2177024" />
* We calculate cosine similarity between first pair of LSTM cells in encoder for lets and ouput values from first pair of LSTM cells in Decoder for the <EOS>
* We do this for both Long and Short term memories
<img width="866" height="423" alt="image" src="https://github.com/user-attachments/assets/a53908a7-a41b-4257-b77b-f90d857eca0b" />
<img width="1081" height="610" alt="image" src="https://github.com/user-attachments/assets/ded2b57d-9f6c-40c4-8e10-e29ad5c8b194" />
* Here we can just use dot product from cosine similarity as we just case about similarity, denominator of cosine similairty scales it to 1
<img width="1081" height="610" alt="image" src="https://github.com/user-attachments/assets/78f80423-38cc-47bc-b3c6-e96c9d4dcc50" />
<img width="1081" height="610" alt="image" src="https://github.com/user-attachments/assets/01a5fcce-7182-4ccc-b0b3-c63748647db1" />
* we have to calculate the dot product for both lets and go
* whichever has a greater dot product it will be considered to have more influence
* we run through soft max to get values between 0 and 1
* The ouput of the sofmax function can determine what percentage of each encoded input word we should use when decodeing
<img width="1081" height="610" alt="image" src="https://github.com/user-attachments/assets/d7216872-a679-4e7d-9e91-9e709bc56188" />
* now we scale lets by it's % from softmax, and scale go by it's % from softmax
* we can now determine the first output word by plugging attention into fully connected layer
* plug encodings for <EOS> into same FC layer
* and all the out put values to be passed through softmax function
<img width="1081" height="610" alt="image" src="https://github.com/user-attachments/assets/d41ad133-fc9e-4aa9-8f8a-f0d376942400" />
* even though we did get vamos the translation we are waiting for <EOS>
* so input vamos to decoder
* pass the vamos through just embedding plus LSTM then FC and softmax to et <EOS>
<img width="272" height="241" alt="image" src="https://github.com/user-attachments/assets/fd44414e-1f38-40a1-8e94-bfc1c1efa95d" />

<img width="272" height="241" alt="image" src="https://github.com/user-attachments/assets/3e551b9e-ea7f-4ad5-b6e0-87b505057d34" />
<img width="379" height="241" alt="image" src="https://github.com/user-attachments/assets/65cc7ae5-66a0-41b6-babb-978ff5ac8ee9" />
If we look at it we no more need attention




