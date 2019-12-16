import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';
import { EmplistComponent } from '../emplist/emplist.component';
import { EmpaddComponent } from '../empadd/empadd.component';

@NgModule({
  declarations: [ 
    MainPageComponent, EmplistComponent, EmpaddComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: MainPageComponent },
      { path: 'home', component: EmplistComponent },
      { path: 'catalog', component: EmpaddComponent },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


