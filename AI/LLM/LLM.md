* LLMs are instances of foundation **models**
* foundation models are pre-trained on unlabelled and self-supervised data
* models learns from patterns in data in generalisable and adaptable way
* this data is text, text, and text like things (code, books, articles, conversations ) **language**
* this data is enourmous in petabytes
* 1GB of text file has 178million words -> 1PB has 1million GB this is **large**
* even the parameters can be in billions
* LLM - data + architecture + training
* Architecture -> transformer -> handles sequences of data, understand context of each word in relation to every other word
* Training -> predict next words in a sentense
* like to predict whats next to **the sky is blue..** it will predict something like **bug** and after itrations it will figure out it's **blue**
* finetuning can make general model expert in specific task

this is in summarisation is large building
* first step is tokenisation (almost word, but large words are split context wise summarisation - sum + ari + sation, buidling -is not sploit )
  this is in sum sum + ari + sation large buidling
* Embedding (represent tokens in numbers 1D vector)
  <img width="1047" alt="image" src="https://github.com/user-attachments/assets/279e8d80-26b2-4377-8b51-da052992dc3d" />

* How one word is related to other 2D vector 
<img width="1047" alt="image" src="https://github.com/user-attachments/assets/151f51d9-3c98-4c4b-97f0-c1035ac86996" />
* this one to another 2D embedding is saved in vector databse, these databases are highly optimised for retrival,management of vectors

* Transformers convert input matrix to output matrix and convert that output to words
* multi head atention algorithm

* as being seen what goes in comes out, the input feed needs to be valid carrect 
