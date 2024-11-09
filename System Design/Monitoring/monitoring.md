1. health check, after 5sec, if two consecutive fails then go for the restart
2. alerts if some exception -> integrate with slack/jira -> create ticket 
3. We can have metircs like
    * Requests coming in 
    * Requests timedout
    * General errored requests
    * Specic error like 500
    * more specific like exception same error
    * If any type reaches the threshold then fire an alert


datadog uses queues to process the logs
