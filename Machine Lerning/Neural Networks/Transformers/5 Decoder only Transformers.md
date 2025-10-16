# Masked Self Attention

* self attention calculates the similarity between itself and all other words including
* masked self attention only calculates the similarity against only previous tokens and itself
<img width="702" height="384" alt="image" src="https://github.com/user-attachments/assets/5910c421-88ec-4787-a07e-ec2bbdaa54bb" />

# Difference between normal Transformer and Decoder only transformer
* As we just saw a decoder only transformer uses the exact same con=mponents to encode the prompt that it uses to generate the output
* It uses Masked Self Attention
* Decoder only transformer has single unit
* Normal transformer has encoder and decoder and uses self attention which calculate the self attention with each and every word including itself
* During training a normal transformer uses masked self attention in decoder (output values)
* However decoder-only transformer uses self attention uses 
* <img width="1058" height="592" alt="image" src="https://github.com/user-attachments/assets/88428a70-b102-4e19-98f1-cd0de4893585" />
* 
* These models form basis for **ChatGPT** **Gemini**
*  They can 
