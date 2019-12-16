import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainPageComponent } from '../../src/main-page/main-page.component';
import { EmplistComponent } from '../../src/emplist/emplist.component';
import { EmpaddComponent } from '../../src/empadd/empadd.component';

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


