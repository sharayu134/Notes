**ReAct** stands for **Reason + Act**.

It is the specific prompting technique that turns a dumb LLM into a smart "Agent."

Without ReAct, an LLM just guesses. With ReAct, the LLM creates an **internal monologue** where it plans its steps before it touches any tools.

### 1. The Core Loop: Thought, Action, Observation

An Agent doesn't just answer. It loops through three states until it solves the problem:

1. **Thought:** The model "thinks" out loud about what it should do next.
2. **Action:** The model chooses a specific tool (like Google Search or Calculator) and inputs data.
3. **Observation:** The model reads the output of that tool (the result).

---

### 2. A Concrete Example

Imagine you ask an Agent:

> **"Who is the wife of the actor who played Iron Man, and how old is she?"**

A standard LLM might hallucinate. A ReAct Agent solves it like this:

**Round 1**

* **Thought:** I need to find out who played Iron Man first. I don't know the wife yet.
* **Action:** `Google Search`
* **Action Input:** "Actor who played Iron Man"
* **Observation:** (From Google) *Robert Downey Jr.*

**Round 2**

* **Thought:** Okay, the actor is Robert Downey Jr. Now I need to find his wife.
* **Action:** `Google Search`
* **Action Input:** "Robert Downey Jr. wife"
* **Observation:** (From Google) *Susan Downey*

**Round 3**

* **Thought:** I found the wife (Susan Downey). Now I need her age.
* **Action:** `Calculator` (or Search)
* **Action Input:** "Current Year - 1973" (Assuming it found her birth year)
* **Observation:** *51*

**Round 4**

* **Thought:** I have all the information.
* **Final Answer:** The actor is Robert Downey Jr., his wife is Susan Downey, and she is 51 years old.

### 3. How the Code/Prompt Looks

Behind the scenes, we force the LLM to follow this strict format by giving it a "System Prompt" like this:

> **System Prompt:**
> You are a smart assistant. You have access to the following tools: [Google Search, Calculator].
> Use the following format:
> * **Question:** the input question you must answer
> * **Thought:** you should always think about what to do
> * **Action:** the action to take, should be one of [Google Search, Calculator]
> * **Action Input:** the input to the action
> * **Observation:** the result of the action (this will be provided by the code)
> ... (repeat Thought/Action/Observation N times)
> * **Final Answer:** the final answer to the original input question
> 
> 

### 4. Why is this hard? (The challenges)

While powerful, ReAct agents are fragile.

1. **Infinite Loops:** Sometimes the model gets stuck.
* *Thought:* I need to search. *Action:* Search. *Observation:* Error.
* *Thought:* I need to search. *Action:* Search... (It repeats forever).


2. **Parsing Errors:** If the LLM makes a typo and writes `Action: Gogle Serch` instead of `Google Search`, the code breaks because it can't find the tool.
3. **Context Window:** If the "Observation" (Search result) is too long (like a whole Wikipedia page), it fills up the memory, and the Agent forgets the original question.

### Summary

* **Standard LLM:** Input  Output.
* **ReAct Agent:** Input  **Reasoning Loop** (Thought  Tool  Result)  Output.

**Next Step:** Agents are getting smarter. Now they can see images and hear audio. Would you like to know how **Multimodal Models** (like GPT-4V or Gemini) technically process an image alongside text?
