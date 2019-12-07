import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './header/header.component';
import { AppFooterComponent } from './footer/footer.component';
import { AppShellComponent } from './app-shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    AppShellComponent
  ],
  exports: [
    AppShellComponent
  ]
})
export class AppShellModule {

}