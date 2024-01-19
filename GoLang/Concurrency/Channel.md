** CHANNEL Sends or receives the message till the other side is ready**

func sender(ch chan<- string) {
	// Sending a message through the channel
	ch <- "Hello from the sender!"
}

func main() {
	// Creating a channel of type string
	messageChannel := make(chan string)

	// Launching the sender goroutine
	go sender(messageChannel)

	// Waiting for a message from the channel
	message := <-messageChannel

	// Printing the received message
	fmt.Println("Received:", message)
}

**with capacity**

func sender(ch chan<- string) {
	// Sending messages through the channel
	ch <- "Hello from the sender!"
	ch <- "How are you?"
}

func main() {
	// Creating a channel of type string with capacity 2
	messageChannel := make(chan string, 2)

	// Launching the sender goroutine
	go sender(messageChannel)

	// Waiting for and printing the received messages
	message1 := <-messageChannel
	message2 := <-messageChannel

	// Printing the received messages
	fmt.Println("Received:", message1)
	fmt.Println("Received:", message2)
}
