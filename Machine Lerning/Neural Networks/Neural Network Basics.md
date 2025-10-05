* take example of drug which treated illness, three groups given different dosages
* The data looks like this <img width="707" height="404" alt="image" src="https://github.com/user-attachments/assets/189f016f-fbc0-463c-9cc2-096e9dd51276" />

* like linear regression we cannot fit straight line to this <img width="707" height="404" alt="image" src="https://github.com/user-attachments/assets/eefde6d6-a930-4295-a1e6-b08284f9e6b8" />
* But neural network can fit squiggle to the data <img width="707" height="404" alt="image" src="https://github.com/user-attachments/assets/24d17361-3873-4e70-a744-e849a6422b80" />
* Neural network can fit any kind of complecated squiggles
* So Neural netowork consists of nodes, connections between noodes,the numbers along each connection represent parameters values weere estimated when this neural network was fit to data
* <img width="707" height="479" alt="image" src="https://github.com/user-attachments/assets/4f21b565-c795-448a-9469-b294a71e45d1" />

* you can say they are alalogous to slope and intercept in linear regression (these are found using backpropagation)
* <img width="707" height="479" alt="image" src="https://github.com/user-attachments/assets/c9d19991-9ee1-4b80-8a4f-68bd80cd4d25" />

* these identical curves can be reshaped by the parameter values and the add together to get the squiggle to fit the data
* There are many common bent or curved lines that we can choose for a neural network
* This one is softplus <img width="707" height="479" alt="image" src="https://github.com/user-attachments/assets/0cd16228-f590-4034-92d2-942579fc0262" />

* ReLU <img width="707" height="479" alt="image" src="https://github.com/user-attachments/assets/260c7249-6ba2-4cf2-8dc8-1bb92389cde9" />
* Sigmoid <img width="707" height="479" alt="image" src="https://github.com/user-attachments/assets/6e4d797e-2936-412e-8033-6e0ad9047db1" />
* These curves or bent lines are called activation functions
* We have taken example of simple neural network, but in actual the real nns are complicated
* There could be multiple input, output nodes and multiple hidden layerd with multiple nodes
* So how do you know how many number of layers you need for a model, you basically keep adding more until you get good result
* Simple neural net looks like this <img width="1659" height="965" alt="image" src="https://github.com/user-attachments/assets/0bfea44d-fe08-4234-9af8-329ced0282be" />
* Let pass zero through the neural net, it will get multiplied by -34.4 nd we add 2.14 to get x coordinate
* softplus function is log(1+e^x) log is log to base e in machine learning
* we will keep doing this from 0 to 1 like 0, 0.1 ... and plot the graph
* <img width="1296" height="838" alt="image" src="https://github.com/user-attachments/assets/fd8e8fbc-5db6-42de-bf6d-1fc07ae8ce03" />

*  <img width="1806" height="838" alt="image" src="https://github.com/user-attachments/assets/2dabce31-43fa-49cc-bdba-0d0cd0cbcac9" />

*  next is multiplying the output of previous value by -1.30 this gives an new graph altogether
*  <img width="1673" height="838" alt="image" src="https://github.com/user-attachments/assets/621ba198-2b76-4ea4-a676-fbbe9a18a44b" />

*   <img width="1673" height="1059" alt="image" src="https://github.com/user-attachments/assets/78d33985-7106-4038-9f03-fb42cfec8915" />

*   Same thing will happen <img width="1673" height="1059" alt="image" src="https://github.com/user-attachments/assets/0f168916-47c7-482c-8476-8c6ef9739525" />

*   <img width="1673" height="1059" alt="image" src="https://github.com/user-attachments/assets/79e88d28-c790-41cf-8fd9-824f894f592e" />

*   <img width="1920" height="1059" alt="image" src="https://github.com/user-attachments/assets/1a889909-4e28-4ae3-8f4c-b678271dee67" />

*   <img width="1920" height="1059" alt="image" src="https://github.com/user-attachments/assets/fa49f424-6ee4-4708-b86f-4afcca447be9" />
* <img width="1920" height="1059" alt="image" src="https://github.com/user-attachments/assets/3301056c-1b29-4957-8fd9-a998ddd4b618" />

* The parameters that we multiply by are called as **weights** and the parameters that we add is called **bias**
* Got to this file and see how it's being implemented using pytorch https://github.com/sharayu134/Notes/blob/main/Machine%20Lerning/Neural%20Networks/Neural_Network_to_recognise_handwritten_digits.ipynb



