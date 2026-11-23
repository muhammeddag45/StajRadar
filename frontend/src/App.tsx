
import { useState } from 'react'
import './App.css'

type Application = {
  id: string
  company: string
  position: string
  status: 'Beklemede'
}

function App() {
  const [company, setCompany] = useState('')
  const [position, setPosition] = useState('')
  const [applications, setApplications] = useState<Application[]>([])
  const [error, setError] = useState('')

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!company.trim() || !position.trim()) {
      setError('Firma adı ve pozisyon alanları zorunludur.')
      return
    }

    const newApplication: Application = {
      id: crypto.randomUUID(),
      company: company.trim(),
      position: position.trim(),
      status: 'Beklemede',
    }

    setApplications((previous) => [...previous, newApplication])
    setCompany('')
    setPosition('')
    setError('')
  }

  return (
    <main className="container">
      <header className="header">
        <h1>StajRadar</h1>
        <p>Staj başvurularını tek bir yerden takip et.</p>
      </header>

      <section className="card">
        <h2>Yeni Staj Başvurusu</h2>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="company">Firma Adı</label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="Örn: ABC Teknoloji"
          />

          <label htmlFor="position">Pozisyon</label>
          <input
            id="position"
            type="text"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
            placeholder="Örn: Yazılım Geliştirme Stajyeri"
          />

          {error && <p className="error" role="alert">{error}</p>}

          <button type="submit">Başvuru Ekle</button>
        </form>
      </section>

      <section className="card">
        <h2>Başvurularım ({applications.length})</h2>

        {applications.length === 0 ? (
          <p className="empty">Henüz staj başvurusu eklenmedi.</p>
        ) : (
          <ul className="application-list">
            {applications.map((application) => (
              <li key={application.id} className="application">
                <div>
                  <h3>{application.company}</h3>
                  <p>{application.position}</p>
                </div>
                <span className="status">{application.status}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
