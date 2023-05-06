import { Component, OnInit } from "@angular/core";
import Quest from "src/common/interfaces/quest.interface";

@Component({
  selector: "app-quests",
  templateUrl: "./quests.component.html",
  styleUrls: ["./quests.component.scss"],
})
export class QuestsComponent implements OnInit {
  ngOnInit(): void {
    let quest: Quest = {
      title: "The Lost Artifact",
      description:
        "<p>The great treasure hunter, Indiana Jones, has recently discovered a mysterious artifact buried deep within the ruins of an ancient temple. The artifact, known as the <em>Eye of Horus</em>, is said to possess incredible powers that could change the course of history. However, just as he was about to retrieve it, the temple suddenly collapsed, trapping the Eye of Horus inside.</p><p>Now, <strong>Indiana Jones needs your help</strong> to retrieve the artifact before it falls into the wrong hands. You must travel through treacherous jungles, navigate deadly traps, and face off against ruthless enemies to retrieve the Eye of Horus. Will you be able to overcome these challenges and retrieve the artifact before it's too late?</p>",
      goal: "Retrieve the Eye of Horus artifact from the ruins of the ancient temple.",
      steps: [
        "Travel to the jungle where the temple is located.",
        "Find a way into the temple and navigate through its deadly traps.",
        "Face off against the temple's guardians to retrieve the artifact.",
        "Escape the temple before it collapses and traps you inside forever.",
      ],
      rewards: [
        "The Eye of Horus artifact, which possesses incredible powers.",
        "A significant amount of gold and treasure from the temple.",
        "The admiration and respect of Indiana Jones himself.",
      ],
      isCompleted: false,
    };
    let quest1: Quest = {
      title: "The Hunt for the Golden Fleece",
      description:
        "<p>The legendary Golden Fleece has been discovered on a remote island, but it is guarded by a powerful sorcerer and his army of mythical creatures. Your task is to defeat the sorcerer and claim the Golden Fleece for yourself.</p>",
      goal: "Defeat the sorcerer and claim the Golden Fleece.",
      steps: [
        "Travel to the remote island where the Golden Fleece is located.",
        "Fight your way through the sorcerer's army of mythical creatures.",
        "Confront the sorcerer and defeat him in a battle of magic and skill.",
        "Claim the Golden Fleece and return home victorious.",
      ],
      rewards: [
        "The legendary Golden Fleece, which is said to possess incredible powers.",
        "Recognition and fame as a hero who defeated a powerful sorcerer.",
        "A significant amount of treasure and artifacts from the island.",
      ],
      isCompleted: false,
    };

    this.quests.push(quest, quest1);
  }
  quests: Quest[] = [];
  selectedIdx: number = 0;

  setSelectedIdx(index: number) {
    this.selectedIdx = index;
  }
}
