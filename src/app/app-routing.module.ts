import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuestComponent } from "./quest/quest.component";
import { RewardsComponent } from "./rewards/rewards.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { QuestsComponent } from "./quests/quests.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "quest",
    component: QuestComponent,
  },
  {
    path: "quests",
    component: QuestsComponent,
  },
  { path: "rewards", component: RewardsComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
