import { Component, OnInit } from "@angular/core";
import Quest from "src/common/interfaces/quest.interface";
import { QuestService } from "../quest.service";

@Component({
  selector: "app-quests",
  templateUrl: "./quests.component.html",
  styleUrls: ["./quests.component.scss"],
})
export class QuestsComponent implements OnInit {
  quests: Quest[] = [];
  selectedIdx: number = 0;
  constructor(public questService: QuestService) {}
  ngOnInit(): void {
    this.quests = this.questService.quests;
  }

  setSelectedIdx(index: number, questButtons: HTMLDivElement) {
    this.selectedIdx = index;
    questButtons.children[this.selectedIdx].classList.add("active");
    for (let i = 0; i < questButtons.children.length; i++) {
      if (i != this.selectedIdx) {
        questButtons.children[i].classList.remove("active");
      }
    }
  }
}
