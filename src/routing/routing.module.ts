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
      { path: 'HOME', component: MainPageComponent },
      { path: 'emplist', component: EmplistComponent },
      { path: 'empadd', component: EmpaddComponent },
      { path: '**', redirectTo: 'HOME' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


