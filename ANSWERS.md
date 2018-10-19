<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
##The purpose of a session is to store data in variables that can be used across multiple pages on a website. For example, a user will only need to login once and be able to navigate to different parts of the website like, to the Home, About, Contacts, without needing to login each time the page changes.

2. What does bcrypt do to help us store passwords in a secure manner.
##It gives us a way to hash the password data. The users password data itself is not stored.

3. What does bcrypt do to slow down attackers?
##It creates uses an algorithm that hashes the data multiple rounds so that the attacker would need to have the hash, know the algorithm used, and find out how many rounds were used to create the hash.

4. What are the three parts of the JSON Web Token?
##header, payload, signature
