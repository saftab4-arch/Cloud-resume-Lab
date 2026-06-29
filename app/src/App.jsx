import './App.css'

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="badge">Cloud Resume Platform</p>
        <h1>Syed Aftab</h1>
        <h2>Cloud / DevOps Engineer in Training</h2>
        <p className="summary">
          IT Specialist building production-style cloud projects with AWS, Linux,
          Docker, GitHub Actions, DevSecOps, and Kubernetes.
        </p>

        <div className="buttons">
          <a href="https://github.com/saftab4-arch" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/syed-b-9078141a8/" target="_blank">LinkedIn</a>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h3>Cloud Skills</h3>
          <p>AWS, EC2, ALB, ECR, ACM, Cloudflare, Route 53</p>
        </div>

        <div className="card">
          <h3>DevOps Stack</h3>
          <p>Linux, Docker, Compose, GitHub Actions, CI/CD, DevSecOps</p>
        </div>

        <div className="card">
          <h3>Current Focus</h3>
          <p>Kubernetes, production deployments, monitoring, and later Terraform.</p>
        </div>
      </section>
    </main>
  )
}

export default App
