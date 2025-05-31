---
layout: default
title: Contact
permalink: /contact/
---

# Contact Me

Get in touch using the form below or reach out directly:

- **Email**: {{ site.email }}
- **GitHub**: [{{ site.github_username }}](https://github.com/{{ site.github_username }})
- **LinkedIn**: Click [here](https://www.linkedin.com/in/{{ site.linkedin_username }})

# Contact Form

<form action="https://formspree.io/f/your-form-id" method="POST">
  <label for="name">Name:</label>
  <input type="text" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" name="_replyto" required>
  
  <label for="message">Message:</label>
  <textarea name="message" required></textarea>
  
  <input type="submit" value="Send">
</form>