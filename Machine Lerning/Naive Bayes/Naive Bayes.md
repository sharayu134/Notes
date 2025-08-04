
<img width="593" height="257" alt="image" src="https://github.com/user-attachments/assets/bdc6a94a-02ef-4679-ac81-908821df0599" />
<img width="593" height="257" alt="image" src="https://github.com/user-attachments/assets/3c4bbe35-575c-4022-8a49-0777195cae0e" />
<img width="593" height="331" alt="image" src="https://github.com/user-attachments/assets/685b4bee-69ff-473b-8b45-86019cb30191" />
<img width="780" height="384" alt="image" src="https://github.com/user-attachments/assets/6dc8873b-cda0-4bd1-86b6-963fac10009b" />
<img width="780" height="384" alt="image" src="https://github.com/user-attachments/assets/aee01312-3478-4e5e-8f51-6b0bbc4e8d7a" />
<img width="780" height="384" alt="image" src="https://github.com/user-attachments/assets/d001d192-0f66-4039-93ce-561fd0083bb3" />
<img width="780" height="384" alt="image" src="https://github.com/user-attachments/assets/02de1cb2-e1a0-4782-982c-4a07b07f6157" />
<img width="780" height="384" alt="image" src="https://github.com/user-attachments/assets/7f295491-905d-4bad-b141-9912e0def2b4" />
<img width="780" height="344" alt="image" src="https://github.com/user-attachments/assets/9d58059e-9838-43ef-9e88-17064e835cdd" />
<img width="780" height="344" alt="image" src="https://github.com/user-attachments/assets/a3f53d2d-b92c-4d81-bd9c-18e783e8dcc6" />
<img width="818" height="344" alt="image" src="https://github.com/user-attachments/assets/0b2f7a43-b281-4908-b581-163161415ee0" />
<img width="818" height="344" alt="image" src="https://github.com/user-attachments/assets/82869c11-aee6-491f-b684-96d4a512a9a1" />
<img width="818" height="344" alt="image" src="https://github.com/user-attachments/assets/62319d7f-8dde-4445-9454-b53515a82fce" />
<img width="818" height="344" alt="image" src="https://github.com/user-attachments/assets/1e17db7a-b5b6-4416-9d9c-5809bbf7f3d2" />
<img width="818" height="344" alt="image" src="https://github.com/user-attachments/assets/a8b8ed26-297d-4635-944f-cfde95afc100" />
<img width="818" height="344" alt="image" src="https://github.com/user-attachments/assets/fd68271d-1b03-4c63-a441-f31ef9ff576e" />
<img width="818" height="344" alt="image" src="https://github.com/user-attachments/assets/29df51f4-4b74-4be1-b2b8-a7fd90e98c69" />
<img width="818" height="344" alt="image" src="https://github.com/user-attachments/assets/aa43be0c-7bd2-4b51-ae69-17eae6423935" />
<img width="818" height="344" alt="image" src="https://github.com/user-attachments/assets/e0990661-4de3-42ac-88a4-341a7e2f4883" />
<img width="818" height="344" alt="image" src="https://github.com/user-attachments/assets/d7c055b0-dc82-4075-8039-8dfe9f416ed4" />
<img width="818" height="344" alt="image" src="https://github.com/user-attachments/assets/62ab76b0-5517-4ad8-82f7-cf2fd186d64f" />
<img width="818" height="344" alt="image" src="https://github.com/user-attachments/assets/a1a97d9d-00bd-4b42-96f2-d39aa37825b2" />
<img width="818" height="344" alt="image" src="https://github.com/user-attachments/assets/d690a93a-31b1-446b-bb5a-8becc17c0fd1" />
# Naive Bayes
0. S is sample space where all events are
1. Probalibility of event A is P(A) = n(A)/n(s)
2. Proobability of event A given B is = P(A|B)
3. Probablity of event A given x1,x2,x3,x4 is P(A|x1,x2,x3,x4)
4. Naive Bayes says that probability of  P(A|x1,x2,x3,x4) proportional to P(A)*P(x1)*P(x2)*P(x3)*P(x4)
5. So we will use this to find the class , lets say there are 2 classes A and B we will find P(A|x1,x2,x3,x4) and  P(B|x1,x2,x3,x4)
6. so we will calculate these two from formula in 5th step
7. and whichever is greater the classification will be done for that class A or B
8. as the values are multiplications if any of it is zero then whole value will be zero so whole expression will be 0 so we add one to each of the ps so it called as alpha
video ref https://www.youtube.com/watch?v=O2L2Uv9pdDA&ab_channel=StatQuestwithJoshStarmer
