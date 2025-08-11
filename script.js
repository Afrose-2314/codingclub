document.getElementById("wishForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("nameInput").value;
  document.getElementById("teacherName").innerText = `Dear ${name},`;
  document.getElementById("quote").innerText = "“A teacher takes a hand, opens a mind, and touches a heart.”";
  document.getElementById("formContainer").style.display = "none";
  document.getElementById("wishContainer").style.display = "block";
  startConfetti();
});

function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let particles = [];
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10,
      color: `hsl(${Math.random() * 360}, 70%, 50%)`,
      tilt: Math.random() * 10 - 10
    });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    update();
  }
  function update() {
    particles.forEach(p => {
      p.y += Math.cos(p.d) + 1 + p.r / 2;
      p.x += Math.sin(p.d);
      if (p.y > canvas.height) {
        p.x = Math.random() * canvas.width;
        p.y = -10;
      }
    });
  }
  setInterval(draw, 20);
}
