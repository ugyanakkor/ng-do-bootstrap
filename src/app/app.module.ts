import {ApplicationRef, DoBootstrap, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NoobComponent } from './noob/noob.component';
import { ProComponent } from './pro/pro.component';
import {map, of} from "rxjs";

@NgModule({
  declarations: [
    NoobComponent,
    ProComponent
  ],
  imports: [
    BrowserModule,
  ],
})
export class AppModule implements DoBootstrap{

  ngDoBootstrap(appRef: ApplicationRef) {
    console.log('called')

/*    const APP = window.innerWidth > 300 ? ProComponent : NoobComponent;
    return appRef.bootstrap(APP, document.getElementById('app'));*/

    of(true).pipe(
      map((data) => {
        const APP = data ? ProComponent : NoobComponent;
        return appRef.bootstrap(APP, document.getElementById('app'));
      })
    ).subscribe();
  }
}
