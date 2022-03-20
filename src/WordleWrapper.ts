import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

import 'lit-wordle/define.js';

export class WordleWrapper extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      max-width: 960px;
      margin: 0 auto;
      background-color: var(--wordle-wrapper-background-color);
    }

    main {
      flex-grow: 1;
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  render() {
    return html`
      <h3>Wordle</h3>
      <main>
        <lit-wordle></lit-wordle>
      </main>

      <p class="app-footer">
        Copyright ©<a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/evanjo03"
          >John Evans</a
        >
        2022.
      </p>
    `;
  }
}
