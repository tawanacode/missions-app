import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MissionsComponent } from './missions/missions.component';
import { NavComponent } from './nav/nav.component';
import { ScoutsComponent } from './scouts/scouts.component';
import { MissionComponent } from './mission/mission.component';
import { ScoutComponent } from './scout/scout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MissionsComponent,
    NavComponent,
    ScoutsComponent,
    MissionComponent,
    ScoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
