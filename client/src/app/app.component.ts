import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Diary';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    ) {
      const iconList = [ // <- insert your svg icon name here (make sure the icon name and icon filename is the same)
        'home_icon',
        'scroll_icon',
      ];
      this.addSvgIconToApp(iconList);
  }

  addSvgIconToApp(iconLists: string[]) {
    iconLists.forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        icon, // `icon_label`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icon/${icon}.svg`)  // path to svg files
      );
    });
  }
}
