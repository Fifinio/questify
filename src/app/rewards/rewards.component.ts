import { Component } from "@angular/core";

@Component({
  selector: "app-rewards",
  templateUrl: "./rewards.component.html",
  styleUrls: ["./rewards.component.scss"],
})
export class RewardsComponent {
  rewards: string[] = [
    "Expanded knowledge",
    "Improved vocabulary",
    "Enhanced critical thinking",
  ];
}
