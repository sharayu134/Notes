class TokenBucket:
  def __init__(self, capacity, refill_rate):
    self.capacity = capacity  # Maximum number of tokens allowed
    self.refill_rate = refill_rate  # Rate at which tokens are refilled (tokens/second)
    self.current_tokens = capacity  # Current number of tokens available
    self.last_refill_time = time.time()  # Time of the last token refill

  def get_token(self, now=None):
    if now is None:
      now = time.time()

    # Calculate elapsed time since last refill
    elapsed_time = now - self.last_refill_time

    # Refill tokens based on elapsed time and refill rate
    self.current_tokens = min(self.capacity, self.current_tokens + (elapsed_time * self.refill_rate))
    self.last_refill_time = now

    # Check if there are enough tokens available
    if self.current_tokens > 0:
      self.current_tokens -= 1
      return True
    else:
      return False

# Example usage
capacity = 5  # Maximum of 5 requests allowed
refill_rate = 1  # Refill 1 token per second

rate_limiter = TokenBucket(capacity, refill_rate)

# Simulate requests
for i in range(10):
  allowed = rate_limiter.get_token()
  if allowed:
    print(f"Request {i+1} allowed")
  else:
    print(f"Request {i+1} denied: Rate limit exceeded")
    # Implement logic to handle denied requests (e.g., retry later)
  time.sleep(1)  # Simulate 1 second delay between requests
