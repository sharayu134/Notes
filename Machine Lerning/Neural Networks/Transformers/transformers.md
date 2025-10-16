* Lets see how lets go in english is transalated into spanish
## Encoder
  # 1. Word Embedding
* we use word embedding to convert words to numbers
  <img width="537" height="495" alt="image" src="https://github.com/user-attachments/assets/bae99b59-a5a5-4f59-ab85-39cf9be3fb38" />

* we pass <EOS> with vocabulaory
* this input token passes through 2 activation functions after multiplied by weight
* These weights are calculated by backpropagation
* we pass 1 for lets when we want to input lets
<img width="537" height="495" alt="image" src="https://github.com/user-attachments/assets/44af5821-87bc-476c-9626-d6aedc3ff31c" />
* 1 multiplied by weight is weight also activation function is identity function, output  is same as input 
* So the weight is number which represents lets (Embedding)
* All these weights are Embedding vector
* Here we are creating one embedding value per token but in real thousands of embeddings are created
* we keep on inputting the toeks till <EOS>
* for all these iterations we keep the same weigts for all respective the inputs

# 2. Positional Encoding Order

* squatch eats pizza and pizza eats squatch are different meaning words but same tokens
* The number that represent the word order come from sequence of altering sine and cosine squiggles
<img width="426" height="585" alt="image" src="https://github.com/user-attachments/assets/5b65cfe2-5380-4b80-862d-770ef733f759" />

<img width="1110" height="585" alt="image" src="https://github.com/user-attachments/assets/82515fcf-de81-4ed6-b4ba-738e50450c36" />

* This is how the positional encoding looks like for first input token
<img width="1110" height="613" alt="image" src="https://github.com/user-attachments/assets/1c190e99-7780-42e7-9c81-2ecfab988dba" />
<img width="1110" height="613" alt="image" src="https://github.com/user-attachments/assets/235060c1-343f-4e29-a514-a6432ffdf0b1" />
* we simply select the corresponding y-axis value for each input 
<img width="1110" height="613" alt="image" src="https://github.com/user-attachments/assets/576c9628-520a-448b-854e-a00470beaeec" />
* It's posible that the values coulds be same for two inputs as sine and cosine squiggles are repititive
  <img width="1110" height="613" alt="image" src="https://github.com/user-attachments/assets/8670b9bc-2071-47cc-805d-5c03a0cddde0" />

* However because the squiggles get wider for larger embedding positions and more the embedding values we have then the wider the squiggles get then even with a repeat value here and there we end up with unique sequence of position values for each word
* so each input will have unique position value
* Now when we check for squatch eats pizza and pizza eats squatch
* The embedding for pizza and squatch will be switched and the positional values will remain same
* so when we add positional values to the embeddings to get new positional Encoding for 1st and 3rd word
  <img width="1110" height="613" alt="image" src="https://github.com/user-attachments/assets/c69d61d2-567d-4c78-9c40-32468ecff11d" />
  * For second word it stays same as it didn't move
  * Thus positional Encoding allows a transformer to keet track of word order
  * This is how the original questions' positional encoding looks like <img width="490" height="306" alt="image" src="https://github.com/user-attachments/assets/1b0d93b6-7b85-4268-8bb8-aeeaa961b8d7" />

  # Self Attention - Relationships between words

  * If the sentence is The pizza came out of the oven and it tasted good
  * then it could refer to pizza or oven
  * If incorrectly refered it can associate it with wrong word pizza
  * Using Self-Attention we can correctly associate word it with pizza
  * Self attentions checks how similar each word including itself with all other words
 <img width="802" height="516" alt="image" src="https://github.com/user-attachments/assets/a68e236d-6986-4367-b7c0-29e192f56f66" />

  * Same for every word
  * If you looked at a lot of sentences about pizza and word it was more commonly associated with pizza than oven then the similarity score for pizza will cause it to have larger impact on how the word it is encoded by the transformer
  * SO we have calculated the 2 positional encoder values for each word<img width="802" height="259" alt="image" src="https://github.com/user-attachments/assets/698ac9ca-987f-4b9f-889b-b19e7ff0c088" />
  * Let calculate pair of Query and Key by multiplting the positional encoding outputs each
  <img width="547" height="462" alt="image" src="https://github.com/user-attachments/assets/47358ba5-4da1-4c42-801b-5b07a140b367" />
* To find out similarity we can use dot product
* By multiplying the Query with all the keys we will get the similairty between query and each word including itself
  <img width="1074" height="504" alt="image" src="https://github.com/user-attachments/assets/d3ef227f-ddc3-4b2a-b3da-6ed87b19aa21" />
* If some word is more similar to the other word or itself, the similar word or itself should have more influence on it so we do this with softmax (0,1 preserves order)
* So the out put of softmax will tell use what percentage of each word to
* Here lets is so much similar to itself than go we'll use 100% of lets to encode lets
<img width="1074" height="609" alt="image" src="https://github.com/user-attachments/assets/942f4c6d-61a9-4597-af14-9dbaf73cfbb7" />
* So now we calculate one more **value** by multiplying some weight to positional encoding output to get 2 values each for all the words
*  Then we multipy them with softmax output
*  These sums which combines separate encodingns for both input words, Lets and Go relative to their similarity to Lets are the self attention values for Let's
  <img width="1101" height="609" alt="image" src="https://github.com/user-attachments/assets/706ff7c5-e459-4f17-88ac-598818188596" />

*  Now lets calculate self attention value for go
*  The keys and values dont needed to be recalculated as they will remain same for each token
*  ONly calculating the query is left
<img width="1101" height="609" alt="image" src="https://github.com/user-attachments/assets/4017c3c6-f798-4f75-b3d4-ec17f0c6639b" />
* we will repeat same for go
* we have keys/values/ query for go
* by multiplying Query with each Keys (for both lets and go) we get similarity score then we run softmax to get the % of each word to have it's influence
* then we use **value** for the to be mutlipled by softmax outputs to get self-attention
<img width="1101" height="609" alt="image" src="https://github.com/user-attachments/assets/97353327-40d9-48e0-abde-a00014fd748d" />
<img width="1101" height="609" alt="image" src="https://github.com/user-attachments/assets/0be226f9-f131-4fba-a2fa-77b638fc3993" />
<img width="1101" height="609" alt="image" src="https://github.com/user-attachments/assets/04936ad4-b646-4c3b-9a7e-524f0949da3a" />
* So irrespective of words input to transformer we reuse same sets of weigts, for self attention Queries,Keys and Values
* we can calculate Queries, keys, values for each word simulteneously
* we don't have to calcualte the query key value for the first word first before moving to next
* and so transfoermer can take advantage of parallel computing
* As self attention contains input from each word this gives context, this helps establish how each word in the input is related to others
* to capture different relations we can have different types of self attention
  <img width="1101" height="609" alt="image" src="https://github.com/user-attachments/assets/e501303c-6024-46bf-a86b-aaba339be871" />

* In the manuscript that first described transformers they stacked 8 self attention cells and they called this multi head attention

# Residual COnnection 

* Now we take values from self-attention and word and position encoded and sum up to get residual connection values, they make easier to train complex neural networks by allowing the self attention layer to establish relationships among the input words without having to also preserve the word embedding and position encoding information
* This is all needed to sncode the input for simple transformer
<img width="1101" height="609" alt="image" src="https://github.com/user-attachments/assets/de852bae-03d6-4248-9197-3385157f9fe4" />
These 4 features allow the transformer to encode words into numbers
<img width="1101" height="609" alt="image" src="https://github.com/user-attachments/assets/bac59c53-1da8-4261-a130-1854a9364ec4" />
* This concludes the Encoder part



## Decoder

* Decoder will be given input of spanish vocabulary it will start from <EOS> some people start with <SOS> as well 
* so we first plugin one for <EOS>
* then we calculate embedding 2 values each
* then we calculate positional encoding 2 values each
* then we calculate Query Key Value for each given the same set of words
* then we multiply <EOS> Query with each other words Key and itself to calculate the similarity (dot product)
* then we pass this result through the softmax function to know what % from each word to add
* then multiply the value of <EOS> with the above to get self attention
* add self attention plus positional encoding to get residual
* 



  # 






