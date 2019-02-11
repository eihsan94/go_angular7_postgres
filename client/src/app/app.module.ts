import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCheckboxModule, MatMenuModule, MatToolbarModule,
         MatListModule,
         MatCardModule,
         MatTableModule,
         MatGridListModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { DaysComponent } from './component/days/days.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '../../node_modules/@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TableComponent } from './component/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './component/card/card.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollComponent } from './component/virtual-scroll/virtual-scroll.component';
import { LoadingSpinnerComponent } from './component/loading-spinner/loading-spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CheckboxComponent,
    DaysComponent,
    HomeComponent,
    TableComponent,
    CardComponent,
    VirtualScrollComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    ScrollingModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
