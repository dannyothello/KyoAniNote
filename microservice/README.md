# Microservice for KyoAniNote

Input:<br>
This microservice will receive a list containing 10 anime objects from the client.<br>
Format = JSON, wrapper = list, Keys = "title","visual"

Output:<br>
This microservice will then randomly pick 5 of the received anime objects, and then respond to the client with a list of the picked objects.<br>
Format = JSON, wrapper = list, Keys = "title","visual"

# Communication Contract

How to request data:

Call the fetch() with the target URL, which is "http://localhost:3001:pick" in developer mode.<br>
See the image below for example parameters: 

How to receive data:

The fetch() call will generate a response which will contain a list of the picked objects, formated as JSON.<br>
You can then grab the data, and use it within your own program.<br>
See the image below for an example usecase:

UML Sequence Diagram:
