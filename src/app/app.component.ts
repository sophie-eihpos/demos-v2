import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'saa-app',
  encapsulation: ViewEncapsulation.None, // turns of shadowdom emulation, the style will apply everywhere
  template: `
      <header>
          <h1>Styling Angular Applications</h1>
          <em>For Modern Angular Applications</em>
      </header>
      <div>
          <saa-app-nav></saa-app-nav>
      </div>
  `
})

export class AppComponent {
}