* pruning prevents overfitting the data for Regrassion Trees 
* Check variance and overfitting and otehr trees first
* Cost complexity pruining - aka weekeast link pruning
* Pruning is actually replacing the leaves to one common leaf like this one if full tree do not consider blurring here see whole tree  <img width="755" height="730" alt="image" src="https://github.com/user-attachments/assets/8debe1c9-81ba-4fe6-87c2-3d9d51b0e8cf" />

* This one is we have combined two leaves to one <img width="755" height="730" alt="image" src="https://github.com/user-attachments/assets/53493749-f55d-445e-97c6-7cfa857770f7" />
* <img width="755" height="730" alt="image" src="https://github.com/user-attachments/assets/628bd6db-ac79-48c9-8f13-1fb67dbc9a99" />
* This will go till one root node remains like below
* <img width="755" height="730" alt="image" src="https://github.com/user-attachments/assets/0d03a47d-3430-4aa5-9b80-848b0cd9726f" />
* <img width="755" height="730" alt="image" src="https://github.com/user-attachments/assets/eaf3c4d3-a0e1-493c-b3e0-cc0550515a96" />
* <img width="755" height="730" alt="image" src="https://github.com/user-attachments/assets/bde1dd57-2125-4672-8ba0-2eedf901addf" />
* <img width="755" height="730" alt="image" src="https://github.com/user-attachments/assets/5adb3fe2-99ac-4974-9144-8881e42c3bf0" />
* So how do we decide on which tree to use <img width="1247" height="730" alt="image" src="https://github.com/user-attachments/assets/514b5e01-68de-4598-a7d3-7c2276ec8870" />
* First step in this method Cost complexity pruining - aka weekeast link pruning is calculating Sum of Residual Square (SSR)
* Start with origin full sized tree calculate for all
* <img width="1247" height="730" alt="image" src="https://github.com/user-attachments/assets/14e665df-21b0-4ca7-a7e8-ec372543c849" />
* We dicide using the Tree score = SSR + alpha * T (T is number of leavse Terminal nodes )  (alpha is tuning parameter using cross validation)
* Calculate tree score for each tree it comes like this <img width="1247" height="730" alt="image" src="https://github.com/user-attachments/assets/e5a0bf97-0e25-4b3f-a7ae-e67fb52a6da7" />
* Alpha appretiates the lesser number of tree nodes in final score
* The tree score is different for different alpha
* SO it choosing value affects choosing the tree







