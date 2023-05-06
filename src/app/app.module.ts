import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuestComponent } from "./quest/quest.component";
import { RewardsComponent } from "./rewards/rewards.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { QuestsComponent } from "./quests/quests.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    QuestComponent,
    RewardsComponent,
    NotFoundComponent,
    QuestsComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
