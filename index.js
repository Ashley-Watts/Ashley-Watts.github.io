<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', sans-serif;
    }

    body, html {
      height: 100%;
    }

    body {
      background: linear-gradient(135deg, #1f1c2c, #928dab);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .intro {
      max-width: 600px;
      padding: 20px;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    .enter-btn {
      padding: 12px 24px;
      font-size: 1rem;
      color: #fff;
      background-color: #ff4b2b;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      transition: background 0.3s;
      text-decoration: none;
    }

    .enter-btn:hover {
      background-color: #ff416c;
    }
  </style>
</head>
<body>
  <div class="intro">
    <h1>Welcome to My Website</h1>
    <p>Hi, I'm [Your Name]. Thanks for visiting!</p>
    <a href="main.html" class="enter-btn">Enter Site</a>
  </div>
</body>
</html>
