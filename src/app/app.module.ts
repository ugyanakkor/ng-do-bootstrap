import {APP_INITIALIZER, ApplicationRef, DoBootstrap, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NoobComponent } from './noob/noob.component';
import { ProComponent } from './pro/pro.component';
import {interval, map, of} from "rxjs";

@NgModule({
  declarations: [
    NoobComponent,
    ProComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useValue: () => {
        console.log('alma')
         return interval(1000); //will block the app, because app init is waiting something for completion
        // it could be a promise resolved or observable completed
        //.pipe(take(1)) will make it finite observable and complete is
      }
    }
  ]
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
