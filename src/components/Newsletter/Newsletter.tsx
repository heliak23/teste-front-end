import React, { useState } from 'react';
import styles from './Newsletter.module.scss';

export const Newsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setFeedback({ type: 'error', text: 'Por favor, preencha o seu nome.' });
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setFeedback({ type: 'error', text: 'Por favor, insira um e-mail válido.' });
      return;
    }

    if (!acceptedTerms) {
      setFeedback({ type: 'error', text: 'Você precisa aceitar os termos e condições.' });
      return;
    }

    // Success state
    setFeedback({
      type: 'success',
      text: 'Obrigado por se inscrever! Em breve você receberá nossas melhores ofertas.',
    });
    setName('');
    setEmail('');
    setAcceptedTerms(false);
  };

  return (
    <section className={styles.newsletterSection} aria-label="Inscrição na Newsletter">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textSide}>
            <h2 className={styles.title}>Inscreva-se na nossa newsletter</h2>
            <p className={styles.subtitle}>
              Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br />
              da Econverse.
            </p>
          </div>

          <div className={styles.formSide}>
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formInputs}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-label="Seu nome"
                />
                <input
                  type="email"
                  className={styles.input}
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Seu e-mail"
                />
                <button type="submit" className={styles.submitButton}>
                  INSCREVER
                </button>
              </div>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                />
                <span>Aceito os termos e condições</span>
              </label>

              {feedback && (
                <div
                  className={`${styles.feedbackMessage} ${
                    feedback.type === 'success' ? styles.success : styles.error
                  }`}
                  role="alert"
                >
                  {feedback.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

